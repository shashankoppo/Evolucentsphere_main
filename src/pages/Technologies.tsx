import React from 'react';
import { Brain, Cpu, Database, Cloud, Shield, Code, Network, Workflow, Bot, BarChart, Users, Lock } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Advanced AI Solutions',
    description: 'Next-generation artificial intelligence powering business transformation',
    features: [
      'Natural Language Processing & Understanding',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Forecasting',
      'Machine Learning Operations (MLOps)',
      'Neural Network Architecture',
      'Deep Learning Systems'
    ],
    benefits: [
      'Reduced operational costs by 45%',
      'Improved decision accuracy by 85%',
      'Enhanced customer satisfaction'
    ]
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Streamlined processes through AI-driven automation',
    features: [
      'Robotic Process Automation (RPA)',
      'Cognitive Process Automation',
      'Intelligent Document Processing',
      'Workflow Optimization',
      'Business Process Management',
      'Smart Resource Allocation'
    ],
    benefits: [
      'Automated 75% of routine tasks',
      '60% faster processing times',
      'Zero-error operations'
    ]
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Data-driven insights for strategic decision making',
    features: [
      'Predictive Analytics',
      'Real-time Data Processing',
      'Business Intelligence',
      'Pattern Recognition',
      'Trend Analysis',
      'Performance Metrics'
    ],
    benefits: [
      'Real-time business insights',
      'Proactive decision making',
      'Strategic planning enhancement'
    ]
  },
  {
    icon: Users,
    title: 'Customer Experience AI',
    description: 'Enhanced customer engagement through intelligent systems',
    features: [
      'AI-Powered Chatbots',
      'Sentiment Analysis',
      'Customer Journey Mapping',
      'Personalization Engines',
      'Voice Recognition',
      'Behavioral Analytics'
    ],
    benefits: [
      '24/7 customer support',
      'Personalized interactions',
      'Improved response times'
    ]
  },
  {
    icon: Lock,
    title: 'Ethical AI Framework',
    description: 'Responsible AI implementation with human oversight',
    features: [
      'Bias Detection & Mitigation',
      'Transparency Protocols',
      'Ethical Guidelines',
      'Privacy Protection',
      'Compliance Monitoring',
      'Impact Assessment'
    ],
    benefits: [
      'Trustworthy AI systems',
      'Regulatory compliance',
      'Protected client interests'
    ]
  },
  {
    icon: Network,
    title: 'Continuous Learning Systems',
    description: 'Self-improving AI platforms for evolving business needs',
    features: [
      'Adaptive Learning Algorithms',
      'Knowledge Management',
      'Skill Enhancement',
      'Performance Optimization',
      'Automated Updates',
      'Learning Analytics'
    ],
    benefits: [
      'Continuous improvement',
      'Adaptive capabilities',
      'Future-proof solutions'
    ]
  }
];

export default function Technologies() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Innovation Hub
            </h1>
            <p className="text-xl text-gray-600">
              Transforming businesses through cutting-edge AI technologies and intelligent automation
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <tech.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-green-600">
                        <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Innovation</h2>
            <p className="text-xl text-gray-600 mb-12">
              We continuously invest in emerging technologies and talent development to stay at the forefront 
              of technological advancement, ensuring our clients receive cutting-edge solutions that drive 
              real business value.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Regular training and skill enhancement programs for our team</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Research & Development</h3>
                <p className="text-gray-600">Dedicated R&D team exploring new technological frontiers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Industry Partnerships</h3>
                <p className="text-gray-600">Collaborations with leading technology providers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Discover how our AI-powered solutions can drive your business forward
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}