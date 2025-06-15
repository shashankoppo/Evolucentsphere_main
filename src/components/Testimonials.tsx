import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { Testimonial } from '../lib/db';
import SEOHead from './SEOHead';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <SEOHead 
          title="Client Testimonials & Success Stories"
          description="Read what our clients say about ELSxGlobal's transformative solutions. Discover real success stories and testimonials from satisfied customers across various industries."
          keywords={[
            'Client Testimonials',
            'Customer Reviews',
            'Success Stories',
            'Client Feedback',
            'Customer Satisfaction',
            'Business Transformation',
            'Client Experience',
            'Customer Success'
          ]}
        />
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <SEOHead 
        title="Client Testimonials & Success Stories"
        description="Read what our clients say about ELSxGlobal's transformative solutions. Discover real success stories and testimonials from satisfied customers across various industries."
        keywords={[
          'Client Testimonials',
          'Customer Reviews',
          'Success Stories',
          'Client Feedback',
          'Customer Satisfaction',
          'Business Transformation',
          'Client Experience',
          'Customer Success'
        ]}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our satisfied clients about their transformation journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt={`${testimonial.client_name} - Client testimonial`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.client_name}</h3>
                  <p className="text-gray-600">Client</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="mb-6">
                <Quote className="h-8 w-8 text-purple-200 mb-4" />
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}