import React from 'react';
import { Users, HeadphonesIcon, FileText, BarChart, Clock, Globe } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { config } from '../../lib/config';

export default function BPOServices() {
  const { services } = config;

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="BPO Services | EvolucentSphere"
        description="Comprehensive Business Process Outsourcing services for enhanced operational efficiency and cost optimization."
        keywords={['BPO Services', 'Business Process Outsourcing', 'Customer Support', 'Back Office Operations']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Process Outsourcing
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your operations with our comprehensive BPO solutions
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive BPO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.bpo.categories.map((category, index) => (
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
              <HeadphonesIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer service
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick and efficient processing
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Multi-language support
              </p>
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
              Let's discuss how our BPO services can help you achieve operational excellence
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