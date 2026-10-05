import React from 'react';
import { Building, Shield, Database, Users, CheckCircle, Lock, AlertCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';

const services = [
  {
    icon: Database,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital platforms and e-governance solutions',
    features: ['Online Service Portals', 'Digital Identity Management', 'E-Procurement Systems', 'Citizen Engagement Platforms']
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Government-grade security and regulatory compliance',
    features: ['Zero Trust Architecture', 'Data Sovereignty', 'FedRAMP Compliance', 'Security Operations Center']
  },
  {
    icon: Building,
    title: 'Smart City Infrastructure',
    description: 'IoT-enabled urban management and public safety systems',
    features: ['Traffic Management AI', 'Public Safety Monitoring', 'Utility Optimization', 'Environmental Analytics']
  },
  {
    icon: Users,
    title: 'Workforce Modernization',
    description: 'Digital transformation of government workforce operations',
    features: ['HR Automation', 'Training Platforms', 'Collaboration Tools', 'Process Digitization']
  }
];

const stats = [
  { value: '50%', label: 'Service Delivery Improvement' },
  { value: '35%', label: 'Operational Cost Reduction' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '3x', label: 'Faster Processing' }
];

const challenges = [
  {
    icon: Lock,
    title: 'Legacy System Risk',
    description: 'Aging IT infrastructure that creates security vulnerabilities and prevents modern citizen service delivery.'
  },
  {
    icon: AlertCircle,
    title: 'Citizen Service Gaps',
    description: 'Slow, paper-based processes that frustrate citizens and create long wait times for essential services.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Threats',
    description: 'Nation-state attacks and ransomware targeting sensitive government data and critical public infrastructure.'
  },
  {
    icon: FileText,
    title: 'Regulatory Complexity',
    description: 'Overwhelming compliance requirements across federal, state, and local jurisdictions with limited resources.'
  }
];

const solutions = [
  {
    title: 'Secure Cloud Modernization',
    description: 'FedRAMP-compliant cloud migration that replaces legacy systems with scalable, resilient government platforms.'
  },
  {
    title: 'Digital Citizen Service Portal',
    description: 'Self-service e-government platform that handles applications, permits, and payments online 24/7.'
  },
  {
    title: 'Zero-Trust Government Security',
    description: 'Defense-grade cybersecurity with continuous monitoring, threat hunting, and incident response automation.'
  },
  {
    title: 'Automated Compliance Management',
    description: 'Centralized compliance tracking and reporting that streamlines audits across all regulatory frameworks.'
  }
];

const metrics = [
  { value: '99.9%', label: 'System Uptime' },
  { value: '50%', label: 'Faster Service Delivery' },
  { value: '40%', label: 'Security Incident Reduction' },
  { value: '60%', label: 'Less Compliance Overhead' }
];

export default function Government() {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Government Industry Solutions | ELSxGlobal"
        description="Digital government solutions including e-governance platforms, smart city infrastructure, cybersecurity compliance, and workforce modernization."
        keywords={['Government Technology', 'E-Governance', 'Smart City', 'GovTech', 'Digital Government', 'Public Sector IT']}
        serviceCategory="tech"
        targetIndustries={['Government']}
      />

      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Government Industry Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-ink-secondary mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Empowering public sector digital transformation with secure, scalable, and citizen-centric technology solutions.
            </motion.p>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-ink-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">Our Government Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
            <h2 className="text-3xl font-bold text-ink mt-4">Challenges Facing Government Agencies</h2>
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
            <h2 className="text-3xl font-bold text-ink mt-4">Real Impact for Government Operations</h2>
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

      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Modernize Government Services?</h2>
            <p className="text-xl mb-8">Let us help you build secure, efficient, citizen-centric digital infrastructure.</p>
            <a href="/contact" className="btn-primary inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
