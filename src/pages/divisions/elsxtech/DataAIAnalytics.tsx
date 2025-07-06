import React from 'react';
import { Brain, BarChart, Database, Cpu, Eye, Zap, TrendingUp, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Advanced ML models for predictive analytics and automation',
    features: ['Predictive Modeling', 'Classification & Regression', 'Deep Learning', 'Neural Networks']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'AI-powered image and video analysis solutions',
    features: ['Object Detection', 'Facial Recognition', 'OCR & Document Processing', 'Quality Inspection']
  },
  {
    icon: BarChart,
    title: 'Business Intelligence',
    description: 'Comprehensive BI platforms and data visualization',
    features: ['Interactive Dashboards', 'Real-time Analytics', 'KPI Monitoring', 'Executive Reporting']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Scalable data pipelines and infrastructure',
    features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Stream Processing', 'Data Quality Management']
  }
];

const benefits = [
  { metric: '10x', label: 'Faster Insights' },
  { metric: '95%', label: 'Prediction Accuracy' },
  { metric: '60%', label: 'Cost Reduction' },
  { metric: '24/7', label: 'Real-time Processing' }
];

export default function DataAIAnalytics() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Data, AI & Analytics Solutions | ELSxTech - EvolucentSphere"
        description="Artificial intelligence, machine learning, data analytics, business intelligence, computer vision, predictive analytics, and data science solutions for enterprise transformation."
        keywords={[
          'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks',
          'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Data Science',
          'Big Data', 'Data Analytics', 'Business Intelligence', 'Data Visualization',
          'Data Mining', 'Statistical Analysis', 'Data Warehousing', 'ETL', 'Data Pipeline',
          'Real-time Analytics', 'Streaming Analytics', 'Data Governance', 'Data Quality',
          'MLOps', 'AI Ethics', 'Automated Machine Learning', 'Cognitive Computing',
          'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Apache Spark',
          'Tableau', 'Power BI', 'Looker', 'Snowflake', 'Databricks', 'AWS SageMaker'
        ]}
        serviceCategory="tech"
        targetIndustries={['Financial Services', 'Healthcare', 'Retail and E-commerce', 'Manufacturing']}
        relatedServices={['Machine Learning', 'Data Analytics', 'Business Intelligence', 'AI Consulting']}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Data, AI & Analytics Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Unlock the power of your data with advanced AI, machine learning, 
              and analytics solutions that drive intelligent business decisions.
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
                  <div className="text-2xl font-bold text-indigo-600">{benefit.metric}</div>
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
            Our AI & Analytics Services
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
                <service.icon className="h-12 w-12 text-indigo-600 mb-6" />
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

      {/* AI/ML Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI/ML Technologies & Platforms
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ML Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  TensorFlow & Keras
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  PyTorch & Scikit-learn
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  XGBoost & LightGBM
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Hugging Face Transformers
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Platforms</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Apache Spark & Kafka
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Snowflake & Databricks
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  AWS SageMaker
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Google Cloud AI Platform
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Tableau & Power BI
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Looker & Qlik Sense
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Jupyter & Apache Zeppelin
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  R & Python Analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">MLOps & Deployment</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  MLflow & Kubeflow
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Docker & Kubernetes
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Apache Airflow
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Model Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Fraud Detection & Prevention
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Credit Risk Assessment
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Algorithmic Trading
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Customer Segmentation
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Medical Image Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Drug Discovery
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Predictive Diagnostics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Patient Risk Stratification
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail & E-commerce</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Recommendation Systems
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Demand Forecasting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Price Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                  Customer Lifetime Value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Unlock the Power of Your Data</h2>
            <p className="text-xl mb-8">
              Transform your business with AI-driven insights and intelligent automation solutions.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}