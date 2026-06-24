import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, History, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study';
  relevance: number;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Simulated search index data - In production, this would come from your backend
  const searchIndex = {
    pages: [
      { title: 'AI Solutions', url: '/technologies', keywords: ['ai', 'artificial intelligence', 'machine learning'] },
      { title: 'Cloud Services', url: '/services', keywords: ['cloud', 'saas', 'infrastructure'] },
      // Add more indexed content
    ],
    weights: {
      titleMatch: 2,
      keywordMatch: 1.5,
      descriptionMatch: 1
    }
  };

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }

    // Click outside handler
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        performSearch();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = async () => {
    setIsLoading(true);
    try {
      // Simulated AI-powered search algorithm
      const searchResults = searchIndex.pages
        .map(page => {
          let relevance = 0;
          
          // Title matching
          if (page.title.toLowerCase().includes(query.toLowerCase())) {
            relevance += searchIndex.weights.titleMatch;
          }
          
          // Keyword matching
          page.keywords.forEach(keyword => {
            if (keyword.includes(query.toLowerCase())) {
              relevance += searchIndex.weights.keywordMatch;
            }
          });

          return {
            title: page.title,
            url: page.url,
            description: `Relevant content about ${page.title}`,
            type: 'page' as const,
            relevance
          };
        })
        .filter(result => result.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance);

      setResults(searchResults);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    // Save to recent searches
    const updatedSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

    // Navigate to search results page
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setShowResults(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          placeholder="Search for services, solutions, or insights..."
          className="w-full px-4 py-3 pl-12 pr-10 text-ink bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          aria-label="Search"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-ink-muted" />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 top-3.5 text-ink-muted hover:text-ink-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-border">
          {isLoading ? (
            <div className="p-4 text-center text-ink-muted">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mx-auto"></div>
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {query ? (
                // Search Results
                results.length > 0 ? (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <a
                        key={index}
                        href={result.url}
                        className="block px-4 py-3 hover:bg-surface"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-ink">{result.title}</h4>
                            <p className="text-sm text-ink-muted">{result.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-ink-muted" />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-ink-muted">
                    No results found for "{query}"
                  </div>
                )
              ) : (
                // Recent Searches and Trending
                <div>
                  {recentSearches.length > 0 && (
                    <div className="p-2">
                      <div className="flex items-center px-3 py-2 text-sm text-ink-muted">
                        <History className="h-4 w-4 mr-2" />
                        Recent Searches
                      </div>
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="block w-full text-left px-4 py-2 text-sm text-ink hover:bg-surface"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="p-2 border-t border-border">
                    <div className="flex items-center px-3 py-2 text-sm text-ink-muted">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Trending Searches
                    </div>
                    {['AI Solutions', 'Cloud Services', 'Digital Transformation'].map((trend, index) => (
                      <button
                        key={index}
                        onClick={() => setQuery(trend)}
                        className="block w-full text-left px-4 py-2 text-sm text-ink hover:bg-surface"
                      >
                        {trend}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
