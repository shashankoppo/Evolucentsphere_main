import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Heart, Factory, ShoppingCart, Shield, Landmark, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const industries = [
  {
    icon: Building,
    name: 'Banking & Finance',
    path: '/industries/banking',
    description: 'Digital banking platforms, risk management, fintech innovation, and regulatory compliance for financial institutions.',
    accent: 'bg-green-50 text-green-600',
    stats: '99.9% Compliance Rate',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    path: '/industries/healthcare',
    description: 'HIPAA-compliant EHR systems, telemedicine, medical AI diagnostics, and interoperable health data platforms.',
    accent: 'bg-blue-50 text-blue-600',
    stats: '50% Less Admin Work',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    path: '/industries/manufacturing',
    description: 'Industry 4.0, IoT integration, predictive maintenance, and AI-powered quality control for smart factories.',
    accent: 'bg-orange-50 text-orange-600',
    stats: '50% Less Downtime',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    path: '/industries/retail',
    description: 'Omnichannel commerce, AI personalization, inventory optimization, and frictionless checkout solutions.',
    accent: 'bg-rose-50 text-rose-600',
    stats: '40% Less Cart Abandonment',
  },
  {
    icon: Shield,
    name: 'Insurance',
    path: '/industries/insurance',
    description: 'AI-powered claims automation, predictive underwriting, real-time fraud detection, and digital engagement.',
    accent: 'bg-sky-50 text-sky-600',
    stats: '60% Faster Claims',
  },
  {
    icon: Landmark,
    name: 'Government',
    path: '/industries/government',
    description: 'E-governance platforms, smart city infrastructure, FedRAMP-compliant security, and workforce modernization.',
    accent: 'bg-slate-100 text-slate-700',
    stats: '50% Faster Service Delivery',
  },
];

export default function IndustriesIndex() {
  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title="Industry Solutions | ELSxGlobal"
        description="Explore our industry-specific technology solutions for banking, healthcare, manufacturing, retail, insurance, and government sectors. Tailored expertise for your industry."
        keywords={['Industry Solutions', 'Vertical Solutions', 'Banking Technology', 'Healthcare IT', 'Manufacturing 4.0', 'Retail Tech', 'Insurance Technology', 'Government IT', 'InsurTech', 'FinTech']}
        breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
      />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-3" aria-label="breadcrumb">
        <div className="container-main">
          <ol className="flex items-center space-x-1 text-sm">
            <li><Link to="/" className="text-brand-500 hover:text-brand-600">Home</Link></li>
            <li className="flex items-center">
              <span className="text-ink-muted mx-1">/</span>
              <span className="text-ink-secondary font-medium">Industries</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="label mb-4"
            >
              Industry Solutions
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Deep Domain Expertise for Your Sector
            </motion.h1>
            <motion.p
              className="text-xl text-ink-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We bring decades of industry-specific knowledge to solve the unique challenges your sector faces.
              From regulatory compliance to operational efficiency, our solutions are built by experts who understand your world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border shadow-sm"
            >
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-ink">6 Industries · 500+ Clients · 30+ Countries</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={industry.path}
                  className="group card p-6 h-full flex flex-col gap-4"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${industry.accent}`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-brand-500 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-ink-secondary leading-relaxed">{industry.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs font-semibold text-brand-500">{industry.stats}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand-500 -translate-x-1 group-hover:translate-x-0 transition-transform">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-lg text-brand-100 mb-8">
              We work across many more verticals. Tell us about your sector and we will tailor a solution.
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
