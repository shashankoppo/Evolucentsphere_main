import React from 'react';
import { Shield, BarChart, FileText, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Shield,
    title: 'Claims Processing Automation',
    description: 'AI-powered claims management and fraud detection',
    features: ['Automated Claims Triage', 'Fraud Detection AI', 'Document Processing', 'Settlement Optimization']
  },
  {
    icon: BarChart,
    title: 'Underwriting Analytics',
    description: 'Data-driven risk assessment and pricing models',
    features: ['Predictive Risk Scoring', 'Dynamic Pricing', 'Portfolio Analytics', 'Loss Ratio Optimization']
  },
  {
    icon: FileText,
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring and reporting',
    features: ['Solvency II Compliance', 'IWAY Reporting', 'Audit Trail Management', 'Policy Lifecycle Tracking']
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Digital-first insurance customer engagement',
    features: ['Omnichannel Engagement', 'Self-Service Portals', 'Policy Management', 'Renewal Automation']
  }
];

const stats = [
  { value: '60%', label: 'Faster Claims Processing' },
  { value: '40%', label: 'Cost Reduction' },
  { value: '99.5%', label: 'Compliance Accuracy' },
  { value: '85%', label: 'Customer Satisfaction' }
];

export default function Insurance() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Insurance Industry Solutions | ELSxGlobal"
        description="Transform insurance operations with AI-powered claims processing, underwriting analytics, and regulatory compliance solutions."
        keywords={['Insurance Technology', 'Claims Automation', 'Underwriting AI', 'InsurTech', 'Risk Analytics']}
        serviceCategory="tech"
        targetIndustries={['Insurance']}
      />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Insurance Industry Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Modernize insurance operations with AI-driven automation, predictive analytics, and seamless digital experiences.
            </motion.p>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Insurance Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Insurance Operations?</h2>
            <p className="text-xl mb-8">Let us help you modernize claims, underwriting, and customer engagement.</p>
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
