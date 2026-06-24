import React from 'react';
import { BookOpen, FileText, CheckSquare, Download, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';

const resources = [
  {
    icon: BookOpen,
    title: 'Digital Transformation Guide',
    description: 'A comprehensive guide to implementing digital transformation in your organization.',
    highlights: [
      'Strategic planning framework',
      'Implementation roadmap',
      'Success metrics and KPIs',
      'Case studies and best practices'
    ],
    downloadLink: '#'
  },
  {
    icon: FileText,
    title: 'AI Implementation Whitepaper',
    description: 'Learn how to successfully integrate AI solutions into your business processes.',
    highlights: [
      'AI readiness assessment',
      'Integration strategies',
      'Risk management',
      'ROI calculation models'
    ],
    downloadLink: '#'
  },
  {
    icon: CheckSquare,
    title: 'Technology Assessment Toolkit',
    description: 'Evaluate your current technology stack and identify areas for improvement.',
    highlights: [
      'Technology audit templates',
      'Gap analysis tools',
      'Vendor evaluation framework',
      'Implementation checklists'
    ],
    downloadLink: '#'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="section-padding surface">
      <SEOHead 
        title="Knowledge Center & Resources"
        description="Access our comprehensive collection of resources including digital transformation guides, AI implementation whitepapers, and technology assessment toolkits to accelerate your business growth."
        keywords={[
          'Knowledge Center',
          'Business Resources',
          'Digital Transformation Guide',
          'AI Implementation',
          'Technology Assessment',
          'Business Whitepapers',
          'Implementation Guides',
          'Technology Resources',
          'Business Intelligence',
          'Strategic Planning'
        ]}
      />
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="section-label">Resources</span>
          <h2 className="text-4xl font-bold text-ink mb-4">Knowledge Center</h2>
          <p className="text-xl text-ink-secondary max-w-3xl mx-auto">
            Access our comprehensive collection of resources designed to guide your 
            digital transformation journey and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300">
              <resource.icon className="h-12 w-12 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-ink mb-4">{resource.title}</h3>
              <p className="text-ink-secondary mb-6">{resource.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-ink mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {resource.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-ink-secondary">
                      <span className="h-2 w-2 bg-brand-500 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={resource.downloadLink}
                className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resource
              </a>
            </div>
          ))}
        </div>

        {/* Premium Resources */}
        <div className="card p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-ink mb-4">Premium Resource Library</h3>
            <p className="text-ink-secondary mb-8">
              Get exclusive access to our comprehensive collection of advanced resources,
              including detailed implementation guides, templates, and industry research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Explore Premium Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
