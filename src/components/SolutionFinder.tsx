import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { dbOperations } from '../lib/db';

type Challenge = 'reduce-costs' | 'scale-operations' | 'digital-transformation' | 'improve-cx' | 'data-analytics' | 'cybersecurity';
type Industry = 'banking' | 'healthcare' | 'retail' | 'manufacturing' | 'government' | 'insurance' | 'technology' | 'other';
type CompanySize = 'startup' | 'small' | 'mid' | 'enterprise';

const challenges: { id: Challenge; label: string; icon: string }[] = [
  { id: 'reduce-costs', label: 'Reduce Operational Costs', icon: 'TrendingDown' },
  { id: 'scale-operations', label: 'Scale Operations Quickly', icon: 'TrendingUp' },
  { id: 'digital-transformation', label: 'Digital Transformation', icon: 'Zap' },
  { id: 'improve-cx', label: 'Improve Customer Experience', icon: 'Users' },
  { id: 'data-analytics', label: 'Leverage Data & AI', icon: 'Brain' },
  { id: 'cybersecurity', label: 'Strengthen Cybersecurity', icon: 'Shield' },
];

const industries: { id: Industry; label: string }[] = [
  { id: 'banking', label: 'Banking & Finance' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail & E-commerce' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'government', label: 'Government & Public Sector' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'technology', label: 'Technology' },
  { id: 'other', label: 'Other' },
];

const sizes: { id: CompanySize; label: string; desc: string }[] = [
  { id: 'startup', label: 'Startup', desc: '1-50 employees' },
  { id: 'small', label: 'Small Business', desc: '51-200 employees' },
  { id: 'mid', label: 'Mid-Market', desc: '201-1000 employees' },
  { id: 'enterprise', label: 'Enterprise', desc: '1000+ employees' },
];

const recommendations: Record<Challenge, { title: string; desc: string; services: { name: string; href: string }[] }> = {
  'reduce-costs': {
    title: 'Cost Optimization Solutions',
    desc: 'Outsource non-core processes and automate workflows to achieve 30-45% cost reduction.',
    services: [
      { name: 'BPO Services', href: '/bpo-services' },
      { name: 'Managed IT Services', href: '/it-services/managed-it' },
      { name: 'Business Strategy Consulting', href: '/consultancy' },
    ],
  },
  'scale-operations': {
    title: 'Rapid Scaling Solutions',
    desc: 'Scale your operations with flexible staffing, cloud infrastructure, and process automation.',
    services: [
      { name: 'BPO Services', href: '/bpo-services' },
      { name: 'Cloud Infrastructure', href: '/it-services/cloud-infrastructure' },
      { name: 'KPO Services', href: '/kpo-services' },
    ],
  },
  'digital-transformation': {
    title: 'Digital Transformation Suite',
    desc: 'Modernize legacy systems, adopt cloud, and reimagine your digital customer journey.',
    services: [
      { name: 'Digital Transformation', href: '/it-services/digital-transformation' },
      { name: 'Enterprise Software', href: '/it-services/enterprise-software' },
      { name: 'Web Development', href: '/it-services/web-development' },
      { name: 'Strategic Consulting', href: '/consultancy' },
    ],
  },
  'improve-cx': {
    title: 'Customer Experience Solutions',
    desc: 'Deliver omnichannel support, AI-powered chatbots, and personalized experiences.',
    services: [
      { name: 'BPO Services', href: '/bpo-services' },
      { name: 'Digital Experience & Marketing', href: '/it-services/digital-marketing' },
      { name: 'AI & Analytics', href: '/it-services/ai-analytics' },
    ],
  },
  'data-analytics': {
    title: 'Data & AI Solutions',
    desc: 'Turn raw data into actionable insights with ML models, BI dashboards, and predictive analytics.',
    services: [
      { name: 'AI & Analytics', href: '/it-services/ai-analytics' },
      { name: 'KPO Services', href: '/kpo-services' },
      { name: 'Cloud Infrastructure', href: '/it-services/cloud-infrastructure' },
    ],
  },
  'cybersecurity': {
    title: 'Cybersecurity Solutions',
    desc: 'Protect your business with threat detection, compliance frameworks, and security operations.',
    services: [
      { name: 'Cybersecurity Solutions', href: '/it-services/cybersecurity' },
      { name: 'Managed IT Services', href: '/it-services/managed-it' },
      { name: 'Strategic Consulting', href: '/consultancy' },
    ],
  },
};

export default function SolutionFinder() {
  const [step, setStep] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [size, setSize] = useState<CompanySize | null>(null);
  const [contact, setContact] = useState({ name: '', email: '', company: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const steps = ['Challenge', 'Industry', 'Company Size', 'Results'];
  const canProceed = step === 0 ? !!challenge : step === 1 ? !!industry : step === 2 ? !!size : true;

  const handleSubmit = async () => {
    if (!contact.name || !contact.email || !challenge) return;
    setSubmitting(true);
    try {
      const result = recommendations[challenge];
      await dbOperations.submitToolSubmission({
        tool_type: 'solution_finder',
        inputs: { challenge, industry, company_size: size, ...contact },
        result: { recommended_services: result.services.map(s => s.name) },
        email: contact.email,
      });
      await dbOperations.submitLead({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        service_interest: result.services.map(s => s.name).join(', '),
        message: `Solution Finder: ${result.title} for ${industry} (${size})`,
        source: 'solution_finder',
        tool_source: 'solution_finder',
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(0);
    setChallenge(null);
    setIndustry(null);
    setSize(null);
    setContact({ name: '', email: '', company: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className={`flex items-center gap-2 ${i <= step ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {i + 1}
              </div>
              <span className="text-xs font-medium hidden sm:inline">{s}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Step 0: Challenge */}
          {step === 0 && !submitted && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-lg font-bold text-gray-900 mb-1">What's your biggest challenge?</h3>
              <p className="text-sm text-gray-500 mb-4">Select the option that resonates most</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {challenges.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setChallenge(c.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${challenge === c.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm font-semibold ${challenge === c.id ? 'text-blue-600' : 'text-gray-900'}`}>{c.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Industry */}
          {step === 1 && !submitted && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Which industry are you in?</h3>
              <p className="text-sm text-gray-500 mb-4">We tailor solutions to your sector</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {industries.map(ind => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustry(ind.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${industry === ind.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm font-semibold ${industry === ind.id ? 'text-blue-600' : 'text-gray-900'}`}>{ind.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Company Size */}
          {step === 2 && !submitted && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-lg font-bold text-gray-900 mb-1">How large is your company?</h3>
              <p className="text-sm text-gray-500 mb-4">This helps us scope the right solution</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {sizes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${size === s.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm font-semibold block ${size === s.id ? 'text-blue-600' : 'text-gray-900'}`}>{s.label}</span>
                    <span className="text-xs text-gray-500">{s.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Results + Contact */}
          {step === 3 && !submitted && challenge && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Your Recommended Solutions</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{recommendations[challenge].desc}</p>
              <div className="space-y-2 mb-6">
                {recommendations[challenge].services.map(s => (
                  <div key={s.name} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-900">{s.name}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Get a detailed proposal in your inbox:</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full name *"
                    value={contact.name}
                    onChange={e => setContact({ ...contact, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Work email *"
                    value={contact.email}
                    onChange={e => setContact({ ...contact, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={contact.company}
                    onChange={e => setContact({ ...contact, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Success */}
          {submitted && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Request Received!</h3>
              <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                Our team will review your needs and send a tailored proposal within 24 hours.
              </p>
              <button onClick={reset} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!submitted && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 disabled:opacity-40 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            {step < 3 ? (
              <button
                onClick={() => canProceed && setStep(step + 1)}
                disabled={!canProceed}
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg disabled:opacity-40 hover:bg-blue-700 transition-colors"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!contact.name || !contact.email || submitting}
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg disabled:opacity-40 hover:bg-blue-700 transition-colors"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Proposal <ArrowRight className="w-4 h-4" /></>}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
