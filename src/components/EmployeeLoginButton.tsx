import React, { useState } from 'react';
import { Key, Shield, ArrowRight, Lock, Zap } from 'lucide-react';
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
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
      
      {/* Main button */}
      <a
        href="https://elsxglobal.cloud"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Icon with animation */}
        <div className="relative mr-3">
          <motion.div
            animate={isHovered ? { rotate: 15 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Key className="h-5 w-5" />
          </motion.div>
          
          {/* Sparkle effect */}
          {isHovered && (
            <motion.div
              className="absolute -top-1 -right-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Zap className="h-3 w-3 text-yellow-300" />
            </motion.div>
          )}
        </div>

        {/* Text content */}
        <div className="relative flex flex-col">
          <span className="text-sm font-bold tracking-wide">EMPLOYEE</span>
          <span className="text-xs opacity-90 -mt-1">Internal Access</span>
        </div>

        {/* Arrow with animation */}
        <motion.div
          className="relative ml-3"
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>

        {/* Security badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg">
          <Shield className="h-3 w-3" />
        </div>
      </a>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
        <div className="text-center">
          <div className="font-semibold text-amber-400">Authorized Personnel Only</div>
          <div className="text-gray-300">ELSxGlobal Internal Portal</div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>

      {/* Exclusive badge */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
        EXCLUSIVE
      </div>
    </motion.div>
  );
}