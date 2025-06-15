import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { BlogPost } from '../lib/db';
import LoadingSpinner from './LoadingSpinner';
import SEOHead from './SEOHead';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await dbOperations.getBlogPosts();
        if (mounted) {
          setPosts(data);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Failed to load blog posts. Please try again later.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <SEOHead 
          title="Blog & Insights"
          description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation from ELSxGlobal experts."
          keywords={[
            'Technology Blog',
            'AI Insights',
            'Business Transformation',
            'Industry Trends',
            'Thought Leadership',
            'Technology News',
            'Innovation Articles',
            'Digital Transformation'
          ]}
        />
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-20 bg-gray-50">
        <SEOHead 
          title="Blog & Insights"
          description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation from ELSxGlobal experts."
          keywords={[
            'Technology Blog',
            'AI Insights',
            'Business Transformation',
            'Industry Trends',
            'Thought Leadership',
            'Technology News',
            'Innovation Articles',
            'Digital Transformation'
          ]}
        />
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <SEOHead 
        title="Blog & Insights"
        description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation from ELSxGlobal experts."
        keywords={[
          'Technology Blog',
          'AI Insights',
          'Business Transformation',
          'Industry Trends',
          'Thought Leadership',
          'Technology News',
          'Innovation Articles',
          'Digital Transformation'
        ]}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Thought leadership and industry trends</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={FALLBACK_IMAGE}
                  alt={post.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.content}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                </div>
                <button className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}