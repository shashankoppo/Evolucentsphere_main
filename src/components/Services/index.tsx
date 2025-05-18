import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Code, Database, Globe, Zap, LineChart, 
  Users, PenTool as Tool, Network, Lock, Cpu, Settings, Workflow, 
  Target, MessageCircle, Phone, ArrowRight, Briefcase, BarChart, 
  Scale, Search, CheckCircle, Server, Bot, FileText, Headphones, 
  Lightbulb, Layers, Rocket, Building, ChartBar, Microscope
} from 'lucide-react';
import SEOHead from '../SEOHead';

const serviceCategories = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform operations with intelligent automation and predictive analytics',
    services: [
      {
        name: 'Predictive Analytics',
        description: 'Forecast trends and make data-driven decisions',
        features: [
          'Advanced ML Models',
          'Real-time Processing',
          'Pattern Recognition',
          'Automated Insights'
        ],
        metrics: {
          accuracy: '99.9%',
          processing: '< 10ms',
          improvement: '45%'
        }
      },
      {
        name: 'Natural Language Processing',
        description: 'Understand and process human language',
        features: [
          'Sentiment Analysis',
          'Text Classification',
          'Language Translation',
          'Intent Recognition'
        ],
        metrics: {
          languages: '100+',
          accuracy: '95%',
          processing: 'Real-time'
        }
      },
      {
        name: 'Computer Vision',
        description: 'Advanced image and video processing',
        features: [
          'Object Detection',
          'Facial Recognition',
          'Scene Analysis',
          'Visual Search'
        ],
        metrics: {
          accuracy: '99.9%',
          speed: '30fps',
          scale: 'Unlimited'
        }
      },
      {
        name: 'Deep Learning',
        description: 'Neural network solutions for complex problems',
        features: [
          'Neural Networks',
          'Transfer Learning',
          'Model Optimization',
          'AutoML'
        ],
        metrics: {
          performance: '100x',
          efficiency: '85%',
          accuracy: '99%'
        }
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable and secure cloud infrastructure for modern enterprises',
    services: [
      {
        name: 'Cloud Migration',
        description: 'Seamless transition to cloud infrastructure',
        features: [
          'Assessment',
          'Planning',
          'Migration',
          'Optimization'
        ],
        metrics: {
          success: '100%',
          downtime: '< 1hr',
          savings: '60%'
        }
      },
      {
        name: 'Cloud Native Development',
        description: 'Modern application development',
        features: [
          'Microservices',
          'Containers',
          'Serverless',
          'DevOps'
        ],
        metrics: {
          deployment: '10x faster',
          scalability: 'Infinite',
          reliability: '99.99%'
        }
      },
      {
        name: 'Multi-cloud Management',
        description: 'Unified cloud resource management',
        features: [
          'Resource Optimization',
          'Cost Management',
          'Performance Monitoring',
          'Security'
        ],
        metrics: {
          savings: '45%',
          efficiency: '80%',
          control: '100%'
        }
      }
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Advanced security solutions for comprehensive protection',
    services: [
      {
        name: 'Threat Detection',
        description: 'Real-time security monitoring',
        features: [
          'AI-powered Detection',
          'Behavioral Analysis',
          'Incident Response',
          'Threat Intelligence'
        ],
        metrics: {
          detection: '< 1min',
          accuracy: '99.9%',
          coverage: '100%'
        }
      },
      {
        name: 'Security Assessment',
        description: 'Comprehensive security evaluation',
        features: [
          'Vulnerability Assessment',
          'Penetration Testing',
          'Risk Analysis',
          'Compliance Audit'
        ],
        metrics: {
          coverage: '100%',
          accuracy: '99.9%',
          reporting: '24h'
        }
      },
      {
        name: 'Data Protection',
        description: 'Advanced data security solutions',
        features: [
          'Encryption',
          'Access Control',
          'DLP',
          'Backup'
        ],
        metrics: {
          protection: '100%',
          compliance: 'Full',
          recovery: '< 1hr'
        }
      }
    ]
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    icon: Zap,
    description: 'End-to-end digital solutions for business modernization',
    services: [
      {
        name: 'Process Automation',
        description: 'Streamline operations with intelligent automation',
        features: [
          'Workflow Automation',
          'RPA',
          'Integration',
          'Analytics'
        ],
        metrics: {
          efficiency: '+75%',
          accuracy: '100%',
          roi: '300%'
        }
      },
      {
        name: 'Digital Strategy',
        description: 'Strategic digital transformation planning',
        features: [
          'Assessment',
          'Roadmap',
          'Implementation',
          'Training'
        ],
        metrics: {
          success: '95%',
          adoption: '85%',
          satisfaction: '98%'
        }
      },
      {
        name: 'Innovation Labs',
        description: 'Cutting-edge technology exploration',
        features: [
          'R&D',
          'Prototyping',
          'Testing',
          'Implementation'
        ],
        metrics: {
          innovation: '10x',
          success: '85%',
          time: '-50%'
        }
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: ChartBar,
    description: 'Transform data into actionable insights',
    services: [
      {
        name: 'Business Intelligence',
        description: 'Comprehensive data analysis solutions',
        features: [
          'Data Visualization',
          'Reporting',
          'Dashboards',
          'KPIs'
        ],
        metrics: {
          insights: '100%',
          accuracy: '99.9%',
          adoption: '95%'
        }
      },
      {
        name: 'Big Data Processing',
        description: 'Large-scale data processing solutions',
        features: [
          'Data Pipeline',
          'ETL',
          'Storage',
          'Processing'
        ],
        metrics: {
          volume: 'Petabytes',
          speed: 'Real-time',
          accuracy: '100%'
        }
      }
    ]
  },
  {
    id: 'research',
    title: 'Research & Development',
    icon: Microscope,
    description: 'Innovative solutions for future challenges',
    services: [
      {
        name: 'Quantum Computing',
        description: 'Next-generation computing solutions',
        features: [
          'Algorithm Development',
          'Optimization',
          'Simulation',
          'Integration'
        ],
        metrics: {
          speed: '1000x',
          problems: 'NP-hard',
          advantage: 'Quantum'
        }
      },
      {
        name: 'Edge Computing',
        description: 'Distributed computing solutions',
        features: [
          'IoT Integration',
          'Real-time Processing',
          'Local Computing',
          'Network Optimization'
        ],
        metrics: {
          latency: '< 1ms',
          reliability: '99.999%',
          coverage: 'Global'
        }
      }
    ]
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0]);
  const whatsappNumber = '+917247558873';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <SEOHead 
        title="Enterprise Services & Solutions | EvolucentSphere"
        description="Transform your business with our comprehensive range of AI, Cloud, Security, and Digital Transformation solutions."
        keywords={[
          'AI Solutions',
          'Cloud Computing',
          'Cybersecurity',
          'Digital Transformation',
          'Data Analytics',
          'Research & Development',
          'Enterprise Solutions',
          'Technology Services'
        ]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Business with
              <span className="text-purple-600"> Enterprise Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Leverage our cutting-edge technologies and expertise to revolutionize your
              business operations and achieve unprecedented growth.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {serviceCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 md:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory.id === category.id
                      ? 'bg-purple-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <category.icon className={`h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-4 ${
                    selectedCategory.id === category.id ? 'text-white' : 'text-purple-600'
                  }`} />
                  <h3 className="text-sm md:text-base font-semibold">{category.title}</h3>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(service.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-4">Connect Instantly</h2>
                  <p className="text-lg opacity-90 mb-4">
                    Get immediate assistance from our expert team. We're here to help you 24/7.
                  </p>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>{whatsappNumber}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      <span>Global Support</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-medium group"
                  >
                    <MessageCircle className="h-6 w-6 mr-2" />
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join the ranks of industry leaders who have revolutionized their operations with our solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                View Case Studies
              </button>
            </motion.div>
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