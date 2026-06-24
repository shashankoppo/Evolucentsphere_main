import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Brain, Shield, Zap, Code, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Transform operations with intelligent automation, predictive analytics, and neural networks.',
    href: '/it-services/ai-analytics',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Multi-cloud strategy, migration, and infrastructure management with enterprise-grade security.',
    href: '/it-services/cloud-infrastructure',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat detection, compliance management, and enterprise security solutions.',
    href: '/it-services/cybersecurity',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic business modernization, process automation, and change management.',
    href: '/it-services/digital-transformation',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications built with modern architectures.',
    href: '/it-services/software-development',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Business intelligence, data visualization, and real-time analytics platforms.',
    href: '/it-services/ai-analytics',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function Services() {
  return (
    <section className="section-padding surface">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-ink mb-4"
          >
            Comprehensive Solutions for Modern Enterprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-secondary text-lg"
          >
            From cloud infrastructure to AI-powered analytics, we deliver the technology 
            that drives measurable business outcomes.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={service.href}
                className="group card p-6 lg:p-7 h-full flex flex-col gap-4"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${service.color} shrink-0`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-ink mb-1.5 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-300">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
