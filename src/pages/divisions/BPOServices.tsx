import React from 'react';
import { Users, Headphones as HeadphonesIcon, FileText, BarChart, Clock, Globe } from 'lucide-react';
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
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Business Process Outsourcing
            </h1>
            <p className="text-xl text-ink-secondary mb-12">
              Transform your operations with our comprehensive BPO solutions
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">10,000+</div>
                <div className="text-ink-secondary">Skilled Professionals</div>
              </div>
              <div className="card">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-ink-secondary">Global Support</div>
              </div>
              <div className="card">
                <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-ink-secondary">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Our Services</h2>
            <p className="text-xl text-ink-secondary">
              Comprehensive BPO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.bpo.categories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-ink mb-4">{category.name}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-ink-secondary">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
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
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Why Choose Us</h2>
            <p className="text-xl text-ink-secondary">
              Industry-leading expertise with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <HeadphonesIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">24/7 Support</h3>
              <p className="text-ink-secondary">
                Round-the-clock customer service
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Quality Assurance</h3>
              <p className="text-ink-secondary">
                Rigorous quality control processes
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Fast Turnaround</h3>
              <p className="text-ink-secondary">
                Quick and efficient processing
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Global Reach</h3>
              <p className="text-ink-secondary">
                Multi-language support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business Processes?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our BPO services can help you achieve operational excellence
            </p>
            <button className="btn-secondary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
