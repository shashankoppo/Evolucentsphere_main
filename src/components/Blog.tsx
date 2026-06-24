import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
      <section id="blog" className="section-padding surface">
        <SEOHead
          title="Blog & Insights"
          description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation."
        />
        <div className="container-main">
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
    <section id="blog" className="section-padding surface">
      <SEOHead
        title="Blog & Insights"
        description="Stay updated with the latest insights, trends, and thought leadership in AI, technology, and business transformation."
      />
      <div className="container-main">
        <div className="text-center mb-12 lg:mb-16">
          <span className="label mb-4">Blog</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Latest Insights</h2>
          <p className="text-ink-secondary text-lg max-w-2xl mx-auto">Thought leadership and industry trends from our experts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card overflow-hidden flex flex-col"
            >
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
              <div className="p-5 flex flex-col flex-1">
                {post.category && (
                  <span className="inline-block self-start px-2.5 py-1 text-xs font-semibold bg-brand-50 text-brand-500 rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="text-base font-bold text-ink mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-secondary mb-4 line-clamp-3 flex-1">
                  {post.excerpt || post.content}
                </p>
                <div className="flex items-center text-xs text-ink-muted mb-4">
                  <div className="flex items-center gap-1 mr-4">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="btn-secondary"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}