import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Heart, Factory, ShoppingCart, Shield, Landmark, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const industries = [
  { icon: Building, name: 'Banking & Finance', path: '/industries/banking', description: 'Digital banking, risk management, and fintech innovation' },
  { icon: Heart, name: 'Healthcare', path: '/industries/healthcare', description: 'EHR systems, telemedicine, and healthcare analytics' },
  { icon: Factory, name: 'Manufacturing', path: '/industries/manufacturing', description: 'Industry 4.0, IoT, and smart factory solutions' },
  { icon: ShoppingCart, name: 'Retail & E-commerce', path: '/industries/retail', description: 'Omnichannel commerce, personalization, and supply chain' },
  { icon: Shield, name: 'Insurance', path: '/industries/insurance', description: 'Claims automation, underwriting AI, and compliance' },
  { icon: Landmark, name: 'Government', path: '/industries/government', description: 'E-governance, smart cities, and public sector IT' },
];

export default function IndustriesIndex() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Industry Solutions | ELSxGlobal"
        description="Explore our industry-specific technology solutions for banking, healthcare, manufacturing, retail, insurance, and government sectors."
        keywords={['Industry Solutions', 'Vertical Solutions', 'Banking Technology', 'Healthcare IT', 'Manufacturing 4.0', 'Retail Tech']}
      />

      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Industry Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-ink-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Deep domain expertise and tailored technology solutions for your industry.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
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
                  className="block card hover:shadow-xl transition-all group"
                >
                  <div className="label mb-4">
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-brand-500 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-ink-secondary mb-4">{industry.description}</p>
                  <span className="text-brand-500 font-medium flex items-center group-hover:gap-2 transition-all">
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
