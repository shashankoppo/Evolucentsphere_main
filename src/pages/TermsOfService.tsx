import React from 'react';
import { FileText, Scale, Shield, Users, AlertTriangle, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Terms of Service | ELSxGlobal"
        description="Read our terms of service and understand the legal terms and conditions for using ELSxGlobal services and website."
        keywords={['Terms of Service', 'Legal Terms', 'Service Agreement', 'Terms and Conditions']}
        noindex={false}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              These terms govern your use of our services and website. 
              Please read them carefully.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 16, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  By accessing and using the services provided by ELSxGlobal (a division of EvolucentSphere Pvt. Ltd.), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-700">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-6">
                  ELSxGlobal provides comprehensive business solutions including:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>AI & Machine Learning Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Cloud Infrastructure Services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Cybersecurity Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Software Development</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Business Process Outsourcing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Knowledge Process Outsourcing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Strategic Consulting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Digital Transformation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-6">
                  As a user of our services, you agree to:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Use our services in compliance with applicable laws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Not use our services for any unlawful or prohibited activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Respect intellectual property rights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  All content, features, and functionality of our services are owned by ELSxGlobal 
                  and EvolucentSphere Pvt. Ltd., and are protected by international copyright, 
                  trademark, patent, trade secret, and other intellectual property laws.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Can Do</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Use our services for legitimate business purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Share publicly available content with proper attribution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <p className="text-yellow-800 font-medium">
                    Important Legal Notice
                  </p>
                </div>
                
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by applicable law, ELSxGlobal and EvolucentSphere Pvt. Ltd. 
                  shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                
                <p className="text-gray-700">
                  Our total liability for any claim arising out of or relating to these terms or our services 
                  shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Service Level Agreement */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Level Agreement</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-purple-600">99.9%</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Uptime Guarantee</h3>
                    <p className="text-sm text-gray-600">Service availability commitment</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-purple-600">24/7</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                    <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-purple-600">&lt;4h</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-sm text-gray-600">Critical issue response</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700">
                  Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                  of the courts in Bangalore, Karnataka, India.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="bg-purple-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@evolucentsphere.com</p>
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