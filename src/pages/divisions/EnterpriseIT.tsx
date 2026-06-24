import React from 'react';
import { Server, Cloud, Shield, Code, Database, Network, Brain, Zap } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

export default function EnterpriseIT() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="ELSxGlobal - Enterprise IT Solutions"
        description="Leading provider of enterprise IT solutions and digital transformation services."
        keywords={['Enterprise IT', 'Digital Transformation', 'Cloud Solutions', 'AI Integration']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Enterprise IT Solutions
            </h1>
            <p className="text-xl text-ink-secondary mb-12">
              Transform your enterprise with cutting-edge technology solutions
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="card">
                <Brain className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">AI-First</div>
                <div className="text-ink-secondary">Approach</div>
              </div>
              <div className="card">
                <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">Cloud</div>
                <div className="text-ink-secondary">Native</div>
              </div>
              <div className="card">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">Secure</div>
                <div className="text-ink-secondary">By Design</div>
              </div>
              <div className="card">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">Agile</div>
                <div className="text-ink-secondary">Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Our Solutions</h2>
            <p className="text-xl text-ink-secondary">
              Comprehensive enterprise solutions for digital excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <Brain className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">AI Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Machine Learning Solutions
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Predictive Analytics
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Computer Vision
                </li>
              </ul>
            </div>

            <div className="card">
              <Cloud className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">Cloud Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Multi-cloud Strategy
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Cloud Migration
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Cloud Security
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Serverless Architecture
                </li>
              </ul>
            </div>

            <div className="card">
              <Database className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">Data Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Big Data Analytics
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Data Warehousing
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Business Intelligence
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Data Governance
                </li>
              </ul>
            </div>

            <div className="card">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">Security</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Cybersecurity Solutions
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Threat Detection
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Compliance Management
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Identity Protection
                </li>
              </ul>
            </div>

            <div className="card">
              <Code className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Custom Software
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  API Integration
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Mobile Solutions
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Web Applications
                </li>
              </ul>
            </div>

            <div className="card">
              <Network className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">Infrastructure</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Network Solutions
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  DevOps
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Monitoring
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  Automation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">Why Choose ELSxGlobal</h2>
            <p className="text-xl text-ink-secondary">
              Industry-leading expertise with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Innovation</h3>
              <p className="text-ink-secondary">
                Cutting-edge solutions
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Security</h3>
              <p className="text-ink-secondary">
                Enterprise-grade protection
              </p>
            </div>
            <div className="text-center">
              <Server className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Scalability</h3>
              <p className="text-ink-secondary">
                Future-proof solutions
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Performance</h3>
              <p className="text-ink-secondary">
                Optimized efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our solutions can help you achieve digital excellence
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
