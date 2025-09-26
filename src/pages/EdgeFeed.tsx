import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Brain, Users, BarChart, BookOpen, Video, 
  Award, Globe, Zap, Target, ArrowRight, CheckCircle, 
  Lightbulb, Cpu, Database, Network, ExternalLink 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { config } from '../lib/config';

const edgeFeedServices = [
  {
    icon: Brain,
    title: 'AI-Powered Learning Platform',
    description: 'Adaptive learning system that personalizes education for every learner',
    features: [
      'Adaptive Learning Algorithms',
      'Real-time Progress Tracking',
      'Personalized Learning Paths',
      'AI-Powered Assessments',
      'Intelligent Content Recommendations',
      'Performance Analytics'
    ],
    benefits: [
      '85% improvement in learning outcomes',
      '60% reduction in training time',
      'Personalized learning experiences'
    ],
    url: 'https://learn.edgefeed.space'
  },
  {
    icon: BookOpen,
    title: 'Content Creation Studio',
    description: 'Professional tools for creating engaging educational content',
    features: [
      'Interactive Content Builder',
      'AI Content Generation',
      'Multimedia Integration',
      'Collaboration Tools',
      'Version Control',
      'Quality Assurance'
    ],
    benefits: [
      '70% faster content creation',
      'Enhanced engagement rates',
      'Standardized quality'
    ],
    url: 'https://content.edgefeed.space'
  },
  {
    icon: BarChart,
    title: 'Learning Analytics',
    description: 'Comprehensive analytics and insights for educational performance',
    features: [
      'Learning Performance Metrics',
      'Engagement Analytics',
      'Predictive Modeling',
      'Custom Dashboards',
      'ROI Measurement',
      'Compliance Tracking'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved learning outcomes',
      'Better resource allocation'
    ],
    url: 'https://analytics.edgefeed.space'
  },
  {
    icon: Users,
    title: 'Enterprise Training',
    description: 'Corporate training and development solutions',
    features: [
      'Skills Gap Analysis',
      'Custom Training Programs',
      'Compliance Training',
      'Performance Tracking',
      'Integration APIs',
      'Mobile Learning'
    ],
    benefits: [
      'Improved employee performance',
      'Reduced training costs',
      'Better compliance rates'
    ],
    url: 'https://enterprise.edgefeed.space'
  }
];

const industries = [
  {
    name: 'Higher Education',
    description: 'Universities and colleges worldwide',
    solutions: ['LMS Integration', 'Student Analytics', 'Course Management', 'Assessment Tools']
  },
  {
    name: 'K-12 Education',
    description: 'Schools and educational institutions',
    solutions: ['Curriculum Planning', 'Student Progress Tracking', 'Parent Engagement', 'Teacher Tools']
  },
  {
    name: 'Corporate Training',
    description: 'Enterprise learning and development',
    solutions: ['Employee Training', 'Skills Development', 'Compliance Training', 'Performance Analytics']
  },
  {
    name: 'Online Learning',
    description: 'Digital education platforms',
    solutions: ['Course Creation', 'Student Engagement', 'Certification', 'Community Building']
  }
];

export default function EdgeFeed() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="EdgeFeed - Revolutionary EdTech Platform | EvolucentSphere Flagship Division"
        description="EdgeFeed is EvolucentSphere's flagship EdTech division delivering AI-powered learning management systems, educational content creation, learning analytics, and enterprise training solutions for modern education."
        keywords={[
          'EdgeFeed',
          'EdTech Platform',
          'Educational Technology',
          'AI-Powered Learning',
          'Learning Management System',
          'Educational Content Creation',
          'Learning Analytics',
          'Corporate Training',
          'Online Learning',
          'Digital Education',
          'Adaptive Learning',
          'Personalized Learning',
          'E-Learning Solutions',
          'Training Platform',
          'Educational Software',
          'Learning Technology',
          'Student Analytics',
          'Course Management',
          'Assessment Tools',
          'Educational Innovation'
        ]}
        serviceCategory="tech"
        targetIndustries={[
          'Higher Education',
          'K-12 Education', 
          'Corporate Training',
          'Online Learning Platforms',
          'Educational Institutions'
        ]}
        relatedServices={[
          'Learning Management Systems',
          'Educational Content Creation',
          'Learning Analytics',
          'Corporate Training Solutions',
          'AI-Powered Education'
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                  EdgeFeed
                </h1>
                <p className="text-lg md:text-xl text-blue-600">
                  EvolucentSphere EdTech Flagship
                </p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl font-semibold text-blue-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionizing Education Through AI
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform learning experiences with our AI-powered EdTech platform. From adaptive learning 
              systems to enterprise training solutions, EdgeFeed delivers cutting-edge educational technology 
              that enhances learning outcomes and drives educational innovation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="https://edgefeed.space"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Explore EdgeFeed Platform
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-gray-700 bg-white border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{config.metrics.learners}</h3>
                <p className="text-gray-600">Active Learners</p>
              </div>
              <div className="text-center p-4">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{config.metrics.courses}</h3>
                <p className="text-gray-600">Courses Available</p>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{config.metrics.institutions}</h3>
                <p className="text-gray-600">Partner Institutions</p>
              </div>
              <div className="text-center p-4">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EdgeFeed Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EdgeFeed Platform Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive EdTech solutions powered by artificial intelligence and designed 
              for the future of education and corporate training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {edgeFeedServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <a 
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                    >
                      Visit Platform <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-blue-600">
                        <Target className="h-4 w-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Delivering educational excellence across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies driving educational innovation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600">AI-powered personalization and adaptive learning</p>
            </div>
            <div className="text-center">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">Intelligent content recommendations and insights</p>
            </div>
            <div className="text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Big Data Analytics</h3>
              <p className="text-gray-600">Comprehensive learning analytics and reporting</p>
            </div>
            <div className="text-center">
              <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600">Scalable and secure cloud-based platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">
              Measurable impact on learning outcomes and business performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Learning Improvement</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Time Reduction</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl mb-8">
              Join thousands of educators and organizations using EdgeFeed to revolutionize learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://edgefeed.space"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center group"
              >
                Visit EdgeFeed Platform
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}