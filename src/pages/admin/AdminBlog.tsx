import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Trash2, CreditCard as Edit } from 'lucide-react';
import { dbOperations } from '../../lib/db';
import type { BlogPost } from '../../lib/db';

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    const data = await dbOperations.getBlogPosts();
    setPosts(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink">Blog Posts</h1>
        <button className="btn-primary text-sm">
          <Plus className="h-4 w-4 mr-2" /> New Post
        </button>
      </div>

      {loading ? (
        <div className="text-center section-padding text-ink-secondary">Loading...</div>
      ) : posts.length === 0 ? (
        <div className="card p-12 text-center">
          <BookOpen className="h-12 w-12 text-ink-muted mx-auto mb-4" />
          <p className="text-ink-secondary">No blog posts yet.</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="surface border-b">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Author</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Date</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-ink-secondary uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-surface">
                  <td className="px-6 py-4">
                    <div className="font-medium text-ink">{post.title}</div>
                    <div className="text-sm text-ink-muted truncate max-w-md">{post.content.substring(0, 80)}...</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-ink-secondary">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-ink-muted">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 text-ink-muted hover:text-blue-600"><Edit className="h-4 w-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
