import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Users, Globe, Star, Award, Heart, BookOpen, Coffee, Sun } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const jobCategories = [
  {
    title: 'Technology',
    positions: ['Senior Software Engineer', 'AI/ML Engineer', 'Cloud Architect', 'DevOps Engineer', 'Full Stack Developer'],
  },
  {
    title: 'Operations',
    positions: ['Operations Manager', 'Process Analyst', 'Quality Assurance Lead', 'Team Leader', 'Project Coordinator'],
  },
  {
    title: 'Customer Experience',
    positions: ['Customer Success Manager', 'Technical Support Specialist', 'Account Manager', 'Customer Experience Lead', 'Support Team Lead'],
  },
  {
    title: 'Business & Strategy',
    positions: ['Business Analyst', 'Strategy Consultant', 'Product Manager', 'Digital Marketing Specialist', 'Market Research Analyst'],
  },
];

const benefits = [
  { icon: Heart, title: 'Health & Wellness', items: ['Comprehensive health insurance', 'Mental health support', 'Fitness allowance', 'Wellness programs'] },
  { icon: BookOpen, title: 'Learning & Growth', items: ['Professional development', 'Certification support', 'Training programs', 'Career mentorship'] },
  { icon: Coffee, title: 'Work-Life Balance', items: ['Flexible work hours', 'Remote work options', 'Paid time off', 'Parental leave'] },
  { icon: Sun, title: 'Perks & Benefits', items: ['Performance bonuses', 'Stock options', 'Team events', 'Travel opportunities'] },
];

export default function Careers() {
  return (
    <div>
      <SEOHead title="Careers" description="Join EvolucentSphere and build your future with a team shaping technology and business transformation." />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">Careers</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Build Your Future With Us
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Join innovators, problem-solvers, and thought leaders shaping the future of technology and business transformation.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Users, value: '1000+', label: 'Team Members' },
              { icon: Globe, value: '30+', label: 'Countries' },
              { icon: Star, value: '4.8/5', label: 'Employee Rating' },
              { icon: Award, value: '#1', label: 'Best Place to Work' },
            ].map((s, i) => (
              <div key={i} className="card p-6 text-center">
                <s.icon className="w-5 h-5 text-brand-400 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-ink mb-1">{s.value}</div>
                <div className="text-xs text-ink-muted uppercase tracking-wide font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Opportunities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Open Positions</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">Find the role that matches your skills and passion.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {jobCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6">
                <h3 className="text-lg font-bold text-ink mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.positions.map((pos, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm group cursor-pointer py-1">
                      <span className="text-ink-secondary group-hover:text-brand-500 transition-colors">{pos}</span>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full mt-6 text-sm">View All Positions</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Perks</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Why Join Us?</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">We invest in our people because they are our greatest asset.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-500 mb-4">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-3">{b.title}</h3>
                <ul className="space-y-2">
                  {b.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Culture</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Our Culture</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning where every team member can grow.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Innovation', desc: 'We encourage creative thinking and embrace new ideas to solve complex challenges.' },
              { title: 'Collaboration', desc: 'We work together across teams and borders to achieve exceptional results.' },
              { title: 'Growth', desc: 'We invest in our people\'s development and celebrate their success.' },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6 text-center">
                <h3 className="text-lg font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-sm text-ink-secondary">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
            <p className="text-brand-100 mb-8">Explore our open positions and take the next step in your career.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors">
              View All Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
