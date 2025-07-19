import React, { useState, useEffect } from 'react';
import { Globe, ExternalLink, FileText, Users, Briefcase, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { sitemapGenerator } from '../lib/sitemap';
import { crossDomainLinks } from '../components/CrossDomainLinks';

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  links: Array<{
    name: string;
    path: string;
    description?: string;
    external?: boolean;
  }>;
}

export default function Sitemap() {
  const [xmlSitemap, setXmlSitemap] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: Globe,
      links: [
        { name: 'Home', path: '/', description: 'Welcome to ELSxGlobal' },
        { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
        { name: 'Services', path: '/services', description: 'Explore our comprehensive service offerings' },
        { name: 'Technologies', path: '/technologies', description: 'Discover our technology capabilities' },
        { name: 'Case Studies', path: '/case-studies', description: 'Real-world success stories' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and thought leadership' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', path: '/careers', description: 'Join our growing team' },
        { name: 'Investor Relations', path: '/investor-relations', description: 'Financial information and resources' },
        { name: 'AI Lab', path: '/ai-lab', description: 'Explore our AI capabilities' }
      ]
    },
    {
      title: 'Service Divisions',
      icon: Briefcase,
      links: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive technology solutions' },
        { name: 'BPO Services', path: '/bpo-services', description: 'Business process outsourcing' },
        { name: 'KPO Services', path: '/kpo-services', description: 'Knowledge process outsourcing' },
        { name: 'Consultancy', path: '/consultancy', description: 'Strategic business consulting' },
        { name: 'Enterprise IT', path: '/enterprise-it', description: 'Enterprise technology solutions' }
      ]
    },
    {
      title: 'ELSxTech Specializations',
      icon: Brain,
      links: [
        { name: 'Cloud Infrastructure', path: '/it-services/cloud-infrastructure', description: 'Cloud computing and infrastructure' },
        { name: 'Cybersecurity', path: '/it-services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Digital Transformation', path: '/it-services/digital-transformation', description: 'Business transformation consulting' },
        { name: 'Software Development', path: '/it-services/software-development', description: 'Custom software solutions' },
        { name: 'AI & Analytics', path: '/it-services/ai-analytics', description: 'Artificial intelligence and data analytics' },
        { name: 'Digital Marketing', path: '/it-services/digital-marketing', description: 'Digital marketing and customer experience' },
        { name: 'IoT & Emerging Tech', path: '/it-services/iot-emerging-tech', description: 'Internet of Things and emerging technologies' },
        { name: 'Managed IT', path: '/it-services/managed-it', description: 'Managed IT services and support' },
        { name: 'Enterprise Software', path: '/it-services/enterprise-software', description: 'Enterprise software solutions' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions of use' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Information about cookies and tracking' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation' }
      ]
    },
    {
      title: 'EvolucentSphere Ecosystem',
      icon: Users,
      links: crossDomainLinks.map(link => ({
        name: link.name,
        path: link.url,
        description: link.description,
        external: true
      }))
    }
  ];

  const generateXMLSitemap = async () => {
    setLoading(true);
    try {
      const sitemap = await sitemapGenerator.generateSitemap();
      setXmlSitemap(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadXMLSitemap = () => {
    if (!xmlSitemap) return;
    
    const blob = new Blob([xmlSitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Sitemap | ELSxGlobal"
        description="Complete sitemap of ELSxGlobal website including all pages, services, and resources. Navigate easily through our comprehensive business solutions."
        keywords={['Sitemap', 'Site Navigation', 'Website Map', 'Page Directory']}
        noindex={false}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Navigate through all pages and services available on our website. 
              Find exactly what you're looking for with our comprehensive site directory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateXMLSitemap}
                disabled={loading}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate XML Sitemap'}
              </button>
              {xmlSitemap && (
                <button
                  onClick={downloadXMLSitemap}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Download XML
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {sitemapSections.map((section, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center mb-8">
                  <section.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {link.external ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-purple-600 transition-colors flex items-center"
                            >
                              {link.name}
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          ) : (
                            <Link
                              to={link.path}
                              className="hover:text-purple-600 transition-colors"
                            >
                              {link.name}
                            </Link>
                          )}
                        </h3>
                      </div>
                      
                      {link.description && (
                        <p className="text-gray-600 text-sm mb-3">
                          {link.description}
                        </p>
                      )}
                      
                      <div className="text-xs text-gray-500 font-mono">
                        {link.path}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap Preview */}
      {xmlSitemap && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">XML Sitemap Preview</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-gray-100 rounded-md p-4 max-h-96 overflow-y-auto">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                    {xmlSitemap.substring(0, 2000)}
                    {xmlSitemap.length > 2000 && '...'}
                  </pre>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Total size: {(xmlSitemap.length / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEO Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO & Search Engine Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">For Search Engines</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>XML sitemap available at <code>/sitemap.xml</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Robots.txt available at <code>/robots.txt</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Cross-domain sitemaps included</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Coverage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>All main pages and services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>Dynamic content (blog, case studies)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <span>EvolucentSphere ecosystem links</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}