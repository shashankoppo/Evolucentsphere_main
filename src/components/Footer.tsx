import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

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
              <p className="text-slate-400">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-bold text-white">EvolucentSphere</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Delivering comprehensive business solutions through AI-powered technology and strategic outsourcing.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+91 877 042 2622</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>contact@evolucentsphere.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} EvolucentSphere Pvt. Ltd. Flagship Division: ELSxGlobal.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">
              BPO &bull; KPO &bull; IT Services &bull; Consulting
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
