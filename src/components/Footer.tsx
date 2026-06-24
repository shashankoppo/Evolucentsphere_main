import React from 'react';
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
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'IT Services', href: '/it-services' },
    { name: 'BPO Services', href: '/bpo-services' },
    { name: 'KPO Services', href: '/kpo-services' },
    { name: 'Consultancy', href: '/consultancy' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investor Relations', href: '/investor-relations' },
    { name: 'AI Lab', href: '/ai-lab' },
  ],
  industries: [
    { name: 'Banking', href: '/industries/banking' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
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
  { city: 'Jabalpur', country: 'India' },
  { city: 'Indore', country: 'India' },
  { city: 'Pune', country: 'India' },
  { city: 'Eindhoven', country: 'Netherlands' },
  { city: 'Chicago', country: 'United States' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to transform your business?
              </h2>
              <p className="text-ink-secondary">
                Let's discuss how our solutions can help you achieve your goals.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Schedule a Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand + Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-bold text-white">EvolucentSphere</span>
            </Link>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-xs">
              Delivering comprehensive business solutions through AI-powered technology and strategic outsourcing.
            </p>

            <div className="space-y-2 text-sm text-ink-secondary mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>+91 (724) 755-8873</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>+91 (877) 042-2622</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>contact@evolucentsphere.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>WhatsApp: +91 877-042-2622</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ink-muted flex-shrink-0" />
                <span>3223/4A Tech Park, Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social links */}
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
            <ul className="space-y-2.5">
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
            <ul className="space-y-2.5">
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
            <ul className="space-y-2.5">
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
            <ul className="space-y-2.5 mb-6">
              {awards.map((award) => (
                <li key={award.name} className="flex items-center gap-2 text-sm text-ink-secondary">
                  <award.icon className="w-3 h-3 text-brand-500 flex-shrink-0" />
                  {award.name}
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white mb-4">Offices</h4>
            <ul className="space-y-2.5">
              {offices.map((office) => (
                <li key={office.city} className="text-sm text-ink-secondary">
                  {office.city}, {office.country}
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
            &copy; {new Date().getFullYear()} EvolucentSphere Pvt. Ltd. Flagship Division: ELSxGlobal.
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
