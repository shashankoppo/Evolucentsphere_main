import React from 'react';
import { ArrowRight, Brain, Shield, Cpu, Users, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../lib/config';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100">Flagship Division: ELSxGlobal</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  EvolucentSphere
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-light text-cyan-100 mb-4">
                Transform. Innovate. Excel.
              </p>

              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                Your trusted partner for comprehensive business transformation. Experience innovation with our BPO, KPO, IT Services, and Business Consultancy solutions powered by cutting-edge technology.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Transform Your Business
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${config.app.contact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-105"
                    aria-label="WhatsApp Support"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="sr-only sm:not-sr-only">Support</span>
                  </a>
                  <a
                    href={`https://wa.me/${config.app.contact.phone2.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                    aria-label="WhatsApp Business"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="sr-only sm:not-sr-only">Sales</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: Users, value: '500+', label: 'Global Clients' },
                { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
                { icon: Cpu, value: '24/7', label: 'Support' },
                { icon: Brain, value: '15+', label: 'Years Expert' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Animated Illustration */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated circles */}
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-8 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-16 border-2 border-indigo-500/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/10">
                    <Brain className="h-20 w-20 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              {[
                { icon: Shield, className: 'top-10 right-20', delay: 0 },
                { icon: Users, className: 'bottom-20 right-10', delay: 0.5 },
                { icon: Cpu, className: 'top-1/3 left-5', delay: 1 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.className} p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + item.delay }}
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
