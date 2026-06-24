import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Globe, Target, Lightbulb, Shield, TrendingUp, Star, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const values = [
  { icon: Users, title: 'People First', desc: 'Empowering teams and clients through continuous growth and learning.' },
  { icon: Award, title: 'Excellence', desc: 'Setting the highest standards and delivering exceptional results.' },
  { icon: Globe, title: 'Global Impact', desc: 'Creating positive change across industries and borders.' },
  { icon: Target, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions.' },
];

const principles = [
  { icon: Lightbulb, title: 'Think Big', desc: 'Bold ambitions and visionary goals drive everything we build.' },
  { icon: Shield, title: 'Build Trust', desc: 'Integrity, transparency, and long-term partnerships.' },
  { icon: TrendingUp, title: 'Learn & Adapt', desc: 'Continuous evolution with technology and market shifts.' },
  { icon: Star, title: 'Deliver Excellence', desc: 'Results that exceed expectations and create real value.' },
];

export default function About() {
  return (
    <div>
      <SEOHead
        title="About Us"
        description="EvolucentSphere Pvt. Ltd. — Flagship Division ELSxGlobal. Delivering AI-powered BPO, KPO, IT services, and consulting across 30+ countries."
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-ink mb-6"
            >
              Pioneering the Future of Business Intelligence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-ink-secondary max-w-2xl"
            >
              We combine deep domain expertise with cutting-edge technology to transform
              businesses and drive sustainable growth across industries worldwide.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {[
              { value: '500+', label: 'Global Clients' },
              { value: '98%', label: 'Client Retention' },
              { value: '38%', label: 'YoY Revenue Growth' },
              { value: '15+', label: 'Years of Innovation' },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-500 mb-1">{stat.value}</div>
                <div className="text-xs text-ink-muted uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Our Culture</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Core Values</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-50 text-brand-500 mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-ink-secondary">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Leadership Principles</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              How we operate, lead, and deliver at every level of the organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-6"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-50 text-brand-500 mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink-secondary">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 lg:p-10"
            >
              <h2 className="text-2xl font-bold text-ink mb-4">Our Mission</h2>
              <p className="text-ink-secondary leading-relaxed">
                To empower organizations worldwide with transformative technology solutions that 
                drive efficiency, innovation, and sustainable growth. We deliver exceptional value 
                through our expertise in AI, cloud computing, and advanced analytics, helping 
                businesses navigate and thrive in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="card p-8 lg:p-10"
            >
              <h2 className="text-2xl font-bold text-ink mb-4">Our Vision</h2>
              <p className="text-ink-secondary leading-relaxed">
                To be the global leader in technological innovation and business transformation, 
                setting new standards for excellence and creating lasting positive impact for our 
                clients, employees, and communities. We envision a future where advanced technology 
                solutions are accessible and transformative for businesses of all sizes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-brand-100 mb-8">
              Join the ranks of industry leaders who have revolutionized their operations with our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918770422622"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Business
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
