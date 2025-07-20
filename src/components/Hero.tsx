import React from 'react';
import { ArrowRight, Brain, Shield, Cpu, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <Brain className="h-12 w-12 text-purple-600 mr-4" />
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                EvolucentSphere
              </h1>
              <p className="text-xl text-purple-600">
                Flagship Division: ELSxGlobal
              </p>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform. Innovate. Excel.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your trusted partner for comprehensive business transformation through our flagship ELSxGlobal division. 
            Experience innovation with our BPO, KPO, IT Services, and Business Consultancy solutions powered by cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Transform Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-gray-700 bg-white border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">500+</h3>
              <p className="text-gray-600">Global Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Service Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}