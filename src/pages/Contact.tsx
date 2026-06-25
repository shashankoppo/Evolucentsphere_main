import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase }  from '../lib/supabase';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.from('leads').insert({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        service_interest: formData.service,
        source: 'contact-page',
      });
      setIsSent(true);
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <SEOHead title="Contact Us" description="Connect with ELSxGlobal for enterprise solutions and consulting." />

      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <div>
              <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">Get in Touch</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-ink mb-4">
                Let's Transform Together
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-ink-secondary text-lg mb-10 max-w-md">
                Ready to revolutionize your business? Our experts are here to help you navigate your digital transformation.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Phone</p>
                    <p className="text-sm text-ink-secondary">+91 724 755 8873</p>
                    <p className="text-sm text-ink-secondary">+91 877 042 2622</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Email</p>
                    <p className="text-sm text-ink-secondary">contact@evolucentsphere.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Locations</p>
                    <p className="text-sm text-ink-secondary">India &bull; USA &bull; Europe &bull; Middle East</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">WhatsApp</p>
                    <a href="https://wa.me/917247558873" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-500 hover:underline">Chat with us now</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Support Hours</p>
                    <p className="text-sm text-ink-secondary">24/7 Global Support</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {isSent ? (
                <div className="card p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Message Sent!</h3>
                  <p className="text-ink-secondary mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setIsSent(false)} className="btn-secondary text-sm">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-1.5">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-1.5">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company" className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-1.5">Service Interest</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all bg-white">
                        <option value="">Select a service</option>
                        <option value="it">IT Services</option>
                        <option value="bpo">BPO Services</option>
                        <option value="kpo">KPO Services</option>
                        <option value="consultancy">Consultancy</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">How can we help?</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us about your project or challenge..." className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-ink-muted text-center">
                    By submitting, you agree to our <Link to="/privacy-policy" className="text-brand-500 hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
