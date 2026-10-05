import React from 'react';
import { Cog, Bot, BarChart, CheckCircle, ArrowRight, AlertTriangle, Eye, Network, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Cog,
    title: 'Smart Manufacturing',
    description: 'Industry 4.0 solutions for intelligent manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Production Optimization']
  },
  {
    icon: Bot,
    title: 'Industrial Automation',
    description: 'Robotic process automation for manufacturing operations',
    features: ['Robotic Systems', 'Process Automation', 'Quality Assurance', 'Safety Systems']
  },
  {
    icon: BarChart,
    title: 'Manufacturing Analytics',
    description: 'Data-driven insights for operational excellence',
    features: ['Production Analytics', 'Supply Chain Optimization', 'Performance Monitoring', 'Cost Analysis']
  }
];

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Unplanned Downtime',
    description: 'Unexpected equipment failures that halt production lines and cost thousands per hour in lost output.'
  },
  {
    icon: Eye,
    title: 'Quality Control Gaps',
    description: 'Manual inspection processes that miss defects, drive rework costs, and damage brand reputation.'
  },
  {
    icon: Network,
    title: 'Disconnected Operations',
    description: 'Isolated machines and systems that prevent real-time visibility into production performance and supply chains.'
  },
  {
    icon: TrendingDown,
    title: 'Rising Input Costs',
    description: 'Volatility in raw material and energy prices squeezing margins on every production run.'
  }
];

const solutions = [
  {
    title: 'Predictive Maintenance AI',
    description: 'IoT sensor analytics that predict equipment failures before they occur, eliminating unplanned downtime.'
  },
  {
    title: 'Computer Vision Quality Inspection',
    description: 'AI-powered defect detection on production lines with 99% accuracy and 24/7 real-time monitoring.'
  },
  {
    title: 'Connected Factory Platform',
    description: 'Unified IoT data layer that provides real-time visibility across machines, lines, and entire facilities.'
  },
  {
    title: 'Resource Optimization Engine',
    description: 'AI-driven production planning that minimizes waste, optimizes energy use, and maximizes yield per run.'
  }
];

const metrics = [
  { value: '50%', label: 'Less Unplanned Downtime' },
  { value: '99%', label: 'Defect Detection Accuracy' },
  { value: '30%', label: 'Lower Production Costs' },
  { value: '25%', label: 'Higher OEE' }
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Manufacturing Technology Solutions | ELSxGlobal"
        description="Industry 4.0 smart manufacturing solutions including IoT integration, industrial automation, and manufacturing analytics for operational excellence."
        keywords={[
          'Smart Manufacturing',
          'Industry 4.0',
          'Industrial IoT',
          'Manufacturing Automation',
          'Predictive Maintenance',
          'Quality Control',
          'Production Optimization'
        ]}
        serviceCategory="tech"
        targetIndustries={['Manufacturing']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-orange-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Smart Manufacturing Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-ink-secondary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your manufacturing operations with Industry 4.0 solutions, 
              IoT integration, and intelligent automation systems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold text-ink mb-4">{service.title}</h3>
                <p className="text-ink-secondary mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-ink-secondary">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Industry Challenges</span>
            <h2 className="text-3xl font-bold text-ink mt-4">Challenges Facing Modern Manufacturers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <challenge.icon className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-ink mb-2">{challenge.title}</h3>
                <p className="text-ink-secondary text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Our Solutions</span>
            <h2 className="text-3xl font-bold text-ink mt-4">How EvolucentSphere Solves These Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-ink mb-2">{solution.title}</h3>
                <p className="text-ink-secondary text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Key Metrics</span>
            <h2 className="text-3xl font-bold text-ink mt-4">Real Impact for Manufacturing Operations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
                <div className="text-ink-secondary text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Modernize Your Manufacturing</h2>
            <p className="text-xl mb-8">
              Embrace Industry 4.0 with our smart manufacturing solutions and automation technologies.
            </p>
            <button className="btn-primary flex items-center justify-center mx-auto group">
              Explore Manufacturing Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
