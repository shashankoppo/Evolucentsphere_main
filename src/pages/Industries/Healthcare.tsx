import React from 'react';
import { Heart, Shield, Brain, CheckCircle, ArrowRight, Lock, AlertCircle, Clock, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Heart,
    title: 'Healthcare IT Solutions',
    description: 'Comprehensive healthcare technology and digital health platforms',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Portals', 'Healthcare Analytics']
  },
  {
    icon: Brain,
    title: 'Medical AI & Analytics',
    description: 'AI-powered diagnostic and predictive healthcare solutions',
    features: ['Medical Imaging AI', 'Predictive Diagnostics', 'Drug Discovery', 'Clinical Decision Support']
  },
  {
    icon: Shield,
    title: 'Healthcare Compliance',
    description: 'HIPAA compliance and healthcare data security solutions',
    features: ['HIPAA Compliance', 'Data Security', 'Audit Management', 'Privacy Protection']
  }
];

const challenges = [
  {
    icon: Lock,
    title: 'Data Privacy & HIPAA',
    description: 'Protecting sensitive patient health records from breaches while maintaining compliance with HIPAA, HITECH, and GDPR.'
  },
  {
    icon: AlertCircle,
    title: 'Interoperability Gaps',
    description: 'Siloed EHR systems and medical devices that prevent seamless data exchange across care teams and facilities.'
  },
  {
    icon: Clock,
    title: 'Administrative Burden',
    description: 'Excessive paperwork and manual processes that reduce clinician time with patients and increase burnout.'
  },
  {
    icon: Activity,
    title: 'Rising Care Costs',
    description: 'Containing healthcare costs while improving outcomes amid growing patient volumes and chronic disease management.'
  }
];

const solutions = [
  {
    title: 'HIPAA-Compliant Data Platform',
    description: 'End-to-end encrypted health data management with audit trails, access controls, and automated compliance reporting.'
  },
  {
    title: 'FHIR-Based Interoperability',
    description: 'Standards-based health data exchange that connects EHRs, devices, and applications across the entire care continuum.'
  },
  {
    title: 'Clinical Workflow Automation',
    description: 'AI-powered documentation, coding, and scheduling that reduces administrative overhead by up to 50%.'
  },
  {
    title: 'Predictive Care Analytics',
    description: 'Machine learning models that identify high-risk patients, optimize treatment pathways, and reduce readmissions.'
  }
];

const metrics = [
  { value: '99.9%', label: 'HIPAA Compliance' },
  { value: '50%', label: 'Less Administrative Work' },
  { value: '35%', label: 'Lower Readmission Rates' },
  { value: '4x', label: 'Faster Data Exchange' }
];

export default function Healthcare() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Healthcare IT Solutions | ELSxGlobal"
        description="Comprehensive healthcare technology solutions including EHR systems, telemedicine, medical AI, and HIPAA compliance services."
        keywords={[
          'Healthcare IT',
          'Medical Technology',
          'Electronic Health Records',
          'Telemedicine',
          'Healthcare Analytics',
          'Medical AI',
          'HIPAA Compliance'
        ]}
        serviceCategory="tech"
        targetIndustries={['Healthcare']}
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
              Healthcare Technology Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-ink-secondary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Revolutionize healthcare delivery with our comprehensive IT solutions, 
              AI-powered diagnostics, and HIPAA-compliant platforms.
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
            <h2 className="text-3xl font-bold text-ink mt-4">Challenges Facing Healthcare Providers</h2>
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
            <h2 className="text-3xl font-bold text-ink mt-4">Real Impact for Healthcare Organizations</h2>
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
            <h2 className="text-3xl font-bold mb-6">Modernize Your Healthcare Operations</h2>
            <p className="text-xl mb-8">
              Enhance patient care and operational efficiency with our healthcare technology solutions.
            </p>
            <button className="btn-primary flex items-center justify-center mx-auto group">
              Schedule Healthcare Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
