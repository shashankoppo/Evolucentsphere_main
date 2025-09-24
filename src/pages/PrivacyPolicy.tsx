import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Privacy Policy | ELSxGlobal"
        description="Learn how ELSxGlobal protects your privacy and handles your personal information. Our comprehensive privacy policy explains data collection, usage, and protection practices."
        keywords={['Privacy Policy', 'Data Protection', 'GDPR', 'Privacy Rights', 'Data Security']}
        noindex={false}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 16, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Contact information (name, email address, phone number)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Company information and job title</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Communication preferences</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>IP address and browser information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Device information and operating system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Website usage data and analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Delivery</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Provide requested services and support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Process transactions and billing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Communicate about services and updates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Operations</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Improve our services and website</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Conduct research and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                        <span>Comply with legal obligations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Protection & Security</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                    <p className="text-sm text-gray-600">Data encrypted in transit and at rest</p>
                  </div>
                  
                  <div className="text-center">
                    <Lock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                    <p className="text-sm text-gray-600">Strict access controls and authentication</p>
                  </div>
                  
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                    <p className="text-sm text-gray-600">Continuous security monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-6">
                  Under applicable data protection laws, you have the following rights:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Access:</strong> Request access to your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Rectification:</strong> Correct inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Erasure:</strong> Request deletion of your data</span>
                    </li>
                  </ul>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Portability:</strong> Receive your data in a portable format</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Objection:</strong> Object to processing of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span><strong>Restriction:</strong> Restrict processing of your data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">International Transfers</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 mb-4">
                  As a global company with operations in multiple countries, we may transfer your 
                  personal information across borders. We ensure appropriate safeguards are in place:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Adequacy decisions by relevant authorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Standard contractual clauses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                    <span>Binding corporate rules</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="bg-purple-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, 
                  please contact us:
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