import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  url = 'https://elsxglobal.cloud',
  type = 'website',
  author = 'ELSxGlobal',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const siteTitle = `${title} | ELSxGlobal - A Division of EvolucentSphere`;
  const brandKeywords = [
    'ELSxGlobal',
    'ELS Global',
    'ELS',
    'EvolucentSphere',
    'Digital Transformation',
    'Enterprise Solutions',
    'IT Services',
    'Technology Consulting'
  ];
  
  const allKeywords = [...brandKeywords, ...keywords].join(', ');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ELSxGlobal" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@elsxglobal" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <link rel="canonical" href={url} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          "name": "ELSxGlobal",
          "alternateName": ["ELS Global", "ELS", "EvolucentSphere IT Division"],
          "url": url,
          "logo": "https://elsxglobal.cloud/logo.png",
          "description": description,
          "sameAs": [
            "https://twitter.com/elsxglobal",
            "https://linkedin.com/company/elsxglobal",
            "https://facebook.com/elsxglobal"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          ...(type === 'article' && {
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "author": {
              "@type": "Organization",
              "name": author
            }
          })
        })}
      </script>
    </Helmet>
  );
}