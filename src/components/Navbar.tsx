import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, Cpu, Briefcase, Users, Globe, Brain, ChevronDown, KeyRound, 
  Building, Info, Server, FileText, MoreHorizontal, ExternalLink, Shield, 
  Code, Database, Bot, BarChart, Zap, Network, Settings, Cloud
} from 'lucide-react';

import SearchBar from './SearchBar'; 

// --- Type Definitions ---
type NavLinkType = {
  name: string;
  path: string;
  icon?: React.ElementType;
  isPrimary: boolean;
  external?: boolean;
};

type Division = {
  name: string;
  path: string;
  description: string;
  icon: React.ElementType;
  external?: boolean;
  keywords?: string[];
  subDivisions?: SubDivision[];
};

type SubDivision = {
  name: string;
  path: string;
  description: string;
  icon: React.ElementType;
  external?: boolean;
  keywords?: string[];
};

// --- Centralized Navigation Data with Enhanced ELSxTech Structure ---
const NAV_LINKS: NavLinkType[] = [
  { name: 'Services', path: '/services', icon: Server, isPrimary: true },
  { name: 'Technologies', path: '/technologies', icon: Cpu, isPrimary: true },
  { name: 'Case Studies', path: '/case-studies', icon: FileText, isPrimary: false },
  { name: 'About', path: '/about', icon: Info, isPrimary: false },
  { name: 'Careers', path: '/careers', icon: Briefcase, isPrimary: false },
  { name: 'Investors', path: '/investor-relations', icon: Globe, isPrimary: false },
];

// Enhanced divisions with comprehensive ELSxTech sub-divisions
const divisions: Division[] = [
  { 
    name: 'ELSxTech', 
    path: '/it-services', 
    description: 'Comprehensive technology solutions and innovation', 
    icon: Cpu,
    keywords: ['IT Services', 'Technology Solutions', 'Digital Innovation', 'Software Development', 'Cloud Computing'],
    subDivisions: [
      {
        name: 'Cloud & Infrastructure',
        path: '/it-services/cloud-infrastructure',
        description: 'Enterprise cloud solutions and infrastructure management',
        icon: Cloud,
        external: true,
        keywords: ['Cloud Computing', 'AWS', 'Azure', 'Infrastructure', 'DevOps', 'Kubernetes']
      },
      {
        name: 'Cybersecurity Solutions',
        path: '/it-services/cybersecurity',
        description: 'Advanced cybersecurity and threat protection',
        icon: Shield,
        external: true,
        keywords: ['Cybersecurity', 'Information Security', 'Threat Detection', 'Compliance', 'SIEM']
      },
      {
        name: 'Digital Transformation',
        path: '/it-services/digital-transformation',
        description: 'Strategic digital transformation consulting',
        icon: Zap,
        external: true,
        keywords: ['Digital Transformation', 'Business Transformation', 'Process Automation', 'Change Management']
      },
      {
        name: 'Software Development',
        path: '/it-services/software-development',
        description: 'Custom software development and integration',
        icon: Code,
        external: true,
        keywords: ['Software Development', 'Custom Applications', 'Web Development', 'Mobile Apps', 'API Integration']
      },
      {
        name: 'Data, AI & Analytics',
        path: '/it-services/ai-analytics',
        description: 'AI, machine learning, and data analytics solutions',
        icon: Brain,
        external: true,
        keywords: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Business Intelligence', 'Predictive Analytics']
      },
      {
        name: 'Digital Marketing',
        path: '/it-services/digital-marketing',
        description: 'Digital experience and marketing solutions',
        icon: BarChart,
        external: true,
        keywords: ['Digital Marketing', 'Customer Experience', 'Marketing Automation', 'SEO', 'Social Media']
      },
      {
        name: 'IoT & Emerging Tech',
        path: '/it-services/iot-emerging-tech',
        description: 'Internet of Things and emerging technologies',
        icon: Network,
        external: true,
        keywords: ['Internet of Things', 'IoT', 'Blockchain', 'AR/VR', 'Edge Computing', 'Industry 4.0']
      },
      {
        name: 'Managed IT Services',
        path: '/it-services/managed-it',
        description: 'Comprehensive managed IT services and support',
        icon: Settings,
        external: true,
        keywords: ['Managed IT', 'IT Support', 'Help Desk', 'Network Management', 'System Administration']
      },
      {
        name: 'Enterprise Software',
        path: '/it-services/enterprise-software',
        description: 'Enterprise software solutions and ERP systems',
        icon: Database,
        external: true,
        keywords: ['Enterprise Software', 'ERP', 'CRM', 'Business Applications', 'Workflow Management']
      }
    ]
  },
  { 
    name: 'ELSxBPO', 
    path: '/bpo-services', 
    description: 'Business process outsourcing & customer support', 
    icon: Users,
    external: true,
    keywords: ['BPO Services', 'Customer Support', 'Contact Center', 'Back Office Operations', 'Process Outsourcing']
  },
  { 
    name: 'ELSxKPO', 
    path: '/kpo-services', 
    description: 'Knowledge process outsourcing & analytics', 
    icon: Brain,
    external: true,
    keywords: ['KPO Services', 'Research Analytics', 'Business Intelligence', 'Data Management', 'Knowledge Services']
  },
  { 
    name: 'ELSxConsultancy', 
    path: '/consultancy', 
    description: 'Strategic consulting & digital transformation', 
    icon: Briefcase,
    external: true,
    keywords: ['Business Consulting', 'Digital Transformation', 'ESG Consulting', 'Lean Six Sigma', 'Strategy Consulting']
  },
  { 
    name: 'EvolucentSphere', 
    path: 'https://evolucentsphere.com', 
    description: 'Corporate headquarters & global operations', 
    icon: Globe,
    external: true,
    keywords: ['Corporate', 'Global Operations', 'Enterprise Solutions', 'Multi-Division Services', 'Business Transformation']
  }
];

// --- Employee Login Button Component ---
const EmployeeLoginButton = () => (
  <a
    href="https://elsxglobal.cloud/employee-portal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full justify-center flex items-center space-x-2.5 bg-gray-800 text-white px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-900 transition-colors"
    aria-label="Access Employee Portal - Secure Login for ELSxGlobal Staff"
  >
    <KeyRound className="h-4 w-4" />
    <span>Employee Portal</span>
    <ExternalLink className="h-3 w-3" />
  </a>
);

// --- Main Navbar Component ---
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full bg-white z-[1000] transition-shadow duration-300 border-b border-gray-200/80 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo with Parent Company Reference */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" aria-label="EvolucentSphere Home - Flagship Division ELSxGlobal">
            <Brain className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900">EvolucentSphere</span>
              <span className="text-xs sm:text-xs text-purple-600 hidden sm:block">Flagship: ELSxGlobal</span>
            </div>
          </Link>

          <DesktopNav />

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-gray-600 p-2"
              aria-label="Open navigation menu"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
        
      <AnimatePresence>
        {isMenuOpen && <MobileMenuPanel closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </nav>
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
            className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            aria-label="View all ELSxGlobal divisions and EvolucentSphere companies"
          >
            Our Divisions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>{isMegaMenuOpen && <EnhancedMegaMenu />}</AnimatePresence>
        </div>
        
        {primaryLinks.map(link => <NavLink key={link.name} to={link.path}>{link.name}</NavLink>)}
        
        <div onMouseEnter={() => setIsMoreMenuOpen(true)} onMouseLeave={() => setIsMoreMenuOpen(false)} className="relative">
          <button 
            className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
            aria-label="More navigation options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <AnimatePresence>{isMoreMenuOpen && <MoreDropdown links={secondaryLinks} />}</AnimatePresence>
        </div>
        
        <Link 
          to="/ai-lab" 
          className="flex items-center text-purple-600 hover:text-purple-700"
          aria-label="Explore our AI Lab and advanced technology solutions"
        >
          <Cpu className="h-5 w-5 mr-1.5" /> AI Lab
        </Link>
      </nav>
      
      <div className="flex items-center space-x-4 ml-8">
        <EmployeeLoginButton /> 
        <Link 
          to="/contact" 
          className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-purple-700 transition-all transform hover:scale-105"
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
                <Building className="h-5 w-5 mr-3 text-purple-600"/>
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
                            className="flex-1 py-1.5 pl-4 text-gray-600 hover:text-purple-600 transition-colors"
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
                                  className="block py-1.5 pl-4 text-sm text-gray-500 hover:text-purple-600 transition-colors border-l border-gray-100"
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
                className="flex items-center py-3 text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors" 
                onClick={closeMenu}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.icon && <link.icon className="h-5 w-5 mr-3 text-purple-600"/>} 
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/ai-lab" 
              className="flex items-center py-3 text-lg font-medium text-purple-600 hover:text-purple-700 transition-colors" 
              onClick={closeMenu}
              aria-label="Explore our AI Lab and advanced technology solutions"
            >
              <Cpu className="h-5 w-5 mr-3 text-purple-600"/>
              AI Lab
            </Link>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <EmployeeLoginButton />
            <Link 
              to="/contact" 
              className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-purple-700 transition-colors" 
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
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                <d.icon className="h-6 w-6" />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                    {d.name}
                  </p>
                  {d.external && <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />}
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
                    className="flex items-center p-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
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