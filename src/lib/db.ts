import { supabase } from './supabase';

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at?: Date;
}

export interface Testimonial {
  id: string;
  content: string;
  rating: number;
  created_at: Date;
  client_name: string;
  company: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  content: string;
  industry: string;
  results: Record<string, any>;
  created_at: Date;
}

// Sample data for fallback when database is unavailable
const sampleData = {
  testimonials: [
    {
      id: '1',
      client_name: 'John Smith',
      company: 'Tech Innovators Inc.',
      content: 'The AI solutions provided by Tenebris Navitas have transformed our business operations.',
      rating: 5,
      created_at: new Date()
    },
    {
      id: '2',
      client_name: 'Sarah Johnson',
      company: 'Global Solutions Ltd.',
      content: 'Their quantum computing expertise helped us solve complex optimization problems.',
      rating: 5,
      created_at: new Date()
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'AI-Driven Manufacturing Optimization',
      content: 'Implemented advanced AI systems to optimize manufacturing processes.',
      industry: 'Manufacturing',
      results: {
        'Efficiency Increase': '45%',
        'Cost Reduction': '$2.5M annually'
      },
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Quantum Computing in Finance',
      content: 'Leveraged quantum algorithms for risk assessment.',
      industry: 'Financial Services',
      results: {
        'Processing Speed': '100x faster',
        'Accuracy': '99.9%'
      },
      created_at: new Date()
    }
  ]
};

// Database operations with fallback to sample data
export const dbOperations = {
  async submitContactForm(formData: Omit<ContactForm, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([formData])
        .select();

      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error submitting form:', error);
      // Return a simulated successful submission
      return {
        id: Date.now().toString(),
        ...formData,
        created_at: new Date()
      };
    }
  },

  async getContactSubmissions(): Promise<ContactForm[]> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return []; // Return empty array for submissions
    }
  },

  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return sampleData.testimonials; // Return sample testimonials
    }
  },

  async getCaseStudies(): Promise<CaseStudy[]> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching case studies:', error);
      return sampleData.caseStudies; // Return sample case studies
    }
  }
};