import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, ArrowRight } from 'lucide-react';

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
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
            ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-gray-100'
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
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                        ? 'text-brand-500'
                        : 'text-ink-secondary hover:text-ink hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    {link.children && <ChevronDown className="w-4 h-4 transition-transform" />}
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
                        <div className="bg-white rounded-xl shadow-strong border border-gray-100 p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-sm font-semibold text-ink">{child.name}</span>
                              <span className="text-xs text-ink-muted">{child.desc}</span>
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
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-ink-secondary hover:text-ink hover:bg-gray-50 rounded-lg transition-colors"
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
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-strong"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <span className="text-sm font-semibold text-ink">Menu</span>
                  <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-gray-50 rounded-lg">
                    <X className="w-5 h-5 text-ink-secondary" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.href}
                        className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                          location.pathname === link.href
                            ? 'text-brand-500 bg-brand-50'
                            : 'text-ink hover:bg-gray-50'
                        }`}
                        onClick={() => !link.children && setIsMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex flex-col px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <span className="text-ink">{child.name}</span>
                              <span className="text-xs text-ink-muted">{child.desc}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-sm"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
