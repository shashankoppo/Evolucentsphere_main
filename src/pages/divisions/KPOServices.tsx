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
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Knowledge Process Outsourcing
            </h1>
            <p className="text-xl text-ink-secondary mb-12">
              Transform your business with advanced analytics and research expertise
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <Brain className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-ink-secondary">Research Analysts</div>
              </div>
              <div className="card">
                <Search className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-ink-secondary">Accuracy Rate</div>
              </div>
              <div className="card">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-ink-secondary">Industry Awards</div>
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
              Comprehensive KPO solutions for data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.kpo.categories.map((category, index) => (
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
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Expert Team</h3>
              <p className="text-ink-secondary">
                Highly qualified analysts
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Accuracy</h3>
              <p className="text-ink-secondary">
                Precise insights and analysis
              </p>
            </div>
            <div className="text-center">
              <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Analytics</h3>
              <p className="text-ink-secondary">
                Advanced analytical tools
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Research</h3>
              <p className="text-ink-secondary">
                Comprehensive research methodology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Intelligence?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our KPO services can help you make better decisions
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
