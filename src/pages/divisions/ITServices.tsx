import React from 'react';
import { Server, Cloud, Shield, Code, Database, Network } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { config } from '../../lib/config';

export default function ITServices() {
  const { services } = config;

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="IT Services | EvolucentSphere"
        description="Comprehensive IT services including software development, cloud solutions, cybersecurity, and digital transformation."
        keywords={['IT Services', 'Software Development', 'Cloud Computing', 'Cybersecurity']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise IT Services
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with our comprehensive suite of IT services and solutions
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Server className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cloud className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600">ISO 27001</div>
                <div className="text-gray-600">Certified</div>
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
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.it.categories.map((category, index) => (
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
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with deep industry expertise
              </p>
            </div>
            <div className="text-center">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Technology</h3>
              <p className="text-gray-600">
                Access to cutting-edge tools and technologies
              </p>
            </div>
            <div className="text-center">
              <Network className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Serving clients across 30+ countries
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">
                Enterprise-grade security measures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our IT services can help you achieve your business goals
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