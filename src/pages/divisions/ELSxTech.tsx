import React from 'react';
import { Server, Cloud, Shield, Code, Database, Network, Brain, Zap } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function ELSxTech() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="ELSxTech - Enterprise IT Solutions & Digital Transformation"
        description="Leading provider of enterprise IT solutions, digital transformation, and innovative technology services. Transform your business with ELSxTech."
        keywords={[
          'Enterprise IT',
          'Digital Transformation',
          'Cloud Solutions',
          'AI Integration',
          'Cybersecurity',
          'Software Development',
          'IT Services'
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Enterprise with
              <span className="text-purple-600"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Comprehensive IT solutions powered by AI, cloud computing, and advanced security
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">AI-First</div>
                <div className="text-gray-600">Approach</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cloud className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">Cloud</div>
                <div className="text-gray-600">Native</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">Secure</div>
                <div className="text-gray-600">By Design</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">Agile</div>
                <div className="text-gray-600">Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Solutions Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Machine Learning Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Predictive Analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Computer Vision
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Cloud className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Multi-cloud Strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Cloud Migration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Cloud Security
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Serverless Architecture
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Database className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Big Data Analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Data Warehousing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Business Intelligence
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Data Governance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Shield className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Cybersecurity Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Threat Detection
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Compliance Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Identity Protection
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Code className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Custom Software
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  API Integration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Mobile Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Web Applications
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Network className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Network Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  DevOps
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Automation
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our solutions can help you achieve digital excellence
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