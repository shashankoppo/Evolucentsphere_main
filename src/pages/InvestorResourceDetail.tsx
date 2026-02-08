import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink, Calendar, Eye, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { getItemOperations } from '../lib/db';
import type { InvestorResource } from '../lib/db';

export default function InvestorResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<InvestorResource | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResource() {
      if (!id) {
        setError('No resource ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getItemOperations.getInvestorResourceById(id);
        
        if (!data) {
          setError('Investor resource not found');
        } else {
          setResource(data);
        }
      } catch (error) {
        console.error('Error fetching investor resource:', error);
        setError('Failed to load investor resource');
      } finally {
        setLoading(false);
      }
    }

    fetchResource();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen pt-20">
        <SEOHead 
          title="Investor Resource Not Found"
          description="The requested investor resource could not be found."
          noindex={true}
        />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              {error || 'The investor resource you are looking for does not exist.'}
            </p>
            <Link
              to="/investor-relations"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Investor Relations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const publishDate = new Date(resource.created_at);
  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'financial report':
      case 'report':
        return TrendingUp;
      case 'presentation':
        return FileText;
      case 'video':
        return Eye;
      default:
        return FileText;
    }
  };

  const ResourceIcon = getResourceIcon(resource.type);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title={resource.title}
        description={`Access ${resource.title} - ${resource.type} from ELSxGlobal investor relations.`}
        keywords={[
          'Investor Resource',
          'Financial Information',
          resource.type,
          'Investor Relations',
          'Financial Reports',
          'Corporate Information'
        ]}
        type="article"
        publishedTime={resource.created_at}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/investor-relations"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Investor Relations
              </Link>

              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                  <ResourceIcon className="h-4 w-4 mr-1" />
                  {resource.type}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {resource.title}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource Content */}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Information</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      This {resource.type.toLowerCase()} provides comprehensive information about 
                      ELSxGlobal's performance, strategic initiatives, and financial outlook. 
                      Access detailed insights into our business operations and growth trajectory.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Find:</h3>
                      <ul className="space-y-2">
                        {resource.type.toLowerCase().includes('report') && (
                          <>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Financial performance metrics
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Business segment analysis
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Strategic initiatives and outlook
                            </li>
                          </>
                        )}
                        {resource.type.toLowerCase().includes('presentation') && (
                          <>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Key financial highlights
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Market positioning
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Future growth strategies
                            </li>
                          </>
                        )}
                        {resource.type.toLowerCase().includes('video') && (
                          <>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Executive presentations
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Q&A sessions
                            </li>
                            <li className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Strategic vision overview
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="text-lg font-semibold text-blue-900">Investment Highlights</h3>
                      </div>
                      <p className="text-blue-800">
                        ELSxGlobal continues to demonstrate strong growth across all business segments, 
                        with particular strength in AI solutions and digital transformation services. 
                        Our diversified portfolio and global presence position us well for continued expansion.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Resource Access Sidebar */}
              <div className="md:col-span-1">
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-8 sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="text-center mb-6">
                    <ResourceIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Access Resource</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium text-gray-900">{resource.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-medium text-gray-900">
                        {publishDate.toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View Resource
                    </a>
                    
                    <button className="w-full flex items-center justify-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Contact our investor relations team for additional information.
                    </p>
                    <Link
                      to="/contact"
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      Contact IR Team →
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Investor Resources</h2>
            <div className="text-center">
              <Link
                to="/investor-relations"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View All Resources
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}