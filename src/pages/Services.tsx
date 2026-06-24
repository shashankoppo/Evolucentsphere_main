import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cloud, Brain, Shield, Zap, Code, BarChart3, Network, Settings, Monitor, Users, Building, Briefcase } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const divisions = [
  {
    icon: Building,
    title: 'ELSxTech',
    href: '/it-services',
    desc: 'Comprehensive technology solutions including cloud, AI, cybersecurity, and software development.',
    services: [
      { name: 'Cloud Infrastructure', href: '/it-services/cloud-infrastructure', icon: Cloud },
      { name: 'Cybersecurity', href: '/it-services/cybersecurity', icon: Shield },
      { name: 'AI & Analytics', href: '/it-services/ai-analytics', icon: Brain },
      { name: 'Software Development', href: '/it-services/software-development', icon: Code },
      { name: 'Digital Transformation', href: '/it-services/digital-transformation', icon: Zap },
      { name: 'Digital Marketing', href: '/it-services/digital-marketing', icon: BarChart3 },
      { name: 'IoT & Emerging Tech', href: '/it-services/iot-emerging-tech', icon: Network },
      { name: 'Managed IT', href: '/it-services/managed-it', icon: Monitor },
      { name: 'Enterprise Software', href: '/it-services/enterprise-software', icon: Settings },
    ],
  },
  {
    icon: Users,
    title: 'ELSxBPO',
    href: '/bpo-services',
    desc: 'Business process outsourcing for customer support, back-office operations, and finance.',
    services: [
      { name: 'Customer Experience', href: '/bpo-services', icon: Users },
      { name: 'Back Office Operations', href: '/bpo-services', icon: Monitor },
      { name: 'Financial Operations', href: '/bpo-services', icon: BarChart3 },
    ],
  },
  {
    icon: Brain,
    title: 'ELSxKPO',
    href: '/kpo-services',
    desc: 'Knowledge process outsourcing for research, analytics, and financial services.',
    services: [
      { name: 'Financial Services', href: '/kpo-services', icon: BarChart3 },
      { name: 'Legal Services', href: '/kpo-services', icon: Shield },
      { name: 'Research & Analytics', href: '/kpo-services', icon: Brain },
    ],
  },
  {
    icon: Briefcase,
    title: 'ELSxConsultancy',
    href: '/consultancy',
    desc: 'Strategic consulting for digital transformation, ESG, and process optimization.',
    services: [
      { name: 'Digital Strategy', href: '/consultancy', icon: Zap },
      { name: 'Technology Consulting', href: '/consultancy', icon: Code },
      { name: 'Business Strategy', href: '/consultancy', icon: Building },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <SEOHead
        title="Our Services"
        description="Explore ELSxGlobal's comprehensive service portfolio: IT Services, BPO, KPO, and Strategic Consulting across multiple industries."
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="label mb-4"
            >
              Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-ink mb-6"
            >
              Solutions That Drive <span className="gradient-text">Real Results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-ink-secondary max-w-2xl"
            >
              From IT infrastructure to business outsourcing, we deliver end-to-end services 
              that help enterprises scale, optimize, and innovate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="space-y-16 lg:space-y-24">
            {divisions.map((div, di) => (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Division Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-500">
                      <div.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-ink">{div.title}</h2>
                      <p className="text-sm text-ink-muted">{div.desc}</p>
                    </div>
                  </div>
                  <Link
                    to={div.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                  >
                    View division
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {div.services.map((svc, si) => (
                    <motion.div
                      key={svc.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.06 }}
                    >
                      <Link
                        to={svc.href}
                        className="group card p-5 flex items-center gap-3 h-full"
                      >
                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 text-ink-muted shrink-0 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                          <svc.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold text-ink group-hover:text-brand-500 transition-colors">
                            {svc.name}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Not sure which service fits your needs?
            </h2>
            <p className="text-brand-100 mb-8">
              Our team will help you identify the right solutions for your business challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
