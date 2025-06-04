import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  faviconUrl?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://elsxglobal.cloud/logo.png',
  url = 'https://elsxglobal.cloud',
  type = 'website',
  author = 'ELSxGlobal',
  publishedTime,
  modifiedTime,
  noindex = false,
  canonicalUrl,
  faviconUrl = 'https://elsxglobal.cloud/favicon.ico'
}: SEOProps) {
  const siteTitle = `${title} | ELSxGlobal - A Division of EvolucentSphere Pvt. Ltd.`;
  const brandKeywords = [
    'ELSxGlobal',
    'ELS Global',
    'EvolucentSphere',
    'Digital Transformation',
    'Enterprise Solutions',
    'IT Services',
    'Technology Consulting',
    'Game Development',
    'Web Development',
    'Mobile App Development',
    'ERP',
    'CRM',
    'Software Solutions'
  ];
  const allKeywords = [...brandKeywords, ...keywords].join(', ');
  const finalCanonicalUrl = canonicalUrl || url;

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ELSxGlobal",
    "legalName": "EvolucentSphere Pvt. Ltd.",
    "url": "https://elsxglobal.cloud",
    "logo": "https://elsxglobal.cloud/logo.png",
    "description": description,
    "sameAs": [
      "https://twitter.com/elsxglobal",
      "https://linkedin.com/company/elsxglobal",
      "https://facebook.com/elsxglobal"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91 7247558873",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  // Article schema (if type is article)
  const articleSchema = type === 'article' && publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": [image],
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ELSxGlobal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elsxglobal.cloud/logo.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": url
  } : null;

  return (
    <Helmet>
      {/* Title & Canonical */}
      <title>{siteTitle}</title>
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Favicon */}
      <link rel="icon" href={faviconUrl} type="image/x-icon" />

      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ELSxGlobal" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@elsxglobal" />

      {/* Article-specific Meta */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Additional SEO & PWA Meta */}
      <meta name="theme-color" content="#7C3AED" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="google" content="notranslate" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema || organizationSchema)}
      </script>
    </Helmet>
  );
}
