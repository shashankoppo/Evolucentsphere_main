import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Code, Shield, Cloud, Users, Settings, Zap, BarChart, ArrowRight,
  Cpu, Database, Lock, Globe, MessageCircle, CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from './SEOHead';

const serviceCategories = [
  {
    id: 'ai',
    title: 'AI & Analytics',
    shortTitle: 'AI',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Harness artificial intelligence to transform operations',
    services: [
      { name: 'Predictive Analytics', desc: 'Forecast trends with AI-powered insights', features: ['Real-time forecasting', 'Automated decisions', 'Custom models'] },
      { name: 'Machine Learning', desc: 'Build intelligent systems that learn and adapt', features: ['Deep learning', 'NLP solutions', 'Computer vision'] },
      { name: 'Data Science', desc: 'Turn data into actionable business intelligence', features: ['Data mining', 'Visualization', 'Statistical analysis'] },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    shortTitle: 'Cloud',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    description: 'Scalable cloud solutions for modern business',
    services: [
      { name: 'Cloud Migration', desc: 'Seamless transition to cloud infrastructure', features: ['AWS/Azure/GCP', 'Zero downtime', 'Cost optimization'] },
      { name: 'DevOps', desc: 'Accelerate delivery with modern practices', features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code'] },
      { name: 'Managed Services', desc: 'End-to-end infrastructure management', features: ['24/7 monitoring', 'Auto-scaling', 'Security hardening'] },
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    shortTitle: 'Security',
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: 'Protect your business from evolving threats',
    services: [
      { name: 'Threat Detection', desc: 'AI-powered real-time threat monitoring', features: ['SOC services', 'Incident response', 'Threat intelligence'] },
      { name: 'Security Audit', desc: 'Comprehensive security assessments', features: ['Vulnerability scanning', 'Penetration testing', 'Compliance checks'] },
      { name: 'Data Protection', desc: 'Secure your sensitive information', features: ['Encryption', 'Access control', 'DLP solutions'] },
    ]
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    shortTitle: 'Digital',
    icon: Zap,
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    description: 'Modernize and transform your business',
    services: [
      { name: 'Process Automation', desc: 'Streamline operations with RPA and AI', features: ['Workflow automation', 'RPA bots', 'Intelligent processing'] },
      { name: 'Legacy Modernization', desc: 'Transform outdated systems to modern platforms', features: ['API enablement', 'Microservices', 'Cloud-native'] },
      { name: 'Digital Strategy', desc: 'Roadmap for digital excellence', features: ['Assessment', 'Roadmap', 'Change management'] },
    ]
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <SEOHead
        title="Services - Enterprise Solutions"
        description="Comprehensive AI, cloud, cybersecurity, and digital transformation services."
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge technologies and expert teams to transform your business operations
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory.id === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow'
              }`}
            >
              <cat.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Description */}
            <div className="text-center mb-10">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${activeCategory.bgColor} mb-4`}>
                <activeCategory.icon className={`h-8 w-8 ${activeCategory.textColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeCategory.title}</h3>
              <p className="text-gray-600 max-w-xl mx-auto">{activeCategory.description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {activeCategory.services.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join 500+ enterprises that have revolutionized their operations with our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
