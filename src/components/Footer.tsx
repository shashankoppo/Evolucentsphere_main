import React from 'react';
import { Brain, Twitter, Linkedin, Facebook, Instagram, ExternalLink, Mail, Phone, MapPin, Youtube, Github, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOFooterLinks, crossDomainLinks } from './CrossDomainLinks';
import { config } from '../lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Get links from centralized data
  const parentCompany = crossDomainLinks.find(link => link.category === 'parent');
  const mainDivisions = crossDomainLinks.filter(link => link.category === 'division');
  const techSubdivisions = crossDomainLinks.filter(link => 
    link.category === 'subdivision' && link.parentDivision === 'ELSxTech'
  );

  const footerSections = {
    services: [
      { name: 'AI & Machine Learning', path: '/it-services/ai-analytics', keywords: 'Artificial Intelligence, Machine Learning, Data Science' },
      { name: 'Cloud Computing', path: '/it-services/cloud-infrastructure', keywords: 'Cloud Migration, AWS, Azure, Multi-Cloud' },
      { name: 'Cybersecurity', path: '/it-services/cybersecurity', keywords: 'Security Solutions, Threat Protection, Compliance' },
      { name: 'Digital Transformation', path: '/it-services/digital-transformation', keywords: 'Business Modernization, Process Automation' },
      { name: 'Software Development', path: '/it-services/software-development', keywords: 'Custom Applications, Web Development, Mobile Apps' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Technologies', path: '/technologies' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Careers', path: '/careers' },
      { name: 'Investor Relations', path: '/investor-relations' },
      { name: 'AI Lab', path: '/ai-lab' }
    ],
    industries: [
      { name: 'Banking & Finance', path: '/industries/banking' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Manufacturing', path: '/industries/manufacturing' },
      { name: 'Retail & E-commerce', path: '/industries/retail' },
      { name: 'Insurance', path: '/industries/insurance' },
      { name: 'Government', path: '/industries/government' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Sitemap', path: '/sitemap' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: config.app.social.linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: config.app.social.twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: config.app.social.facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: config.app.social.instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, url: config.app.social.youtube, color: 'hover:text-red-500' },
    { name: 'GitHub', icon: Github, url: config.app.social.github, color: 'hover:text-gray-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Cross-Domain Links Section */}
      <div className="bg-gray-800">
        <SEOFooterLinks />
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="h-10 w-10 text-purple-400" />
                <div>
                  <span className="text-2xl font-bold">EvolucentSphere</span>
                  <p className="text-sm text-gray-400">Flagship Division: ELSxGlobal</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses through innovative AI solutions, digital transformation, 
                and comprehensive outsourcing services via our flagship ELSxGlobal division. 
                EvolucentSphere Pvt. Ltd. delivers excellence across multiple industries globally since 2009.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3" />
                  <div className="flex flex-col">
                    <span>{config.app.contact.phone}</span>
                    <span>{config.app.contact.phone2}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>{config.app.contact.email}</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-3 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Global Presence:</p>
                    <ul className="text-sm space-y-1">
                      {config.app.locations.map((location, index) => (
                        <li key={index}>📍 {location}</li>
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
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-gray-800`}
                    aria-label={`Follow EvolucentSphere on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Our Services</h3>
              <ul className="space-y-3">
                {footerSections.services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Company</h3>
              <ul className="space-y-3">
                {footerSections.company.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Divisions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Our Divisions</h3>
              <ul className="space-y-3">
                {parentCompany && (
                  <li>
                    <a
                      href={parentCompany.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                    >
                      {parentCompany.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                )}
                {mainDivisions.map((division, index) => (
                  <li key={index}>
                    <a
                      href={division.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                    >
                      {division.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Industries</h3>
              <ul className="space-y-3">
                {footerSections.industries.map((industry, index) => (
                  <li key={index}>
                    <Link 
                      to={industry.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ELSxTech Subdivisions */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-purple-400">
              ELSxTech Specialized Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techSubdivisions.map((subdivision, index) => (
                <a
                  key={index}
                  href={subdivision.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm text-center p-3 rounded-lg hover:bg-gray-800 flex items-center justify-center"
                >
                  <subdivision.icon className="h-4 w-4 mr-2" />
                  {subdivision.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-6 lg:mb-0 text-center lg:text-left">
                <p className="mb-2">
                  © {currentYear} <strong>EvolucentSphere Pvt. Ltd.</strong> All rights reserved. Flagship Division: <strong>ELSxGlobal</strong>
                </p>
                <p className="text-xs">
                  Delivering enterprise solutions through ELSxGlobal across BPO, KPO, IT Services, and Strategic Consulting globally since 2009.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                {footerSections.legal.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <a 
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-Rich Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6">
          <div className="text-center text-xs text-gray-500 space-y-3">
            <div>
              <strong>Core Services:</strong> BPO Services, KPO Services, IT Solutions, AI Development, 
              Cloud Computing, Digital Transformation, Business Consulting, Cybersecurity, 
              Data Analytics, Enterprise Solutions, Offshore Development, Global Outsourcing, 
              Customer Support, Back Office Operations, Research Analytics, Software Development
            </div>
            <div>
              <strong>Technology Expertise:</strong> Artificial Intelligence, Machine Learning, 
              Cloud Computing (AWS, Azure, GCP), Cybersecurity, IoT, Blockchain, DevOps, 
              Microservices, API Development, Mobile Apps, Web Development, Data Science
            </div>
            <div>
              <strong>Global Locations:</strong> India (Jabalpur, Indore, Pune) | Netherlands (Eindhoven) | 
              United States (Chicago) | 24/7 Global Service Delivery Across 30+ Countries
            </div>
            <div>
              <strong>Industries Served:</strong> Banking & Finance, Healthcare, Manufacturing, 
              Retail & E-commerce, Insurance, Government, Education, Automotive, Energy & Utilities
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}