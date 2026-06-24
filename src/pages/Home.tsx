import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Shield, Clock, TrendingUp, Star, Award, Building, Heart, ShoppingCart, Factory, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const industries = [
  { icon: Building, name: 'Banking & Finance', href: '/industries/banking', desc: 'Digital banking, risk management, fintech' },
  { icon: Heart, name: 'Healthcare', href: '/industries/healthcare', desc: 'EHR, telemedicine, medical AI' },
  { icon: Factory, name: 'Manufacturing', href: '/industries/manufacturing', desc: 'Industry 4.0, IoT, smart factories' },
  { icon: ShoppingCart, name: 'Retail & E-commerce', href: '/industries/retail', desc: 'Omnichannel, personalization, supply chain' },
];

const metrics = [
  { icon: Globe, value: '30+', label: 'Countries' },
  { icon: Users, value: '500+', label: 'Clients' },
  { icon: Shield, value: '99.9%', label: 'Uptime' },
  { icon: Clock, value: '15+', label: 'Years' },
];

const whyChoose = [
  {
    title: 'Global Expertise',
    description: 'Teams across India, Netherlands, USA, and Chicago delivering round-the-clock support.',
  },
  {
    title: 'Industry Specialists',
    description: 'Deep domain expertise in Banking, Healthcare, Manufacturing, and Retail verticals.',
  },
  {
    title: 'Proven Results',
    description: '38% YoY revenue growth, 98% client satisfaction, and 45% average cost reduction.',
  },
  {
    title: 'Full-Stack Delivery',
    description: 'End-to-end services from BPO and KPO to IT and strategic consulting under one roof.',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);
  const [subLoading, setSubLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubLoading(true);
    setSubError(null);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
      if (error) {
        if (error.code === '23505') setSubError('Already subscribed.');
        else setSubError('Something went wrong. Try again.');
      } else {
        setSubscribed(true);
        setEmail('');
      }
    } catch {
      setSubError('Something went wrong. Try again.');
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <div>
      <SEOHead
        title="EvolucentSphere - AI-Powered Business Transformation"
        description="Transform your business with EvolucentSphere's AI-powered BPO, KPO, IT Services, and Strategic Consulting. Global delivery across 30+ countries."
      />

      <Hero />

      {/* Quick Stats Bar */}
      <section className="border-y border-gray-100 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-6 flex flex-col items-center text-center"
              >
                <m.icon className="w-5 h-5 text-brand-400 mb-2" />
                <span className="text-2xl font-bold text-ink">{m.value}</span>
                <span className="text-xs text-ink-muted font-medium uppercase tracking-wide">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="label mb-4"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-ink mb-4"
              >
                The Partner Enterprises Trust for Complex Transformation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-ink-secondary text-lg mb-8"
              >
                We combine deep industry knowledge with cutting-edge technology to deliver
                outcomes that matter. Not just another vendor — a strategic partner.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-ink">38% YoY Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-ink">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-semibold text-ink">50+ Awards</span>
                </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label mb-4"
            >
              Industries
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-ink mb-4"
            >
              Solutions Tailored to Your Sector
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ink-secondary text-lg max-w-2xl mx-auto"
            >
              We bring decades of domain expertise to solve the unique challenges of each industry.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={ind.href}
                  className="group card p-6 h-full flex flex-col gap-4"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-50 text-brand-500 shrink-0">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-ink mb-1 group-hover:text-brand-500 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-ink-secondary">{ind.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-300">
                    Explore solutions
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link to="/industries" className="btn-secondary">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold text-white mb-3"
            >
              Stay Ahead of the Curve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-100 mb-8"
            >
              Get weekly insights on AI, digital transformation, and industry trends.
            </motion.p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white"
              >
                <span className="text-sm font-medium">Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-sm text-ink bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={subLoading}
                  className="px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors disabled:opacity-70"
                >
                  {subLoading ? '...' : 'Subscribe'}
                </button>
              </motion.form>
            )}
            {subError && (
              <p className="text-brand-200 text-sm mt-3">{subError}</p>
            )}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
