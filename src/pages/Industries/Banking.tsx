import React from 'react';
import { Building, Shield, BarChart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Shield,
    title: 'Digital Banking Solutions',
    description: 'Secure and scalable digital banking platforms',
    features: ['Mobile Banking', 'Online Banking', 'Payment Processing', 'Fraud Detection']
  },
  {
    icon: BarChart,
    title: 'Risk Management',
    description: 'Advanced risk assessment and management systems',
    features: ['Credit Risk Analysis', 'Market Risk', 'Operational Risk', 'Regulatory Compliance']
  },
  {
    icon: Zap,
    title: 'Fintech Innovation',
    description: 'Cutting-edge financial technology solutions',
    features: ['Blockchain Integration', 'AI-Powered Analytics', 'Robo-Advisory', 'RegTech Solutions']
  }
];

export default function Banking() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Banking & Financial Services Solutions | ELSxGlobal"
        description="Comprehensive digital banking solutions, risk management, fintech innovation, and regulatory compliance services for financial institutions."
        keywords={[
          'Digital Banking',
          'Financial Services',
          'Risk Management',
          'Fintech Solutions',
          'Banking Technology',
          'Financial Compliance',
          'Payment Processing',
          'Fraud Detection'
        ]}
        serviceCategory="tech"
        targetIndustries={['Banking and Finance']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Banking & Financial Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your financial institution with our comprehensive digital banking solutions, 
              risk management systems, and innovative fintech platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Transform Your Financial Services</h2>
            <p className="text-xl mb-8">
              Partner with us to modernize your banking operations and enhance customer experiences.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}