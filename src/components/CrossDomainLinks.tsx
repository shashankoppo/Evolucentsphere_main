import React from 'react';
import { ExternalLink, Building, Users, Brain, Briefcase, Globe, Cloud, Shield, Zap, Code, Database, BarChart, Network, Settings, Bot } from 'lucide-react';

interface CrossDomainLink {
  name: string;
  url: string;
  description: string;
  icon: React.ElementType;
  category: 'parent' | 'division' | 'subdivision';
  keywords: string[];
  parentDivision?: string;
}

// Comprehensive EvolucentSphere ecosystem links
const crossDomainLinks: CrossDomainLink[] = [
  // Parent Company
  {
    name: 'EvolucentSphere Corporate',
    url: 'https://evolucentsphere.com',
    description: 'Corporate headquarters and global operations center',
    icon: Globe,
    category: 'parent',
    keywords: [
      'EvolucentSphere', 'Corporate Headquarters', 'Global Operations', 'Enterprise Solutions',
      'Multi-Division Services', 'Business Transformation', 'Technology Leadership',
      'Innovation Hub', 'Strategic Consulting', 'Digital Excellence', 'EdgeFeed EdTech'
    ]
  },

  // Main Divisions
  {
    name: 'ELSxTech',
    url: 'https://tech.elsxglobal.cloud',
    description: 'Comprehensive technology solutions and digital innovation',
    icon: Building,
    category: 'division',
    keywords: [
      'Technology Solutions', 'AI Development', 'Cloud Computing', 'Software Development',
      'DevOps Services', 'Cybersecurity', 'Digital Transformation', 'Enterprise IT',
      'Innovation Labs', 'Technical Consulting'
    ]
  },
  {
    name: 'ELSxBPO',
    url: 'https://bpo.elsxglobal.cloud',
    description: 'Business process outsourcing and customer support excellence',
    icon: Users,
    category: 'division',
    keywords: [
      'BPO Services', 'Customer Support', 'Contact Center Solutions', 'Back Office Operations',
      'Process Outsourcing', 'Customer Experience', 'Multilingual Support', 'Quality Assurance',
      'Performance Analytics', 'Service Excellence'
    ]
  },
  {
    name: 'ELSxKPO',
    url: 'https://kpo.elsxglobal.cloud',
    description: 'Knowledge process outsourcing and advanced analytics',
    icon: Brain,
    category: 'division',
    keywords: [
      'KPO Services', 'Research Analytics', 'Business Intelligence', 'Data Management',
      'Knowledge Services', 'Market Research', 'Financial Analysis', 'Legal Process Outsourcing',
      'Healthcare Analytics', 'Investment Research'
    ]
  },
  {
    name: 'ELSxConsultancy',
    url: 'https://consultancy.elsxglobal.cloud',
    description: 'Strategic consulting and business transformation',
    icon: Briefcase,
    category: 'division',
    keywords: [
      'Business Consulting', 'Digital Transformation', 'ESG Consulting', 'Lean Six Sigma',
      'Strategy Consulting', 'Management Consulting', 'Process Optimization',
      'Change Management', 'Performance Improvement', 'Operational Excellence'
    ]
  },
  {
    name: 'EdgeFeed',
    url: 'https://edgefeed.space',
    description: 'Revolutionary EdTech platform for AI-powered learning and education',
    icon: GraduationCap,
    category: 'division',
    keywords: [
      'EdTech Platform', 'Educational Technology', 'AI-Powered Learning', 'Learning Management System',
      'Educational Content Creation', 'Learning Analytics', 'Corporate Training', 'Online Learning',
      'Digital Education', 'Adaptive Learning', 'Personalized Learning', 'E-Learning Solutions'
    ]
  },

  // ELSxTech Sub-Divisions
  {
    name: 'Cloud & Infrastructure',
    url: 'https://cloud.elsxglobal.cloud',
    description: 'Enterprise cloud solutions and infrastructure management',
    icon: Cloud,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform', 'Multi-Cloud Strategy',
      'Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Container Orchestration',
      'Kubernetes', 'Docker', 'DevOps', 'CI/CD Pipeline', 'Cloud Security'
    ]
  },
  {
    name: 'Cybersecurity Solutions',
    url: 'https://security.elsxglobal.cloud',
    description: 'Advanced cybersecurity and threat protection services',
    icon: Shield,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Cybersecurity', 'Information Security', 'Network Security', 'Data Protection',
      'Threat Detection', 'Incident Response', 'Security Monitoring', 'SIEM',
      'Penetration Testing', 'Vulnerability Assessment', 'Compliance', 'Zero Trust'
    ]
  },
  {
    name: 'Digital Transformation',
    url: 'https://digital.elsxglobal.cloud',
    description: 'Strategic digital transformation consulting and implementation',
    icon: Zap,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Digital Transformation', 'Business Transformation', 'Process Automation',
      'Change Management', 'Digital Strategy', 'Innovation Consulting',
      'Workflow Optimization', 'Digital Adoption', 'Technology Roadmap'
    ]
  },
  {
    name: 'Software Development',
    url: 'https://software.elsxglobal.cloud',
    description: 'Custom software development and system integration',
    icon: Code,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Software Development', 'Custom Applications', 'Web Development', 'Mobile Apps',
      'API Integration', 'System Integration', 'Legacy Modernization', 'Full Stack Development',
      'Quality Assurance', 'Software Architecture'
    ]
  },
  {
    name: 'Data, AI & Analytics',
    url: 'https://ai.elsxglobal.cloud',
    description: 'Artificial intelligence, machine learning, and data analytics',
    icon: Brain,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Business Intelligence',
      'Predictive Analytics', 'Deep Learning', 'Natural Language Processing', 'Computer Vision',
      'Big Data', 'Data Science', 'MLOps', 'Neural Networks'
    ]
  },
  {
    name: 'Digital Marketing',
    url: 'https://digitalmarketing.elsxglobal.cloud',
    description: 'Digital marketing solutions and customer experience optimization',
    icon: BarChart,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Digital Marketing', 'Customer Experience', 'Marketing Automation', 'SEO', 'SEM',
      'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'PPC',
      'Marketing Analytics', 'Conversion Optimization', 'Brand Strategy'
    ]
  },
  {
    name: 'IoT & Emerging Tech',
    url: 'https://emergingtech.elsxglobal.cloud',
    description: 'Internet of Things and cutting-edge technology solutions',
    icon: Network,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Internet of Things', 'IoT', 'Blockchain', 'AR/VR', 'Edge Computing',
      'Industry 4.0', 'Smart Cities', 'Connected Devices', 'Emerging Technologies',
      'Innovation Labs', 'Future Tech', 'Digital Twins'
    ]
  },
  {
    name: 'Managed IT Services',
    url: 'https://managedit.elsxglobal.cloud',
    description: 'Comprehensive managed IT services and support',
    icon: Settings,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Managed IT Services', 'IT Support', 'Help Desk', 'Network Management',
      'System Administration', 'Remote Monitoring', 'IT Consulting', 'Technology Support',
      'Infrastructure Management', '24/7 Support', 'Proactive Maintenance'
    ]
  },
  {
    name: 'Enterprise Software',
    url: 'https://enterprise.elsxglobal.cloud',
    description: 'Enterprise software solutions and ERP systems',
    icon: Database,
    category: 'subdivision',
    parentDivision: 'ELSxTech',
    keywords: [
      'Enterprise Software', 'ERP', 'CRM', 'Business Applications', 'Enterprise Applications',
      'Workflow Management', 'Document Management', 'Business Intelligence',
      'Enterprise Integration', 'SaaS Solutions', 'Cloud Applications'
    ]
  }
];

interface CrossDomainLinksProps {
  category?: 'all' | 'parent' | 'division' | 'subdivision';
  parentDivision?: string;
  layout?: 'grid' | 'list' | 'inline';
  showKeywords?: boolean;
  className?: string;
  limit?: number;
}

export default function CrossDomainLinks({ 
  category = 'all', 
  parentDivision,
  layout = 'grid', 
  showKeywords = false,
  className = '',
  limit
}: CrossDomainLinksProps) {
  let filteredLinks = crossDomainLinks;

  // Filter by category
  if (category !== 'all') {
    filteredLinks = filteredLinks.filter(link => link.category === category);
  }

  // Filter by parent division for subdivisions
  if (parentDivision) {
    filteredLinks = filteredLinks.filter(link => link.parentDivision === parentDivision);
  }

  // Apply limit if specified
  if (limit) {
    filteredLinks = filteredLinks.slice(0, limit);
  }

  const baseClasses = {
    grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-4',
    inline: 'flex flex-wrap gap-4'
  };

  const itemClasses = {
    grid: 'bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1',
    list: 'bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4',
    inline: 'bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2'
  };

  return (
    <div className={`${baseClasses[layout]} ${className}`}>
      {filteredLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${itemClasses[layout]} group`}
          aria-label={`Visit ${link.name} - ${link.description}`}
        >
          <div className={`${layout === 'grid' ? 'text-center' : 'flex-shrink-0'}`}>
            <div className={`${layout === 'inline' ? 'h-5 w-5' : 'h-10 w-10'} ${layout === 'grid' ? 'mx-auto mb-4' : ''} bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-200 transition-colors`}>
              <link.icon className={`${layout === 'inline' ? 'h-3 w-3' : 'h-6 w-6'}`} />
            </div>
          </div>
          
          <div className={`${layout === 'grid' ? 'text-center' : 'flex-grow'}`}>
            <div className="flex items-center justify-between">
              <h3 className={`${layout === 'inline' ? 'text-sm' : 'text-lg'} font-bold text-gray-900 group-hover:text-purple-600 transition-colors`}>
                {link.name}
              </h3>
              <ExternalLink className={`${layout === 'inline' ? 'h-3 w-3' : 'h-4 w-4'} text-gray-400 group-hover:text-purple-600 transition-colors ${layout === 'grid' ? 'ml-2' : ''}`} />
            </div>
            
            {layout !== 'inline' && (
              <p className="text-gray-600 mt-2">{link.description}</p>
            )}
            
            {showKeywords && layout === 'grid' && (
              <div className="mt-3 flex flex-wrap gap-1 justify-center">
                {link.keywords.slice(0, 4).map((keyword, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

// Specialized components for different use cases
export const DivisionLinks = (props: Omit<CrossDomainLinksProps, 'category'>) => (
  <CrossDomainLinks {...props} category="division" />
);

export const SubdivisionLinks = (props: Omit<CrossDomainLinksProps, 'category'>) => (
  <CrossDomainLinks {...props} category="subdivision" />
);

export const ParentCompanyLink = (props: Omit<CrossDomainLinksProps, 'category'>) => (
  <CrossDomainLinks {...props} category="parent" />
);

export const InlineDivisionLinks = () => (
  <CrossDomainLinks category="division" layout="inline" className="justify-center" />
);

export const ELSxTechSubdivisions = () => (
  <CrossDomainLinks category="subdivision" parentDivision="ELSxTech" layout="grid" showKeywords={true} />
);

// SEO-optimized footer component with comprehensive cross-domain links
export const SEOFooterLinks = () => (
  <div className="bg-gray-50 py-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Explore the Complete EvolucentSphere Ecosystem
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Discover our comprehensive suite of business solutions across technology, 
          outsourcing, and strategic consulting divisions.
        </p>
      </div>
      
      {/* Parent Company */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Corporate Headquarters</h3>
        <ParentCompanyLink layout="grid" showKeywords={true} />
      </div>

      {/* Main Divisions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Business Divisions</h3>
        <DivisionLinks layout="grid" showKeywords={true} />
      </div>

      {/* ELSxTech Subdivisions */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">ELSxTech Specialized Services</h3>
        <ELSxTechSubdivisions />
      </div>
      
      <div className="text-center border-t pt-8">
        <p className="text-gray-600 text-lg">
          <strong>EvolucentSphere Pvt. Ltd.</strong> - Delivering comprehensive business solutions 
          across multiple domains and industries worldwide since 2009.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span>🌍 Global Presence</span>
          <span>🏆 Industry Leadership</span>
          <span>🚀 Innovation Excellence</span>
          <span>🤝 Trusted Partnership</span>
        </div>
      </div>
    </div>
  </div>
);

// Export the links data for use in other components
export { crossDomainLinks };