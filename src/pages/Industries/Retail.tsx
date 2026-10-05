import React from 'react';
import { ShoppingCart, Users, Smartphone, CheckCircle, ArrowRight, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms and digital retail solutions',
    features: ['Online Store Development', 'Payment Integration', 'Inventory Management', 'Order Processing']
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Advanced customer behavior analysis and personalization',
    features: ['Customer Segmentation', 'Behavioral Analytics', 'Recommendation Engines', 'Loyalty Programs']
  },
  {
    icon: Smartphone,
    title: 'Omnichannel Experience',
    description: 'Seamless customer experience across all touchpoints',
    features: ['Mobile Commerce', 'Social Commerce', 'In-store Technology', 'Customer Journey Optimization']
  }
];

const challenges = [
  {
    icon: ShoppingCart,
    title: 'Cart Abandonment',
    description: 'Losing revenue to complex checkout flows, unexpected costs, and lack of preferred payment options.'
  },
  {
    icon: TrendingDown,
    title: 'Inventory Inefficiency',
    description: 'Stockouts and overstock situations that erode margins and damage customer satisfaction.'
  },
  {
    icon: Users,
    title: 'Fragmented Customer Data',
    description: 'Disconnected silos across channels that prevent a unified view of shopper behavior and preferences.'
  },
  {
    icon: Smartphone,
    title: 'Channel Disconnection',
    description: 'Inconsistent experiences between online, mobile, and in-store touchpoints that break customer journeys.'
  }
];

const solutions = [
  {
    title: 'Frictionless Checkout Optimization',
    description: 'One-click payments, guest checkout, and dynamic pricing that reduce cart abandonment by up to 40%.'
  },
  {
    title: 'AI-Powered Inventory Management',
    description: 'Demand forecasting and real-time stock optimization that minimizes waste and prevents stockouts across all locations.'
  },
  {
    title: 'Unified Customer Data Platform',
    description: 'Single shopper profile that merges online and in-store behavior for true 360-degree personalization.'
  },
  {
    title: 'True Omnichannel Commerce',
    description: 'Seamless buy-online-pickup-in-store, unified loyalty, and consistent experiences across every touchpoint.'
  }
];

const metrics = [
  { value: '40%', label: 'Less Cart Abandonment' },
  { value: '30%', label: 'Inventory Cost Reduction' },
  { value: '25%', label: 'Revenue Lift' },
  { value: '4x', label: 'Customer Retention' }
];

export default function Retail() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Retail & E-commerce Solutions | ELSxGlobal"
        description="Comprehensive retail technology solutions including e-commerce platforms, customer analytics, and omnichannel experiences for modern retail businesses."
        keywords={[
          'Retail Technology',
          'E-commerce Solutions',
          'Customer Analytics',
          'Omnichannel Experience',
          'Digital Commerce',
          'Retail Analytics',
          'Customer Experience'
        ]}
        serviceCategory="tech"
        targetIndustries={['Retail and E-commerce']}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Retail & E-commerce Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-ink-secondary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your retail business with our comprehensive e-commerce solutions, 
              customer analytics, and omnichannel experience platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
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

      {/* Industry Challenges */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Industry Challenges</span>
            <h2 className="text-3xl font-bold text-ink mt-4">Challenges Facing Modern Retailers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <challenge.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-ink mb-2">{challenge.title}</h3>
                <p className="text-ink-secondary text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Our Solutions</span>
            <h2 className="text-3xl font-bold text-ink mt-4">How EvolucentSphere Solves These Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-ink mb-2">{solution.title}</h3>
                <p className="text-ink-secondary text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="label">Key Metrics</span>
            <h2 className="text-3xl font-bold text-ink mt-4">Real Impact for Retail Businesses</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-ink-secondary text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Revolutionize Your Retail Business</h2>
            <p className="text-xl mb-8">
              Create exceptional customer experiences and drive growth with our retail technology solutions.
            </p>
            <button className="btn-primary flex items-center justify-center mx-auto group">
              Explore Retail Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
