import React from 'react';
import { Lightbulb, TrendingUp, Target, Brain, Cpu, Globe } from 'lucide-react';
import SEOHead from './SEOHead';

const innovations = [
  {
    title: 'Quantum-Enhanced AI Systems',
    description: 'Revolutionary fusion of quantum computing and artificial intelligence, delivering unprecedented computational power and problem-solving capabilities.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Emerging Technology'
  },
  {
    title: 'Neural Network Evolution',
    description: 'Self-evolving neural networks that continuously adapt and improve, revolutionizing machine learning and artificial intelligence applications.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'AI Research'
  },
  {
    title: 'Sustainable Tech Solutions',
    description: 'Eco-friendly technological innovations that combine performance with environmental responsibility, shaping a sustainable future.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Sustainability'
  }
];

const researchAreas = [
  {
    icon: Brain,
    title: 'Cognitive Computing',
    description: 'Advanced AI systems that mimic human thought processes'
  },
  {
    icon: Cpu,
    title: 'Quantum Systems',
    description: 'Next-generation quantum computing solutions'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Technology solutions with worldwide reach'
  }
];

export default function InnovationHub() {
  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <SEOHead 
        title="Innovation Hub - Technology Research & Development"
        description="Explore groundbreaking technological advancements and research at ELSxGlobal's Innovation Hub. Discover quantum-enhanced AI systems, neural network evolution, and sustainable tech solutions."
        keywords={[
          'Innovation Hub',
          'Technology Research',
          'R&D',
          'Quantum Computing',
          'AI Research',
          'Neural Networks',
          'Sustainable Technology',
          'Emerging Technology',
          'Cognitive Computing',
          'Technology Innovation'
        ]}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover groundbreaking technological advancements and research that are 
            shaping the future of business and society.
          </p>
        </div>
        
        {/* Featured Innovations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <div key={index} className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={innovation.image} 
                  alt={`${innovation.title} - Innovation showcase`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm bg-purple-600 px-3 py-1 rounded-full">
                      {innovation.category}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {innovation.title}
              </h3>
              <p className="text-gray-600 mb-3">{innovation.description}</p>
              <span className="text-sm text-purple-600">{innovation.readTime}</span>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research & Development</h3>
            <p className="text-gray-600">Pioneering the next generation of technological breakthroughs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="text-center">
                <area.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Assessment */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Innovation Readiness Assessment</h3>
            <p className="mb-8">
              Evaluate your organization's innovation potential and discover opportunities 
              for technological advancement with our comprehensive assessment tool.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium">
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}