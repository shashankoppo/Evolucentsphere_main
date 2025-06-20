// Enhanced analytics events tracking with Google Analytics integration
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
  
  // Error tracking
  ERROR_OCCURRED: 'error_occurred',
  API_ERROR: 'api_error',

  // SEO specific events
  SITEMAP_GENERATED: 'sitemap_generated',
  STRUCTURED_DATA_VIEWED: 'structured_data_viewed',
  INTERNAL_LINK_CLICKED: 'internal_link_clicked'
} as const;

export type AnalyticsEventName = keyof typeof ANALYTICS_EVENTS;

// Google Analytics integration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (
  eventName: AnalyticsEventName,
  eventParams?: Record<string, any>
) => {
  try {
    const event: AnalyticsEvent = {
      name: ANALYTICS_EVENTS[eventName],
      params: eventParams,
      timestamp: new Date().toISOString()
    };

    events.push(event);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', ANALYTICS_EVENTS[eventName], {
        ...eventParams,
        custom_parameter_timestamp: event.timestamp
      });
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
    ...additionalParams
  };

  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title: pageParams.page_title,
      page_location: pageParams.page_url
    });
  }

  return trackEvent('PAGE_VIEW', pageParams);
};

export const trackError = (error: Error, context?: string) => {
  return trackEvent('ERROR_OCCURRED', {
    error_message: error.message,
    error_stack: error.stack,
    error_context: context
  });
};

export const trackSEOEvent = (eventType: 'sitemap_generated' | 'structured_data_viewed' | 'internal_link_clicked', params?: Record<string, any>) => {
  return trackEvent(eventType.toUpperCase() as AnalyticsEventName, params);
};

export const initializeAnalytics = () => {
  // Track initial page view
  trackPageView(window.location.pathname);

  // Set up scroll depth tracking
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
            page_url: window.location.href 
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
      page_url: window.location.href 
    });
  });

  // Track internal link clicks for SEO
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && link.href.includes(window.location.hostname)) {
      trackSEOEvent('internal_link_clicked', {
        from_url: window.location.href,
        to_url: link.href,
        link_text: link.textContent?.trim() || '',
        link_position: getElementPosition(link)
      });
    }
  });
};

// Helper function to get element position for analytics
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
    timestamp: new Date().toISOString()
  });
};