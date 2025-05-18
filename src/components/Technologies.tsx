import React from 'react';
import { Brain, Cpu, Database, Cloud, Shield, Code } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Advanced AI Solutions',
    description: 'Harness the power of artificial intelligence to unlock unprecedented insights and automation capabilities.',
    features: [
      'Neural Network Architecture',
      'Deep Learning Systems',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Machine Learning Operations'
    ],
    metrics: [
      { label: 'Efficiency Gain', value: '85%' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Accuracy Rate', value: '99.9%' }
    ]
  },
  {
    icon: Cpu,
    title: 'Quantum Computing',
    description: 'Access revolutionary computing power to solve complex problems at unprecedented speeds.',
    features: [
      'Quantum Algorithms',
      'Quantum Machine Learning',
      'Optimization Problems',
      'Cryptography',
      'Financial Modeling',
      'Drug Discovery'
    ],
    metrics: [
      { label: 'Processing Speed', value: '100x' },
      { label: 'Problem Complexity', value: '1000x' },
      { label: 'Energy Efficiency', value: '90%' }
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Build scalable, secure, and efficient cloud solutions for your enterprise needs.',
    features: [
      'Multi-Cloud Strategy',
      'Serverless Architecture',
      'Container Orchestration',
      'Microservices',
      'Auto-scaling',
      'Disaster Recovery'
    ],
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Cost Savings', value: '60%' },
      { label: 'Deployment Speed', value: '5x' }
    ]
  }
];

export default function Technologies() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-edge Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage our advanced technology stack to transform your business operations
            and stay ahead in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <tech.icon className="h-12 w-12 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{tech.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{tech.description}</p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Capabilities</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {tech.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-xl font-bold text-purple-600 mb-2">500+</p>
              <p className="text-gray-700">Enterprise Clients</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-xl font-bold text-purple-600 mb-2">$2B+</p>
              <p className="text-gray-700">Client Cost Savings</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-xl font-bold text-purple-600 mb-2">99.9%</p>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}