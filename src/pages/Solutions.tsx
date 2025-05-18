import React from 'react';
import { Brain, Shield, Cloud, Code, Database, Globe, Zap, LineChart, Users, PenTool as Tool, Network, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const solutions = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Transform operations with intelligent automation and predictive analytics',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Neural Networks',
      'Deep Learning',
      'Automated Decision Making'
    ],
    benefits: [
      '45% efficiency increase',
      '30% cost reduction',
      'Enhanced accuracy'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for modern enterprises',
    features: [
      'Multi-cloud Strategy',
      'Cloud Migration',
      'Infrastructure as Code',
      'Serverless Architecture',
      'Container Orchestration',
      'Cloud Security'
    ],
    benefits: [
      '99.99% uptime',
      'Flexible scaling',
      'Cost optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions for comprehensive threat protection',
    features: [
      'Threat Detection',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Identity Protection',
      'Data Security'
    ],
    benefits: [
      'Real-time protection',
      'Regulatory compliance',
      'Risk mitigation'
    ]
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Turn data into actionable insights for informed decision making',
    features: [
      'Big Data Processing',
      'Real-time Analytics',
      'Data Visualization',
      'Business Intelligence',
      'Statistical Analysis',
      'Data Mining'
    ],
    benefits: [
      'Data-driven decisions',
      'Market insights',
      'Performance tracking'
    ]
  },
  {
    icon: Network,
    title: 'Digital Transformation',
    description: 'End-to-end digital solutions for business modernization',
    features: [
      'Process Automation',
      'Digital Strategy',
      'Legacy Modernization',
      'Digital Experience',
      'Innovation Labs',
      'Change Management'
    ],
    benefits: [
      'Improved efficiency',
      'Enhanced agility',
      'Digital readiness'
    ]
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Create exceptional customer experiences across all touchpoints',
    features: [
      'Omnichannel Support',
      'Customer Analytics',
      'Experience Design',
      'Journey Mapping',
      'Sentiment Analysis',
      'Personalization'
    ],
    benefits: [
      'Higher satisfaction',
      'Customer loyalty',
      'Increased retention'
    ]
  }
];

const industries = [
  {
    name: 'Financial Services',
    solutions: [
      'Risk Management',
      'Fraud Detection',
      'Trading Systems',
      'Payment Processing'
    ]
  },
  {
    name: 'Healthcare',
    solutions: [
      'Patient Care Analytics',
      'Medical Imaging AI',
      'Healthcare IoT',
      'Compliance Solutions'
    ]
  },
  {
    name: 'Manufacturing',
    solutions: [
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Quality Control AI',
      'IoT Integration'
    ]
  },
  {
    name: 'Retail',
    solutions: [
      'Customer Analytics',
      'Inventory Management',
      'Personalization',
      'E-commerce Solutions'
    ]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Solutions | Enterprise Technology Solutions"
        description="Discover our comprehensive range of enterprise technology solutions designed to transform your business and drive growth."
        keywords={['Enterprise Solutions', 'Digital Transformation', 'AI Solutions', 'Cloud Computing', 'Cybersecurity']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions for 
              <span className="text-purple-600"> Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with our comprehensive suite of technology solutions
              designed to drive innovation, efficiency, and growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Enterprise Solutions</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">30+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <LineChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">45%</div>
                <div className="text-gray-600">Avg. Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Solutions Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <solution.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-green-600">
                        <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2"></span>
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

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Tool className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                Thorough analysis of your current systems and requirements
              </p>
            </div>
            <div className="text-center">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Custom solution development and integration
              </p>
            </div>
            <div className="text-center">
              <Lock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">
                Rigorous testing and quality assurance
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">
                Seamless deployment and ongoing support
              </p>
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
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}