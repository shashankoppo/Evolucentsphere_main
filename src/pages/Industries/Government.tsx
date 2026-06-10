import React from 'react';
import { Building, Shield, Database, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Database,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital platforms and e-governance solutions',
    features: ['Online Service Portals', 'Digital Identity Management', 'E-Procurement Systems', 'Citizen Engagement Platforms']
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Government-grade security and regulatory compliance',
    features: ['Zero Trust Architecture', 'Data Sovereignty', 'FedRAMP Compliance', 'Security Operations Center']
  },
  {
    icon: Building,
    title: 'Smart City Infrastructure',
    description: 'IoT-enabled urban management and public safety systems',
    features: ['Traffic Management AI', 'Public Safety Monitoring', 'Utility Optimization', 'Environmental Analytics']
  },
  {
    icon: Users,
    title: 'Workforce Modernization',
    description: 'Digital transformation of government workforce operations',
    features: ['HR Automation', 'Training Platforms', 'Collaboration Tools', 'Process Digitization']
  }
];

const stats = [
  { value: '50%', label: 'Service Delivery Improvement' },
  { value: '35%', label: 'Operational Cost Reduction' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '3x', label: 'Faster Processing' }
];

export default function Government() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Government Industry Solutions | ELSxGlobal"
        description="Digital government solutions including e-governance platforms, smart city infrastructure, cybersecurity compliance, and workforce modernization."
        keywords={['Government Technology', 'E-Governance', 'Smart City', 'GovTech', 'Digital Government', 'Public Sector IT']}
        serviceCategory="tech"
        targetIndustries={['Government']}
      />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Government Industry Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Empowering public sector digital transformation with secure, scalable, and citizen-centric technology solutions.
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Government Solutions</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Modernize Government Services?</h2>
            <p className="text-xl mb-8">Let us help you build secure, efficient, citizen-centric digital infrastructure.</p>
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
