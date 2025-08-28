import React from 'react';
import { TrendingUp, FileText, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dbOperations } from '../lib/db';
import type { InvestorResource } from '../lib/db';
import SEOHead from '../components/SEOHead';

export default function InvestorRelations() {
  const [resources, setResources] = React.useState<InvestorResource[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchResources() {
      try {
        const data = await dbOperations.getInvestorResources();
        setResources(data);
      } catch (error) {
        console.error('Error fetching investor resources:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchResources();
  }, []);

  return (
    <div className="pt-20">
      <SEOHead 
        title="Investor Relations | ELSxGlobal"
        description="Access financial reports, earnings presentations, and investor resources. Stay updated with ELSxGlobal's growth and investment opportunities."
        keywords={[
          'Investor Relations',
          'Financial Reports',
          'Earnings',
          'Investment Opportunities',
          'Shareholder Information',
          'Financial Performance',
          'Annual Reports',
          'Quarterly Results'
        ]}
        type="website"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600">
              Discover investment opportunities in the future of business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Financial Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-4xl font-bold text-purple-600">38%</p>
              <p className="text-gray-600 mt-2">Year over Year</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Market Share</h3>
              <p className="text-4xl font-bold text-purple-600">15%</p>
              <p className="text-gray-600 mt-2">Global Market Share</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Client Growth</h3>
              <p className="text-4xl font-bold text-purple-600">45%</p>
              <p className="text-gray-600 mt-2">New Client Acquisition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Investor Resources
          </h2>
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading resources...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">Type: {resource.type}</p>
                  <div className="flex space-x-4">
                    <Link
                      to={`/investor-relations/${resource.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700"
                    >
                      View Details
                      <FileText className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700"
                    >
                      Direct Access
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}