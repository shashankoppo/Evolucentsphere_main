import React from 'react';
import { Cog, Bot, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
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
