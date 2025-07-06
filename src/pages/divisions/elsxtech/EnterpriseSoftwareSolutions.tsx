import React from 'react';
import { Database, Users, BarChart, Settings, Workflow, Building, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Database,
    title: 'ERP Systems',
    description: 'Comprehensive enterprise resource planning solutions',
    features: ['Financial Management', 'Supply Chain', 'Human Resources', 'Manufacturing']
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description: 'Customer relationship management and sales automation',
    features: ['Sales Pipeline', 'Customer Service', 'Marketing Automation', 'Analytics']
  },
  {
    icon: Workflow,
    title: 'Business Process Management',
    description: 'Workflow automation and process optimization',
    features: ['Process Design', 'Automation Rules', 'Approval Workflows', 'Performance Monitoring']
  },
  {
    icon: BarChart,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting platforms',
    features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Executive Reporting']
  }
];

const benefits = [
  { metric: '50%', label: 'Process Efficiency' },
  { metric: '40%', label: 'Cost Reduction' },
  { metric: '99.9%', label: 'System Uptime' },
  { metric: '24/7', label: 'Support Available' }
];

export default function EnterpriseSoftwareSolutions() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Enterprise Software Solutions | ELSxTech - EvolucentSphere"
        description="Enterprise software solutions, ERP systems, CRM platforms, business process management, workflow automation, and business intelligence for large-scale organizations."
        keywords={[
          'Enterprise Software', 'ERP', 'CRM', 'Enterprise Resource Planning', 'Customer Relationship Management',
          'Business Applications', 'Enterprise Applications', 'Workflow Management', 'Document Management',
          'Human Resource Management', 'Financial Management', 'Supply Chain Management', 'Inventory Management',
          'Project Management', 'Business Process Management', 'Enterprise Integration', 'B2B Solutions',
          'SaaS', 'Software as a Service', 'Cloud Applications', 'Enterprise Mobility',
          'Business Intelligence', 'Analytics', 'Reporting', 'Dashboard', 'Data Visualization'
        ]}
        serviceCategory="tech"
        targetIndustries={['Large Enterprise', 'Manufacturing', 'Financial Services', 'Healthcare']}
        relatedServices={['ERP Implementation', 'CRM Solutions', 'Business Intelligence', 'Enterprise Integration']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-violet-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Enterprise Software Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Streamline your enterprise operations with comprehensive software solutions 
              including ERP, CRM, and business intelligence platforms.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl font-bold text-violet-600">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Enterprise Software Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-violet-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Platforms & Technologies
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  SAP S/4HANA
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Oracle ERP Cloud
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Microsoft Dynamics 365
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  NetSuite ERP
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Salesforce CRM
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Microsoft Dynamics CRM
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  HubSpot CRM
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Oracle CX Cloud
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Intelligence</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Power BI
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Tableau
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  QlikView & QlikSense
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  IBM Cognos
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integration</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  MuleSoft Anypoint
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Azure Logic Apps
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Dell Boomi
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-violet-600 rounded-full mr-2"></span>
                  Apache Camel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Business requirements analysis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Solution architecture and planning</p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600 text-sm">System implementation and configuration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Train</h3>
              <p className="text-gray-600 text-sm">User training and adoption</p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Transform Your Enterprise Operations</h2>
            <p className="text-xl mb-8">
              Streamline your business processes with our comprehensive enterprise software solutions.
            </p>
            <button className="bg-white text-violet-600 px-8 py-4 rounded-lg hover:bg-violet-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Schedule Enterprise Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}