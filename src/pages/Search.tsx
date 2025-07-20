import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter, ArrowRight, Clock, User, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'case-study';
  relevance: number;
  lastModified?: Date;
  author?: string;
}

const searchIndex = [
  {
    id: '1',
    title: 'AI & Machine Learning Solutions',
    description: 'Transform your business with advanced artificial intelligence and machine learning solutions.',
    url: '/it-services/ai-analytics',
    type: 'service' as const,
    relevance: 0,
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'neural networks']
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Services',
    description: 'Enterprise cloud computing solutions with multi-cloud strategy and infrastructure management.',
    url: '/it-services/cloud-infrastructure',
    type: 'service' as const,
    relevance: 0,
    keywords: ['cloud', 'aws', 'azure', 'infrastructure', 'devops']
  },
  {
    id: '3',
    title: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity and threat protection services for enterprise security.',
    url: '/it-services/cybersecurity',
    type: 'service' as const,
    relevance: 0,
    keywords: ['security', 'cybersecurity', 'threat detection', 'compliance']
  },
  {
    id: '4',
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting and process automation services.',
    url: '/it-services/digital-transformation',
    type: 'service' as const,
    relevance: 0,
    keywords: ['digital transformation', 'automation', 'consulting', 'process optimization']
  },
  {
    id: '5',
    title: 'Software Development Services',
    description: 'Custom software development, web applications, and mobile app development.',
    url: '/it-services/software-development',
    type: 'service' as const,
    relevance: 0,
    keywords: ['software development', 'web development', 'mobile apps', 'custom software']
  },
  {
    id: '6',
    title: 'About ELSxGlobal',
    description: 'Learn about our company, mission, values, and leadership team.',
    url: '/about',
    type: 'page' as const,
    relevance: 0,
    keywords: ['about', 'company', 'mission', 'values', 'team']
  },
  {
    id: '7',
    title: 'Our Technologies',
    description: 'Explore our cutting-edge technology stack and innovation capabilities.',
    url: '/technologies',
    type: 'page' as const,
    relevance: 0,
    keywords: ['technologies', 'innovation', 'tech stack', 'capabilities']
  },
  {
    id: '8',
    title: 'Career Opportunities',
    description: 'Join our team and build your future with exciting career opportunities.',
    url: '/careers',
    type: 'page' as const,
    relevance: 0,
    keywords: ['careers', 'jobs', 'opportunities', 'hiring', 'team']
  }
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const searchResults = searchIndex
      .map(item => {
        let relevance = 0;
        const lowerQuery = searchQuery.toLowerCase();
        
        // Title matching (highest weight)
        if (item.title.toLowerCase().includes(lowerQuery)) {
          relevance += 3;
        }
        
        // Description matching
        if (item.description.toLowerCase().includes(lowerQuery)) {
          relevance += 2;
        }
        
        // Keyword matching
        item.keywords.forEach(keyword => {
          if (keyword.includes(lowerQuery) || lowerQuery.includes(keyword)) {
            relevance += 1;
          }
        });
        
        return {
          ...item,
          relevance
        };
      })
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);
    
    setResults(searchResults);
    setLoading(false);
  };

  const filteredResults = filter === 'all' 
    ? results 
    : results.filter(result => result.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <FileText className="h-4 w-4" />;
      case 'blog': return <User className="h-4 w-4" />;
      case 'page': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service': return 'Service';
      case 'blog': return 'Blog Post';
      case 'page': return 'Page';
      case 'case-study': return 'Case Study';
      default: return 'Content';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title={`Search Results for "${query}"`}
        description={`Search results for "${query}" - Find relevant content, services, and information on ELSxGlobal.`}
        keywords={['search', 'results', query]}
        noindex={true}
      />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Search Results
            </h1>
            {query && (
              <p className="text-gray-600">
                Showing results for: <span className="font-semibold">"{query}"</span>
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Results ({results.length})
            </button>
            <button
              onClick={() => setFilter('service')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'service'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services ({results.filter(r => r.type === 'service').length})
            </button>
            <button
              onClick={() => setFilter('page')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'page'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pages ({results.filter(r => r.type === 'page').length})
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <LoadingSpinner size="large" />
              <p className="text-gray-600 mt-4">Searching...</p>
            </div>
          )}

          {/* No Query */}
          {!query && !loading && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Enter a search term
              </h2>
              <p className="text-gray-600">
                Use the search bar in the navigation to find content
              </p>
            </div>
          )}

          {/* No Results */}
          {query && !loading && filteredResults.length === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h2>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse our services
              </p>
              <a
                href="/services"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Browse Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          )}

          {/* Search Results */}
          {!loading && filteredResults.length > 0 && (
            <div className="space-y-6">
              {filteredResults.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(result.type)}
                      <span className="text-sm text-purple-600 font-medium">
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                    {result.lastModified && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {result.lastModified.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a 
                      href={result.url}
                      className="hover:text-purple-600 transition-colors"
                    >
                      {result.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {result.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={result.url}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    {result.author && (
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {result.author}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}