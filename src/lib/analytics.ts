// Simple analytics events tracking
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
  API_ERROR: 'api_error'
} as const;

export type AnalyticsEventName = keyof typeof ANALYTICS_EVENTS;

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
    
    // In development, log events to console
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', event);
    }

    // In production, you'd want to send this to your analytics service
    // For now, we'll just store in memory
    return { error: null };
  } catch (error) {
    console.error('Analytics error:', error);
    return { error };
  }
};

export const trackPageView = (pageName: string, additionalParams?: Record<string, any>) => {
  return trackEvent('PAGE_VIEW', {
    page_name: pageName,
    page_url: window.location.href,
    ...additionalParams
  });
};

export const trackError = (error: Error, context?: string) => {
  return trackEvent('ERROR_OCCURRED', {
    error_message: error.message,
    error_stack: error.stack,
    error_context: context
  });
};

export const initializeAnalytics = () => {
  // Track initial page view
  trackPageView(window.location.pathname);

  // Set up scroll depth tracking
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        trackEvent('SCROLL_DEPTH', { scroll_depth: maxScroll });
      }
    }
  });

  // Track time on page when user leaves
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('TIME_ON_PAGE', { time_seconds: timeOnPage });
  });
};

// Export analytics events for debugging
export const getAnalyticsEvents = () => [...events];