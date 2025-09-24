import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// --- CENTRALIZED SITE CONFIGURATION ---
const siteConfig = {
  siteName: 'EvolucentSphere',
  flagshipDivision: 'ELSxGlobal',
  titleSuffix: 'Flagship Division: ELSxGlobal',
  siteUrl: 'https://elsxglobal.cloud',
  divisionUrl: 'https://elsxglobal.cloud',
  parentUrl: 'https://evolucentsphere.com',
  parentCompany: 'EvolucentSphere Pvt. Ltd.',
  logo: 'https://evolucentsphere.com/logo-og.png',
  favicon: 'https://evolucentsphere.com/favicon.ico',
  twitterHandle: '@evolucentsphere',
  divisionTwitter: '@elsxglobal',
  divisions: {
    elsxglobal: 'https://elsxglobal.cloud',
    tech: 'https://tech.elsxglobal.cloud',
    kpo: 'https://kpo.elsxglobal.cloud',
    bpo: 'https://bpo.elsxglobal.cloud',
    consultancy: 'https://consultancy.elsxglobal.cloud',
    // ELSxTech Sub-divisions
    cloudInfrastructure: 'https://cloud.elsxglobal.cloud',
    cybersecurity: 'https://security.elsxglobal.cloud',
    digitalTransformation: 'https://digital.elsxglobal.cloud',
    softwareDevelopment: 'https://software.elsxglobal.cloud',
    dataAIAnalytics: 'https://ai.elsxglobal.cloud',
    digitalMarketing: 'https://digitalmarketing.elsxglobal.cloud',
    iotEmergingTech: 'https://emergingtech.elsxglobal.cloud',
    managedIT: 'https://managedit.elsxglobal.cloud',
    enterpriseSoftware: 'https://enterprise.elsxglobal.cloud'
  },
  locations: [
    'Jabalpur, India',
    'Indore, India', 
    'Pune, India',
    'Eindhoven, Netherlands',
    'Chicago, United States'
  ]
};

// --- COMPREHENSIVE KEYWORD STRATEGY ---
const keywordSets = {
  core: [
    'ELSxGlobal', 'EvolucentSphere', 'Digital Transformation', 'Enterprise IT Solutions',
    'Business Process Outsourcing', 'Knowledge Process Outsourcing', 'Technology Consulting',
    'AI Solutions', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'
  ],
  services: {
    bpo: [
      'BPO Services', 'Business Process Outsourcing', 'Customer Support Outsourcing',
      'Back Office Operations', 'Contact Center Services', 'Multilingual Support',
      'AI-Powered Customer Support', 'RPA Services', 'Process Automation',
      'Call Center Outsourcing', 'Data Entry Services', 'Document Processing'
    ],
    kpo: [
      'KPO Services', 'Knowledge Process Outsourcing', 'Research and Analytics',
      'Business Intelligence', 'Market Research', 'Financial Modeling',
      'Predictive Analytics', 'Data Management', 'Statistical Analysis',
      'Investment Research', 'Legal Process Outsourcing', 'Healthcare Analytics'
    ],
    tech: [
      'IT Services', 'Software Development', 'Cloud Solutions', 'DevOps Services',
      'AI Development', 'Machine Learning', 'Custom Applications', 'Web Development',
      'Mobile App Development', 'Enterprise Software', 'System Integration',
      'Technology Consulting', 'Digital Solutions', 'Blockchain Development',
      // Enhanced ELSxTech Sub-division Keywords
      'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform', 'Multi-Cloud Strategy',
      'Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Container Orchestration',
      'Kubernetes', 'Docker', 'Cloud Security', 'DevOps', 'CI/CD Pipeline', 'Microservices',
      'Cybersecurity', 'Information Security', 'Network Security', 'Data Protection',
      'Threat Detection', 'Incident Response', 'Security Monitoring', 'SIEM',
      'Penetration Testing', 'Vulnerability Assessment', 'Security Audit', 'Compliance',
      'Digital Transformation', 'Business Transformation', 'Process Automation', 'Change Management',
      'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks',
      'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Data Science',
      'Digital Marketing', 'Customer Experience', 'Marketing Automation', 'SEO', 'Social Media',
      'Internet of Things', 'IoT', 'Blockchain', 'AR/VR', 'Edge Computing', 'Industry 4.0',
      'Managed IT Services', 'IT Support', 'Help Desk', 'Network Management', 'System Administration',
      'Enterprise Software', 'ERP', 'CRM', 'Business Applications', 'Workflow Management'
    ],
    consultancy: [
      'Business Consulting', 'Digital Transformation Consulting', 'ESG Consulting',
      'Lean Six Sigma', 'Process Optimization', 'Strategy Consulting',
      'Management Consulting', 'Operational Excellence', 'Change Management',
      'Business Process Reengineering', 'Performance Improvement'
    ],
    // Granular ELSxTech Sub-division Keywords
    cloud: [
      'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform', 'Multi-Cloud Strategy',
      'Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Container Orchestration',
      'Kubernetes', 'Docker', 'Cloud Security', 'DevOps', 'CI/CD Pipeline', 'Microservices',
      'Cloud Native Applications', 'Hybrid Cloud', 'Private Cloud', 'Public Cloud',
      'Cloud Cost Optimization', 'Cloud Monitoring', 'Disaster Recovery', 'Backup Solutions'
    ],
    cybersecurity: [
      'Cybersecurity', 'Information Security', 'Network Security', 'Data Protection',
      'Threat Detection', 'Incident Response', 'Security Monitoring', 'SIEM',
      'Penetration Testing', 'Vulnerability Assessment', 'Security Audit', 'Compliance',
      'GDPR', 'HIPAA', 'SOX', 'ISO 27001', 'Zero Trust Architecture', 'Identity Management',
      'Access Control', 'Multi-Factor Authentication', 'Endpoint Security', 'Firewall'
    ],
    digitalTransformation: [
      'Digital Transformation', 'Business Transformation', 'Digital Strategy', 'Innovation Consulting',
      'Process Automation', 'Workflow Optimization', 'Change Management', 'Digital Adoption',
      'Technology Roadmap', 'Digital Maturity Assessment', 'Agile Transformation', 'Lean Methodology'
    ],
    ai: [
      'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks',
      'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Data Science',
      'Big Data', 'Data Analytics', 'Business Intelligence', 'Data Visualization',
      'MLOps', 'AI Ethics', 'Automated Machine Learning', 'Cognitive Computing'
    ]
  },
  industries: [
    'Banking and Finance', 'Insurance', 'Healthcare', 'Manufacturing',
    'Retail and E-commerce', 'Automotive', 'Consumer Durables',
    'Financial Services', 'Pharmaceutical', 'Telecommunications',
    'Energy and Utilities', 'Government', 'Education', 'Real Estate'
  ],
  technologies: [
    'Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Cybersecurity',
    'Blockchain', 'Internet of Things', 'Big Data', 'Data Science',
    'Robotic Process Automation', 'Natural Language Processing', 'Computer Vision',
    'Quantum Computing', 'Edge Computing', 'DevOps', 'Microservices'
  ],
  locations: [
    'India IT Services', 'Offshore Development', 'Global Delivery Model',
    'Nearshore Outsourcing', 'International Business Services',
    'Cross-border Operations', 'Multi-location Services'
  ]
};

// --- ENHANCED PROP TYPES ---
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  type?: 'website' | 'article' | 'service' | 'organization';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  titleTemplate?: string;
  breadcrumbs?: { name: string; path: string }[];
  serviceCategory?: 'bpo' | 'kpo' | 'tech' | 'consultancy' | 'cloud' | 'cybersecurity' | 'digitalTransformation' | 'ai';
  targetIndustries?: string[];
  relatedServices?: string[];
  children?: React.ReactNode;
}

// --- UPGRADED COMPONENT ---
export default function SEOHead({
  title,
  description,
  keywords = [],
  image,
  type = 'website',
  author = siteConfig.siteName,
  publishedTime,
  modifiedTime,
  noindex = false,
  canonicalUrl,
  titleTemplate = `%s | ${siteConfig.siteName} - ${siteConfig.titleSuffix}`,
  breadcrumbs,
  serviceCategory,
  targetIndustries = [],
  relatedServices = [],
  children,
}: SEOProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // --- Construct URLs and Titles ---
  const pageUrl = `${siteConfig.siteUrl}${location.pathname}`;
  const finalCanonicalUrl = canonicalUrl || pageUrl;
  const pageTitle = isHomepage ? `${title} | ${siteConfig.siteName} - ${siteConfig.titleSuffix}` : titleTemplate.replace('%s', title);
  
  const finalImage = {
    url: image?.url || siteConfig.logo,
    alt: image?.alt || 'ELSxGlobal - Enterprise IT Solutions and Digital Transformation',
    width: image?.width || 1200,
    height: image?.height || 630,
  };

  // --- Build Comprehensive Keywords ---
  let allKeywords = [...keywordSets.core, ...keywords];
  
  // Add service-specific keywords
  if (serviceCategory && keywordSets.services[serviceCategory]) {
    allKeywords = [...allKeywords, ...keywordSets.services[serviceCategory]];
  }
  
  // Add industry keywords
  allKeywords = [...allKeywords, ...keywordSets.industries];
  
  // Add technology keywords
  allKeywords = [...allKeywords, ...keywordSets.technologies];
  
  // Add location-based keywords
  allKeywords = [...allKeywords, ...keywordSets.locations];
  
  // Add target industries if specified
  if (targetIndustries.length > 0) {
    allKeywords = [...allKeywords, ...targetIndustries];
  }
  
  // Add related services if specified
  if (relatedServices.length > 0) {
    allKeywords = [...allKeywords, ...relatedServices];
  }
  
  // Remove duplicates and join
  const finalKeywords = [...new Set(allKeywords)].join(', ');

  // --- Enhanced Structured Data ---
  const schemas = [];

  // Base Organization Schema with all divisions
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    "name": siteConfig.siteName,
    "alternateName": ["ELS Global", "ELS", "EvolucentSphere IT Division"],
    "url": siteConfig.siteUrl,
    "logo": siteConfig.logo,
    "description": description,
    "foundingDate": "2009",
    "parentOrganization": {
      "@type": "Organization",
      "name": siteConfig.parentCompany,
      "url": siteConfig.parentUrl
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Tech Park",
        "addressLocality": "Jabalpur",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Business District",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh", 
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "IT Hub",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Tech Center",
        "addressLocality": "Eindhoven",
        "addressCountry": "NL"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Business Center",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ["+917247558873", "+918770422622"],
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Dutch"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://twitter.com/elsxglobal",
      "https://linkedin.com/company/elsxglobal",
      "https://facebook.com/elsxglobal",
      "https://instagram.com/elsxglobal",
      siteConfig.parentUrl,
      ...Object.values(siteConfig.divisions)
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "ELSxTech",
        "url": siteConfig.divisions.tech,
        "description": "AI-driven software development and cloud solutions"
      },
      {
        "@type": "Organization", 
        "name": "ELSxKPO",
        "url": siteConfig.divisions.kpo,
        "description": "Knowledge process outsourcing and analytics"
      },
      {
        "@type": "Organization",
        "name": "ELSxBPO", 
        "url": siteConfig.divisions.bpo,
        "description": "Business process outsourcing and customer support"
      },
      {
        "@type": "Organization",
        "name": "ELSxConsultancy",
        "url": siteConfig.divisions.consultancy,
        "description": "Strategic consulting and digital transformation"
      }
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions",
            "description": "Advanced artificial intelligence and machine learning services",
            "serviceType": "Technology Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Business Process Outsourcing",
            "description": "Comprehensive BPO services including customer support and back-office operations",
            "serviceType": "Business Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Knowledge Process Outsourcing", 
            "description": "KPO services including research, analytics, and business intelligence",
            "serviceType": "Knowledge Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation Consulting",
            "description": "Strategic consulting for digital transformation and process optimization",
            "serviceType": "Management Consulting"
          }
        }
      ]
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${finalCanonicalUrl}#webpage`,
    "url": finalCanonicalUrl,
    "name": pageTitle,
    "description": description,
    "isPartOf": { "@id": `${siteConfig.siteUrl}/#website` },
    "about": { "@id": `${siteConfig.siteUrl}/#organization` },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": finalImage.url,
      "width": finalImage.width,
      "height": finalImage.height
    }
  };
  schemas.push(webPageSchema);
  
  // Website Schema (Homepage only)
  if (isHomepage) {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      "url": siteConfig.siteUrl,
      "name": siteConfig.siteName,
      "description": description,
      "publisher": { "@id": `${siteConfig.siteUrl}/#organization` },
      "potentialAction": [{
        "@type": "SearchAction",
        "target": `${siteConfig.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      }],
      "inLanguage": "en-US"
    };
    schemas.push(websiteSchema);
    schemas.push(organizationSchema);
  }

  // Service Schema for service pages
  if (type === 'service' && serviceCategory) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
      "provider": { "@id": `${siteConfig.siteUrl}/#organization` },
      "serviceType": serviceCategory.toUpperCase(),
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": finalCanonicalUrl,
        "servicePhone": "+917247558873"
      }
    };
    schemas.push(serviceSchema);
  }

  // Article Schema
  if (type === 'article' && publishedTime) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": [finalImage.url],
      "author": { 
        "@type": "Organization", 
        "name": author,
        "@id": `${siteConfig.siteUrl}/#organization`
      },
      "publisher": { "@id": `${siteConfig.siteUrl}/#organization` },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": { "@type": "WebPage", "@id": finalCanonicalUrl },
      "about": targetIndustries.map(industry => ({
        "@type": "Thing",
        "name": industry
      }))
    };
    schemas.push(articleSchema);
  }

  // Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.siteUrl
        },
        ...breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": crumb.name,
          "item": `${siteConfig.siteUrl}${crumb.path}`,
        }))
      ],
    };
    schemas.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* --- Basic & SEO Critical Tags --- */}
      <title>{pageTitle}</title>
      <link rel="canonical" href={finalCanonicalUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* --- Business Information --- */}
      <meta name="company" content={siteConfig.parentCompany} />
      <meta name="division" content={siteConfig.siteName} />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* --- Enhanced Business Schema --- */}
      <meta name="business:contact_data:phone_number" content="+917247558873" />
      <meta name="business:contact_data:email" content="contact@evolucentsphere.com" />
      <meta name="business:contact_data:website" content={siteConfig.siteUrl} />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Jabalpur" />
      <meta name="geo.position" content="23.1815;79.9864" />
      <meta name="ICBM" content="23.1815, 79.9864" />
      
      {/* --- Open Graph / Facebook --- */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={finalImage.url} />
      <meta property="og:image:alt" content={finalImage.alt} />
      <meta property="og:image:width" content={String(finalImage.width)} />
      <meta property="og:image:height" content={String(finalImage.height)} />
      <meta property="business:contact_data:street_address" content="Tech Park, Jabalpur" />
      <meta property="business:contact_data:locality" content="Jabalpur" />
      <meta property="business:contact_data:region" content="Madhya Pradesh" />
      <meta property="business:contact_data:postal_code" content="482001" />
      <meta property="business:contact_data:country_name" content="India" />

      {/* --- Twitter --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage.url} />
      <meta name="twitter:image:alt" content={finalImage.alt} />

      {/* --- Article Specific --- */}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && <meta property="article:author" content={author} />}

      {/* --- Service Specific --- */}
      {serviceCategory && <meta name="service.category" content={serviceCategory} />}
      {targetIndustries.length > 0 && <meta name="service.industries" content={targetIndustries.join(', ')} />}

      {/* --- PWA / Mobile --- */}
      <link rel="icon" href={siteConfig.favicon} type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7C3AED" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.siteName} />

      {/* --- Cross-Domain Linking --- */}
      <link rel="dns-prefetch" href={siteConfig.parentUrl} />
      {Object.values(siteConfig.divisions).map((url, index) => (
        <link key={index} rel="dns-prefetch" href={url} />
      ))}

      {/* --- Structured Data --- */}
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>

      {/* --- Children for extra custom tags --- */}
      {children}
    </Helmet>
  );
}