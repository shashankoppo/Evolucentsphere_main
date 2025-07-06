import React from 'react';
import { Cloud, Server, Shield, Zap, Database, Network, Settings, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Cloud,
    title: 'Multi-Cloud Strategy',
    description: 'Comprehensive multi-cloud architecture and management',
    features: ['AWS Integration', 'Azure Services', 'Google Cloud Platform', 'Hybrid Cloud Solutions']
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Automated infrastructure provisioning and management',
    features: ['Terraform', 'CloudFormation', 'Ansible', 'Kubernetes Orchestration']
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    description: 'Enterprise-grade cloud security and compliance',
    features: ['Identity Management', 'Data Encryption', 'Network Security', 'Compliance Monitoring']
  },
  {
    icon: Zap,
    title: 'DevOps & CI/CD',
    description: 'Continuous integration and deployment pipelines',
    features: ['Jenkins', 'GitLab CI', 'Docker', 'Automated Testing']
  }
];

const benefits = [
  { metric: '99.99%', label: 'Uptime Guarantee' },
  { metric: '60%', label: 'Cost Reduction' },
  { metric: '10x', label: 'Faster Deployment' },
  { metric: '24/7', label: 'Support Coverage' }
];

export default function CloudInfrastructure() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Cloud & Infrastructure Solutions | ELSxTech - EvolucentSphere"
        description="Enterprise cloud computing solutions, infrastructure management, AWS, Azure, Google Cloud Platform services. Multi-cloud strategy, DevOps, CI/CD, and cloud security solutions for digital transformation."
        keywords={[
          'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform', 'Multi-Cloud Strategy',
          'Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Container Orchestration',
          'Kubernetes', 'Docker', 'Cloud Security', 'DevOps', 'CI/CD Pipeline', 'Microservices',
          'Cloud Native Applications', 'Hybrid Cloud', 'Private Cloud', 'Public Cloud',
          'Cloud Cost Optimization', 'Cloud Monitoring', 'Disaster Recovery', 'Backup Solutions',
          'Scalability', 'High Availability', 'Load Balancing', 'Auto Scaling', 'Terraform',
          'CloudFormation', 'Ansible', 'Jenkins', 'GitLab CI', 'Cloud Infrastructure Management'
        ]}
        serviceCategory="tech"
        targetIndustries={['Banking and Finance', 'Healthcare', 'Manufacturing', 'Retail and E-commerce']}
        relatedServices={['Cloud Migration', 'DevOps Services', 'Infrastructure Management', 'Cloud Security']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Cloud & Infrastructure Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your business with enterprise-grade cloud computing solutions, 
              multi-cloud strategies, and scalable infrastructure management.
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
                  <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
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
            Our Cloud Infrastructure Services
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Stack & Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Amazon Web Services (AWS)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Microsoft Azure
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Google Cloud Platform
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  IBM Cloud
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Kubernetes & Docker
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Terraform & Ansible
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Jenkins & GitLab CI
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Prometheus & Grafana
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Monitoring</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  AWS Security Hub
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Azure Security Center
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  CloudWatch & CloudTrail
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Splunk & ELK Stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our cloud infrastructure solutions can accelerate your digital transformation.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}