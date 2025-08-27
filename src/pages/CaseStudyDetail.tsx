import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, TrendingUp, Target, Award, Calendar, BarChart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { getItemOperations } from '../lib/db';
import type { CaseStudy } from '../lib/db';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCaseStudy() {
      if (!id) {
        setError('No case study ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getItemOperations.getCaseStudyById(id);
        
        if (!data) {
          setError('Case study not found');
        } else {
          setCaseStudy(data);
        }
      } catch (error) {
        console.error('Error fetching case study:', error);
        setError('Failed to load case study');
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudy();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen pt-20">
        <SEOHead 
          title="Case Study Not Found"
          description="The requested case study could not be found."
          noindex={true}
        />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              {error || 'The case study you are looking for does not exist.'}
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const publishDate = new Date(caseStudy.created_at);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title={caseStudy.title}
        description={caseStudy.content.substring(0, 160) + '...'}
        keywords={[
          'Case Study',
          'Success Story',
          'Business Transformation',
          caseStudy.industry,
          'Client Success',
          'Enterprise Solutions'
        ]}
        type="article"
        publishedTime={caseStudy.created_at}
        image={{
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: `${caseStudy.title} - Case Study`
        }}
        targetIndustries={[caseStudy.industry]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Link>

              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  <Building className="h-4 w-4 mr-1" />
                  {caseStudy.industry}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {caseStudy.title}
                </h1>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Published {publishDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              <div className="relative mb-12">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt={caseStudy.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge & Solution</h2>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    {caseStudy.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Results Sidebar */}
              <div className="md:col-span-1">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-8 sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center mb-6">
                    <BarChart className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">Key Results</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {Object.entries(caseStudy.results).map(([key, value], index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <div className="flex items-center mb-2">
                          {index === 0 && <TrendingUp className="h-5 w-5 text-green-500 mr-2" />}
                          {index === 1 && <Target className="h-5 w-5 text-blue-500 mr-2" />}
                          {index === 2 && <Award className="h-5 w-5 text-purple-500 mr-2" />}
                          {index > 2 && <CheckCircle className="h-5 w-5 text-gray-500 mr-2" />}
                          <span className="font-semibold text-gray-900">{key}</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-3">Industry</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {caseStudy.industry}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium"
            >
              Start Your Transformation
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}