import React, { useState } from 'react';
import { Briefcase, Lightbulb, Target, Users, BarChart, TrendingUp, ChevronDown, Workflow, CheckCircle2, Rocket } from 'lucide-react';
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
  { num: '01', title: 'Assess & Diagnose', desc: 'We conduct a deep-dive assessment of your current state — operations, technology, culture, and competitive positioning — to identify gaps and opportunities.' },
  { num: '02', title: 'Strategy & Roadmap', desc: 'We co-create a strategic roadmap with clear milestones, KPIs, and ownership. Every recommendation is tied to measurable business outcomes.' },
  { num: '03', title: 'Execute & Enable', desc: 'Our consultants work alongside your teams to implement changes, transfer knowledge, and build internal capability so results are sustainable.' },
  { num: '04', title: 'Measure & Scale', desc: 'We track outcomes against baselines, adjust course as needed, and scale successful initiatives across the organization.' },
];

const outcomes = [
  { metric: '95%', label: 'Project Success Rate', desc: 'across all consulting engagements' },
  { metric: '40%', label: 'Average Growth', desc: 'revenue or efficiency improvement' },
  { metric: '200+', label: 'Expert Consultants', desc: 'across 15+ specializations' },
  { metric: '12 wks', label: 'Avg. Time to Impact', desc: 'from engagement kickoff to results' },
];

const engagementModel = [
  { title: 'Strategy Sprint', duration: '2-4 weeks', desc: 'Focused diagnostic and recommendations for a specific business question.', best: 'Board-level decisions, market entry, go/no-go calls' },
  { title: 'Transformation Program', duration: '3-12 months', desc: 'End-to-end execution with embedded consultants and change management.', best: 'Digital transformation, org redesign, large-scale process overhaul' },
  { title: 'Advisory Retainer', duration: 'Ongoing', desc: 'Continuous access to senior consultants for strategic guidance and sounding boards.', best: 'Leadership teams needing ongoing expert input' },
];

const faqs = [
  { q: 'What industries do you specialize in?', a: 'We have dedicated practice areas for banking and financial services, healthcare, retail and e-commerce, manufacturing, government, and insurance. Each practice is staffed by consultants with 10+ years in that sector.' },
  { q: 'How do you price your consulting engagements?', a: 'We offer fixed-fee for strategy sprints, milestone-based pricing for transformation programs, and monthly retainers for advisory relationships. You choose the model that fits your budget and risk profile.' },
  { q: 'Do you provide implementation support or just recommendations?', a: 'Both. We do not hand you a slide deck and walk away. Our consultants embed with your teams, drive implementation, train staff, and stay until outcomes are achieved and measured.' },
  { q: 'Can you work alongside our existing consulting partners?', a: 'Yes. We frequently collaborate with Big 4 firms, boutique specialists, and internal strategy teams. We bring complementary execution capability and deep technology expertise.' },
  { q: 'What makes your consultancy different?', a: 'We combine strategic consulting with full-stack technology delivery capabilities. Unlike pure-play consultancies, we can design the strategy and build the solution under one roof — no handoff gaps.' },
];

export default function ConsultancyServices() {
  const { services } = config;

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Business Consultancy | EvolucentSphere"
        description="Strategic business consulting services for digital transformation and operational excellence."
        keywords={['Business Consulting', 'Digital Transformation', 'Strategy Consulting', 'Technology Consulting']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Business Consultancy Services
            </h1>
            <p className="text-xl text-ink-secondary mb-12">
              Strategic solutions for business transformation and growth
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-ink-secondary">Expert Consultants</div>
              </div>
              <div className="card">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-ink-secondary">Success Rate</div>
              </div>
              <div className="card">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-ink-secondary">Avg. Growth</div>
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
              Comprehensive consulting solutions for business excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.consultancy.categories.map((category, index) => (
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
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Innovation</h3>
              <p className="text-ink-secondary">
                Cutting-edge solutions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Expertise</h3>
              <p className="text-ink-secondary">
                Industry veterans
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Results</h3>
              <p className="text-ink-secondary">
                Measurable outcomes
              </p>
            </div>
            <div className="text-center">
              <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Analytics</h3>
              <p className="text-ink-secondary">
                Data-driven insights
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
            <h2 className="text-3xl font-bold text-ink mb-4">From Diagnosis to Results in 4 Phases</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              A consulting framework that bridges strategy and execution — no handoff gaps, no slide-deck-only deliverables.
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

      {/* Engagement Models */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label mb-4">Engagement Models</span>
            <h2 className="text-3xl font-bold text-ink mb-4">Choose How You Work With Us</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              Three flexible engagement models designed for different needs, timelines, and budgets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModel.map((model, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-ink">{model.title}</h3>
                </div>
                <div className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded mb-4">{model.duration}</div>
                <p className="text-sm text-ink-secondary mb-4">{model.desc}</p>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs font-semibold text-ink mb-1">Best for</div>
                  <p className="text-xs text-ink-muted">{model.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label mb-4">Outcomes</span>
            <h2 className="text-3xl font-bold text-ink mb-4">Results Our Clients See</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {i === 0 ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : i === 1 ? <TrendingUp className="w-5 h-5 text-blue-600" /> : i === 2 ? <Users className="w-5 h-5 text-blue-600" /> : <Target className="w-5 h-5 text-blue-600" />}
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
      <section className="section-padding surface">
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our consulting services can help you achieve your goals
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
