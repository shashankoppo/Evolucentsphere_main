import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        if (mounted) {
          setError('Failed to load blog posts.');
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
        />
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null;
  }

  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <SEOHead
        title="Blog & Insights"
        description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation from ELSxGlobal experts."
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Thought leadership and industry trends</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={post.image_url || FALLBACK_IMAGE}
                  alt={post.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                {post.category && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || post.content}
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
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}