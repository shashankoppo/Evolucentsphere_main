import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Cpu, Briefcase, Users, Globe, ChevronDown, ExternalLink, Shield,
  Code, BarChart, Zap, Network, Settings, Cloud, Brain
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Services', path: '/services', isPrimary: true },
  { name: 'Case Studies', path: '/case-studies', isPrimary: true },
  { name: 'About', path: '/about', isPrimary: false },
  { name: 'Careers', path: '/careers', isPrimary: false },
  { name: 'Investors', path: '/investor-relations', isPrimary: false },
];

const divisions = [
  { name: 'ELSxTech', path: '/it-services', description: 'Technology solutions & innovation', icon: Cpu },
  { name: 'ELSxBPO', path: '/bpo-services', description: 'Business process outsourcing', icon: Users },
  { name: 'ELSxKPO', path: '/kpo-services', description: 'Knowledge process & analytics', icon: Brain },
  { name: 'ELSxConsultancy', path: '/consultancy', description: 'Strategic consulting', icon: Briefcase },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="EvolucentSphere Home">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-40"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">EvolucentSphere</span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium -mt-0.5">ELSxGlobal</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Divisions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDivisionsOpen(true)}
                onMouseLeave={() => setIsDivisionsOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">
                  Divisions
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDivisionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isDivisionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[280px]">
                        {divisions.map((d) => (
                          <Link
                            key={d.path}
                            to={d.path}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <d.icon className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{d.name}</p>
                              <p className="text-sm text-gray-500">{d.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV_LINKS.filter(l => l.isPrimary).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/ai-lab"
                className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <Cpu className="h-4 w-4" />
                AI Lab
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://linkedin.com/company/elsxglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-bold text-lg text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {divisions.map((d) => (
                  <Link
                    key={d.path}
                    to={d.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <d.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{d.name}</p>
                      <p className="text-xs text-gray-500">{d.description}</p>
                    </div>
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-100 mt-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-lab"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-blue-600 font-medium"
                  >
                    <Cpu className="h-5 w-5" />
                    AI Lab
                  </Link>
                </div>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-center rounded-xl"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Desktop Navigation Component ---
const DesktopNav = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryLinks = NAV_LINKS.filter(l => l.isPrimary);
  const secondaryLinks = NAV_LINKS.filter(l => !l.isPrimary);

  return (
    <div className="hidden lg:flex items-center justify-end flex-grow">
      <nav className="flex items-center space-x-7 text-sm font-medium">
        {/* Enhanced Divisions Mega Menu */}
        <div onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)} className="relative">
          <button 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="View all ELSxGlobal divisions and EvolucentSphere companies"
          >
            Our Divisions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>{isMegaMenuOpen && <EnhancedMegaMenu />}</AnimatePresence>
        </div>
        
        {primaryLinks.map(link => <NavLink key={link.name} to={link.path}>{link.name}</NavLink>)}
        
        <div onMouseEnter={() => setIsMoreMenuOpen(true)} onMouseLeave={() => setIsMoreMenuOpen(false)} className="relative">
          <button 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="More navigation options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <AnimatePresence>{isMoreMenuOpen && <MoreDropdown links={secondaryLinks} />}</AnimatePresence>
        </div>
        
        <Link 
          to="/ai-lab" 
          className="flex items-center text-blue-600 hover:text-blue-700"
          aria-label="Explore our AI Lab and advanced technology solutions"
        >
          <Cpu className="h-5 w-5 mr-1.5" /> AI Lab
        </Link>
      </nav>
      
      <div className="flex items-center space-x-4 ml-8">
        <EmployeeLoginButton /> 
        <Link 
          to="/contact" 
          className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
          aria-label="Contact ELSxGlobal for business solutions and consulting"
        >
          ContactUs
        </Link>
      </div>
    </div>
  );
};

// --- Enhanced Mobile Menu Panel ---
const MobileMenuPanel = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);
  
  return (
    <motion.div
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[1001] shadow-xl lg:hidden overflow-y-auto"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
             <span className="font-bold text-lg">Navigation Menu</span>
             <button 
               onClick={closeMenu} 
               className="p-2 -mr-2"
               aria-label="Close navigation menu"
             >
               <X className="h-6 w-6 text-gray-600" />
             </button>
          </div>
        </div>
        
        <nav className="flex-grow overflow-y-auto p-4">
          <div className="flex flex-col space-y-2">
            {/* Enhanced Divisions Section */}
            <button 
              onClick={() => setIsDivisionsOpen(!isDivisionsOpen)} 
              className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-800"
              aria-label="Toggle divisions menu"
            >
              <span className="flex items-center">
                <Building className="h-5 w-5 mr-3 text-blue-600"/>
                Our Divisions & Companies
              </span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDivisionsOpen && (
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: 'auto' }} 
                  exit={{ height: 0 }} 
                  className="overflow-hidden pl-4"
                >
                  <div className="flex flex-col space-y-2 py-2 border-l border-gray-200">
                    {divisions.map((d) => (
                      <div key={d.path}>
                        <div className="flex items-center justify-between">
                          <Link
                            to={d.external ? '#' : d.path}
                            onClick={(e) => {
                              if (d.external) {
                                e.preventDefault();
                                window.open(d.path, '_blank');
                              }
                              if (d.subDivisions) {
                                e.preventDefault();
                                setExpandedDivision(expandedDivision === d.name ? null : d.name);
                              } else {
                                closeMenu();
                              }
                            }}
                            className="flex-1 py-1.5 pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label={`Visit ${d.name} - ${d.description}`}
                          >
                            <div className="flex items-center">
                              <d.icon className="h-4 w-4 mr-2" />
                              <span>{d.name}</span>
                              {d.external && <ExternalLink className="h-3 w-3 ml-1" />}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 ml-6">{d.description}</div>
                          </Link>
                          {d.subDivisions && (
                            <button
                              onClick={() => setExpandedDivision(expandedDivision === d.name ? null : d.name)}
                              className="p-2"
                            >
                              <ChevronDown className={`h-4 w-4 transition-transform ${expandedDivision === d.name ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        
                        {/* Sub-divisions */}
                        <AnimatePresence>
                          {d.subDivisions && expandedDivision === d.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden ml-6 mt-2"
                            >
                              {d.subDivisions.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  onClick={closeMenu}
                                  className="block py-1.5 pl-4 text-sm text-gray-500 hover:text-blue-600 transition-colors border-l border-gray-100"
                                >
                                  <div className="flex items-center">
                                    <sub.icon className="h-3 w-3 mr-2" />
                                    <span>{sub.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {NAV_LINKS.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="flex items-center py-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors" 
                onClick={closeMenu}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.icon && <link.icon className="h-5 w-5 mr-3 text-blue-600"/>} 
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/ai-lab" 
              className="flex items-center py-3 text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors" 
              onClick={closeMenu}
              aria-label="Explore our AI Lab and advanced technology solutions"
            >
              <Cpu className="h-5 w-5 mr-3 text-blue-600"/>
              AI Lab
            </Link>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/+917247558873`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-3 py-2 text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Support</span>
              </a>
              <a
                href={`https://wa.me/+918770422622`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-3 py-2 text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Business</span>
              </a>
            </div>
            <EmployeeLoginButton />
            <Link 
              to="/contact" 
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors" 
              onClick={closeMenu}
              aria-label="Contact ELSxGlobal for business solutions and consulting"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Helper & Sub-Components ---
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link to={to} className="text-gray-500 hover:text-gray-900 transition-colors">{children}</Link>
);

const MoreDropdown = ({ links }: { links: NavLinkType[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="absolute top-full right-0 mt-3 w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5"
  >
    <div className="py-1">
      {links.map(link => (
        <Link 
          key={link.name} 
          to={link.path} 
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={`Navigate to ${link.name} section`}
        >
          {link.icon && <link.icon className="h-4 w-4 mr-3 text-gray-400"/>}
          {link.name}
        </Link>
      ))}
    </div>
  </motion.div>
);

// --- Enhanced Mega Menu with ELSxTech Sub-Divisions ---
const EnhancedMegaMenu = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
  >
    <div className="w-screen max-w-4xl bg-white shadow-lg rounded-lg p-6 ring-1 ring-black ring-opacity-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">ELSxGlobal Divisions</h3>
        <p className="text-sm text-gray-600">Specialized services across multiple domains</p>
      </div>
      
      <div className="grid gap-6">
        {divisions.map((d) => (
          <div key={d.path} className="group">
            <a 
              href={d.external ? d.path : d.path}
              target={d.external ? "_blank" : "_self"}
              rel={d.external ? "noopener noreferrer" : undefined}
              className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={`Visit ${d.name} - ${d.description}`}
            >
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                <d.icon className="h-6 w-6" />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {d.name}
                  </p>
                  {d.external && <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />}
                </div>
                <p className="text-sm text-gray-500">{d.description}</p>
                {d.keywords && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {d.keywords.slice(0, 3).map((keyword, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
            
            {/* ELSxTech Sub-divisions */}
            {d.subDivisions && (
              <div className="ml-14 mt-2 grid grid-cols-2 gap-2">
                {d.subDivisions.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="flex items-center p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <sub.icon className="h-4 w-4 mr-2" />
                    <span>{sub.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Part of the EvolucentSphere ecosystem - delivering comprehensive business solutions globally
        </p>
      </div>
    </div>
  </motion.div>
);