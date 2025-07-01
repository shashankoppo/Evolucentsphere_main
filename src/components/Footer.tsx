import React from 'react';
import { Brain, Twitter, Linkedin, Facebook, Instagram, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOFooterLinks } from './CrossDomainLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { name: 'AI Solutions', path: '/services', keywords: 'Artificial Intelligence, Machine Learning' },
      { name: 'Cloud Computing', path: '/services', keywords: 'Cloud Migration, AWS, Azure' },
      { name: 'Cybersecurity', path: '/services', keywords: 'Security Solutions, Threat Protection' },
      { name: 'Data Analytics', path: '/services', keywords: 'Business Intelligence, Big Data' },
      { name: 'Digital Transformation', path: '/services', keywords: 'Business Modernization' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Technologies', path: '/technologies' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Careers', path: '/careers' },
      { name: 'Investor Relations', path: '/investor-relations' }
    ],
    divisions: [
      { name: 'ELSxTech', url: 'https://tech.elsxglobal.cloud', external: true },
      { name: 'ELSxBPO', url: 'https://bpo.elsxglobal.cloud', external: true },
      { name: 'ELSxKPO', url: 'https://kpo.elsxglobal.cloud', external: true },
      { name: 'ELSxConsultancy', url: 'https://consultancy.elsxglobal.cloud', external: true },
      { name: 'EvolucentSphere', url: 'https://evolucentsphere.com', external: true }
    ],
    industries: [
      { name: 'Banking & Finance', path: '/industries/banking' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Manufacturing', path: '/industries/manufacturing' },
      { name: 'Retail & E-commerce', path: '/industries/retail' },
      { name: 'Insurance', path: '/industries/insurance' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/elsxglobal', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/elsxglobal', color: 'hover:text-blue-600' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/elsxglobal', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/elsxglobal', color: 'hover:text-pink-500' }
  ];

  const locations = [
    'Jabalpur, India',
    'Indore, India',
    'Pune, India',
    'Eindhoven, Netherlands',
    'Chicago, United States'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Cross-Domain Links Section */}
      <div className="bg-gray-800">
        <SEOFooterLinks />
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="h-8 w-8 text-purple-400" />
                <div>
                  <span className="text-xl font-bold">ELSxGlobal</span>
                  <p className="text-sm text-gray-400">Part of EvolucentSphere</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming businesses through innovative AI solutions, digital transformation, 
                and comprehensive outsourcing services. A leading division of EvolucentSphere 
                delivering excellence across multiple industries globally.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 724 755 8873</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@elsxglobal.cloud</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <div>
                    <p>Global Presence:</p>
                    <ul className="text-sm mt-1">
                      {locations.map((location, index) => (
                        <li key={index}>{location}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors`}
                    aria-label={`Follow ELSxGlobal on ${social.name}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {footerSections.services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                      title={service.keywords}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerSections.company.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
              <ul className="space-y-2">
                {footerSections.divisions.map((division, index) => (
                  <li key={index}>
                    {division.external ? (
                      <a
                        href={division.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                      >
                        {division.name}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    ) : (
                      <Link 
                        to={division.url || '#'} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {division.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerSections.industries.map((industry, index) => (
                  <li key={index}>
                    <Link 
                      to={industry.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© {currentYear} ELSxGlobal, A Division of EvolucentSphere Pvt. Ltd. All rights reserved.</p>
                <p className="mt-1">
                  Delivering enterprise solutions across BPO, KPO, IT Services, and Strategic Consulting globally.
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-Rich Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-6">
          <div className="text-center text-xs text-gray-500">
            <p>
              <strong>Keywords:</strong> BPO Services, KPO Services, IT Solutions, AI Development, 
              Cloud Computing, Digital Transformation, Business Consulting, Cybersecurity, 
              Data Analytics, Enterprise Solutions, Offshore Development, Global Outsourcing, 
              Customer Support, Back Office Operations, Research Analytics, Software Development
            </p>
            <p className="mt-2">
              <strong>Locations:</strong> India (Jabalpur, Indore, Pune) | Netherlands (Eindhoven) | 
              United States (Chicago) | Global Service Delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}