import React from 'react';
import { ExternalLink, Building, Users, Brain, Briefcase, Globe } from 'lucide-react';

interface CrossDomainLink {
  name: string;
  url: string;
  description: string;
  icon: React.ElementType;
  category: 'division' | 'parent' | 'service';
  keywords: string[];
}

const crossDomainLinks: CrossDomainLink[] = [
  {
    name: 'EvolucentSphere Corporate',
    url: 'https://evolucentsphere.com',
    description: 'Corporate headquarters and global operations',
    icon: Globe,
    category: 'parent',
    keywords: ['Corporate', 'Global Operations', 'Enterprise Solutions', 'Multi-Division Services']
  },
  {
    name: 'ELSxTech',
    url: 'https://tech.elsxglobal.cloud',
    description: 'AI-driven software development and cloud solutions',
    icon: Building,
    category: 'division',
    keywords: ['AI Development', 'Cloud Solutions', 'Software Development', 'DevOps', 'Cybersecurity']
  },
  {
    name: 'ELSxBPO',
    url: 'https://bpo.elsxglobal.cloud',
    description: 'Business process outsourcing and customer support',
    icon: Users,
    category: 'division',
    keywords: ['BPO Services', 'Customer Support', 'Contact Center', 'Back Office Operations']
  },
  {
    name: 'ELSxKPO',
    url: 'https://kpo.elsxglobal.cloud',
    description: 'Knowledge process outsourcing and analytics',
    icon: Brain,
    category: 'division',
    keywords: ['KPO Services', 'Research Analytics', 'Business Intelligence', 'Data Management']
  },
  {
    name: 'ELSxConsultancy',
    url: 'https://consultancy.elsxglobal.cloud',
    description: 'Strategic consulting and digital transformation',
    icon: Briefcase,
    category: 'division',
    keywords: ['Business Consulting', 'Digital Transformation', 'ESG Consulting', 'Lean Six Sigma']
  }
];

interface CrossDomainLinksProps {
  category?: 'all' | 'division' | 'parent' | 'service';
  layout?: 'grid' | 'list' | 'inline';
  showKeywords?: boolean;
  className?: string;
}

export default function CrossDomainLinks({ 
  category = 'all', 
  layout = 'grid', 
  showKeywords = false,
  className = '' 
}: CrossDomainLinksProps) {
  const filteredLinks = category === 'all' 
    ? crossDomainLinks 
    : crossDomainLinks.filter(link => link.category === category);

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
                {link.keywords.slice(0, 3).map((keyword, idx) => (
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

export const ParentCompanyLink = (props: Omit<CrossDomainLinksProps, 'category'>) => (
  <CrossDomainLinks {...props} category="parent" />
);

export const InlineDivisionLinks = () => (
  <CrossDomainLinks category="division" layout="inline" className="justify-center" />
);

// SEO-optimized footer component with cross-domain links
export const SEOFooterLinks = () => (
  <div className="bg-gray-50 py-8">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Explore Our Complete Ecosystem
      </h2>
      <CrossDomainLinks layout="grid" showKeywords={true} />
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Part of the EvolucentSphere family - delivering comprehensive business solutions across multiple domains and industries worldwide.
        </p>
      </div>
    </div>
  </div>
);