import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, FileText, ArrowRight } from 'lucide-react';
import { dbOperations } from '../../lib/db';

interface DashboardStats {
  blogPosts: number;
  caseStudies: number;
  contactSubmissions: number;
  investorResources: number;
}

export default function AdminOverview() {
  const [stats, setStats] = useState<DashboardStats>({ blogPosts: 0, caseStudies: 0, contactSubmissions: 0, investorResources: 0 });

  useEffect(() => {
    async function loadStats() {
      const [blogPosts, caseStudies, contacts, resources] = await Promise.all([
        dbOperations.getBlogPosts(),
        dbOperations.getCaseStudies(),
        dbOperations.getContactSubmissions(),
        dbOperations.getInvestorResources(),
      ]);
      setStats({
        blogPosts: blogPosts.length,
        caseStudies: caseStudies.length,
        contactSubmissions: contacts.length,
        investorResources: resources.length,
      });
    }
    loadStats();
  }, []);

  const cards = [
    { name: 'Blog Posts', count: stats.blogPosts, icon: BookOpen, path: '/admin/blog', color: 'bg-blue-50 text-blue-600' },
    { name: 'Case Studies', count: stats.caseStudies, icon: TrendingUp, path: '/admin/case-studies', color: 'bg-green-50 text-green-600' },
    { name: 'Contact Submissions', count: stats.contactSubmissions, icon: Users, path: '/admin/contacts', color: 'bg-orange-50 text-orange-600' },
    { name: 'Investor Resources', count: stats.investorResources, icon: FileText, path: '/admin/investor-resources', color: 'bg-teal-50 text-teal-600' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link key={card.path} to={card.path} className="card hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${card.color}`}>
                <card.icon className="h-6 w-6" />
              </div>
              <ArrowRight className="h-4 w-4 text-ink-muted group-hover:text-ink-secondary transition-colors" />
            </div>
            <div className="text-3xl font-bold text-ink">{card.count}</div>
            <div className="text-sm text-ink-secondary mt-1">{card.name}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 card">
        <h2 className="text-lg font-bold text-ink mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/blog" className="btn-primary text-sm">
            Manage Blog Posts
          </Link>
          <Link to="/admin/case-studies" className="btn-secondary text-sm">
            Manage Case Studies
          </Link>
          <Link to="/admin/contacts" className="btn-secondary text-sm">
            View Contact Submissions
          </Link>
        </div>
      </div>
    </div>
  );
}
