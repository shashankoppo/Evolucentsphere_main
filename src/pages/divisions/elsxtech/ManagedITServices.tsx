import React from 'react';
import { Settings, Monitor, Shield, Users, Clock, Phone, Server, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Monitor,
    title: 'Network Management',
    description: 'Comprehensive network monitoring and management services',
    features: ['24/7 Monitoring', 'Performance Optimization', 'Security Management', 'Capacity Planning']
  },
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Complete IT infrastructure management and support',
    features: ['Server Administration', 'Cloud Management', 'Backup & Recovery', 'System Updates']
  },
  {
    icon: Phone,
    title: 'Help Desk Support',
    description: 'Multi-level IT support and help desk services',
    features: ['Level 1-3 Support', 'Ticket Management', 'Remote Assistance', 'User Training']
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Comprehensive cybersecurity and compliance management',
    features: ['Threat Monitoring', 'Vulnerability Management', 'Compliance Reporting', 'Incident Response']
  }
];

const benefits = [
  { metric: '99.9%', label: 'Service Uptime' },
  { metric: '24/7', label: 'Support Coverage' },
  { metric: '40%', label: 'Cost Reduction' },
  { metric: '<15min', label: 'Response Time' }
];

export default function ManagedITServices() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Managed IT Services | ELSxTech - EvolucentSphere"
        description="Comprehensive managed IT services, 24/7 support, network management, infrastructure management, help desk services, and IT consulting for business continuity and efficiency."
        keywords={[
          'Managed IT Services', 'IT Support', 'Help Desk', 'Network Management', 'Server Management',
          'IT Infrastructure Management', 'Remote Monitoring', 'Proactive Maintenance', 'IT Consulting',
          'Technology Support', 'System Administration', 'Network Security', 'Backup Management',
          'Disaster Recovery', 'IT Asset Management', 'Vendor Management', 'Service Level Agreement',
          'ITIL', 'IT Service Management', '24/7 Support', 'Remote Support', 'Cloud Management',
          'IT Outsourcing', 'Technology Consulting', 'Business Continuity', 'IT Strategy'
        ]}
        serviceCategory="tech"
        targetIndustries={['Small Business', 'Healthcare', 'Financial Services', 'Manufacturing']}
        relatedServices={['IT Support', 'Network Management', 'Cloud Services', 'Cybersecurity']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Managed IT Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Focus on your business while we manage your IT infrastructure. 
              Comprehensive managed services with 24/7 support and proactive monitoring.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl font-bold text-orange-600">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Managed IT Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-orange-600 mb-6" />
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

      {/* Service Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Service Level Agreements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">$99/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Business Hours Support
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Remote Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Basic Security
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Monthly Reporting
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">$199/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Proactive Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Advanced Security
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Weekly Reporting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Backup & Recovery
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-orange-600 mb-6">$399/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Dedicated Support
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Real-time Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Enterprise Security
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Daily Reporting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Strategic Consulting
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Support Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">Multiple channels for support requests</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assign</h3>
              <p className="text-gray-600">Ticket assignment to appropriate specialist</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resolve</h3>
              <p className="text-gray-600">Expert resolution and testing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Report</h3>
              <p className="text-gray-600">Documentation and follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Let Us Manage Your IT</h2>
            <p className="text-xl mb-8">
              Focus on growing your business while we handle all your IT needs with expert care.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Start Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}