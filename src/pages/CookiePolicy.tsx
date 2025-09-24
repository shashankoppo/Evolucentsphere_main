import React, { useState } from 'react';
import { Cookie, Settings, Eye, BarChart, Shield, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function CookiePolicy() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCookiePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Cookie Policy | ELSxGlobal"
        description="Learn about how ELSxGlobal uses cookies and similar technologies to improve your browsing experience and provide personalized services."
        keywords={['Cookie Policy', 'Cookies', 'Website Tracking', 'Privacy', 'Data Collection']}
        noindex={false}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Learn how we use cookies and similar technologies to enhance your 
              browsing experience and provide better services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 16, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* What Are Cookies */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Cookie className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and understanding how you use our site.
                </p>
                <p className="text-gray-700">
                  We use both session cookies (which expire when you close your browser) and persistent cookies 
                  (which remain on your device for a set period or until you delete them).
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Settings className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Necessary Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Essential for the website to function properly. These cannot be disabled.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <span>Session management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <span>Security features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <span>Load balancing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Help us understand how visitors interact with our website.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <span>Google Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <span>Page views and traffic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <span>User behavior analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Functional Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Remember your preferences and provide enhanced features.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Language preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Theme settings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Form data</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span>Ad personalization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span>Campaign tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                      <span>Social media integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Preferences */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Settings className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Manage Your Cookie Preferences</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-6">
                  You can control which cookies you accept by adjusting your preferences below:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                      <p className="text-sm text-gray-600">Required for basic website functionality</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-3">Always Active</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                      <p className="text-sm text-gray-600">Help us improve our website performance</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        cookiePreferences.analytics ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                      <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        cookiePreferences.functional ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                      <p className="text-sm text-gray-600">Deliver personalized advertisements</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        cookiePreferences.marketing ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={saveCookiePreferences}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We may use third-party services that set cookies on our website:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-lg mb-4">
                      <BarChart className="h-8 w-8 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                    <p className="text-sm text-gray-600">Website traffic and user behavior analysis</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4">
                      <Eye className="h-8 w-8 text-purple-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hotjar</h3>
                    <p className="text-sm text-gray-600">User experience and heatmap analysis</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <Shield className="h-8 w-8 text-green-600 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Security Services</h3>
                    <p className="text-sm text-gray-600">Protection against malicious activities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="bg-purple-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@evolucentsphere.com</p>
                  <p><strong>Phone:</strong> +91 (724) 755-8873 | +91 (877) 042-2622</p>
                  <p><strong>Address:</strong> 3223/4A Tech Park, Bangalore, Karnataka 560001, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}