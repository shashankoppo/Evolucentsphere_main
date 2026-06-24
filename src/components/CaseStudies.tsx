import React, { useEffect, useState } from 'react';
import { ArrowRight, Building, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dbOperations } from '../lib/db';
import type { CaseStudy } from '../lib/db';
import LoadingSpinner from './LoadingSpinner';
import SEOHead from './SEOHead';

const industries = ['Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Technology', 'Energy'];

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | 'all'>('all');

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        setLoading(true);
        setError(null);
        const data = await dbOperations.getCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setError(error instanceof Error ? error.message : 'Failed to load case studies');
      } finally {
        setLoading(false);
      }
    }
    fetchCaseStudies();
  }, []);

  const filteredCaseStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  if (loading) {
    return (
      <section className="section-padding surface">
        <div className="container-main">
          <div className="flex justify-center">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center">
            <p className="text-error mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="btn-primary text-sm">
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <SEOHead
        title="Case Studies"
        description="Explore real-world success stories and transformations achieved through our innovative solutions."
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">Case Studies</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Client Success Stories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Discover how we've helped organizations achieve remarkable results through innovative technology.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '45%', label: 'Average ROI' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '30+', label: 'Countries Served' },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-2xl font-bold text-brand-500 mb-1">{stat.value}</div>
                <div className="text-xs text-ink-muted uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-y border-gray-100">
        <div className="container-main">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedIndustry === 'all'
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-50 text-ink-secondary hover:bg-gray-100'
              }`}
            >
              All
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry === industry
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-50 text-ink-secondary hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding surface">
        <div className="container-main">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center text-ink-secondary">No case studies available for the selected industry.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="card overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt={study.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-semibold text-white bg-brand-500 px-2.5 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-ink mb-2">{study.title}</h3>
                      <p className="text-sm text-ink-secondary mb-4 line-clamp-2">{study.content}</p>
                      <div className="space-y-2 mb-4 flex-1">
                        {Object.entries(study.results).slice(0, 3).map(([key, value], idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-ink-secondary">
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                            <span>{key}: <span className="font-semibold text-ink">{value}</span></span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-brand-100 mb-8">Join industry leaders who transformed their businesses with our solutions.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
