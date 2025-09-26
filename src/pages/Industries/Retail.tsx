import React from 'react';
import { ShoppingCart, Users, BarChart, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Retail & E-commerce Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8"
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Revolutionize Your Retail Business</h2>
            <p className="text-xl mb-8">
              Create exceptional customer experiences and drive growth with our retail technology solutions.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center mx-auto group">
              Explore Retail Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}