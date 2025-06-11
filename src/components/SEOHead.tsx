import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom'; // Import to get the current path

// --- 1. CENTRALIZED SITE CONFIGURATION ---
const siteConfig = {
  siteName: 'ELSxGlobal',
  titleSuffix: 'A Division of EvolucentSphere',
  siteUrl: 'https://elsxglobal.cloud',
  logo: 'https://elsxglobal.cloud/logo-og.png', // A 1200x630px logo for Open Graph
  favicon: 'https://elsxglobal.cloud/favicon.ico',
  twitterHandle: '@elsxglobal',
};

// --- 2. ENHANCED PROP TYPES ---
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
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  titleTemplate?: string; // e.g., "%s | My Site"
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode; // For ultimate flexibility
}

// --- 3. UPGRADED COMPONENT ---
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
  children,
}: SEOProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // --- Construct URLs and Titles ---
  const pageUrl = `${siteConfig.siteUrl}${location.pathname}`;
  const finalCanonicalUrl = canonicalUrl || pageUrl;
  const pageTitle = isHomepage ? title : titleTemplate.replace('%s', title);
  
  const finalImage = {
    url: image?.url || siteConfig.logo,
    alt: image?.alt || 'ELSxGlobal company logo',
    width: image?.width || 1200,
    height: image?.height || 630,
  };

  const brandKeywords = [
    'ELSxGlobal', 'EvolucentSphere', 'Digital Transformation', 'Enterprise IT',
    'Technology Consulting', 'AI Solutions', 'Cloud Computing', 'BPO Services',
  ];
  const allKeywords = [...new Set([...brandKeywords, ...keywords])].join(', ');

  // --- Structured Data (Schema.org) ---
  const schemas = [];

  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "logo": siteConfig.logo,
    "sameAs": [
      "https://twitter.com/elsxglobal",
      "https://linkedin.com/company/elsxglobal",
      "https://facebook.com/elsxglobal"
    ],
  };

  // WebPage Schema (for most pages)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": finalCanonicalUrl,
    "name": pageTitle,
    "description": description,
    "isPartOf": { "@id": `${siteConfig.siteUrl}/#website` },
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
    };
    schemas.push(websiteSchema);
    // Add Organization schema separately on homepage for clarity
    schemas.push({ ...organizationSchema, "@id": `${siteConfig.siteUrl}/#organization` });
  }

  // Article Schema
  if (type === 'article' && publishedTime) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": [finalImage.url],
      "author": { "@type": "Organization", "name": author },
      "publisher": { "@id": `${siteConfig.siteUrl}/#organization` },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": { "@type": "WebPage", "@id": finalCanonicalUrl },
    };
    schemas.push(articleSchema);
  }

  // Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${siteConfig.siteUrl}${crumb.path}`,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* --- Basic & SEO Critical Tags --- */}
      <title>{pageTitle}</title>
      <link rel="canonical" href={finalCanonicalUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
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

      {/* --- PWA / Mobile --- */}
      <link rel="icon" href={siteConfig.favicon} type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7C3AED" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* --- Structured Data --- */}
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>

      {/* --- Children for extra custom tags --- */}
      {children}
    </Helmet>
  );
}