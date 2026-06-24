import React from 'react';
import { Brain, Shield, Cpu, Beaker, Zap, Network, Lock, Search, Code, Database } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AIAssistant from '../components/AIAssistant';
import { AI_CAPABILITIES } from '../lib/ai/capabilities';

export default function AILab() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <SEOHead
        title="Aarnik AI Lab"
        description="Experience Aarnik, our advanced AI system powered by quantum computing and neural networks."
        keywords={['Aarnik AI', 'Quantum Computing', 'Neural Networks', 'AI Lab']}
      />

      {/* Hero Section */}
      <section className="bg-brand-500 py-12">
        <div className="container-main">
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
      <section className="section-padding">
        <div className="container-main">
          <AIAssistant />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding surface">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">
            Advanced Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_CAPABILITIES.map((capability, index) => {
              const icons = [
                <Cpu className="h-8 w-8 text-brand-500" />,
                <Brain className="h-8 w-8 text-brand-500" />,
                <Shield className="h-8 w-8 text-brand-500" />,
                <Beaker className="h-8 w-8 text-brand-500" />,
                <Zap className="h-8 w-8 text-brand-500" />,
                <Search className="h-8 w-8 text-brand-500" />
              ];
              return (
                <div key={index} className="card hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {icons[index % icons.length]}
                    <h3 className="text-xl font-bold text-ink ml-3">{capability.name}</h3>
                  </div>
                  <p className="text-ink-secondary">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center text-ink mb-12">
            Core Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Network className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Neural Networks</h3>
              <p className="text-ink-secondary">
                Advanced neural architectures with over 1 trillion parameters
              </p>
            </div>
            <div className="text-center">
              <Lock className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Quantum Security</h3>
              <p className="text-ink-secondary">
                Post-quantum cryptography and advanced security protocols
              </p>
            </div>
            <div className="text-center">
              <Search className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Universal Search</h3>
              <p className="text-ink-secondary">
                Quantum-enhanced search across vast knowledge spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-ink mb-12">
              Technical Prowess
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <Code className="h-8 w-8 text-brand-500 mb-4" />
                <h3 className="text-xl font-bold text-ink mb-4">Advanced Code Generation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
                    Multi-language support
                  </li>
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
                    Context-aware suggestions
                  </li>
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
                    Security-first approach
                  </li>
                </ul>
              </div>
              <div className="card">
                <Database className="h-8 w-8 text-brand-500 mb-4" />
                <h3 className="text-xl font-bold text-ink mb-4">Knowledge Processing</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
                    Universal knowledge base
                  </li>
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
                    Real-time learning
                  </li>
                  <li className="flex items-center text-ink-secondary">
                    <span className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></span>
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
