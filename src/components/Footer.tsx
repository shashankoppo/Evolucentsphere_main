import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Award,
  Globe,
  Shield,
  Star,
  TrendingUp,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const footerLinks = {
  services: [
    { name: 'IT Services', href: '/it-services' },
    { name: 'Cloud & Infrastructure', href: '/it-services/cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/it-services/cybersecurity' },
    { name: 'BPO Services', href: '/bpo-services' },
    { name: 'KPO Services', href: '/kpo-services' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Enterprise IT', href: '/enterprise-it' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investor Relations', href: '/investor-relations' },
    { name: 'AI Lab', href: '/ai-lab' },
    { name: 'Contact', href: '/contact' },
  ],
  industries: [
    { name: 'Banking & Finance', href: '/industries/banking' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Insurance', href: '/industries/insurance' },
    { name: 'Government', href: '/industries/government' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

const awards = [
  { name: 'Best BPO Provider 2024', icon: Award },
  { name: 'Top IT Services Firm', icon: Star },
  { name: 'Excellence in Consulting', icon: Shield },
  { name: 'Global Innovation Award', icon: Globe },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/evolucentsphere' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/evolucentsphere' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/evolucentsphere' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/evolucentsphere' },
];

const offices = [
  { city: 'Jabalpur', country: 'India', role: 'HQ' },
  { city: 'Indore', country: 'India', role: 'Delivery Center' },
  { city: 'Pune', country: 'India', role: 'Tech Hub' },
  { city: 'Eindhoven', country: 'Netherlands', role: 'EU Office' },
  { city: 'Chicago', country: 'United States', role: 'Americas Office' },
];

const investorHighlights = [
  { label: 'Revenue Growth', value: '+42% YoY', icon: TrendingUp },
  { label: 'Global Clients', value: '500+', icon: Users },
  { label: 'Countries', value: '12+', icon: Globe },
  { label: 'Employees', value: '2,500+', icon: Building2 },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    await supabase.from('newsletter_subscribers').insert({ email });
    setSubscribed(true);
    setSubmitting(false);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-ink text-white">
      {/* Investor / Lead Gen Banner */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="label-solid mb-4">For Investors & Partners</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Ready to Scale Your Business or Invest in the Future?
              </h2>
              <p className="text-ink-secondary max-w-lg mb-6">
                EvolucentSphere is a high-growth technology and services company. 
                Request a consultation, explore our investor resources, or join our partner ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get a Proposal
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/investor-relations" className="btn-ghost text-white border border-white/20 hover:bg-white/10">
                  Investor Relations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Investor Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {investorHighlights.map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <item.icon className="w-5 h-5 text-brand-400 mb-2" />
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-ink-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Bar */}
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="container-main py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Stay ahead of the curve</h3>
              <p className="text-sm text-ink-secondary">
                Get industry insights, technology trends, and exclusive reports delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-ink-muted focus:outline-none focus:border-brand-400 transition-colors"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary shrink-1 text-sm whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand + Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-500 text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white tracking-tight">EvolucentSphere</span>
                <span className="text-[10px] font-medium text-ink-muted tracking-wide">FLAGSHIP DIVISION: ELSxGLOBAL</span>
              </div>
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-xs">
              Delivering comprehensive business solutions through AI-powered technology and strategic outsourcing across Banking, Healthcare, Manufacturing, and Retail.
            </p>

            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-center gap-2 text-ink-secondary">
                <Phone className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>+91 (724) 755-8873</span>
              </div>
              <div className="flex items-center gap-2 text-ink-secondary">
                <Phone className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>+91 (877) 042-2622</span>
              </div>
              <div className="flex items-center gap-2 text-ink-secondary">
                <Mail className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>contact@evolucentsphere.com</span>
              </div>
              <div className="flex items-center gap-2 text-ink-secondary">
                <MessageCircle className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>WhatsApp: +91 877-042-2622</span>
              </div>
              <div className="flex items-center gap-2 text-ink-secondary">
                <MapPin className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>3223/4A Tech Park, Jabalpur, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-ink-secondary hover:text-white transition-colors"
                  aria-label={s.name}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-ink-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-ink-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-ink-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards & Offices */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Awards</h4>
            <ul className="space-y-2 mb-6">
              {awards.map((award) => (
                <li key={award.name} className="flex items-center gap-2 text-sm text-ink-secondary">
                  <award.icon className="w-3 h-3 text-brand-500 flex-shrink-1" />
                  {award.name}
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white mb-4">Global Offices</h4>
            <ul className="space-y-2">
              {offices.map((office) => (
                <li key={office.city} className="text-sm text-ink-secondary">
                  <span className="text-white">{office.city}</span>, {office.country}
                  <span className="text-ink-muted text-xs ml-1">({office.role})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} EvolucentSphere Pvt. Ltd. All rights reserved. Flagship Division: ELSxGlobal.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-xs text-ink-muted">
              BPO &bull; KPO &bull; IT Services &bull; Consulting
            </span>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs text-ink-muted hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
