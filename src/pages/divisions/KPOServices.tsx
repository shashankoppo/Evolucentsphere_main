import React, { useState } from 'react';
import { Brain, Search, FileText, BarChart, Target, Award, ChevronDown, Workflow, TrendingUp, Database } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { config } from '../../lib/config';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left">
        <span className="text-sm font-semibold text-ink">{q}</span>
        <ChevronDown className={`w-4 h-4 text-ink-muted shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-ink-secondary">{a}</div>}
    </div>
  );
}

const processSteps = [
  { num: '01', title: 'Scoping & Data Audit', desc: 'We define the research scope, identify data sources, and audit existing datasets for quality, gaps, and compliance requirements.' },
  { num: '02', title: 'Analyst Assignment', desc: 'Domain-specific analysts are assigned based on your industry — finance, legal, healthcare, or market research — ensuring deep expertise.' },
  { num: '03', title: 'Research & Analysis', desc: 'Using structured methodologies and advanced tools, our analysts deliver insights with documented sources, confidence levels, and recommendations.' },
  { num: '04', title: 'Delivery & Iteration', desc: 'Insights are delivered in your preferred format (reports, dashboards, presentations). We iterate based on feedback and evolving business questions.' },
];

const outcomes = [
  { metric: '99.9%', label: 'Accuracy Rate', desc: 'across all research deliverables' },
  { metric: '60%', label: 'Faster Decision Cycles', desc: 'with real-time analytics dashboards' },
  { metric: '3x', label: 'Research Output', desc: 'compared to in-house teams' },
  { metric: '50+', label: 'Industry Awards', desc: 'for research excellence' },
];

const faqs = [
  { q: 'What types of research do you specialize in?', a: 'We cover financial research, market intelligence, competitive analysis, legal process outsourcing, investment research, equity research, and healthcare analytics. Our analysts hold domain-specific qualifications.' },
  { q: 'How do you ensure data accuracy?', a: 'Every deliverable goes through a three-tier quality review: analyst self-check, peer review, and senior analyst sign-off. We maintain 99.9% accuracy through documented methodologies and source verification.' },
  { q: 'Can you work with our existing BI tools?', a: 'Yes. We integrate with Tableau, Power BI, Looker, Snowflake, Databricks, and custom dashboards. Our analysts can work within your existing data stack or set up new pipelines.' },
  { q: 'Do you handle regulated data?', a: 'We are GDPR-compliant and follow ISO 27001 standards. For healthcare and financial data, we implement HIPAA and SOC 2 Type II controls respectively, with full audit trails.' },
  { q: 'How quickly can you deliver insights?', a: 'Standard research reports are delivered within 5-10 business days. Real-time analytics and dashboards are updated continuously. Urgent requests can be turned around in 24-48 hours.' },
];

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

      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label mb-4">Our Process</span>
            <h2 className="text-3xl font-bold text-ink mb-4">From Data to Decisions in 4 Steps</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              A structured research methodology that delivers reliable, actionable insights every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="card p-6">
                <div className="text-3xl font-bold text-blue-600/20 mb-2">{step.num}</div>
                <div className="flex items-center gap-2 mb-3">
                  <Workflow className="w-5 h-5 text-blue-600" />
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                </div>
                <p className="text-sm text-ink-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label mb-4">Outcomes</span>
            <h2 className="text-3xl font-bold text-ink mb-4">Results Our Clients See</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {i === 0 ? <Target className="w-5 h-5 text-green-600" /> : i === 1 ? <TrendingUp className="w-5 h-5 text-blue-600" /> : i === 2 ? <Database className="w-5 h-5 text-blue-600" /> : <Award className="w-5 h-5 text-blue-600" />}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{o.metric}</div>
                <div className="text-sm font-semibold text-ink">{o.label}</div>
                <div className="text-xs text-ink-muted mt-1">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-10">
            <span className="label mb-4">FAQ</span>
            <h2 className="text-3xl font-bold text-ink mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
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
