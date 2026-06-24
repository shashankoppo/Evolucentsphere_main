import React from 'react';
import { BarChart, Users, Target, Zap, Globe, Eye, TrendingUp, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead';

const services = [
  {
    icon: Target,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive digital marketing strategies and campaigns',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Campaigns']
  },
  {
    icon: Users,
    title: 'Customer Experience Design',
    description: 'User-centered design and experience optimization',
    features: ['UX/UI Design', 'Customer Journey Mapping', 'Personalization', 'A/B Testing']
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automated marketing workflows and lead nurturing',
    features: ['Lead Scoring', 'Drip Campaigns', 'Behavioral Triggers', 'CRM Integration']
  },
  {
    icon: BarChart,
    title: 'Marketing Analytics',
    description: 'Data-driven marketing insights and performance tracking',
    features: ['Campaign Analytics', 'ROI Measurement', 'Attribution Modeling', 'Conversion Tracking']
  }
];

const benefits = [
  { metric: '300%', label: 'ROI Increase' },
  { metric: '85%', label: 'Lead Quality Improvement' },
  { metric: '60%', label: 'Customer Acquisition Cost Reduction' },
  { metric: '24/7', label: 'Automated Engagement' }
];

export default function DigitalExperienceMarketing() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Digital Experience & Marketing | ELSxTech - EvolucentSphere"
        description="Digital marketing solutions, customer experience design, marketing automation, SEO, SEM, social media marketing, and marketing analytics for business growth and customer engagement."
        keywords={[
          'Digital Marketing', 'Digital Experience', 'Customer Experience', 'User Experience',
          'Marketing Automation', 'Email Marketing', 'Social Media Marketing', 'Content Marketing',
          'SEO', 'SEM', 'PPC', 'Google Ads', 'Facebook Ads', 'Marketing Analytics',
          'Customer Journey Mapping', 'Personalization', 'A/B Testing', 'Conversion Optimization',
          'Marketing Technology', 'CRM Integration', 'Lead Generation', 'Brand Strategy',
          'UX/UI Design', 'Web Design', 'Mobile Experience', 'E-commerce Marketing',
          'Influencer Marketing', 'Video Marketing', 'Marketing Funnel', 'Customer Retention'
        ]}
        serviceCategory="tech"
        targetIndustries={['Retail and E-commerce', 'Technology', 'Healthcare', 'Financial Services']}
        relatedServices={['Digital Marketing', 'Customer Experience', 'Marketing Automation', 'SEO Services']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Digital Experience & Marketing
            </motion.h1>
            <motion.p 
              className="text-xl text-ink-secondary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Create exceptional digital experiences and drive growth with our comprehensive 
              digital marketing solutions and customer experience optimization.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl font-bold text-pink-600">{benefit.metric}</div>
                  <div className="text-ink-secondary">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Our Digital Marketing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-pink-600 mb-6" />
                <h3 className="text-xl font-bold text-ink mb-4">{service.title}</h3>
                <p className="text-ink-secondary mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-ink-secondary">
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

      {/* Marketing Channels */}
      <section className="section-padding surface">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Marketing Channels & Platforms
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-ink mb-4">Search Marketing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Google Ads & SEO
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Bing Ads
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Local Search Optimization
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Voice Search Optimization
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-ink mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Facebook & Instagram
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  LinkedIn Marketing
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Twitter & TikTok
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  YouTube Marketing
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-ink mb-4">Content & Email</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Content Strategy
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Email Automation
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Blog & Article Marketing
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Video Content Creation
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-ink mb-4">Analytics & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Google Analytics 4
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  HubSpot & Salesforce
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Mailchimp & Klaviyo
                </li>
                <li className="flex items-center text-ink-secondary">
                  <span className="h-2 w-2 bg-pink-600 rounded-full mr-2"></span>
                  Hotjar & Mixpanel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Process */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Customer Experience Optimization Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Research</h3>
              <p className="text-ink-secondary text-sm">User research and market analysis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Personas</h3>
              <p className="text-ink-secondary text-sm">Customer persona development</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Journey</h3>
              <p className="text-ink-secondary text-sm">Customer journey mapping</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Optimize</h3>
              <p className="text-ink-secondary text-sm">Experience optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Measure</h3>
              <p className="text-ink-secondary text-sm">Performance measurement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Digital Marketing</h2>
            <p className="text-xl mb-8">
              Transform your customer experience and accelerate growth with our digital marketing expertise.
            </p>
            <button className="btn-secondary flex items-center justify-center mx-auto group">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(236, 72, 153, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </div>
  );
}
