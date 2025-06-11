import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Cpu, Briefcase, Users, Globe, Brain, ChevronDown, KeyRound, UserCheck } from 'lucide-react';

// NOTE: I have created a styled placeholder for the EmployeeLoginButton to match the desired look.
// You can apply these styles to your actual component.
// import EmployeeLoginButton from './EmployeeLoginButton'; 
import SearchBar from './SearchBar';

// --- Type Definition for better code quality ---
type Division = {
  name: string;
  path: string;
  description: string;
  icon: React.ElementType;
};

// --- Data section (preserved) ---
const divisions: Division[] = [
  { name: 'IT Services', path: '/it-services', description: 'Advanced technology solutions and services', icon: Cpu },
  { name: 'BPO Services', path: '/bpo-services', description: 'Business process outsourcing solutions', icon: Users },
  { name: 'KPO Services', path: '/kpo-services', description: 'Knowledge process outsourcing expertise', icon: Brain },
  { name: 'Consultancy', path: '/consultancy', description: 'Strategic business consulting services', icon: Briefcase },
  { name: 'ELSxGlobal', path: '/enterprise-it', description: 'Enterprise IT Solutions & Digital Transformation', icon: Globe }
];

// --- Main Navbar Component ---
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isModalOpen = isMenuOpen || isSearchOpen;
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen, isSearchOpen]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    // CRITICAL FIX: Extremely high z-index and a permanent clean background.
    <nav className={`fixed w-full bg-white z-[1000] transition-shadow duration-300 border-b border-gray-200/80 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-9 w-9 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ELSxGlobal</span>
              <span className="text-xs text-purple-600">Part of EvolucentSphere</span>
            </div>
          </Link>

          {/* --- Desktop Menu - Refined for a cleaner look --- */}
          <div className="hidden md:flex items-center space-x-6">
            <div 
              onMouseEnter={() => setIsMegaMenuOpen(true)} 
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="relative"
            >
              <button className="flex items-center text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Divisions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isMegaMenuOpen && <MegaMenu divisions={divisions} />}
              </AnimatePresence>
            </div>

            {/* Refined link styles */}
            <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">About</Link>
            <Link to="/services" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Services</Link>
            <Link to="/technologies" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Technologies</Link>
            <Link to="/case-studies" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Case Studies</Link>
            <Link to="/careers" className="flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors">
              <Briefcase className="h-4 w-4 mr-1.5" /> Careers
            </Link>
            <Link to="/investor-relations" className="flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors">
              <Globe className="h-4 w-4 mr-1.5" /> Investors
            </Link>
            <Link to="/ai-lab" className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              <Cpu className="h-5 w-5 mr-1.5" /> AI Lab
            </Link>

            <div className="flex items-center space-x-4">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-500 hover:text-purple-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>

              {/* ENHANCED BUTTONS with better sizing and style */}
              <StyledEmployeeLoginButton />
              <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-purple-700 transition-all transform hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-600 p-2"><Search className="h-5 w-5" /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
              {!isMenuOpen && <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
        
      {/* Modals with higher z-index than the navbar itself */}
      <AnimatePresence>
        {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && <MobileMenuPanel divisions={divisions} closeMenu={closeMobileMenu} />}
      </AnimatePresence>
    </nav>
  );
}

// --- Styled Employee Login Button Component (Placeholder) ---
// This is a new, styled component to match the desired compact look.
const StyledEmployeeLoginButton = () => (
  <button className="flex items-center space-x-2.5 bg-gray-800 text-white px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-900 transition-colors">
    <KeyRound className="h-4 w-4" />
    <span>Employee Portal</span>
  </button>
);


// --- Modal & Panel Sub-Components (with higher z-index) ---

const SearchModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001] flex justify-center items-start pt-20 px-6"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-lg"
    >
      <SearchBar />
    </motion.div>
  </motion.div>
);

const MegaMenu = ({ divisions }: { divisions: Division[] }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
    >
        <div className="w-screen max-w-sm bg-white shadow-lg rounded-lg p-5 ring-1 ring-black ring-opacity-5">
            <div className="grid gap-4">
                {divisions.map((division) => (
                    <Link key={division.path} to={division.path} className="group flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-100 text-purple-600">
                            <division.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{division.name}</p>
                            <p className="text-sm text-gray-500">{division.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </motion.div>
);

const MobileMenuPanel = ({ divisions, closeMenu }: { divisions: Division[], closeMenu: () => void }) => {
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  
  return (
    <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[1001] p-6 md:hidden shadow-xl"
    >
        <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button onClick={closeMenu} className="p-2 -mr-2"><X className="h-6 w-6 text-gray-600" /></button>
        </div>
        
        {/* Mobile menu content remains the same, just inside the styled panel */}
        <div className="flex flex-col space-y-1">
            <div className="border-b border-gray-200 pb-2 mb-2">
              <button onClick={() => setIsDivisionsOpen(!isDivisionsOpen)} className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-700">
                <span>Divisions</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isDivisionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    <div className="flex flex-col space-y-2 pt-2">
                      {divisions.map((d) => ( <Link key={d.path} to={d.path} className="block py-2 text-gray-600 hover:text-purple-600" onClick={closeMenu}>{d.name}</Link> ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>About</Link>
            <Link to="/services" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>Services</Link>
            <Link to="/technologies" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>Technologies</Link>
            <Link to="/case-studies" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>Case Studies</Link>
            <Link to="/careers" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>Careers</Link>
            <Link to="/investor-relations" className="py-3 text-lg font-medium text-gray-700" onClick={closeMenu}>Investors</Link>
            <Link to="/ai-lab" className="py-3 text-lg font-medium text-purple-600" onClick={closeMenu}>AI Lab</Link>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6 flex flex-col space-y-4">
            <StyledEmployeeLoginButton />
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 text-center font-semibold" onClick={closeMenu}>
                Contact Us
            </Link>
        </div>
    </motion.div>
  );
};