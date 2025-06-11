import React, { useState, useEffect } from 'react'; // <--- THIS IS THE FIX
import { Link } from 'react-router-dom';
// Framer Motion for next-gen animations
import { motion, AnimatePresence } from 'framer-motion'; 
// Icons are the same, just added a few more for the mega menu
import { Menu, X, Search, Cpu, Briefcase, Users, Globe, Brain, ChevronDown } from 'lucide-react';

// These imports are preserved as requested
import SearchBar from './SearchBar';
import EmployeeLoginButton from './EmployeeLoginButton';

// --- Data section (from your original code, just moved up for clarity) ---
// All your original divisions and links are preserved here.
const divisions = [
  { name: 'IT Services', path: '/it-services', description: 'Advanced technology solutions and services', icon: Cpu },
  { name: 'BPO Services', path: '/bpo-services', description: 'Business process outsourcing solutions', icon: Users },
  { name: 'KPO Services', path: '/kpo-services', description: 'Knowledge process outsourcing expertise', icon: Brain },
  { name: 'Consultancy', path: '/consultancy', description: 'Strategic business consulting services', icon: Briefcase },
  { name: 'ELSxGlobal', path: '/enterprise-it', description: 'Enterprise IT Solutions & Digital Transformation', icon: Globe }
];

// --- Main Navbar Component ---
export default function Navbar() {
  // Your original state variables are preserved
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // This state is for the new mega menu on desktop, controlled by hover
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Your original scroll effect logic is preserved
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // A small threshold
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // New: This effect improves UX by preventing background scroll when a menu is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { // Cleanup function
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isSearchOpen]);

  // Helper to close the mobile menu, used on link clicks
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' // Enhanced "next-gen" scrolled look
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand - Preserved */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-10 w-10 text-purple-600" />
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ELSxGlobal</span>
              <span className={`text-xs transition-colors ${isScrolled ? 'text-purple-600' : 'text-purple-300'}`}>Part of EvolucentSphere</span>
            </div>
          </Link>

          {/* --- Desktop Menu - Preserved & Enhanced --- */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Divisions Dropdown -> Upgraded to Mega Menu on hover */}
            <div 
              onMouseEnter={() => setIsMegaMenuOpen(true)} 
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="relative"
            >
              <button className={`flex items-center transition-colors ${isScrolled ? 'text-gray-600' : 'black-200'} hover:text-purple-600`}>
                Divisions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* The New Mega Menu Component */}
              <AnimatePresence>
                {isMegaMenuOpen && <MegaMenu divisions={divisions} />}
              </AnimatePresence>
            </div>

            {/* All original links preserved */}
            <Link to="/about" className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>About</Link>
            <Link to="/services" className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>Services</Link>
            <Link to="/technologies" className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>Technologies</Link>
            <Link to="/case-studies" className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>Case Studies</Link>
            <Link to="/careers" className={`flex items-center transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>
              <Briefcase className="h-4 w-4 mr-1" /> Careers
            </Link>
            <Link to="/investor-relations" className={`flex items-center transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>
              <Globe className="h-4 w-4 mr-1" /> Investors
            </Link>
            <Link to="/ai-lab" className="flex items-center text-purple-500 hover:text-purple-600 font-medium">
              <Cpu className="h-5 w-5 mr-1" /> AI Lab
            </Link>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'} hover:text-purple-600`}>
              <Search className="h-5 w-5" />
            </button>
            
            {/* Original components preserved */}
            <EmployeeLoginButton />
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all transform hover:scale-105">
              Contact Us
            </Link>
          </div>

          {/* --- Mobile Menu Button - Preserved --- */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <Search className="h-5 w-5" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* The icon toggle logic is preserved */}
              {isMenuOpen ? null : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* --- Search Bar Modal - Enhanced Fullscreen Overlay --- */}
        <AnimatePresence>
            {isSearchOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start pt-20 px-6"
                    onClick={() => setIsSearchOpen(false)}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                        className="w-full max-w-lg"
                    >
                        <SearchBar />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* --- Mobile Menu - Upgraded to Sliding Panel --- */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenuPanel divisions={divisions} closeMenu={closeMobileMenu} />}
      </AnimatePresence>
    </nav>
  );
}


// --- New Sub-Component for the Mega Menu (enhances existing dropdown) ---
const MegaMenu = ({ divisions }: { divisions: typeof divisions }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2"
    >
        <div className="w-screen max-w-md bg-white shadow-lg rounded-lg p-6">
            <div className="grid gap-6">
                {divisions.map((division) => (
                    <Link key={division.path} to={division.path} className="group flex items-center p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-100 text-purple-600">
                            <division.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 group-hover:text-purple-700">{division.name}</p>
                            <p className="text-sm text-gray-500">{division.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </motion.div>
);


// --- New Sub-Component for the Mobile Menu (replaces the old dropdown) ---
const MobileMenuPanel = ({ divisions, closeMenu }: { divisions: typeof divisions, closeMenu: () => void }) => {
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  
  return (
    <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 p-6 md:hidden"
    >
        <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button onClick={closeMenu}><X className="h-6 w-6 text-gray-600" /></button>
        </div>
        
        <div className="flex flex-col space-y-2">
            {/* Mobile Accordion for Divisions */}
            <div className="border-b border-gray-200 pb-2 mb-2">
              <button onClick={() => setIsDivisionsOpen(!isDivisionsOpen)} className="w-full flex justify-between items-center py-2 text-lg font-medium text-gray-700">
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
                      {divisions.map((division) => (
                        <Link key={division.path} to={division.path} className="block py-2 text-gray-600 hover:text-purple-600" onClick={closeMenu}>
                            {division.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* All original links preserved */}
            <Link to="/about" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>About</Link>
            <Link to="/services" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>Services</Link>
            <Link to="/technologies" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>Technologies</Link>
            <Link to="/case-studies" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>Case Studies</Link>
            <Link to="/careers" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>Careers</Link>
            <Link to="/investor-relations" className="py-2 text-lg font-medium text-gray-700 hover:text-purple-600" onClick={closeMenu}>Investors</Link>
            <Link to="/ai-lab" className="py-2 text-lg font-medium text-purple-600 hover:text-purple-700" onClick={closeMenu}>AI Lab</Link>
        </div>
        
        {/* Buttons at the bottom for better layout */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col space-y-4">
            <EmployeeLoginButton />
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 text-center font-semibold" onClick={closeMenu}>
                Contact Us
            </Link>
        </div>
    </motion.div>
  );
};