import { config } from './config';

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  description?: string;
  children?: NavItem[];
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    path: '/',
    description: 'Welcome to ELSxGlobal',
  },
  {
    label: 'About',
    path: '/about',
    description: 'Company story & mission',
  },
  {
    label: 'Services',
    path: '/services',
    description: 'All service offerings',
    children: [
      {
        label: 'IT Services',
        path: '/it-services',
        description: 'Technology solutions',
        children: [
          { label: 'Cloud & Infrastructure', path: '/it-services/cloud-infrastructure' },
          { label: 'Cybersecurity', path: '/it-services/cybersecurity' },
          { label: 'Software Development', path: '/it-services/software-development' },
          { label: 'Data & AI Analytics', path: '/it-services/ai-analytics' },
          { label: 'Digital Transformation', path: '/it-services/digital-transformation' },
          { label: 'Digital Experience', path: '/it-services/digital-marketing' },
          { label: 'IoT & Emerging Tech', path: '/it-services/iot-emerging-tech' },
          { label: 'Managed IT Services', path: '/it-services/managed-it' },
          { label: 'Enterprise Software', path: '/it-services/enterprise-software' },
        ],
      },
      {
        label: 'BPO Services',
        path: '/bpo-services',
        description: 'Business process outsourcing',
      },
      {
        label: 'KPO Services',
        path: '/kpo-services',
        description: 'Knowledge process outsourcing',
      },
      {
        label: 'Consultancy',
        path: '/consultancy',
        description: 'Strategic consulting',
      },
    ],
  },
  {
    label: 'Industries',
    path: '/industries',
    description: 'Industry-specific solutions',
    children: [
      { label: 'Banking & Finance', path: '/industries/banking' },
      { label: 'Healthcare', path: '/industries/healthcare' },
      { label: 'Manufacturing', path: '/industries/manufacturing' },
      { label: 'Retail & E-commerce', path: '/industries/retail' },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    description: 'Knowledge & insights',
    children: [
      { label: 'Blog', path: '/blog' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Technologies', path: '/technologies' },
      { label: 'Investor Relations', path: '/investor-relations' },
    ],
  },
  {
    label: 'Company',
    path: '/company',
    description: 'Corporate info',
    children: [
      { label: 'Careers', path: '/careers' },
      { label: 'Innovation Lab', path: '/ai-lab' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Investor Relations', path: '/investor-relations' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'IT Services', path: '/it-services' },
    { label: 'BPO Services', path: '/bpo-services' },
    { label: 'KPO Services', path: '/kpo-services' },
    { label: 'Consultancy', path: '/consultancy' },
  ],
  industries: [
    { label: 'Banking', path: '/industries/banking' },
    { label: 'Healthcare', path: '/industries/healthcare' },
    { label: 'Manufacturing', path: '/industries/manufacturing' },
    { label: 'Retail', path: '/industries/retail' },
  ],
  resources: [
    { label: 'Blog', path: '/blog' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'AI Lab', path: '/ai-lab' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ],
};

export const breadcrumbConfig: Record<string, string[]> = {
  '/it-services/cloud-infrastructure': ['Services', 'IT Services', 'Cloud & Infrastructure'],
  '/it-services/cybersecurity': ['Services', 'IT Services', 'Cybersecurity'],
  '/it-services/digital-transformation': ['Services', 'IT Services', 'Digital Transformation'],
  '/it-services/software-development': ['Services', 'IT Services', 'Software Development'],
  '/it-services/ai-analytics': ['Services', 'IT Services', 'Data & AI Analytics'],
  '/it-services/digital-marketing': ['Services', 'IT Services', 'Digital Experience'],
  '/it-services/iot-emerging-tech': ['Services', 'IT Services', 'IoT & Emerging Tech'],
  '/it-services/managed-it': ['Services', 'IT Services', 'Managed IT Services'],
  '/it-services/enterprise-software': ['Services', 'IT Services', 'Enterprise Software'],
  '/bpo-services': ['Services', 'BPO Services'],
  '/kpo-services': ['Services', 'KPO Services'],
  '/consultancy': ['Services', 'Consultancy'],
  '/industries/banking': ['Industries', 'Banking & Finance'],
  '/industries/healthcare': ['Industries', 'Healthcare'],
  '/industries/manufacturing': ['Industries', 'Manufacturing'],
  '/industries/retail': ['Industries', 'Retail & E-commerce'],
};

export function getRelatedServices(currentPath: string): Array<{ label: string; path: string }> {
  const pathMap: Record<string, Array<{ label: string; path: string }>> = {
    '/it-services/cloud-infrastructure': [
      { label: 'Digital Transformation', path: '/it-services/digital-transformation' },
      { label: 'Managed IT Services', path: '/it-services/managed-it' },
      { label: 'Enterprise Software', path: '/it-services/enterprise-software' },
    ],
    '/it-services/cybersecurity': [
      { label: 'Cloud & Infrastructure', path: '/it-services/cloud-infrastructure' },
      { label: 'Enterprise Software', path: '/it-services/enterprise-software' },
      { label: 'Managed IT Services', path: '/it-services/managed-it' },
    ],
    '/it-services/software-development': [
      { label: 'Data & AI Analytics', path: '/it-services/ai-analytics' },
      { label: 'Digital Experience', path: '/it-services/digital-marketing' },
      { label: 'Cybersecurity', path: '/it-services/cybersecurity' },
    ],
  };

  return pathMap[currentPath] || [];
}

export function getIndustryForService(servicePath: string): string[] {
  const industryMap: Record<string, string[]> = {
    '/it-services/cloud-infrastructure': [
      '/industries/banking',
      '/industries/healthcare',
      '/industries/manufacturing',
    ],
    '/it-services/cybersecurity': [
      '/industries/banking',
      '/industries/healthcare',
    ],
    '/it-services/ai-analytics': [
      '/industries/retail',
      '/industries/manufacturing',
      '/industries/banking',
    ],
  };

  return industryMap[servicePath] || [];
}
