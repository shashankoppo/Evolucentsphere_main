import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain, Cpu, Database, Cloud, Shield, Code, Network,
  Workflow, Bot, BarChart, Users, Lock, ArrowRight, Check
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const technologies = [
  {
    icon: Brain,
    title: 'Advanced AI Solutions',
    description: 'Next-generation artificial intelligence powering business transformation with NLP, computer vision, and predictive analytics.',
    features: [
      'Natural Language Processing',
      'Computer Vision & Recognition',
      'Predictive Analytics',
      'Machine Learning Operations',
      'Neural Networks',
      'Deep Learning Systems'
    ],
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Streamline operations through AI-driven automation including RPA, cognitive processing, and workflow optimization.',
    features: [
      'Robotic Process Automation (RPA)',
      'Cognitive Process Automation',
      'Document Processing',
      'Workflow Optimization',
      'Process Management',
      'Resource Allocation'
    ],
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Data-driven insights for strategic decision making with real-time processing and business intelligence.',
    features: [
      'Predictive Analytics',
      'Real-time Processing',
      'Business Intelligence',
      'Pattern Recognition',
      'Trend Analysis',
      'Performance Metrics'
    ],
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Customer Experience AI',
    description: 'Enhanced customer engagement through intelligent chatbots, sentiment analysis, and personalization engines.',
    features: [
      'AI-Powered Chatbots',
      'Sentiment Analysis',
      'Journey Mapping',
      'Personalization',
      'Voice Recognition',
      'Behavioral Analytics'
    ],
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Lock,
    title: 'Ethical AI Framework',
    description: 'Responsible AI implementation with bias detection, transparency protocols, and compliance monitoring.',
    features: [
      'Bias Detection & Mitigation',
      'Transparency Protocols',
      'Ethical Guidelines',
      'Privacy Protection',
      'Compliance Monitoring',
      'Impact Assessment'
    ],
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Network,
    title: 'Continuous Learning',
    description: 'Self-improving AI platforms with adaptive learning algorithms and knowledge management systems.',
    features: [
      'Adaptive Learning',
      'Knowledge Management',
      'Skill Enhancement',
      'Performance Optimization',
      'Automated Updates',
      'Learning Analytics'
    ],
    color: 'bg-indigo-50 text-indigo-600',
  }
];

export default function Technologies() {
  return (
    <div>
      <SEOHead
        title="AI Technologies & Innovation"
        description="Discover our cutting-edge AI technologies including machine learning, intelligent automation, advanced analytics, and ethical AI frameworks."
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="label mb-4"
            >
              Technologies
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-ink mb-6"
            >
              AI-Powered Innovation Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-ink-secondary max-w-2xl mx-auto"
            >
              Transforming businesses through cutting-edge AI technologies, intelligent automation, 
              and advanced analytics that deliver measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="card p-6 lg:p-7 h-full flex flex-col gap-4">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg shrink-0 ${tech.color}`}>
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">{tech.title}</h3>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">{tech.description}</p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-ink-secondary">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Commitment */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Innovation</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
              Our Commitment to Innovation
            </h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              We continuously invest in emerging technologies and talent development to stay at the 
              forefront of technological advancement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Brain,
                title: 'Continuous Learning',
                desc: 'Regular training and skill enhancement programs to keep our team at the cutting edge.',
                color: 'bg-violet-50 text-violet-600',
              },
              {
                icon: Cpu,
                title: 'Research & Development',
                desc: 'Dedicated R&D team exploring new technological frontiers and breakthroughs.',
                color: 'bg-sky-50 text-sky-600',
              },
              {
                icon: Network,
                title: 'Industry Partnerships',
                desc: 'Strategic collaborations with leading technology providers and research institutions.',
                color: 'bg-emerald-50 text-emerald-600',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg mx-auto mb-4 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-secondary">{item.desc}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-100 mb-8">
              Discover how our AI-powered solutions can drive your business forward.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold text-sm rounded-lg hover:bg-primary-50 transition-colors">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
