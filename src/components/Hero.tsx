import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Clock, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Global Clients' },
  { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: Sparkles, value: '15+', label: 'Years Experience' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(15,90,213,0.08),transparent)]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container-main relative z-10 pt-24 lg:pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-xs font-semibold text-brand-600">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Division: ELSxGlobal
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6 leading-[1.1]"
          >
            Transform Your Business with{' '}
            <span className="gradient-text">AI-Powered Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-ink-secondary max-w-xl mb-8 leading-relaxed"
          >
            EvolucentSphere delivers transformative BPO, KPO, IT services, and strategic consulting
            across Banking, Healthcare, Manufacturing, and Retail industries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <Link to="/contact" className="btn-primary">
              Transform Your Business
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Solutions
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-brand-500 mb-0.5">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-2xl font-bold text-ink">{stat.value}</span>
                </div>
                <span className="text-xs text-ink-muted font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
