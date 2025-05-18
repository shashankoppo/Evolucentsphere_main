import React from 'react';
import { Brain, Search, FileText, BarChart, Target, Award } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { config } from '../../lib/config';

export default function KPOServices() {
  const { services } = config;

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="KPO Services | EvolucentSphere"
        description="Advanced Knowledge Process Outsourcing services for data-driven insights and strategic decision making."
        keywords={['KPO Services', 'Knowledge Process Outsourcing', 'Research Analytics', 'Business Intelligence']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Knowledge Process Outsourcing
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with advanced analytics and research expertise
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Research Analysts</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Search className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive KPO solutions for data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.kpo.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Industry-leading expertise with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Highly qualified analysts
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-gray-600">
                Precise insights and analysis
              </p>
            </div>
            <div className="text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">
                Advanced analytical tools
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">
                Comprehensive research methodology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Intelligence?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our KPO services can help you make better decisions
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