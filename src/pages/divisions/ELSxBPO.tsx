import React from 'react';
import { Users, HeadphonesIcon, FileText, BarChart, Clock, Globe } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function ELSxBPO() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="ELSxBPO - Business Process Outsourcing Solutions"
        description="Transform your operations with our comprehensive BPO solutions. Expert customer service, back-office operations, and process optimization."
        keywords={['BPO Services', 'Business Process Outsourcing', 'Customer Support', 'Back Office Operations']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Operations with
              <span className="text-purple-600"> ELSxBPO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Next-generation business process outsourcing solutions powered by AI and automation
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">10,000+</div>
                <div className="text-gray-600">Skilled Professionals</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Global Support</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">45%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <HeadphonesIcon className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  24/7 Customer Support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Technical Support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Social Media Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Email Support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <FileText className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Back Office Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Data Entry & Processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Document Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Order Processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Quality Assurance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Clock className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Workflow Automation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Process Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Performance Metrics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business Processes?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our BPO solutions can transform your operations
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}