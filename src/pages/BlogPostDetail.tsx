import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { getItemOperations } from '../lib/db';
import type { BlogPost } from '../lib/db';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!id) {
        setError('No blog post ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getItemOperations.getBlogPostById(id);
        
        if (!data) {
          setError('Blog post not found');
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20">
        <SEOHead 
          title="Blog Post Not Found"
          description="The requested blog post could not be found."
          noindex={true}
        />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              {error || 'The blog post you are looking for does not exist.'}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const publishDate = new Date(post.created_at);
  const readingTime = Math.ceil(post.content.length / 1000); // Estimate reading time

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title={post.title}
        description={post.content.substring(0, 160) + '...'}
        keywords={[
          'Blog Post',
          'Technology Insights',
          'Business Transformation',
          'Industry Trends',
          post.title.split(' ').slice(0, 3).join(' ')
        ]}
        type="article"
        author={post.author}
        publishedTime={post.created_at}
        modifiedTime={post.created_at}
        image={{
          url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: `${post.title} - ELSxGlobal Blog Post`
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                  <Tag className="h-4 w-4 mr-1" />
                  Technology Insights
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{publishDate.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{readingTime} min read</span>
                  </div>
                </div>
              </div>

              <div className="relative mb-12">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="text-gray-700 leading-relaxed text-lg">
                  {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share Section */}
                <div className="border-t pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Share2 className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Share this article</span>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors">
                        Twitter
                      </button>
                      <button className="text-gray-400 hover:text-blue-700 transition-colors">
                        LinkedIn
                      </button>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="border-t pt-8 mt-8">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600">Technology Expert at ELSxGlobal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View All Articles
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}