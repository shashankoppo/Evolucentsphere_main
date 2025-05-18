import React from 'react';
import { BookOpen, FileText, CheckSquare, Download, ArrowRight } from 'lucide-react';

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
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Center</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of resources designed to guide your 
            digital transformation journey and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <resource.icon className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {resource.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={resource.downloadLink}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resource
              </a>
            </div>
          ))}
        </div>

        {/* Premium Resources */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Resource Library</h3>
            <p className="text-gray-600 mb-8">
              Get exclusive access to our comprehensive collection of advanced resources,
              including detailed implementation guides, templates, and industry research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium">
                Explore Premium Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}