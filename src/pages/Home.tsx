import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, ArrowRight, Globe, Users, Shield, Brain, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import Technologies from '../components/Technologies';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import InnovationHub from '../components/InnovationHub';
import SEOHead from '../components/SEOHead';
import { InlineDivisionLinks } from '../components/CrossDomainLinks';
import { trackCrossDomainClick, trackServiceInterest } from '../lib/analytics';

export default function Home() {
  const handleCrossDomainClick = (domain: string, linkText: string) => {
    trackCrossDomainClick(domain, linkText, 'home_page');
  };

  const handleServiceInterest = (service: string) => {
    trackServiceInterest(service);
  };

  return (
    <div className="relative">
      <SEOHead 
        title="ELSxGlobal - Transform Your Business with AI-Powered Solutions | EvolucentSphere"
        description="ELSxGlobal delivers transformative business solutions through AI, quantum computing, and advanced technology services. Part of EvolucentSphere offering BPO, KPO, IT Services, and Strategic Consulting across Banking, Healthcare, Manufacturing, and Retail industries globally."
        keywords={[
          'ELSxGlobal',
          'EvolucentSphere',
          'AI Solutions',
          'Digital Transformation',
          'BPO Services',
          'KPO Services',
          'IT Solutions',
          'Business Consulting',
          'Quantum Computing',
          'Business Innovation',
          'Technology Services',
          'Enterprise Solutions',
          'Offshore Development',
          'Global Outsourcing',
          'Customer Support',
          'Data Analytics',
          'Cloud Computing',
          'Cybersecurity',
          'Banking Solutions',
          'Healthcare IT',
          'Manufacturing Technology',
          'Retail Solutions'
        ]}
        serviceCategory="tech"
        targetIndustries={[
          'Banking and Finance',
          'Healthcare',
          'Manufacturing',
          'Retail and E-commerce',
          'Insurance',
          'Automotive'
        ]}
        relatedServices={[
          'AI Development',
          'Cloud Migration',
          'Process Automation',
          'Business Intelligence',
          'Customer Support Outsourcing'
        ]}
      />

      {/* Enhanced Brand Banner with Cross-Domain Links */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-2 md:mb-0">
              <p className="text-sm md:text-base">
                <span className="font-semibold">ELSxGlobal</span> - A Division of{' '}
                <a 
                  href="https://evolucentsphere.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-purple-200 transition-colors"
                  onClick={() => handleCrossDomainClick('evolucentsphere.com', 'EvolucentSphere')}
                >
                  EvolucentSphere
                  <ExternalLink className="inline h-3 w-3 ml-1" />
                </a>
                {' '}| Transforming Businesses Worldwide
              </p>
            </div>
            <div className="text-xs">
              <InlineDivisionLinks />
            </div>
          </div>
        </div>
      </div>

      <Hero />
      
      {/* Enhanced Quick Stats with Industry Focus */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="text-gray-600">
              Delivering excellence across Banking, Healthcare, Manufacturing, and Retail sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => handleServiceInterest('Global Operations')}
            >
              <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-purple-600">30+</div>
              <div className="text-gray-600">Countries Served</div>
              <div className="text-xs text-gray-500 mt-1">Global Service Delivery</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleServiceInterest('Enterprise Solutions')}
            >
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Global Clients</div>
              <div className="text-xs text-gray-500 mt-1">Enterprise & SMB</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => handleServiceInterest('Reliable Services')}
            >
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Service Uptime</div>
              <div className="text-xs text-gray-500 mt-1">24/7 Operations</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => handleServiceInterest('AI Solutions')}
            >
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">AI & Technology</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <Products />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <Awards />
      <InnovationHub />

      {/* Enhanced Social Media Section with Cross-Domain Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With ELSxGlobal</h2>
            <p className="text-xl text-gray-600 mb-6">
              Follow us for the latest insights in AI, Digital Transformation, and Business Innovation
            </p>
            <div className="text-sm text-gray-500">
              Part of the{' '}
              <a 
                href="https://evolucentsphere.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium"
                onClick={() => handleCrossDomainClick('evolucentsphere.com', 'EvolucentSphere ecosystem')}
              >
                EvolucentSphere ecosystem
                <ExternalLink className="inline h-3 w-3 ml-1" />
              </a>
              {' '}delivering comprehensive business solutions globally
            </div>
          </motion.div>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/company/elsxglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-label="Follow ELSxGlobal on LinkedIn for business insights and industry updates"
            >
              <Linkedin className="h-8 w-8 text-[#0A66C2]" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/elsxglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-label="Follow ELSxGlobal on Instagram for company culture and behind-the-scenes content"
            >
              <Instagram className="h-8 w-8 text-[#E4405F]" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/ELSxGlobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              aria-label="Follow ELSxGlobal on Facebook for news and community updates"
            >
              <Facebook className="h-8 w-8 text-[#1877F2]" />
            </motion.a>
          </div>

          {/* Cross-Domain Social Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Also follow our parent company and divisions:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://linkedin.com/company/evolucentsphere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center"
                onClick={() => handleCrossDomainClick('linkedin.com', 'EvolucentSphere LinkedIn')}
              >
                EvolucentSphere <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://linkedin.com/company/elsxtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center"
                onClick={() => handleCrossDomainClick('linkedin.com', 'ELSxTech LinkedIn')}
              >
                ELSxTech <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://linkedin.com/company/elsxbpo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center"
                onClick={() => handleCrossDomainClick('linkedin.com', 'ELSxBPO LinkedIn')}
              >
                ELSxBPO <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section with Industry Targeting */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay Updated with ELSxGlobal Insights
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get the latest insights on AI, Digital Transformation, BPO/KPO trends, and industry-specific solutions
            </motion.p>
            <motion.form 
              className="flex flex-col md:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your business email"
                className="px-6 py-3 rounded-lg text-gray-900 min-w-[300px]"
                aria-label="Enter your email for ELSxGlobal newsletter subscription"
              />
              <select className="px-6 py-3 rounded-lg text-gray-900">
                <option value="">Select Your Industry</option>
                <option value="banking">Banking & Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="insurance">Insurance</option>
                <option value="other">Other</option>
              </select>
              <button 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center group"
                onClick={() => handleServiceInterest('Newsletter Subscription')}
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
            <p className="text-sm opacity-75">
              Join 10,000+ business leaders receiving insights on technology trends and business transformation
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}