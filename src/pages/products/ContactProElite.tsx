import React from 'react';
import { Package, Phone, Mail, Globe, Database, Brain, CheckCircle, ArrowRight, Star, Users, Shield, Zap, Clock, BarChart3, Settings, MessageSquare, Bot, Workflow, TrendingUp, Headphones as HeadphonesIcon, Lock, Cloud, Server, Search, ShoppingCart, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const productDetails = {
  name: 'ContactPro Elite',
  tagline: 'Enterprise-Grade Contact Center Solution',
  description: 'Transform your customer experience with AI-powered contact center technology. ContactPro Elite delivers omnichannel support, intelligent routing, and real-time analytics for exceptional customer engagement.',
  category: 'BPO Solutions',
  pricing: 'Enterprise',
  rating: 4.9,
  reviewCount: 500,

  heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200',

  highlights: [
    { icon: Zap, title: '45% Faster Resolution', description: 'AI-powered routing reduces wait times' },
    { icon: Users, title: 'Unlimited Agents', description: 'Scale your team without limits' },
    { icon: Globe, title: 'Omnichannel Support', description: 'Voice, chat, email, social media' },
    { icon: BarChart3, title: 'Real-time Analytics', description: 'Live dashboards and reporting' }
  ],

  features: [
    {
      category: 'AI & Automation',
      icon: Bot,
      items: [
        { title: 'AI-Powered Chatbots', desc: '24/7 automated customer support with natural language processing' },
        { title: 'Intelligent Routing', desc: 'Smart skill-based routing for optimal agent-customer matching' },
        { title: 'Predictive Analytics', desc: 'Forecast call volumes and optimize staffing' },
        { title: 'Sentiment Analysis', desc: 'Real-time customer emotion detection and response' }
      ]
    },
    {
      category: 'Communication Channels',
      icon: MessageSquare,
      items: [
        { title: 'Voice/Telephony', desc: 'Cloud-based phone system with global coverage' },
        { title: 'Live Chat', desc: 'Web and in-app chat with co-browsing capabilities' },
        { title: 'Email Management', desc: 'Unified inbox with smart categorization' },
        { title: 'Social Media Integration', desc: 'Facebook, Twitter, WhatsApp, and more' }
      ]
    },
    {
      category: 'Operations & Quality',
      icon: Settings,
      items: [
        { title: 'Quality Monitoring', desc: 'Call recording, scoring, and coaching tools' },
        { title: 'Workforce Management', desc: 'Scheduling, time tracking, and adherence' },
        { title: 'CRM Integration', desc: 'Seamless connection with Salesforce, Zendesk, etc.' },
        { title: 'Compliance Tools', desc: 'PCI-DSS, HIPAA, GDPR compliant operations' }
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: TrendingUp,
      items: [
        { title: 'Real-time Dashboards', desc: 'Live performance metrics and KPIs' },
        { title: 'Custom Reports', desc: 'Build and schedule any report you need' },
        { title: 'Agent Scorecards', desc: 'Individual performance tracking and gamification' },
        { title: 'Customer Journey Mapping', desc: 'Visualize and optimize every touchpoint' }
      ]
    }
  ],

  benefits: [
    { metric: '45%', label: 'Reduced Wait Times' },
    { metric: '98%', label: 'Customer Satisfaction' },
    { metric: '30%', label: 'Cost Savings' },
    { metric: '24/7', label: 'Support Coverage' }
  ],

  industries: ['Banking', 'E-commerce', 'Healthcare', 'Insurance', 'Telecom', 'Retail'],

  integrations: ['Salesforce', 'Zendesk', 'ServiceNow', 'SAP', 'Oracle', 'Microsoft Dynamics', 'Freshdesk', 'HubSpot'],

  faqs: [
    { q: 'How quickly can ContactPro Elite be deployed?', a: 'Most implementations are completed within 2-4 weeks. Our dedicated onboarding team handles migration, configuration, and training.' },
    { q: 'Can I scale agent count up and down?', a: 'Yes, ContactPro Elite supports flexible scaling. Add or remove agents anytime with pay-per-use pricing models available.' },
    { q: 'What languages are supported?', a: 'We support 50+ languages for both AI chatbots and human agents with real-time translation capabilities.' },
    { q: 'Is the platform secure and compliant?', a: 'Yes, ContactPro Elite is PCI-DSS Level 1, HIPAA, GDPR, and SOC 2 Type II certified. Enterprise-grade security is built-in.' },
    { q: 'Can I use my existing phone numbers?', a: 'Yes, we support number porting from all major carriers globally. Minimal downtime during transition.' }
  ]
};

const countries = ['United States', 'United Kingdom', 'India', 'Canada', 'Australia', 'Germany', 'UAE', 'Singapore', 'Netherlands'];

export default function ContactProElite() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={`${productDetails.name} - Enterprise Contact Center Solution | ELSxBPO`}
        description={`${productDetails.description} Serving businesses in ${countries.join(', ')}. AI-powered customer support with omnichannel capabilities.`}
        keywords={[
          'Contact Center Solution', 'Customer Support Software', 'Call Center Technology', 'ContactPro Elite',
          'Omnichannel Contact Center', 'AI Contact Center', 'Cloud Contact Center', 'Customer Experience Platform',
          'BPO Software', 'Customer Service Automation', 'Inbound Call Center', 'Outbound Call Center',
          'Help Desk Software', 'Customer Support Platform', 'Enterprise Contact Center',
          'Contact Center USA', 'Contact Center UK', 'Contact Center India', 'Contact Center Canada', 'Contact Center Australia'
        ]}
        serviceCategory="bpo"
        targetIndustries={productDetails.industries}
        relatedServices={['BPO Services', 'Customer Support', 'Back Office Operations']}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-ink text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-main py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
                <Package className="w-4 h-4 mr-2" />
                {productDetails.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{productDetails.name}</h1>
              <p className="text-xl text-white/80 mb-8">{productDetails.tagline}</p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                  <span className="ml-2 font-medium">{productDetails.rating}</span>
                </div>
                <span className="text-white/60">{productDetails.reviewCount}+ reviews</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-white text-brand-700 hover:bg-white/90">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/bpo-services" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Explore BPO Services
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
              <div className="glass-liquid-dark rounded-2xl p-8 glow-blue">
                <div className="grid grid-cols-2 gap-6">
                  {productDetails.benefits.map((benefit, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                      <div className="text-3xl font-bold text-brand-400">{benefit.metric}</div>
                      <div className="text-sm text-white/70">{benefit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding border-b border-border">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-6">
            {productDetails.highlights.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <item.icon className="w-10 h-10 text-brand-500 mx-auto mb-4" />
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {productDetails.features.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`section-padding ${sectionIdx % 2 === 1 ? 'surface' : ''}`}>
          <div className="container-main">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-lg bg-brand-100 text-brand-600">
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="section-label">Features</span>
                <h2 className="text-3xl font-bold text-ink">{section.category}</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6">
                  <h3 className="font-semibold text-ink mb-2">{feature.title}</h3>
                  <p className="text-sm text-ink-secondary">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integrations */}
      <section className="section-padding bg-ink text-white">
        <div className="container-main text-center">
          <span className="section-label text-brand-400">Integrations</span>
          <h2 className="text-3xl font-bold mb-4">Seamlessly Connect Your Stack</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">Integrate with 100+ business applications out of the box</p>
          <div className="flex flex-wrap justify-center gap-4">
            {productDetails.integrations.map((int, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">{int}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="section-label">Industries</span>
            <h2 className="text-3xl font-bold text-ink">Built for Your Industry</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {productDetails.industries.map((ind, i) => (
              <Link key={i} to={`/industries/${ind.toLowerCase()}`} className="glass-button px-6 py-3 rounded-lg font-medium text-ink hover:text-brand-600">
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold text-ink">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {productDetails.faqs.map((faq, i) => (
              <details key={i} className="glass-card p-6 group">
                <summary className="font-semibold text-ink cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-brand-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-ink-secondary text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transform Your Customer Experience</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Get started with ContactPro Elite today. Book a free demo and see the difference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary bg-white text-brand-700 hover:bg-white/90">
              <Mail className="mr-2 w-5 h-5" />
              Request Demo
            </Link>
            <a href="tel:+917247558873" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Phone className="mr-2 w-5 h-5" />
              Call: +91 72475 58873
            </a>
          </div>
        </div>
      </section>

      {/* Location SEO Footer */}
      <section className="py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">
          Serving businesses in {countries.join(', ')} and 30+ countries worldwide.
        </p>
      </section>
    </div>
  );
}
