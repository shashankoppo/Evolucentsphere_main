import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Users, Database, Network, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection & Response',
    description: 'Advanced threat detection and incident response capabilities',
    features: ['SIEM Integration', 'Real-time Monitoring', 'Automated Response', 'Threat Intelligence']
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Comprehensive identity and access control solutions',
    features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access', 'Identity Governance']
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: '24/7 security operations center and monitoring services',
    features: ['SOC Services', 'Log Analysis', 'Vulnerability Scanning', 'Compliance Reporting']
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment',
    description: 'Comprehensive security risk assessment and management',
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Risk Analysis', 'Security Audits']
  }
];

const benefits = [
  { metric: '99.9%', label: 'Threat Detection Rate' },
  { metric: '<1min', label: 'Response Time' },
  { metric: '24/7', label: 'Security Monitoring' },
  { metric: '100%', label: 'Compliance Coverage' }
];

export default function CybersecuritySolutions() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Cybersecurity Solutions | ELSxTech - EvolucentSphere"
        description="Advanced cybersecurity solutions, threat detection, incident response, SIEM, penetration testing, vulnerability assessment, compliance management, and security monitoring services for enterprise protection."
        keywords={[
          'Cybersecurity', 'Information Security', 'Network Security', 'Data Protection',
          'Threat Detection', 'Incident Response', 'Security Monitoring', 'SIEM',
          'Penetration Testing', 'Vulnerability Assessment', 'Security Audit', 'Compliance',
          'GDPR', 'HIPAA', 'SOX', 'ISO 27001', 'Zero Trust Architecture', 'Identity Management',
          'Access Control', 'Multi-Factor Authentication', 'Endpoint Security', 'Firewall',
          'Intrusion Detection', 'Malware Protection', 'Ransomware Protection', 'Security Training',
          'Risk Assessment', 'Security Governance', 'Cyber Threat Intelligence', 'SOC Services',
          'Security Operations Center', 'Privileged Access Management', 'Data Loss Prevention'
        ]}
        serviceCategory="tech"
        targetIndustries={['Banking and Finance', 'Healthcare', 'Government', 'Manufacturing']}
        relatedServices={['Security Assessment', 'Threat Detection', 'Compliance Management', 'Risk Management']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Advanced Cybersecurity Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Protect your enterprise with comprehensive cybersecurity solutions, 
              threat detection, incident response, and compliance management.
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
                  <div className="text-2xl font-bold text-red-600">{benefit.metric}</div>
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
            Our Cybersecurity Services
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
                <service.icon className="h-12 w-12 text-red-600 mb-6" />
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

      {/* Security Framework */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Security Frameworks & Compliance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  ISO 27001/27002
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  NIST Cybersecurity Framework
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  GDPR & CCPA
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  HIPAA & SOX
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  Splunk & QRadar SIEM
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  CrowdStrike & SentinelOne
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  Okta & Azure AD
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  Nessus & Qualys
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  MITRE ATT&CK Framework
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  Threat Hunting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  IOC Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                  Dark Web Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Secure Your Enterprise Today</h2>
            <p className="text-xl mb-8">
              Don't wait for a security breach. Let's strengthen your cybersecurity posture now.
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}