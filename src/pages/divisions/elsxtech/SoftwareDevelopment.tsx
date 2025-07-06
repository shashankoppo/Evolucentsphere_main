import React from 'react';
import { Code, Smartphone, Globe, Database, Cpu, Zap, Settings, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications using latest technologies',
    features: ['React/Angular/Vue.js', 'Node.js/Python/Java', 'Progressive Web Apps', 'API Integration']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    features: ['iOS & Android Native', 'React Native/Flutter', 'Hybrid Applications', 'App Store Optimization']
  },
  {
    icon: Database,
    title: 'Enterprise Software',
    description: 'Scalable enterprise software solutions and systems',
    features: ['ERP Systems', 'CRM Solutions', 'Workflow Management', 'Business Intelligence']
  },
  {
    icon: Cpu,
    title: 'API Development',
    description: 'Robust API development and system integration',
    features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integrations']
  }
];

const benefits = [
  { metric: '500+', label: 'Applications Delivered' },
  { metric: '99.9%', label: 'Uptime Guarantee' },
  { metric: '50%', label: 'Faster Development' },
  { metric: '24/7', label: 'Support & Maintenance' }
];

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Software Development & Integration | ELSxTech - EvolucentSphere"
        description="Custom software development, web applications, mobile apps, enterprise software, API development, system integration, and legacy modernization services for digital transformation."
        keywords={[
          'Software Development', 'Custom Software', 'Web Development', 'Mobile App Development',
          'Full Stack Development', 'Frontend Development', 'Backend Development', 'API Development',
          'System Integration', 'Legacy Modernization', 'Application Migration', 'Software Architecture',
          'Microservices Architecture', 'RESTful APIs', 'GraphQL', 'Database Design',
          'Quality Assurance', 'Software Testing', 'Test Automation', 'Performance Testing',
          'Agile Development', 'Scrum', 'DevOps Integration', 'Continuous Integration',
          'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'iOS', 'Android',
          'React Native', 'Flutter', 'Progressive Web Apps', 'Enterprise Software'
        ]}
        serviceCategory="tech"
        targetIndustries={['Technology', 'Financial Services', 'Healthcare', 'E-commerce']}
        relatedServices={['Custom Development', 'Mobile Apps', 'Web Applications', 'API Integration']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Software Development & Integration
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Build powerful, scalable software solutions with our expert development team. 
              From web applications to mobile apps and enterprise systems.
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
                  <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
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
            Our Development Services
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Stack & Expertise
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  React.js & Next.js
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Angular & Vue.js
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  TypeScript & JavaScript
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Tailwind CSS & SCSS
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Node.js & Express
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Python & Django
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Java & Spring Boot
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  .NET & C#
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  React Native
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Flutter & Dart
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  iOS (Swift)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Android (Kotlin)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Database</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  PostgreSQL & MySQL
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  MongoDB & Redis
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Firebase & Supabase
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
                  Elasticsearch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Requirements analysis and project planning</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">UI/UX design and system architecture</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Agile development with regular updates</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing and quality assurance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm">Launch and ongoing maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Application?</h2>
            <p className="text-xl mb-8">
              Let's discuss your software development needs and create something amazing together.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}