export interface ServiceMetadata {
  id: string;
  name: string;
  division: 'tech' | 'bpo' | 'kpo' | 'consultancy';
  category: string;
  path: string;
  icon: string;
  description: string;
  industries: string[];
  relatedServices: string[];
}

export const serviceMap: Record<string, ServiceMetadata> = {
  'cloud-infrastructure': {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    division: 'tech',
    category: 'Cloud Services',
    path: '/it-services/cloud-infrastructure',
    icon: 'Cloud',
    description: 'Multi-cloud management and optimization',
    industries: ['banking', 'healthcare', 'manufacturing', 'retail'],
    relatedServices: ['digital-transformation', 'managed-it', 'enterprise-software'],
  },
  cybersecurity: {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions',
    division: 'tech',
    category: 'Security',
    path: '/it-services/cybersecurity',
    icon: 'Shield',
    description: 'Advanced threat detection and compliance',
    industries: ['banking', 'healthcare', 'government', 'finance'],
    relatedServices: ['cloud-infrastructure', 'managed-it', 'enterprise-software'],
  },
  'software-development': {
    id: 'software-development',
    name: 'Software Development',
    division: 'tech',
    category: 'Development',
    path: '/it-services/software-development',
    icon: 'Code',
    description: 'Custom applications and enterprise solutions',
    industries: ['retail', 'manufacturing', 'banking', 'healthcare'],
    relatedServices: ['ai-analytics', 'digital-marketing', 'digital-transformation'],
  },
  'ai-analytics': {
    id: 'ai-analytics',
    name: 'Data, AI & Analytics',
    division: 'tech',
    category: 'AI & Analytics',
    path: '/it-services/ai-analytics',
    icon: 'Brain',
    description: 'AI-driven intelligence and insights',
    industries: ['banking', 'retail', 'manufacturing', 'healthcare'],
    relatedServices: ['software-development', 'digital-transformation', 'managed-it'],
  },
  'digital-transformation': {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    division: 'tech',
    category: 'Transformation',
    path: '/it-services/digital-transformation',
    icon: 'Zap',
    description: 'Strategic business modernization',
    industries: ['manufacturing', 'retail', 'banking', 'healthcare'],
    relatedServices: ['cloud-infrastructure', 'software-development', 'ai-analytics'],
  },
  'digital-marketing': {
    id: 'digital-marketing',
    name: 'Digital Experience & Marketing',
    division: 'tech',
    category: 'Marketing',
    path: '/it-services/digital-marketing',
    icon: 'Zap',
    description: 'Customer engagement and digital presence',
    industries: ['retail', 'banking', 'healthcare'],
    relatedServices: ['software-development', 'ai-analytics'],
  },
  'iot-emerging-tech': {
    id: 'iot-emerging-tech',
    name: 'IoT & Emerging Technologies',
    division: 'tech',
    category: 'Emerging Tech',
    path: '/it-services/iot-emerging-tech',
    icon: 'Network',
    description: 'IoT, blockchain, and next-gen solutions',
    industries: ['manufacturing', 'healthcare', 'retail'],
    relatedServices: ['cloud-infrastructure', 'ai-analytics'],
  },
  'managed-it': {
    id: 'managed-it',
    name: 'Managed IT Services',
    division: 'tech',
    category: 'IT Management',
    path: '/it-services/managed-it',
    icon: 'Settings',
    description: 'Comprehensive IT support and operations',
    industries: ['banking', 'healthcare', 'manufacturing', 'retail'],
    relatedServices: ['cloud-infrastructure', 'cybersecurity'],
  },
  'enterprise-software': {
    id: 'enterprise-software',
    name: 'Enterprise Software Solutions',
    division: 'tech',
    category: 'Enterprise',
    path: '/it-services/enterprise-software',
    icon: 'Database',
    description: 'ERP, CRM, and business applications',
    industries: ['manufacturing', 'banking', 'retail'],
    relatedServices: ['software-development', 'digital-transformation'],
  },
};

export function getServicesByDivision(division: string): ServiceMetadata[] {
  return Object.values(serviceMap).filter(s => s.division === division);
}

export function getServicesByIndustry(industry: string): ServiceMetadata[] {
  return Object.values(serviceMap).filter(s =>
    s.industries.includes(industry)
  );
}

export function getRelatedServices(serviceId: string): ServiceMetadata[] {
  const service = serviceMap[serviceId];
  if (!service) return [];

  return service.relatedServices
    .map(id => serviceMap[id])
    .filter(Boolean);
}

export function getIndustriesForService(serviceId: string): string[] {
  return serviceMap[serviceId]?.industries || [];
}
