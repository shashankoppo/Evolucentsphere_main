import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, ArrowRight, ExternalLink } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'IT Services', href: '/it-services', desc: 'Cloud, AI, cybersecurity & more' },
      { name: 'BPO Services', href: '/bpo-services', desc: 'Business process outsourcing' },
      { name: 'KPO Services', href: '/kpo-services', desc: 'Knowledge process outsourcing' },
      { name: 'Consultancy', href: '/consultancy', desc: 'Strategic business consulting' },
      { name: 'Enterprise IT', href: '/enterprise-it', desc: 'Enterprise infrastructure solutions' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Banking & Finance', href: '/industries/banking' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Insurance', href: '/industries/insurance' },
      { name: 'Government', href: '/industries/government' },
    ],
  },
  {
    name: 'Company',
    href: '/about',
    children: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Investor Relations', href: '/investor-relations' },
      { name: 'Innovation Lab', href: '/ai-lab' },
    ],
  },
  {
    name: 'Insights',
    href: '/blog',
    children: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Technologies', href: '/technologies' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

function isActiveLink(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleDropdownEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-500 text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-ink tracking-tight">EvolucentSphere</span>
                <span className="text-[10px] font-medium text-ink-muted tracking-wide">FLAGSHIP DIVISION</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={link.href}
                    className={`nav-link flex items-center gap-1 text-sm ${
                      isActiveLink(location.pathname, link.href)
                        ? 'active'
                        : 'text-ink-secondary'
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-72"
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-border p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-surface transition-colors group"
                            >
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-ink group-hover:text-brand-500 transition-colors">{child.name}</span>
                                {child.desc && (
                                  <span className="text-xs text-ink-muted">{child.desc}</span>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm"
              >
                Get a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-ink-secondary hover:text-ink hover:bg-surface rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="text-sm font-semibold text-ink">Menu</span>
                  <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-surface rounded-lg">
                    <X className="w-5 h-5 text-ink-secondary" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <div className="flex items-center">
                        <Link
                          to={link.href}
                          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                            isActiveLink(location.pathname, link.href)
                              ? 'text-brand-500 bg-brand-50'
                              : 'text-ink hover:bg-surface'
                          }`}
                          onClick={() => !link.children && setIsMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.children && (
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                            className="px-3 py-3 text-ink-secondary"
                            aria-label={`Expand ${link.name}`}
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      {link.children && mobileExpanded === link.name && (
                        <div className="pl-4 border-l-2 border-border ml-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center justify-between px-4 py-2 text-sm hover:bg-surface transition-colors group"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <span className="text-ink-secondary group-hover:text-ink">{child.name}</span>
                              <ArrowRight className="w-3 h-3 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-border space-y-2">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-sm"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Get a Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/918770422622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-sm"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
