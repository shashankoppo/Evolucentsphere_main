import React, { useState } from 'react';
import { Users, Headphones as HeadphonesIcon, FileText, BarChart, Clock, Globe, ChevronDown, CheckCircle2, Workflow, TrendingDown, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ROICalculator from '../../components/ROICalculator';
import { config } from '../../lib/config';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="text-sm font-semibold text-ink">{q}</span>
        <ChevronDown className={`w-4 h-4 text-ink-muted shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-ink-secondary">{a}</div>
      )}
    </div>
  );
}

const processSteps = [
  { num: '01', title: 'Discovery & Assessment', desc: 'We analyze your current operations, identify outsourcing opportunities, and map out a transition plan tailored to your workflows.' },
  { num: '02', title: 'Team Setup & Training', desc: 'Dedicated professionals are selected, trained on your processes and tools, and integrated into your operations within 2-4 weeks.' },
  { num: '03', title: 'Go-Live & Quality Ramp', desc: 'Operations begin with close monitoring, daily quality reviews, and performance optimization during the first 90 days.' },
  { num: '04', title: 'Scale & Optimize', desc: 'We continuously refine workflows, introduce automation, and scale capacity up or down based on your business demands.' },
];

const outcomes = [
  { metric: '35%', label: 'Average Cost Reduction', desc: 'within the first year of engagement' },
  { metric: '45%', label: 'Efficiency Improvement', desc: 'through streamlined workflows and automation' },
  { metric: '99.5%', label: 'Quality SLA Achievement', desc: 'rigorous QA across all deliverables' },
  { metric: '4 mo', label: 'Average Payback Period', desc: 'most clients see ROI in one quarter' },
];

const faqs = [
  { q: 'How quickly can you transition our operations?', a: 'Most engagements go live within 2-4 weeks. Simple processes like customer support can start in as little as 10 days, while complex multi-department transitions may take 6-8 weeks for full ramp-up.' },
  { q: 'What security and compliance standards do you follow?', a: 'We adhere to ISO 27001, SOC 2 Type II, and GDPR standards. All agents sign NDAs, and we implement role-based access controls, data encryption, and audit logging across every engagement.' },
  { q: 'Can we scale the team up or down?', a: 'Yes. Our flexible staffing model lets you scale up within 48 hours and scale down with 30 days notice. You only pay for active seats.' },
  { q: 'Do you provide multi-language support?', a: 'We support 15+ languages including English, Spanish, French, German, Arabic, Hindi, and Mandarin, with native-level fluency for customer-facing roles.' },
  { q: 'How do you measure quality?', a: 'We track CSAT, FCR, AHT, QA scores, and SLA compliance in real-time dashboards. You get weekly performance reports and monthly business reviews.' },
];

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
      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label mb-4">Our Process</span>
            <h2 className="text-3xl font-bold text-ink mb-4">How We Get You Live in 4 Weeks</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              A proven transition framework that minimizes disruption and maximizes results from day one.
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
                  {i < 2 ? <TrendingDown className="w-5 h-5 text-green-600" /> : <ShieldCheck className="w-5 h-5 text-blue-600" />}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{o.metric}</div>
                <div className="text-sm font-semibold text-ink">{o.label}</div>
                <div className="text-xs text-ink-muted mt-1">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="label mb-4">Calculate Your Savings</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
                How Much Could You Save?
              </h2>
              <p className="text-ink-secondary text-lg mb-8">
                See the real financial impact of outsourcing your business processes.
                Our clients see an average of 35% cost reduction within the first year.
              </p>
              <div className="space-y-4">
                {[
                  { title: '35% Average Cost Reduction', desc: 'Cut operational costs by outsourcing non-core processes.' },
                  { title: '45% Efficiency Gain', desc: 'Streamlined workflows and dedicated teams boost productivity.' },
                  { title: '4-Month Payback', desc: 'Most clients see ROI within the first quarter of engagement.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                      <p className="text-sm text-ink-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ROICalculator type="bpo" />
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
