import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, ArrowRight, Globe, Users, Shield, Brain, ExternalLink, Star, Award, TrendingUp } from 'lucide-react';
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
import { InlineDivisionLinks, crossDomainLinks } from '../components/CrossDomainLinks';
import { config } from '../lib/config';
import { trackCrossDomainClick, trackServiceInterest } from '../lib/analytics';

export default function Home() {
  const handleCrossDomainClick = (domain: string, linkText: string) => {
    trackCrossDomainClick(domain, linkText, 'home_page');
  };

  const handleServiceInterest = (service: string) => {
    trackServiceInterest(service);
  };

  // Get parent company link from centralized data
  const parentCompany = crossDomainLinks.find(link => link.category === 'parent');

  return (
    <div className="relative">
      <SEOHead 
        title="EvolucentSphere - Transform Your Business with AI-Powered Solutions | ELSxGlobal Flagship Division"
        description="EvolucentSphere delivers transformative business solutions through AI, quantum computing, and advanced technology services via our flagship ELSxGlobal division. Offering BPO, KPO, IT Services, and Strategic Consulting across Banking, Healthcare, Manufacturing, and Retail industries globally."
        keywords={[
          'EvolucentSphere',
          'ELSxGlobal',
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
          'Retail Solutions',
          'Machine Learning',
          'Artificial Intelligence',
          'Process Automation',
          'Software Development',
          'Digital Marketing',
          'Business Intelligence',
          'Enterprise Software',
          'Technology Consulting',
          'Innovation Labs',
          'Strategic Planning'
        ]}
        serviceCategory="tech"
        targetIndustries={[
          'Banking and Finance',
          'Healthcare',
          'Manufacturing',
          'Retail and E-commerce',
          'Insurance',
          'Automotive',
          'Government',
          'Education'
        ]}
        relatedServices={[
          'AI Development',
          'Cloud Migration',
          'Process Automation',
          'Business Intelligence',
          'Customer Support Outsourcing',
          'Digital Marketing',
          'Cybersecurity Solutions',
          'Enterprise Software Development'
        ]}
      />

      {/* Enhanced Brand Banner with Cross-Domain Links */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 sm:py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-3 md:mb-0">
              <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">
                <span className="font-bold text-purple-100">EvolucentSphere Pvt. Ltd.</span> - Flagship Division:{' '}
                {parentCompany && (
                  <a 
                    href="https://elsxglobal.cloud"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-purple-200 transition-colors"
                    onClick={() => handleCrossDomainClick('https://elsxglobal.cloud', 'ELSxGlobal')}
                  >
                    ELSxGlobal
                    <ExternalLink className="inline h-3 w-3 ml-1" />
                  </a>
                )}
                {' '}| Transforming Businesses Worldwide Since 2009
              </p>
            </div>
            <div className="text-xs hidden md:block">
              <InlineDivisionLinks />
            </div>
          </div>
        </div>
      </div>

      <Hero />
      
      {/* Enhanced Quick Stats with Industry Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Delivering excellence across Banking, Healthcare, Manufacturing, and Retail sectors 
              with our comprehensive suite of business solutions and technology services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <motion.div 
              className="text-center group cursor-pointer p-2 sm:p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => handleServiceInterest('Global Operations')}
            >
              <Globe className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">{config.metrics.countries}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Countries Served</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Global Service Delivery</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer p-2 sm:p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleServiceInterest('Enterprise Solutions')}
            >
              <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">{config.metrics.clients}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Global Clients</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Enterprise & SMB</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer p-2 sm:p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => handleServiceInterest('Reliable Services')}
            >
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">{config.metrics.uptime}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Service Uptime</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">24/7 Operations</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer p-2 sm:p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => handleServiceInterest('AI Solutions')}
            >
              <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Years Experience</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">AI & Technology</div>
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

      {/* Enhanced Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Delivering Measurable Results
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Our track record speaks for itself - consistent growth and client success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-600 mx-auto mb-2 sm:mb-4" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">{config.metrics.growth}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Revenue Growth</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Year over Year</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-600 mx-auto mb-2 sm:mb-4" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{config.metrics.employees}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Team Members</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Global Workforce</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-600 mx-auto mb-2 sm:mb-4" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600">{config.metrics.satisfaction}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Client Satisfaction</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Customer Rating</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-2 sm:mb-4" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Industry Awards</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Media Section with Cross-Domain Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Connect With ELSxGlobal</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 px-4">
              Follow us for the latest insights in AI, Digital Transformation, and Business Innovation
            </p>
            <div className="text-sm text-gray-500">
              Part of the{' '}
              {parentCompany && (
                <a 
                  href={parentCompany.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                  onClick={() => handleCrossDomainClick(parentCompany.url, 'EvolucentSphere ecosystem')}
                >
                  EvolucentSphere ecosystem
                  <ExternalLink className="inline h-3 w-3 ml-1" />
                </a>
              )}
              {' '}delivering comprehensive business solutions globally
            </div>
          </motion.div>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href={config.app.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-label="Follow ELSxGlobal on LinkedIn for business insights and industry updates"
            >
              <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A66C2]" />
            </motion.a>
            <motion.a
              href={config.app.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-label="Follow ELSxGlobal on Instagram for company culture and behind-the-scenes content"
            >
              <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-[#E4405F]" />
            </motion.a>
            <motion.a
              href={config.app.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              aria-label="Follow ELSxGlobal on Facebook for news and community updates"
            >
              <Facebook className="h-6 w-6 sm:h-8 sm:w-8 text-[#1877F2]" />
            </motion.a>
          </div>

          {/* Cross-Domain Social Links */}
          <div className="text-center hidden md:block">
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
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay Updated with ELSxGlobal Insights
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get the latest insights on AI, Digital Transformation, BPO/KPO trends, 
              and industry-specific solutions delivered to your inbox
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your business email"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-900 w-full sm:min-w-[250px] md:min-w-[300px] focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="Enter your email for ELSxGlobal newsletter subscription"
              />
              <select className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-900 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-300">
                <option value="">Select Your Industry</option>
                <option value="banking">Banking & Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="insurance">Insurance</option>
                <option value="government">Government</option>
                <option value="other">Other</option>
              </select>
              <button 
                className="bg-white text-purple-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center group font-medium w-full sm:w-auto"
                onClick={() => handleServiceInterest('Newsletter Subscription')}
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
            <p className="text-xs sm:text-sm opacity-75 px-4">
              Join 10,000+ business leaders receiving insights on technology trends and business transformation
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}