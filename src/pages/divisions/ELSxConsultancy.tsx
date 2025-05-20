import React from 'react';
import { Briefcase, Lightbulb, Target, Users, BarChart, TrendingUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function ELSxConsultancy() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="ELSxConsultancy - Business & Technology Consulting"
        description="Strategic business and technology consulting services for digital transformation and operational excellence."
        keywords={['Business Consulting', 'Digital Transformation', 'Strategy Consulting', 'Technology Consulting']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-purple-600"> ELSxConsultancy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Strategic solutions for business transformation and sustainable growth
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600">Expert Consultants</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">40%</div>
                <div className="text-gray-600">Avg. Growth</div>
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
              <Lightbulb className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Digital Strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Process Digitization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Technology Roadmap
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Change Management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Users className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Market Entry Strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Growth Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Operational Excellence
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Risk Management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <BarChart className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Process Improvement
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Cost Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Resource Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Performance Metrics
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our consulting services can help you achieve your goals
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