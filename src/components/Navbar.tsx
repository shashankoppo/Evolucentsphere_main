import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Cpu, Briefcase, Users, Globe, Brain, ChevronDown } from 'lucide-react';
import SearchBar from './SearchBar';
import EmployeeLoginButton from './EmployeeLoginButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDivision, setActiveDivision] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const divisions = [
    {
      name: 'IT Services',
      path: '/it-services',
      description: 'Advanced technology solutions and services'
    },
    {
      name: 'BPO Services',
      path: '/bpo-services',
      description: 'Business process outsourcing solutions'
    },
    {
      name: 'KPO Services',
      path: '/kpo-services',
      description: 'Knowledge process outsourcing expertise'
    },
    {
      name: 'Consultancy',
      path: '/consultancy',
      description: 'Strategic business consulting services'
    },
    {
      name: 'ELSxGlobal',
      path: '/enterprise-it',
      description: 'Enterprise IT Solutions & Digital Transformation'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-10 w-10 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ELSxGlobal</span>
              <span className="text-xs text-purple-600">Part of EvolucentSphere</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Divisions Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-purple-600"
                onMouseEnter={() => setActiveDivision('divisions')}
              >
                Divisions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 transition-all duration-200 ${
                  activeDivision === 'divisions' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseLeave={() => setActiveDivision(null)}
              >
                {divisions.map((division) => (
                  <Link
                    key={division.path}
                    to={division.path}
                    className="block px-4 py-2 hover:bg-purple-50"
                  >
                    <div className="font-medium text-gray-900">{division.name}</div>
                    <div className="text-sm text-gray-600">{division.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
            <Link to="/technologies" className="text-gray-600 hover:text-purple-600">Technologies</Link>
            <Link to="/case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</Link>
            <Link to="/careers" className="flex items-center text-gray-600 hover:text-purple-600">
              <Briefcase className="h-4 w-4 mr-1" />
              Careers
            </Link>
            <Link to="/investor-relations" className="flex items-center text-gray-600 hover:text-purple-600">
              <Globe className="h-4 w-4 mr-1" />
              Investors
            </Link>
            <Link 
              to="/ai-lab" 
              className="flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              <Cpu className="h-5 w-5 mr-1" />
              AI Lab
            </Link>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Employee Login Button */}
            <EmployeeLoginButton />

            <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4">
            <SearchBar />
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {/* Employee Login Button for Mobile */}
              <div className="flex justify-center py-4">
                <EmployeeLoginButton />
              </div>

              {/* Divisions Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="font-medium text-gray-900 mb-2">Divisions</div>
                {divisions.map((division) => (
                  <Link
                    key={division.path}
                    to={division.path}
                    className="block py-2 text-gray-600 hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {division.name}
                  </Link>
                ))}
              </div>

              <Link to="/about" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/technologies" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
              <Link to="/case-studies" className="text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
              <Link to="/careers" className="flex items-center text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                <Briefcase className="h-4 w-4 mr-1" />
                Careers
              </Link>
              <Link to="/investor-relations" className="flex items-center text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                <Globe className="h-4 w-4 mr-1" />
                Investors
              </Link>
              <Link 
                to="/ai-lab" 
                className="flex items-center text-purple-600 hover:text-purple-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Cpu className="h-5 w-5 mr-1" />
                AI Lab
              </Link>
              <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-center" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}