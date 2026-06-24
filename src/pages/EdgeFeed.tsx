import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const features = [
  { title: 'AI-Powered Learning', desc: 'Adaptive learning paths that personalize education for every student.' },
  { title: 'Content Creation', desc: 'Professional tools for creating engaging educational materials.' },
  { title: 'Learning Analytics', desc: 'Comprehensive analytics and insights for educational performance.' },
  { title: 'Enterprise Training', desc: 'Corporate training and development solutions for organizations.' },
];

const stats = [
  { value: '85%', label: 'Learning Improvement' },
  { value: '60%', label: 'Time Reduction' },
  { value: '95%', label: 'User Satisfaction' },
  { value: '40%', label: 'Cost Savings' },
];

export default function EdgeFeed() {
  return (
    <div>
      <SEOHead
        title="EdgeFeed - EdTech Platform"
        description="EdgeFeed is EvolucentSphere's flagship EdTech division delivering AI-powered learning solutions."
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">EdTech Platform</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              EdgeFeed
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-secondary max-w-2xl mx-auto mb-8">
              Revolutionary EdTech platform delivering AI-powered learning management, content creation, and analytics for modern education.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-wrap justify-center gap-3">
              <a href="https://edgefeed.space" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Explore Platform
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn-secondary">Schedule Demo</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Platform Solutions</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">Comprehensive EdTech solutions for educators and enterprises.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6">
                <h3 className="text-base font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-ink-secondary">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Results</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Proven Impact</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6 text-center">
                <div className="text-3xl font-bold text-brand-500 mb-1">{s.value}</div>
                <div className="text-xs text-ink-muted uppercase tracking-wide font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Transform Education Today</h2>
            <p className="text-brand-100 mb-8">Join educators and organizations revolutionizing learning with EdgeFeed.</p>
            <a href="https://edgefeed.space" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors">
              Visit EdgeFeed
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
