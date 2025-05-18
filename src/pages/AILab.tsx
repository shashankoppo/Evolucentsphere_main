import React from 'react';
import { Brain, Shield, Cpu, Beaker, Zap, Network, Lock, Search, Code, Database } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AIAssistant from '../components/AIAssistant';
import { AI_CAPABILITIES } from '../lib/ai/capabilities';

export default function AILab() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <SEOHead 
        title="Aarnik AI Lab"
        description="Experience Aarnik, our advanced AI system powered by quantum computing and neural networks."
        keywords={['Aarnik AI', 'Quantum Computing', 'Neural Networks', 'AI Lab']}
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Aarnik
            </h1>
            <p className="text-xl opacity-90">
              The world's most advanced AI system, powered by quantum computing and neural networks
            </p>
          </div>
        </div>
      </section>

      {/* AI Assistant Interface */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <AIAssistant />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Advanced Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(AI_CAPABILITIES).map(([key, capability]) => (
              <div key={key} className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  {key === 'QUANTUM' && <Cpu className="h-8 w-8 text-purple-600" />}
                  {key === 'INTELLIGENCE' && <Brain className="h-8 w-8 text-purple-600" />}
                  {key === 'SECURITY' && <Shield className="h-8 w-8 text-purple-600" />}
                  {key === 'RESEARCH' && <Beaker className="h-8 w-8 text-purple-600" />}
                  {key === 'AUTONOMOUS' && <Zap className="h-8 w-8 text-purple-600" />}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{capability.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {capability.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(capability.metrics).map(([metric, value], index) => (
                      <div key={index}>
                        <div className="text-sm font-medium text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Network className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Neural Networks</h3>
              <p className="text-gray-600">
                Advanced neural architectures with over 1 trillion parameters
              </p>
            </div>
            <div className="text-center">
              <Lock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantum Security</h3>
              <p className="text-gray-600">
                Post-quantum cryptography and advanced security protocols
              </p>
            </div>
            <div className="text-center">
              <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Universal Search</h3>
              <p className="text-gray-600">
                Quantum-enhanced search across vast knowledge spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical Prowess
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Code className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Code Generation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Multi-language support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Context-aware suggestions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Security-first approach
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Database className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Knowledge Processing</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Universal knowledge base
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Real-time learning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Cross-domain expertise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}