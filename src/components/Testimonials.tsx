import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dbOperations } from '../lib/db';
import type { Testimonial } from '../lib/db';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await dbOperations.getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading || testimonials.length === 0) return null;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-brand-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="label mb-4 inline-block">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            See what our clients say about transforming their business with ELSxGlobal
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-brand-500 rounded-3xl p-8 sm:p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full filter blur-3xl"></div>
            </div>

            <Quote className="absolute top-8 left-8 h-16 w-16 text-white/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                  "{testimonials[activeIndex]?.content}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center text-xl font-bold text-white">
                      {testimonials[activeIndex]?.client_name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonials[activeIndex]?.client_name}</p>
                      <p className="text-white/70">{testimonials[activeIndex]?.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonials[activeIndex]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="absolute bottom-8 right-8 flex gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-brand-500 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
