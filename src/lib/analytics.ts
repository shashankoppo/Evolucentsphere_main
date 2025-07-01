// Enhanced analytics events tracking with Google Analytics integration and cross-domain tracking
type AnalyticsEvent = {
  name: string;
  params?: Record<string, any>;
  timestamp: string;
};

// Store events in memory (in production, you'd want to send these to your analytics service)
const events: AnalyticsEvent[] = [];

export const ANALYTICS_EVENTS = {
  // User engagement
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  
  // Cross-domain navigation
  CROSS_DOMAIN_CLICK: 'cross_domain_click',
  DIVISION_VISIT: 'division_visit',
  PARENT_COMPANY_VISIT: 'parent_company_visit',
  
  // Authentication
  SIGN_UP: 'sign_up',
  LOGIN: 'login',
  LOGOUT: 'logout',
  PASSWORD_RESET: 'password_reset',
  
  // Forms
  CONTACT_FORM_VIEW: 'contact_form_view',
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_ERROR: 'contact_form_error',
  
  // Content
  DOWNLOAD_RESOURCE: 'download_resource',
  VIEW_CASE_STUDY: 'view_case_study',
  VIEW_BLOG_POST: 'view_blog_post',
  SHARE_CONTENT: 'share_content',
  
  // Investor Relations
  VIEW_INVESTOR_RESOURCE: 'view_investor_resource',
  DOWNLOAD_FINANCIAL_REPORT: 'download_financial_report',
  
  // Search
  SEARCH_PERFORMED: 'search_performed',
  SEARCH_RESULTS_VIEW: 'search_results_view',
  SEARCH_NO_RESULTS: 'search_no_results',
  
  // Navigation
  MENU_OPEN: 'menu_open',
  MENU_ITEM_CLICK: 'menu_item_click',
  
  // Service interactions
  SERVICE_INQUIRY: 'service_inquiry',
  QUOTE_REQUEST: 'quote_request',
  DEMO_REQUEST: 'demo_request',
  
  // Industry-specific
  INDUSTRY_PAGE_VIEW: 'industry_page_view',
  SOLUTION_INTEREST: 'solution_interest',
  
  // Error tracking
  ERROR_OCCURRED: 'error_occurred',
  API_ERROR: 'api_error',

  // SEO specific events
  SITEMAP_GENERATED: 'sitemap_generated',
  STRUCTURED_DATA_VIEWED: 'structured_data_viewed',
  INTERNAL_LINK_CLICKED: 'internal_link_clicked',
  EXTERNAL_LINK_CLICKED: 'external_link_clicked'
} as const;

export type AnalyticsEventName = keyof typeof ANALYTICS_EVENTS;

// Google Analytics integration with cross-domain tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Cross-domain configuration
const CROSS_DOMAIN_CONFIG = {
  domains: [
    'elsxglobal.cloud',
    'evolucentsphere.com',
    'tech.elsxglobal.cloud',
    'bpo.elsxglobal.cloud',
    'kpo.elsxglobal.cloud',
    'consultancy.elsxglobal.cloud'
  ],
  trackingIds: {
    main: 'G-XXXXXXXXXX', // Replace with actual tracking ID
    parent: 'G-YYYYYYYYYY', // Parent company tracking ID
  }
};

export const trackEvent = (
  eventName: AnalyticsEventName,
  eventParams?: Record<string, any>
) => {
  try {
    const event: AnalyticsEvent = {
      name: ANALYTICS_EVENTS[eventName],
      params: {
        ...eventParams,
        site_division: 'ELSxGlobal',
        parent_company: 'EvolucentSphere',
        timestamp: new Date().toISOString()
      },
      timestamp: new Date().toISOString()
    };

    events.push(event);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      // Track on main property
      window.gtag('event', ANALYTICS_EVENTS[eventName], {
        ...event.params,
        custom_parameter_timestamp: event.timestamp
      });

      // Cross-domain tracking for parent company events
      if (eventName === 'PARENT_COMPANY_VISIT' || eventName === 'CROSS_DOMAIN_CLICK') {
        window.gtag('config', CROSS_DOMAIN_CONFIG.trackingIds.parent, {
          custom_map: {
            'custom_dimension_1': 'site_division',
            'custom_dimension_2': 'parent_company'
          }
        });
      }
    }
    
    // In development, log events to console
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', event);
    }

    return { error: null };
  } catch (error) {
    console.error('Analytics error:', error);
    return { error };
  }
};

export const trackPageView = (pageName: string, additionalParams?: Record<string, any>) => {
  const pageParams = {
    page_name: pageName,
    page_url: window.location.href,
    page_title: document.title,
    site_section: getSiteSection(window.location.pathname),
    ...additionalParams
  };

  // Send to Google Analytics with cross-domain configuration
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', CROSS_DOMAIN_CONFIG.trackingIds.main, {
      page_title: pageParams.page_title,
      page_location: pageParams.page_url,
      linker: {
        domains: CROSS_DOMAIN_CONFIG.domains
      }
    });
  }

  return trackEvent('PAGE_VIEW', pageParams);
};

export const trackCrossDomainClick = (targetDomain: string, linkText: string, sourceSection: string) => {
  return trackEvent('CROSS_DOMAIN_CLICK', {
    target_domain: targetDomain,
    link_text: linkText,
    source_section: sourceSection,
    cross_domain_type: getCrossDomainType(targetDomain)
  });
};

export const trackServiceInquiry = (serviceType: string, industry?: string, source?: string) => {
  return trackEvent('SERVICE_INQUIRY', {
    service_type: serviceType,
    target_industry: industry,
    inquiry_source: source,
    lead_quality: 'qualified'
  });
};

export const trackError = (error: Error, context?: string) => {
  return trackEvent('ERROR_OCCURRED', {
    error_message: error.message,
    error_stack: error.stack,
    error_context: context,
    user_agent: navigator.userAgent
  });
};

export const trackSEOEvent = (eventType: 'sitemap_generated' | 'structured_data_viewed' | 'internal_link_clicked' | 'external_link_clicked', params?: Record<string, any>) => {
  return trackEvent(eventType.toUpperCase() as AnalyticsEventName, params);
};

// Enhanced initialization with cross-domain setup
export const initializeAnalytics = () => {
  // Configure cross-domain tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', CROSS_DOMAIN_CONFIG.trackingIds.main, {
      linker: {
        domains: CROSS_DOMAIN_CONFIG.domains
      },
      custom_map: {
        'custom_dimension_1': 'site_division',
        'custom_dimension_2': 'parent_company',
        'custom_dimension_3': 'service_category',
        'custom_dimension_4': 'target_industry'
      }
    });
  }

  // Track initial page view
  trackPageView(window.location.pathname);

  // Enhanced scroll depth tracking
  let maxScroll = 0;
  let scrollDepthTracked = new Set<number>();
  
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track at 25%, 50%, 75%, 100%
      [25, 50, 75, 100].forEach(threshold => {
        if (maxScroll >= threshold && !scrollDepthTracked.has(threshold)) {
          scrollDepthTracked.add(threshold);
          trackEvent('SCROLL_DEPTH', { 
            scroll_depth: threshold,
            page_url: window.location.href,
            page_section: getSiteSection(window.location.pathname)
          });
        }
      });
    }
  });

  // Track time on page when user leaves
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('TIME_ON_PAGE', { 
      time_seconds: timeOnPage,
      page_url: window.location.href,
      engagement_level: getEngagementLevel(timeOnPage)
    });
  });

  // Enhanced link tracking with cross-domain detection
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      const isExternal = !link.href.includes(window.location.hostname);
      const isCrossDomain = CROSS_DOMAIN_CONFIG.domains.some(domain => 
        link.href.includes(domain) && !link.href.includes(window.location.hostname)
      );

      if (isCrossDomain) {
        trackCrossDomainClick(
          extractDomain(link.href),
          link.textContent?.trim() || '',
          getSiteSection(window.location.pathname)
        );
      } else if (isExternal) {
        trackSEOEvent('external_link_clicked', {
          target_url: link.href,
          link_text: link.textContent?.trim() || '',
          source_page: window.location.href
        });
      } else {
        trackSEOEvent('internal_link_clicked', {
          from_url: window.location.href,
          to_url: link.href,
          link_text: link.textContent?.trim() || '',
          link_position: getElementPosition(link)
        });
      }
    }
  });
};

// Helper functions
function getSiteSection(pathname: string): string {
  const sections = {
    '/': 'home',
    '/about': 'about',
    '/services': 'services',
    '/technologies': 'technologies',
    '/case-studies': 'case-studies',
    '/blog': 'blog',
    '/contact': 'contact',
    '/careers': 'careers',
    '/investor-relations': 'investors',
    '/ai-lab': 'ai-lab'
  };
  
  return sections[pathname as keyof typeof sections] || 'other';
}

function getCrossDomainType(domain: string): string {
  if (domain.includes('evolucentsphere.com')) return 'parent_company';
  if (domain.includes('tech.elsxglobal.cloud')) return 'tech_division';
  if (domain.includes('bpo.elsxglobal.cloud')) return 'bpo_division';
  if (domain.includes('kpo.elsxglobal.cloud')) return 'kpo_division';
  if (domain.includes('consultancy.elsxglobal.cloud')) return 'consultancy_division';
  return 'other_division';
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function getEngagementLevel(timeSeconds: number): string {
  if (timeSeconds < 30) return 'low';
  if (timeSeconds < 120) return 'medium';
  if (timeSeconds < 300) return 'high';
  return 'very_high';
}

function getElementPosition(element: HTMLElement): string {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  if (rect.top < viewportHeight * 0.33) return 'above_fold';
  if (rect.top < viewportHeight * 0.66) return 'middle_fold';
  return 'below_fold';
}

// Export analytics events for debugging
export const getAnalyticsEvents = () => [...events];

// Enhanced sitemap tracking
export const trackSitemapGeneration = (urlCount: number, generationTime: number) => {
  trackSEOEvent('sitemap_generated', {
    url_count: urlCount,
    generation_time_ms: generationTime,
    timestamp: new Date().toISOString(),
    cross_domain_urls: CROSS_DOMAIN_CONFIG.domains.length
  });
};

// Industry-specific tracking
export const trackIndustryInterest = (industry: string, serviceType?: string) => {
  trackEvent('INDUSTRY_PAGE_VIEW', {
    industry_name: industry,
    service_type: serviceType,
    lead_potential: 'high'
  });
};

// Service-specific tracking
export const trackServiceInterest = (service: string, industry?: string) => {
  trackEvent('SOLUTION_INTEREST', {
    service_name: service,
    target_industry: industry,
    engagement_type: 'service_exploration'
  });
};