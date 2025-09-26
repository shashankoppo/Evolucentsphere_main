import React from 'react';
import { Heart, Shield, Brain, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Heart,
    title: 'Healthcare IT Solutions',
    description: 'Comprehensive healthcare technology and digital health platforms',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Portals', 'Healthcare Analytics']
  },
  {
    icon: Brain,
    title: 'Medical AI & Analytics',
    description: 'AI-powered diagnostic and predictive healthcare solutions',
    features: ['Medical Imaging AI', 'Predictive Diagnostics', 'Drug Discovery', 'Clinical Decision Support']
  },
  {
    icon: Shield,
    title: 'Healthcare Compliance',
    description: 'HIPAA compliance and healthcare data security solutions',
    features: ['HIPAA Compliance', 'Data Security', 'Audit Management', 'Privacy Protection']
  }
];

export default function Healthcare() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Healthcare IT Solutions | ELSxGlobal"
        description="Comprehensive healthcare technology solutions including EHR systems, telemedicine, medical AI, and HIPAA compliance services."
        keywords={[
          'Healthcare IT',
          'Medical Technology',
          'Electronic Health Records',
          'Telemedicine',
          'Healthcare Analytics',
          'Medical AI',
          'HIPAA Compliance'
        ]}
        serviceCategory="tech"
        targetIndustries={['Healthcare']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Healthcare Technology Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Revolutionize healthcare delivery with our comprehensive IT solutions, 
              AI-powered diagnostics, and HIPAA-compliant platforms.
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
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Modernize Your Healthcare Operations</h2>
            <p className="text-xl mb-8">
              Enhance patient care and operational efficiency with our healthcare technology solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Schedule Healthcare Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}