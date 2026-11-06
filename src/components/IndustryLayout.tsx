import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronRight, Home as HomeIcon } from 'lucide-react';
import SEOHead from './SEOHead';

export interface IndustryService {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface IndustryChallenge {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryMetric {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedIndustry {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface IndustryLayoutProps {
  title: string;
  pageTitle: string;
  description: string;
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  accentColor: 'green' | 'blue' | 'orange' | 'rose' | 'sky' | 'slate';
  tagline: string;
  services: IndustryService[];
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  metrics: IndustryMetric[];
  faqs: FAQItem[];
  relatedIndustries: RelatedIndustry[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  targetIndustry: string;
}

const accentMap = {
  green: { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', gradient: 'from-green-50', icon: 'text-green-600' },
  blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', gradient: 'from-blue-50', icon: 'text-blue-600' },
  orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', gradient: 'from-orange-50', icon: 'text-orange-600' },
  rose: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', gradient: 'from-rose-50', icon: 'text-rose-600' },
  sky: { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200', gradient: 'from-sky-50', icon: 'text-sky-600' },
  slate: { text: 'text-slate-700', bg: 'bg-slate-100', border: 'border-slate-300', gradient: 'from-slate-100', icon: 'text-slate-700' },
};

export default function IndustryLayout({
  title,
  pageTitle,
  description,
  keywords,
  heroImage,
  heroImageAlt,
  accentColor,
  tagline,
  services,
  challenges,
  solutions,
  metrics,
  faqs,
  relatedIndustries,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  targetIndustry,
}: IndustryLayoutProps) {
  const accent = accentMap[accentColor];
  const breadcrumbs = [
    { name: 'Industries', path: '/industries' },
    { name: title, path: `/industries/${title.toLowerCase().replace(/[^a-z]+/g, '-')}` },
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title={pageTitle}
        description={description}
        keywords={keywords}
        type="service"
        serviceCategory="tech"
        targetIndustries={[targetIndustry]}
        breadcrumbs={breadcrumbs}
        faq={faqs}
      />

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-3" aria-label="breadcrumb">
        <div className="container-main">
          <ol className="flex items-center space-x-1 text-sm">
            <li>
              <Link to="/" className="text-brand-500 hover:text-brand-600 flex items-center">
                <HomeIcon className="h-4 w-4 mr-1" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 text-ink-muted mx-1" />
              <Link to="/industries" className="text-brand-500 hover:text-brand-600">Industries</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 text-ink-muted mx-1" />
              <span className="text-ink-secondary font-medium">{title}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero with image */}
      <section className={`relative overflow-hidden bg-gradient-to-b ${accent.gradient} to-white`}>
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={`label mb-4 ${accent.bg} ${accent.text} ${accent.border} border`}>
                {targetIndustry}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 leading-[1.1]">
                {title}
              </h1>
              <p className="text-xl text-ink-secondary mb-8 leading-relaxed">
                {tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  {ctaButtonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore All Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-strong aspect-[4/3]"
            >
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">What We Do</span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">Our {title} Solutions</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              Specialized technology and services designed for the unique demands of the {targetIndustry.toLowerCase()} sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${accent.bg} ${accent.icon} mb-5`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-ink-secondary text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-ink-secondary">
                      <CheckCircle className={`h-4 w-4 ${accent.text} mr-2 mt-0.5 shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Industry Challenges</span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">Challenges Facing {title}</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              We understand the pressures your industry faces — and we build solutions that address them directly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${accent.bg} ${accent.icon} mb-4`}>
                  <challenge.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">{challenge.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Our Approach</span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">How We Solve These Challenges</h2>
            <p className="text-ink-secondary text-lg max-w-2xl mx-auto">
              Each solution is engineered, deployed, and supported by domain experts who understand your regulatory and operational reality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="card p-6 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`shrink-0 w-10 h-10 rounded-full ${accent.bg} ${accent.icon} flex items-center justify-center font-bold text-sm`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">{solution.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className={`section-padding ${accent.bg}`}>
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="section-label">Proven Impact</span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">Real Results for Our Clients</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${accent.text} mb-2`}>{metric.value}</div>
                <div className="text-ink-secondary text-sm font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-padding bg-[var(--color-bg)]">
          <div className="container-main max-w-3xl">
            <div className="text-center mb-10">
              <span className="section-label">FAQ</span>
              <h2 className="text-3xl font-bold text-ink mt-2 mb-4">{title} — Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-flat p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <h3 className="text-base font-bold text-ink mb-2">{faq.question}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Industries */}
      <section className="section-padding surface">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="section-label">Explore More</span>
            <h2 className="text-3xl font-bold text-ink mt-2">Other Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedIndustries.map((ind, i) => (
              <motion.div
                key={ind.path}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={ind.path}
                  className="group card p-5 flex flex-col items-center text-center h-full"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-500 mb-3">
                    <ind.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-ink group-hover:text-brand-500 transition-colors">
                    {ind.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-500">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-lg text-brand-100 mb-8">{ctaDescription}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 font-semibold text-sm rounded-lg hover:bg-brand-50 transition-colors"
            >
              {ctaButtonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
