export const config = {
  app: {
    name: 'EvolucentSphere Pvt. Ltd.',
    division: 'ELSxGlobal (Flagship Division)',
    description: 'Transformative Business Solutions & Technology Services',
    url: 'https://evolucentsphere.com',
    divisionUrl: 'https://elsxglobal.cloud',
    contact: {
      phone: '+91 (724) 755-8873',
      phone2: '+91 (877) 042-2622',
      email: 'contact@evolucentsphere.com',
      supportEmail: 'support@evolucentsphere.com',
      address: {
        street: '3223/4A Tech Park',
        city: 'Bangalore',
        state: 'Karnataka',
        zip: '560001',
        country: 'India'
      }
    },
    social: {
      twitter: 'https://twitter.com/evolucentsphere',
      linkedin: 'https://linkedin.com/company/evolucentsphere',
      facebook: 'https://facebook.com/evolucentsphere',
      instagram: 'https://instagram.com/evolucentsphere',
      youtube: 'https://youtube.com/@evolucentsphere',
      github: 'https://github.com/evolucentsphere'
    },
    locations: [
      'Jabalpur, India',
      'Indore, India',
      'Pune, India',
      'Eindhoven, Netherlands',
      'Chicago, United States'
    ]
  },

  // Enhanced EvolucentSphere Ecosystem Structure
  ecosystem: {
    parent: {
      name: 'EvolucentSphere Pvt. Ltd.',
      url: 'https://evolucentsphere.com',
      description: 'Global leader in business transformation and technology solutions',
      founded: '2009',
      headquarters: 'Bangalore, India'
    },
    divisions: {
      elsxglobal: {
        name: 'ELSxGlobal (Flagship Division)',
        url: 'https://elsxglobal.cloud',
        description: 'Our flagship division providing comprehensive business solutions',
        subdivisions: {
          tech: {
            name: 'ELSxTech',
            url: 'https://tech.elsxglobal.cloud',
            description: 'Technology solutions and digital innovation',
            services: [
              {
                name: 'Cloud & Infrastructure',
                url: 'https://cloud.elsxglobal.cloud',
                path: '/it-services/cloud-infrastructure'
              },
              {
                name: 'Cybersecurity Solutions',
                url: 'https://security.elsxglobal.cloud',
                path: '/it-services/cybersecurity'
              },
              {
                name: 'Digital Transformation',
                url: 'https://digital.elsxglobal.cloud',
                path: '/it-services/digital-transformation'
              },
              {
                name: 'Software Development',
                url: 'https://software.elsxglobal.cloud',
                path: '/it-services/software-development'
              },
              {
                name: 'Data, AI & Analytics',
                url: 'https://ai.elsxglobal.cloud',
                path: '/it-services/ai-analytics'
              },
              {
                name: 'Digital Marketing',
                url: 'https://digitalmarketing.elsxglobal.cloud',
                path: '/it-services/digital-marketing'
              },
              {
                name: 'IoT & Emerging Tech',
                url: 'https://emergingtech.elsxglobal.cloud',
                path: '/it-services/iot-emerging-tech'
              },
              {
                name: 'Managed IT Services',
                url: 'https://managedit.elsxglobal.cloud',
                path: '/it-services/managed-it'
              },
              {
                name: 'Enterprise Software',
                url: 'https://enterprise.elsxglobal.cloud',
                path: '/it-services/enterprise-software'
              }
            ]
          },
          bpo: {
            name: 'ELSxBPO',
            url: 'https://bpo.elsxglobal.cloud',
            description: 'Business process outsourcing and customer support'
          },
          kpo: {
            name: 'ELSxKPO',
            url: 'https://kpo.elsxglobal.cloud',
            description: 'Knowledge process outsourcing and analytics'
          },
          consultancy: {
            name: 'ELSxConsultancy',
            url: 'https://consultancy.elsxglobal.cloud',
            description: 'Strategic consulting and business transformation'
          }
        }
      }
    }
  },

  // Enhanced Products Configuration
  products: {
    bpo: {
      title: 'BPO Solutions',
      products: [
        {
          name: 'ContactPro Elite',
          description: 'Enterprise-grade contact center solution with advanced AI capabilities',
          features: [
            'Omnichannel Support Integration',
            'AI-Powered Chatbots & Virtual Agents',
            'Real-time Analytics Dashboard',
            'Quality Monitoring & Scoring',
            'Predictive Routing',
            'Sentiment Analysis',
            'Performance Analytics',
            'Custom Reporting'
          ],
          benefits: [
            '45% reduction in response time',
            '98% customer satisfaction rate',
            '30% cost reduction'
          ],
          pricing: 'Enterprise',
          industries: ['Banking', 'Healthcare', 'E-commerce', 'Technology']
        },
        {
          name: 'BackOfficePro Suite',
          description: 'Comprehensive back-office automation and management platform',
          features: [
            'Intelligent Process Automation',
            'Document Management System',
            'Workflow Optimization Engine',
            'Performance Analytics',
            'Compliance Management',
            'Resource Allocation',
            'Task Prioritization',
            'Integration APIs'
          ],
          benefits: [
            '60% faster processing time',
            '40% reduction in errors',
            'Improved compliance'
          ],
          pricing: 'Scalable',
          industries: ['Manufacturing', 'Finance', 'Insurance', 'Government']
        },
        {
          name: 'DataEntryPro AI',
          description: 'AI-powered data entry and processing system',
          features: [
            'Advanced OCR Technology',
            'Multi-format Data Validation',
            'Batch Processing Capabilities',
            'Error Detection & Correction',
            'Template Management',
            'Data Extraction',
            'Quality Assurance',
            'Audit Trails'
          ],
          benefits: [
            '99.9% accuracy rate',
            '75% cost reduction',
            'Real-time processing'
          ],
          pricing: 'Volume-based',
          industries: ['Healthcare', 'Legal', 'Real Estate', 'Education']
        }
      ]
    },
    kpo: {
      title: 'KPO Products',
      products: [
        {
          name: 'AnalyticsPro 360',
          description: 'Comprehensive analytics and research platform',
          features: [
            'Market Research Tools',
            'Financial Analysis Models',
            'Predictive Analytics',
            'Research Report Generation',
            'Data Visualization',
            'Trend Analysis',
            'Competitive Intelligence',
            'Custom Dashboards'
          ],
          benefits: [
            'Data-driven decisions',
            'Strategic insights',
            'Market advantage'
          ],
          pricing: 'Professional',
          industries: ['Investment Banking', 'Consulting', 'Private Equity', 'Pharmaceuticals']
        },
        {
          name: 'LegalPro Suite',
          description: 'Advanced legal process management system',
          features: [
            'Contract Analysis Engine',
            'Legal Research Database',
            'Case Management System',
            'Compliance Tracking',
            'Document Generation',
            'E-Discovery Tools',
            'Risk Assessment',
            'Legal Analytics'
          ],
          benefits: [
            '50% faster research',
            'Enhanced compliance',
            'Risk mitigation'
          ],
          pricing: 'Enterprise',
          industries: ['Law Firms', 'Corporate Legal', 'Government', 'Insurance']
        },
        {
          name: 'ResearchPro AI',
          description: 'AI-powered research and analysis platform',
          features: [
            'Advanced Data Mining',
            'Statistical Analysis Tools',
            'Automated Report Generation',
            'Research Database Integration',
            'Pattern Recognition',
            'Hypothesis Testing',
            'Citation Management',
            'Collaboration Tools'
          ],
          benefits: [
            'Accelerated research',
            'Higher accuracy',
            'Comprehensive analysis'
          ],
          pricing: 'Academic/Enterprise',
          industries: ['Academia', 'Pharmaceuticals', 'Market Research', 'Think Tanks']
        }
      ]
    },
    it: {
      title: 'IT Products',
      products: [
        {
          name: 'CloudPro Enterprise',
          description: 'Enterprise cloud management and optimization platform',
          features: [
            'Multi-cloud Management Console',
            'Resource Optimization Engine',
            'Security Controls & Compliance',
            'Cost Management & Analysis',
            'Performance Monitoring',
            'Automated Scaling',
            'Disaster Recovery',
            'Cloud Migration Tools'
          ],
          benefits: [
            '40% cost savings',
            '99.99% uptime',
            'Enhanced security'
          ],
          pricing: 'Enterprise',
          industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing']
        },
        {
          name: 'SecurePro Shield',
          description: 'Advanced cybersecurity and threat protection system',
          features: [
            'Real-time Threat Detection',
            'Network Security Monitoring',
            'Compliance Management',
            'Security Analytics',
            'Incident Response',
            'Vulnerability Assessment',
            'Access Control',
            'Encryption Management'
          ],
          benefits: [
            'Proactive protection',
            'Regulatory compliance',
            'Reduced risk'
          ],
          pricing: 'Tiered',
          industries: ['Banking', 'Government', 'Healthcare', 'Critical Infrastructure']
        },
        {
          name: 'DevPro Accelerate',
          description: 'Comprehensive DevOps automation suite',
          features: [
            'CI/CD Pipeline Automation',
            'Code Analysis & Quality',
            'Deployment Automation',
            'Performance Monitoring',
            'Container Management',
            'Infrastructure as Code',
            'Release Management',
            'Testing Automation'
          ],
          benefits: [
            '70% faster deployment',
            'Improved quality',
            'Reduced errors'
          ],
          pricing: 'Professional',
          industries: ['Software Development', 'Technology', 'Startups', 'Enterprise']
        }
      ]
    }
  },

  // Enhanced Services Configuration
  services: {
    bpo: {
      title: 'Business Process Outsourcing',
      categories: [
        {
          name: 'Customer Experience',
          services: [
            'Omnichannel Customer Support',
            'Technical Support Services',
            'Customer Retention Programs',
            'Social Media Management',
            'Quality Monitoring & Training',
            'Customer Feedback Analysis',
            'Performance Optimization',
            'Customer Journey Mapping'
          ]
        },
        {
          name: 'Back Office Operations',
          services: [
            'Data Entry & Management',
            'Document Processing',
            'Order Processing & Fulfillment',
            'Inventory Management',
            'Claims Processing',
            'Records Management',
            'Quality Assurance',
            'Process Documentation'
          ]
        },
        {
          name: 'Financial Operations',
          services: [
            'Accounts Payable/Receivable',
            'Bookkeeping Services',
            'Financial Reporting',
            'Payroll Processing',
            'Tax Preparation',
            'Audit Support',
            'Financial Analysis',
            'Budget Management'
          ]
        }
      ]
    },
    kpo: {
      title: 'Knowledge Process Outsourcing',
      categories: [
        {
          name: 'Financial Services',
          services: [
            'Investment Research & Analysis',
            'Market Research & Intelligence',
            'Risk Assessment & Management',
            'Portfolio Management',
            'Financial Modeling',
            'Equity Research',
            'Credit Analysis',
            'Valuation Services'
          ]
        },
        {
          name: 'Legal Services',
          services: [
            'Legal Research & Analysis',
            'Contract Management',
            'Intellectual Property Services',
            'Compliance Support',
            'Legal Documentation',
            'Patent Research',
            'Regulatory Analysis',
            'Legal Process Optimization'
          ]
        },
        {
          name: 'Research & Analytics',
          services: [
            'Business Intelligence',
            'Data Analytics',
            'Market Research',
            'Competitive Analysis',
            'Statistical Analysis',
            'Predictive Modeling',
            'Research Report Generation',
            'Industry Analysis'
          ]
        }
      ]
    },
    it: {
      title: 'IT Services',
      categories: [
        {
          name: 'Software Development',
          services: [
            'Custom Application Development',
            'Web & Mobile Development',
            'Cloud Applications',
            'Enterprise Software Solutions',
            'API Development & Integration',
            'Legacy System Modernization',
            'Quality Assurance',
            'Software Maintenance'
          ]
        },
        {
          name: 'Cloud Services',
          services: [
            'Cloud Migration & Strategy',
            'Cloud Infrastructure Management',
            'Cloud Security Solutions',
            'Multi-cloud Management',
            'Cloud Cost Optimization',
            'Cloud Native Development',
            'Disaster Recovery',
            'Performance Monitoring'
          ]
        },
        {
          name: 'Cybersecurity',
          services: [
            'Security Assessment & Audit',
            'Threat Detection & Response',
            'Security Operations Center',
            'Compliance Management',
            'Identity & Access Management',
            'Network Security',
            'Data Protection',
            'Security Training'
          ]
        }
      ]
    },
    consultancy: {
      title: 'Business Consultancy',
      categories: [
        {
          name: 'Digital Transformation',
          services: [
            'Digital Strategy Development',
            'Technology Roadmap Planning',
            'Process Digitization',
            'Change Management',
            'Digital Maturity Assessment',
            'Innovation Strategy',
            'Digital Workforce Planning',
            'Technology Selection'
          ]
        },
        {
          name: 'Technology Consulting',
          services: [
            'IT Strategy & Planning',
            'Architecture Assessment',
            'Technology Stack Optimization',
            'Security Strategy',
            'Infrastructure Planning',
            'Performance Optimization',
            'Vendor Selection',
            'Cost Optimization'
          ]
        },
        {
          name: 'Business Strategy',
          services: [
            'Business Model Innovation',
            'Market Entry Strategy',
            'Operational Excellence',
            'Growth Strategy',
            'Risk Management',
            'Performance Improvement',
            'Organization Design',
            'Strategic Planning'
          ]
        }
      ]
    }
  },

  // Industry Focus Areas
  industries: {
    primary: [
      {
        name: 'Banking & Financial Services',
        description: 'Comprehensive solutions for financial institutions',
        services: ['Digital Banking', 'Risk Management', 'Compliance', 'Customer Analytics'],
        keywords: ['Fintech', 'Digital Banking', 'Risk Management', 'Regulatory Compliance']
      },
      {
        name: 'Healthcare & Life Sciences',
        description: 'Technology solutions for healthcare providers',
        services: ['EHR Systems', 'Telemedicine', 'Healthcare Analytics', 'Compliance'],
        keywords: ['Healthcare IT', 'Medical Technology', 'Patient Care', 'HIPAA Compliance']
      },
      {
        name: 'Manufacturing & Industrial',
        description: 'Industry 4.0 and smart manufacturing solutions',
        services: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain', 'Quality Control'],
        keywords: ['Industry 4.0', 'Smart Manufacturing', 'IoT', 'Automation']
      },
      {
        name: 'Retail & E-commerce',
        description: 'Digital commerce and customer experience solutions',
        services: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Marketing'],
        keywords: ['E-commerce', 'Digital Commerce', 'Customer Experience', 'Omnichannel']
      }
    ],
    secondary: [
      'Insurance',
      'Automotive',
      'Energy & Utilities',
      'Government',
      'Education',
      'Real Estate',
      'Telecommunications',
      'Media & Entertainment'
    ]
  },

  // Technology Stack
  technologies: {
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Multi-Cloud'],
    development: ['React', 'Node.js', 'Python', 'Java', '.NET'],
    data: ['Big Data', 'Analytics', 'AI/ML', 'Business Intelligence'],
    security: ['Cybersecurity', 'Identity Management', 'Compliance', 'Risk Management'],
    emerging: ['IoT', 'Blockchain', 'AR/VR', 'Edge Computing']
  },

  // Company Metrics
  metrics: {
    founded: '2009',
    employees: '10,000+',
    clients: '500+',
    countries: '30+',
    uptime: '99.9%',
    satisfaction: '98%',
    growth: '38% YoY'
  }
};