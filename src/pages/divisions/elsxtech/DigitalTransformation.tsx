import React from 'react';
import { Zap, Target, Users, BarChart, Workflow, Lightbulb, Settings, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Target,
    title: 'Digital Strategy Development',
    description: 'Comprehensive digital transformation strategy and roadmap',
    features: ['Digital Maturity Assessment', 'Technology Roadmap', 'Change Management', 'ROI Planning']
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Intelligent process automation and workflow optimization',
    features: ['RPA Implementation', 'Workflow Design', 'Process Mining', 'Automation Analytics']
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Organizational change management and digital adoption',
    features: ['Training Programs', 'Communication Strategy', 'Stakeholder Engagement', 'Culture Transformation']
  },
  {
    icon: BarChart,
    title: 'Digital Analytics',
    description: 'Data-driven insights and performance measurement',
    features: ['KPI Development', 'Dashboard Creation', 'Performance Tracking', 'Predictive Analytics']
  }
];

const benefits = [
  { metric: '75%', label: 'Process Efficiency Gain' },
  { metric: '60%', label: 'Cost Reduction' },
  { metric: '90%', label: 'Employee Adoption' },
  { metric: '3x', label: 'Faster Time-to-Market' }
];

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Digital Transformation Consulting | ELSxTech - EvolucentSphere"
        description="Strategic digital transformation consulting, process automation, change management, digital strategy development, workflow optimization, and business transformation services for enterprise modernization."
        keywords={[
          'Digital Transformation', 'Business Transformation', 'Digital Strategy', 'Innovation Consulting',
          'Process Automation', 'Workflow Optimization', 'Change Management', 'Digital Adoption',
          'Technology Roadmap', 'Digital Maturity Assessment', 'Agile Transformation', 'Lean Methodology',
          'Six Sigma', 'Business Process Reengineering', 'Digital Culture', 'Digital Leadership',
          'Customer Experience Transformation', 'Employee Experience', 'Digital Workplace',
          'Automation Strategy', 'RPA', 'Intelligent Automation', 'AI Integration', 'Digital Innovation',
          'Business Model Innovation', 'Digital Disruption', 'Technology Adoption', 'Digital Readiness'
        ]}
        serviceCategory="tech"
        targetIndustries={['Manufacturing', 'Financial Services', 'Healthcare', 'Retail and E-commerce']}
        relatedServices={['Process Automation', 'Change Management', 'Digital Strategy', 'Technology Consulting']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Digital Transformation Consulting
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Accelerate your digital journey with strategic transformation consulting, 
              process automation, and change management expertise.
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
                  <div className="text-2xl font-bold text-purple-600">{benefit.metric}</div>
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
            Our Digital Transformation Services
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
                <service.icon className="h-12 w-12 text-purple-600 mb-6" />
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

      {/* Transformation Framework */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Transformation Framework
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600">Digital maturity assessment and gap analysis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Strategy development and roadmap planning</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implement</h3>
              <p className="text-gray-600">Technology deployment and process automation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600">Continuous improvement and scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Industry 4.0 Implementation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Smart Factory Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Supply Chain Digitization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Predictive Maintenance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Digital Banking Platforms
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Fintech Integration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Regulatory Compliance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Customer Experience
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Electronic Health Records
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Telemedicine Platforms
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Patient Experience
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                  Healthcare Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Start Your Digital Transformation Journey</h2>
            <p className="text-xl mb-8">
              Transform your business with our proven digital transformation methodology and expertise.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Begin Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}