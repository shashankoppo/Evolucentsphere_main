import React from 'react';
import { Package, Shield, Cloud, Brain, ArrowRight, Star, Award, CheckCircle, Users } from 'lucide-react';
import { config } from '../lib/config';
import SEOHead from './SEOHead';

export default function Products() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <SEOHead 
        title="Enterprise Products & Solutions"
        description="Discover our comprehensive suite of enterprise products including BPO solutions, KPO services, and IT products designed for operational excellence and business growth."
        keywords={[
          'Enterprise Products',
          'BPO Solutions',
          'KPO Services',
          'IT Products',
          'Business Solutions',
          'ContactPro Elite',
          'BackOfficePro Suite',
          'AnalyticsPro 360',
          'CloudPro Enterprise',
          'SecurePro Shield'
        ]}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-10 bg-purple-600 mr-2"></div>
              <span className="text-purple-600 font-semibold">Our Products</span>
              <div className="h-1 w-10 bg-purple-600 ml-2"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovative Solutions for 
            <span className="text-purple-600"> Enterprise Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our suite of cutting-edge products
            designed to drive efficiency, innovation, and growth.
          </p>
        </div>

        {/* Product Categories */}
        {Object.entries(config.products).map(([key, category]) => (
          <div key={key} className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                <div className="h-1 w-20 bg-purple-600 mt-2"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      {key === 'bpo' && <Package className="h-8 w-8 text-purple-600" />}
                      {key === 'kpo' && <Brain className="h-8 w-8 text-purple-600" />}
                      {key === 'it' && <Cloud className="h-8 w-8 text-purple-600" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Business Impact</h5>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-green-600">
                          <Award className="h-4 w-4 mr-2" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div>
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600">4.9/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the ranks of industry leaders who have revolutionized their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </section>
  );
}