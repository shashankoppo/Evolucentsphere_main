import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Brain,
  Cpu,
  Globe,
  Bot,
  Lock,
  Settings
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions for business automation',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Machine Learning Operations',
      'Neural Networks',
      'Deep Learning'
    ],
    integrations: [
      'Google Cloud AI',
      'TensorFlow',
      'PyTorch',
      'Hugging Face'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Enterprise cloud infrastructure and services',
    features: [
      'Multi-cloud Strategy',
      'Cloud Migration',
      'Serverless Architecture',
      'Container Orchestration',
      'Cloud Security',
      'DevOps Automation'
    ],
    integrations: [
      'Google Cloud Platform',
      'AWS',
      'Azure',
      'Kubernetes'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions for enterprise protection',
    features: [
      'Threat Detection',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Identity Protection',
      'Data Security'
    ],
    integrations: [
      'Google Cloud Security',
      'Security Information and Event Management (SIEM)',
      'Zero Trust Architecture'
    ]
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions for your business',
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Software',
      'API Development',
      'Legacy System Modernization',
      'Quality Assurance'
    ],
    integrations: [
      'WordPress Development',
      'Headless CMS',
      'Progressive Web Apps'
    ]
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights',
    features: [
      'Big Data Processing',
      'Business Intelligence',
      'Data Visualization',
      'Real-time Analytics',
      'Data Warehousing',
      'ETL Solutions'
    ],
    integrations: [
      'Google Analytics',
      'BigQuery',
      'Data Studio',
      'Tableau'
    ]
  },
  {
    icon: Bot,
    title: 'Automation Solutions',
    description: 'Streamline operations with intelligent automation',
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Document Processing',
      'Task Automation',
      'Integration Services',
      'Business Process Management'
    ],
    integrations: [
      'Google Workspace',
      'Zapier',
      'Power Automate',
      'Custom Automation Tools'
    ]
  }
];

const automationTools = [
  {
    name: 'WordPress Integration',
    description: 'Seamless content management and website updates',
    features: [
      'Automated content publishing',
      'Custom plugin development',
      'Theme customization',
      'SEO optimization'
    ]
  },
  {
    name: 'Canva Automation',
    description: 'Streamlined design process for marketing materials',
    features: [
      'Template automation',
      'Brand asset management',
      'Design collaboration',
      'Marketing collateral generation'
    ]
  },
  {
    name: 'Google Workspace',
    description: 'Integrated productivity and collaboration tools',
    features: [
      'Document automation',
      'Email integration',
      'Calendar management',
      'Cloud storage solutions'
    ]
  }
];

export default function ITServices() {
  const [automationStats, setAutomationStats] = React.useState({
    efficiency: '45%',
    costReduction: '30%',
    productivity: '60%'
  });

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="IT Services & Automation Solutions"
        description="Enterprise IT services with integrated automation solutions using WordPress, Canva, and Google Workspace"
        keywords={['IT Services', 'Automation', 'WordPress', 'Canva', 'Google Workspace']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Enterprise IT Services & 
              <span className="text-purple-600"> Automation Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your business with our comprehensive IT services and 
              integrated automation solutions powered by WordPress, Canva, and Google Workspace
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Server className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services & Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Integrations</h4>
                  <ul className="space-y-2">
                    {service.integrations.map((integration, idx) => (
                      <li key={idx} className="flex items-center text-purple-600">
                        <Settings className="h-4 w-4 mr-2" />
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Integrated Automation Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {automationTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Benefits of Our Integrated Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">{automationStats.efficiency}</div>
                <div className="text-gray-600">Efficiency Increase</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">{automationStats.costReduction}</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Network className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">{automationStats.productivity}</div>
                <div className="text-gray-600">Productivity Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our integrated solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                Schedule a Consultation
              </button>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Support
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}