import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Download, ExternalLink, ArrowRight } from 'lucide-react';
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
    <div>
      <SEOHead
        title="Investor Relations"
        description="Access financial reports, earnings presentations, and investor resources. Stay updated with ELSxGlobal's growth and investment opportunities."
      />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl text-center mx-auto">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="label mb-4">Investor Relations</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Investor Relations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-secondary max-w-2xl mx-auto">
              Discover investment opportunities in the future of business transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Performance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Financial Highlights</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">Key metrics demonstrating our growth trajectory.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6 text-center">
              <TrendingUp className="h-6 w-6 text-brand-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-ink mb-2">Revenue Growth</h3>
              <p className="text-3xl font-bold text-brand-500 mb-1">38%</p>
              <p className="text-xs text-ink-muted uppercase tracking-wide font-medium">Year over Year</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card p-6 text-center">
              <FileText className="h-6 w-6 text-brand-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-ink mb-2">Market Share</h3>
              <p className="text-3xl font-bold text-brand-500 mb-1">15%</p>
              <p className="text-xs text-ink-muted uppercase tracking-wide font-medium">Global Market</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card p-6 text-center">
              <Download className="h-6 w-6 text-brand-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-ink mb-2">Client Growth</h3>
              <p className="text-3xl font-bold text-brand-500 mb-1">45%</p>
              <p className="text-xs text-ink-muted uppercase tracking-wide font-medium">New Acquisition</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12 lg:mb-16">
            <span className="label mb-4">Resources</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">Investor Resources</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">Access reports, presentations, and financial documents.</p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mx-auto mb-4"></div>
              <p className="text-sm text-ink-muted">Loading resources...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-ink">{resource.title}</h3>
                    <span className="px-2.5 py-1 text-xs font-semibold bg-brand-50 text-brand-500 rounded-full">{resource.type}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/investor-relations/${resource.id}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                    >
                      View Details
                      <FileText className="ml-1.5 h-4 w-4" />
                    </Link>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-ink-secondary hover:text-ink transition-colors"
                    >
                      Direct Access
                      <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
