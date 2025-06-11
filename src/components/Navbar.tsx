import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Cpu, Briefcase, Users, Globe, Brain, ChevronDown, KeyRound, Building, Info, Server, FileText, MoreHorizontal } from 'lucide-react';

// Preserved component imports
import SearchBar from './SearchBar'; 
// NOTE: I'm using the styled placeholder button from the previous step.
// import EmployeeLoginButton from './EmployeeLoginButton';

// --- Type Definitions ---
type NavLinkType = {
  name: string;
  path: string;
  icon?: React.ElementType;
  isPrimary: boolean; // True for always visible links, false for links that collapse into "More"
};

type Division = {
  name: string;
  path: string;
  description: string;
  icon: React.ElementType;
};

// --- Centralized Navigation Data for easy management ---
const NAV_LINKS: NavLinkType[] = [
  { name: 'Services', path: '/services', icon: Server, isPrimary: true },
  { name: 'Technologies', path: '/technologies', icon: Cpu, isPrimary: true },
  { name: 'Case Studies', path: '/case-studies', icon: FileText, isPrimary: false },
  { name: 'About', path: '/about', icon: Info, isPrimary: false },
  { name: 'Careers', path: '/careers', icon: Briefcase, isPrimary: false },
  { name: 'Investors', path: '/investor-relations', icon: Globe, isPrimary: false },
];

const divisions: Division[] = [
  { name: 'IT Services', path: '/it-services', description: 'Advanced technology solutions', icon: Cpu },
  { name:... // (rest of your divisions data)
];

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
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Brain className="h-9 w-9 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ELSxGlobal</span>
              <span className="text-xs text-purple-600">Part of EvolucentSphere</span>
            </div>
          </Link>

          {/* --- Adaptive Desktop Nav (Switches to mobile at `lg`) --- */}
          <DesktopNav />

          {/* --- Mobile Menu Trigger (Appears at `lg` breakpoint) --- */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-600 p-2">
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

// --- Adaptive Desktop Navigation Component ---
const DesktopNav = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryLinks = NAV_LINKS.filter(l => l.isPrimary);
  const secondaryLinks = NAV_LINKS.filter(l => !l.isPrimary);

  return (
    <div className="hidden lg:flex items-center justify-end flex-grow">
      <nav className="flex items-center space-x-7 text-sm font-medium">
        <div onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)} className="relative">
          <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
            Divisions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>{isMegaMenuOpen && <MegaMenu />}</AnimatePresence>
        </div>

        {primaryLinks.map(link => <NavLink key={link.name} to={link.path}>{link.name}</NavLink>)}

        {/* --- "More" Dropdown for secondary links --- */}
        <div onMouseEnter={() => setIsMoreMenuOpen(true)} onMouseLeave={() => setIsMoreMenuOpen(false)} className="relative">
          <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <AnimatePresence>{isMoreMenuOpen && <MoreDropdown links={secondaryLinks} />}</AnimatePresence>
        </div>
        
        <Link to="/ai-lab" className="flex items-center text-purple-600 hover:text-purple-700">
          <Cpu className="h-5 w-5 mr-1.5" /> AI Lab
        </Link>
      </nav>

      <div className="flex items-center space-x-4 ml-8">
        <StyledEmployeeLoginButton />
        <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-purple-700 transition-all transform hover:scale-105">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

// --- Mobile Menu Panel (Redesigned for better UX) ---
const MobileMenuPanel = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[1001] shadow-xl lg:hidden"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
             <span className="font-bold text-lg">Menu</span>
             <button onClick={closeMenu} className="p-2 -mr-2"><X className="h-6 w-6 text-gray-600" /></button>
          </div>
          {/* Search bar is now inside the mobile menu */}
          <SearchBar />
        </div>
        
        <nav className="flex-grow overflow-y-auto p-4">
          <div className="flex flex-col space-y-2">
            <button onClick={() => setIsDivisionsOpen(!isDivisionsOpen)} className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-800">
              <span className="flex items-center"><Building className="h-5 w-5 mr-3 text-purple-600"/>Divisions</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isDivisionsOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-8">
                  <div className="flex flex-col space-y-2 py-2 border-l border-gray-200">
                    {divisions.map((d) => ( <Link key={d.path} to={d.path} className="block py-1.5 pl-4 text-gray-600" onClick={closeMenu}>{d.name}</Link> ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {NAV_LINKS.map(link => (
              <Link key={link.name} to={link.path} className="flex items-center py-3 text-lg font-medium text-gray-800" onClick={closeMenu}>
                {link.icon && <link.icon className="h-5 w-5 mr-3 text-purple-600"/>} {link.name}
              </Link>
            ))}
            <Link to="/ai-lab" className="flex items-center py-3 text-lg font-medium text-purple-600" onClick={closeMenu}>
                <Cpu className="h-5 w-5 mr-3 text-purple-600"/>AI Lab
            </Link>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <StyledEmployeeLoginButton />
            <Link to="/contact" className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg text-center font-semibold" onClick={closeMenu}>
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

const StyledEmployeeLoginButton = () => (
  <button className="w-full justify-center flex items-center space-x-2.5 bg-gray-800 text-white px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-900 transition-colors">
    <KeyRound className="h-4 w-4" />
    <span>Employee Portal</span>
  </button>
);

const MoreDropdown = ({ links }: { links: NavLinkType[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="absolute top-full right-0 mt-3 w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5"
  >
    <div className="py-1">
      {links.map(link => (
        <Link key={link.name} to={link.path} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          {link.icon && <link.icon className="h-4 w-4 mr-3 text-gray-400"/>}
          {link.name}
        </Link>
      ))}
    </div>
  </motion.div>
);

const MegaMenu = () => ( // Props removed as `divisions` is available in scope
    <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
    >
        <div className="w-screen max-w-sm bg-white shadow-lg rounded-lg p-5 ring-1 ring-black ring-opacity-5">
            <div className="grid gap-4">
                {divisions.map((d) => (
                    <Link key={d.path} to={d.path} className="group flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-purple-100 text-purple-600">
                            <d.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{d.name}</p>
                            <p className="text-sm text-gray-500">{d.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </motion.div>
);