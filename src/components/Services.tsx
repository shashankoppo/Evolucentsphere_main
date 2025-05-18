import React, { useState } from 'react';
import {
  Brain, Code, Database, Cloud, Shield, Users,
  Laptop, Settings, FileText, HeartPulse, GraduationCap, Briefcase,
  ArrowRight, BarChart, Zap, Globe
} from 'lucide-react';
import SEOHead from './SEOHead';

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Harness the power of artificial intelligence to transform your business operations',
    services: [
      {
        name: 'Predictive Analytics',
        description: 'Forecast trends and make data-driven decisions with advanced AI models',
        benefits: ['45% improved accuracy', 'Real-time insights', 'Automated reporting']
      },
      {
        name: 'Natural Language Processing',
        description: 'Understand and process human language for enhanced customer interactions',
        benefits: ['24/7 customer support', 'Multi-language support', 'Sentiment analysis']
      },
      {
        name: 'Computer Vision',
        description: 'Automate visual inspection and analysis with state-of-the-art AI',
        benefits: ['99.9% accuracy rate', 'Real-time processing', 'Scalable solutions']
      }
    ]
  },
  {
    title: 'Digital Transformation',
    icon: Code,
    description: 'Modernize your business with cutting-edge digital solutions',
    services: [
      {
        name: 'Legacy System Modernization',
        description: 'Transform outdated systems into modern, scalable platforms',
        benefits: ['60% cost reduction', 'Improved efficiency', 'Enhanced security']
      },
      {
        name: 'Cloud Migration',
        description: 'Seamlessly transition to cloud-based infrastructure',
        benefits: ['99.9% uptime', 'Scalable resources', 'Global accessibility']
      },
      {
        name: 'Process Automation',
        description: 'Streamline operations with intelligent automation solutions',
        benefits: ['75% faster processing', 'Error reduction', 'Cost savings']
      }
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your business with advanced security solutions',
    services: [
      {
        name: 'Threat Detection & Response',
        description: 'Real-time monitoring and automated threat neutralization',
        benefits: ['24/7 protection', 'AI-powered detection', 'Rapid response']
      },
      {
        name: 'Security Assessment',
        description: 'Comprehensive evaluation of your security posture',
        benefits: ['Risk identification', 'Compliance checks', 'Security roadmap']
      },
      {
        name: 'Data Protection',
        description: 'Secure your sensitive data with advanced encryption',
        benefits: ['Military-grade encryption', 'Regulatory compliance', 'Data privacy']
      }
    ]
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0]);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Services"
        description="Explore our comprehensive range of AI-powered business transformation services."
        keywords={['AI Services', 'Digital Transformation', 'Business Solutions']}
      />
      
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our cutting-edge technologies and expertise to revolutionize your business operations
              and achieve unprecedented growth.
            </p>
          </div>

          <div className="flex overflow-x-auto mb-12 pb-4 hide-scrollbar">
            <div className="flex space-x-4 mx-auto">
              {serviceCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory.title === category.title
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:scale-105'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedCategory.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedCategory.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {selectedCategory.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Join the ranks of industry leaders who have revolutionized their operations with our solutions.
              Schedule a consultation today and discover your business's true potential.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium transform hover:scale-105 transition-transform">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}