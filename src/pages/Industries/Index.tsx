import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Heart, Factory, ShoppingCart, Shield, Landmark, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const industries = [
  { icon: Building, name: 'Banking & Finance', path: '/industries/banking', description: 'Digital banking, risk management, and fintech innovation', color: 'bg-blue-100 text-blue-600' },
  { icon: Heart, name: 'Healthcare', path: '/industries/healthcare', description: 'EHR systems, telemedicine, and healthcare analytics', color: 'bg-green-100 text-green-600' },
  { icon: Factory, name: 'Manufacturing', path: '/industries/manufacturing', description: 'Industry 4.0, IoT, and smart factory solutions', color: 'bg-orange-100 text-orange-600' },
  { icon: ShoppingCart, name: 'Retail & E-commerce', path: '/industries/retail', description: 'Omnichannel commerce, personalization, and supply chain', color: 'bg-pink-100 text-pink-600' },
  { icon: Shield, name: 'Insurance', path: '/industries/insurance', description: 'Claims automation, underwriting AI, and compliance', color: 'bg-teal-100 text-teal-600' },
  { icon: Landmark, name: 'Government', path: '/industries/government', description: 'E-governance, smart cities, and public sector IT', color: 'bg-gray-100 text-gray-600' },
];

export default function IndustriesIndex() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Industry Solutions | ELSxGlobal"
        description="Explore our industry-specific technology solutions for banking, healthcare, manufacturing, retail, insurance, and government sectors."
        keywords={['Industry Solutions', 'Vertical Solutions', 'Banking Technology', 'Healthcare IT', 'Manufacturing 4.0', 'Retail Tech']}
      />

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Industry Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Deep domain expertise and tailored technology solutions for your industry.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={industry.path}
                  className="block bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all group"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${industry.color}`}>
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <span className="text-blue-600 font-medium flex items-center group-hover:gap-2 transition-all">
                    Explore Solutions <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
