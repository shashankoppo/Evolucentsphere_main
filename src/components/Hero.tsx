import React from 'react';
import { ArrowRight, Brain, Shield, Cpu, Users, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../lib/config';
import { config } from '../lib/config';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1
      }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-600 mr-2 sm:mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                EvolucentSphere
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-purple-600">
                Flagship Division: ELSxGlobal
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-600 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform. Innovate. Excel.
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your trusted partner for comprehensive business transformation through our flagship ELSxGlobal division. 
            Experience innovation with our BPO, KPO, IT Services, and Business Consultancy solutions powered by cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Transform Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md text-gray-700 bg-white border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* Quick WhatsApp Contact */}
            <div className="flex gap-2 sm:gap-3 justify-center">
              <a
                href={`https://wa.me/${config.app.contact.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-md text-white bg-green-500 hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                aria-label="WhatsApp Support"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                Support
              </a>
              <a
                href={`https://wa.me/${config.app.contact.phone2.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                aria-label="WhatsApp Business"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                Business
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center p-2 sm:p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">500+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Global Clients</p>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">99.9%</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Service Uptime</p>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">24/7</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Support</p>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="flex items-center justify-center mb-2">
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">15+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}