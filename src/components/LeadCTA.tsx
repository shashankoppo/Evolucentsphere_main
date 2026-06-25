import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LeadCTAProps {
  title?: string;
  subtitle?: string;
  serviceInterest?: string;
  variant?: 'banner' | 'card' | 'inline';
}

export default function LeadCTA({
  title = 'Ready to transform your business?',
  subtitle = "Tell us about your challenge and we'll map a solution within 24 hours.",
  serviceInterest = '',
  variant = 'banner',
}: LeadCTAProps) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || !form.name || !form.email) return;
    setSubmitting(true);
    await supabase.from('leads').insert({
      ...form,
      service_interest: serviceInterest,
      source: 'service-page-cta',
    });
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="py-16 lg:py-24 bg-brand-500">
        <div className="container-main text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">We'll be in touch shortly!</h2>
          <p className="text-brand-100">Our team typically responds within 4 business hours.</p>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="flex-1 px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <input
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="flex-1 px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <button type="submit" disabled={submitting} className="btn-primary shrink-0">
          Get a Proposal <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-ink overflow-hidden relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-solid mb-4">Get Started</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-ink-secondary mb-8">{subtitle}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink-secondary">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+91 (724) 755-8873</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-secondary">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>contact@evolucentsphere.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-secondary">
                <MessageCircle className="w-4 h-4 text-brand-400" />
                <a href="https://wa.me/918770422622" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline">
                  WhatsApp: +91 877-042-2622
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 lg:p-8 bg-white space-y-4">
            <h3 className="text-lg font-bold text-ink mb-2">Request a Proposal</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <input
              type="email"
              placeholder="Work email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <textarea
              placeholder="Describe your requirement..."
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? 'Submitting...' : 'Get Your Proposal'}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-ink-muted text-center">
              No commitment. We respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
