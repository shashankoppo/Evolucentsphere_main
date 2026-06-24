import React from 'react';
import { Package, Shield, Cloud, Brain, ArrowRight, Star, Award, CheckCircle, Users } from 'lucide-react';
import { config } from '../lib/config';
import SEOHead from './SEOHead';

export default function Products() {
  return (
    <section className="section-padding surface relative">
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
      <div className="container-main relative">
        <div className="text-center mb-16">
          <span className="section-label">Our Products</span>
          <h2 className="text-4xl font-bold text-ink mb-4">
            Innovative Solutions for 
            <span className="text-brand-500"> Enterprise Excellence</span>
          </h2>
          <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
            Transform your business operations with our suite of cutting-edge products
            designed to drive efficiency, innovation, and growth.
          </p>
        </div>

        {/* Product Categories */}
        {Object.entries(config.products).map(([key, category]) => (
          <div key={key} className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl font-bold text-ink">{category.title}</h3>
                <div className="h-1 w-20 bg-brand-500 mt-2"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <div key={index} className="card p-8 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-50 p-3 rounded-lg">
                      {key === 'bpo' && <Package className="h-8 w-8 text-brand-500" />}
                      {key === 'kpo' && <Brain className="h-8 w-8 text-brand-500" />}
                      {key === 'edtech' && <Brain className="h-8 w-8 text-brand-500" />}
                      {key === 'it' && <Cloud className="h-8 w-8 text-brand-500" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-ink">{product.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-ink-secondary mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-ink mb-3">Key Features</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-ink-secondary">
                          <CheckCircle className="h-4 w-4 text-brand-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h5 className="font-semibold text-ink mb-3">Business Impact</h5>
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-brand-500">
                          <Award className="h-4 w-4 mr-2" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 w-full btn-primary group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Trust Indicators */}
        <div className="card p-12 text-center">
          <h3 className="text-2xl font-bold text-ink mb-8">Trusted by Industry Leaders</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Users className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-brand-500">10,000+</div>
              <div className="text-ink-secondary">Active Users</div>
            </div>
            <div>
              <Shield className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-brand-500">99.9%</div>
              <div className="text-ink-secondary">Uptime</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-brand-500">50+</div>
              <div className="text-ink-secondary">Industry Awards</div>
            </div>
            <div>
              <Star className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-brand-500">4.9/5</div>
              <div className="text-ink-secondary">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-brand-500 rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the ranks of industry leaders who have revolutionized their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-ink hover:bg-white/90 border-white">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary bg-white text-ink hover:bg-white/90 border-white">
              View Pricing
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
