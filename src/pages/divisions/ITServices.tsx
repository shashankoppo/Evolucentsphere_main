import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Cloud, Shield, Code, Database, Network, Brain, Bot,
  Globe, Cpu, Settings, MessageCircle, Users, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
  const [automationStats] = React.useState({
    efficiency: '45%',
    costReduction: '30%',
    productivity: '60%'
  });

  return (
    <div>
      <SEOHead 
        title="IT Services & Automation Solutions"
        description="Enterprise IT services with integrated automation solutions using WordPress, Canva, and Google Workspace"
        keywords={['IT Services', 'Automation', 'WordPress', 'Canva', 'Google Workspace']}
      />

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">
              IT Services
            </motion.span>
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Enterprise IT Services & <span className="gradient-text">Automation Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-ink-secondary max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your business with our comprehensive IT services and integrated automation solutions powered by WordPress, Canva, and Google Workspace
            </motion.p>

            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <div className="card p-6 text-center">
                <Server className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-brand-500">100+</div>
                <div className="text-sm text-ink-secondary">Enterprise Clients</div>
              </div>
              <div className="card p-6 text-center">
                <Globe className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-brand-500">24/7</div>
                <div className="text-sm text-ink-secondary">Support</div>
              </div>
              <div className="card p-6 text-center">
                <Shield className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-brand-500">99.9%</div>
                <div className="text-sm text-ink-secondary">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
              Our Services & Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-10 w-10 text-brand-500 mb-5" />
                <h3 className="text-lg font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-sm text-ink-secondary mb-5">{service.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-ink mb-2">Key Features</h4>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-ink-secondary">
                        <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-ink mb-2">Integrations</h4>
                  <ul className="space-y-1.5">
                    {service.integrations.map((integration, idx) => (
                      <li key={idx} className="flex items-center text-sm text-brand-500">
                        <Settings className="h-3.5 w-3.5 mr-2 shrink-0" />
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
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Automation</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
              Integrated Automation Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {automationTools.map((tool, index) => (
              <motion.div
                key={index}
                className="card p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-ink mb-3">{tool.name}</h3>
                <p className="text-sm text-ink-secondary mb-5">{tool.description}</p>
                <ul className="space-y-1.5">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-ink-secondary">
                      <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2 shrink-0"></span>
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
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Results</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
              Benefits of Our Integrated Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <Cpu className="h-10 w-10 text-brand-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-500 mb-1">{automationStats.efficiency}</div>
              <div className="text-sm text-ink-secondary">Efficiency Increase</div>
            </div>
            <div className="card p-6 text-center">
              <Database className="h-10 w-10 text-brand-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-500 mb-1">{automationStats.costReduction}</div>
              <div className="text-sm text-ink-secondary">Cost Reduction</div>
            </div>
            <div className="card p-6 text-center">
              <Network className="h-10 w-10 text-brand-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-500 mb-1">{automationStats.productivity}</div>
              <div className="text-sm text-ink-secondary">Productivity Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-brand-100 mb-8">
              Let's discuss how our integrated solutions can help you achieve your business goals
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold text-sm rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Support
                </a>
                <a
                  href="https://wa.me/0987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 text-white font-semibold text-sm rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Users className="h-4 w-4" />
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
