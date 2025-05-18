import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, ArrowRight, Globe, Users, Shield, Brain } from 'lucide-react';
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

export default function Home() {
  return (
    <div className="relative">
      <SEOHead 
        title="ELSxGlobal - Transform Your Business with AI-Powered Solutions"
        description="ELSxGlobal delivers transformative business solutions through AI, quantum computing, and advanced technology services. Part of EvolucentSphere."
        keywords={[
          'ELSxGlobal',
          'AI Solutions',
          'Digital Transformation',
          'Quantum Computing',
          'Business Innovation',
          'Technology Services',
          'Enterprise Solutions'
        ]}
      />

      {/* Brand Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            Part of <span className="font-semibold">ELSxGlobal</span> - Transforming Businesses Worldwide
          </p>
        </div>
      </div>

      <Hero />
      
      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">30+</div>
              <div className="text-gray-600">Countries Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Global Clients</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Service Uptime</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
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

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600">Follow ELSxGlobal on social media for the latest updates</p>
          </motion.div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/company/elsxglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
            >
              <Facebook className="h-8 w-8 text-[#1877F2]" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay Updated with ELSxGlobal
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Subscribe to our newsletter for the latest insights and innovations
            </motion.p>
            <motion.form 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-900 min-w-[300px]"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center group">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}