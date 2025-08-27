import React, { useEffect, useState } from 'react';
import { ArrowRight, Building, Users, TrendingUp, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dbOperations } from '../lib/db';
import type { CaseStudy } from '../lib/db';
import LoadingSpinner from './LoadingSpinner';
import SEOHead from './SEOHead';

const industries = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Technology',
  'Energy'
];

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | 'all'>('all');

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        setLoading(true);
        setError(null);
        const data = await dbOperations.getCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setError(error instanceof Error ? error.message : 'Failed to load case studies');
      } finally {
        setLoading(false);
      }
    }
    fetchCaseStudies();
  }, []);

  const filteredCaseStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Case Studies"
        description="Explore real-world success stories and transformations achieved through our innovative solutions."
        keywords={['Case Studies', 'Success Stories', 'Business Transformation', 'Client Success']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Discover how we've helped organizations across industries achieve remarkable results
              through innovative technology solutions.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-purple-600">45%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-purple-600">30+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-4 mx-auto">
              <button
                onClick={() => setSelectedIndustry('all')}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedIndustry === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Industries
              </button>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center text-gray-600">
              No case studies available for the selected industry.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt={study.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-sm text-white bg-purple-600 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.content}</p>
                    
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Results:</h4>
                      {Object.entries(study.results).map(([key, value], idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          {idx === 0 && <TrendingUp className="h-5 w-5 text-green-500" />}
                          {idx === 1 && <Users className="h-5 w-5 text-blue-500" />}
                          {idx === 2 && <Target className="h-5 w-5 text-purple-500" />}
                          <span className="text-gray-700">{`${key}: ${value}`}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8">
              Join the ranks of industry leaders who have transformed their businesses with our solutions.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}