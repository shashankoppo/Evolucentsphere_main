import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { dbOperations } from '../lib/db';
import type { ContactForm } from '../lib/db';
import SEOHead from './SEOHead';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissions, setSubmissions] = useState<ContactForm[]>([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await dbOperations.getContactSubmissions();
        setSubmissions(data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
    fetchSubmissions();
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await dbOperations.submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <SEOHead 
        title="Contact Us - Get in Touch"
        description="Contact ELSxGlobal for enterprise IT solutions, AI consulting, and digital transformation services. Get expert consultation and transform your business today."
        keywords={[
          'Contact ELSxGlobal',
          'Business Consultation',
          'IT Solutions Contact',
          'AI Consulting',
          'Digital Transformation',
          'Enterprise Solutions',
          'Technology Consulting',
          'Business Support'
        ]}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Ready to transform your business? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 text-center">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <div className="text-gray-600">
                      <p>+917247558873</p>
                      <p>+918770422622</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@evolucentsphere.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      123 Innovation Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}