import React, { useState } from 'react';
import { Key, Shield, ArrowRight, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmployeeLoginButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      
      {/* Main button */}
      <a
        href="https://elsxglobal.cloud"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600"
      >
        {/* Icon with subtle animation */}
        <div className="relative mr-2">
          <motion.div
            animate={isHovered ? { rotate: 5 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Key className="h-4 w-4" />
          </motion.div>
        </div>

        {/* Text content */}
        <div className="relative flex items-center">
          <span className="text-sm font-semibold tracking-wide">Employee Portal</span>
        </div>

        {/* Arrow with subtle animation */}
        <motion.div
          className="relative ml-2"
          animate={isHovered ? { x: 2 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-3 w-3" />
        </motion.div>

        {/* Security indicator */}
        <div className="absolute -top-1 -right-1 bg-slate-600 text-white rounded-full p-0.5 shadow-sm">
          <Shield className="h-2.5 w-2.5" />
        </div>
      </a>

      {/* Professional tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 border border-slate-600">
        <div className="text-center">
          <div className="font-medium text-slate-200">Internal Access</div>
          <div className="text-slate-400 text-xs">ELSxGlobal Employee Portal</div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>

      {/* Discrete access indicator */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-slate-600 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-sm">
        <div className="flex items-center space-x-1">
          <Users className="h-2.5 w-2.5" />
          <span>STAFF</span>
        </div>
      </div>
    </motion.div>
  );
}