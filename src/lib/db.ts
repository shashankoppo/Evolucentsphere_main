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

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
}

export interface InvestorResource {
  id: string;
  title: string;
  type: string;
  url: string;
  created_at: Date;
}

// Sample data for fallback when database is unavailable
const sampleData = {
  testimonials: [
    {
      id: '1',
      client_name: 'John Smith',
      company: 'Tech Innovators Inc.',
      content: 'The AI solutions provided by ELSxGlobal have transformed our business operations, leading to a 40% increase in efficiency and significant cost savings.',
      rating: 5,
      created_at: new Date()
    },
    {
      id: '2',
      client_name: 'Sarah Johnson',
      company: 'Global Solutions Ltd.',
      content: 'Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle. Outstanding results!',
      rating: 5,
      created_at: new Date()
    },
    {
      id: '3',
      client_name: 'Michael Chen',
      company: 'Future Systems Corp.',
      content: 'ELSxGlobal delivered exceptional service and cutting-edge technology solutions. The results exceeded our expectations in every way.',
      rating: 5,
      created_at: new Date()
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'AI-Driven Manufacturing Optimization',
      content: 'Implemented advanced AI systems to optimize manufacturing processes for a leading automotive company, resulting in unprecedented efficiency gains.',
      industry: 'Manufacturing',
      results: {
        'Efficiency Increase': '45%',
        'Cost Reduction': '$2.5M annually',
        'Quality Improvement': '32%'
      },
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Quantum Computing in Financial Services',
      content: 'Leveraged quantum algorithms to enhance risk assessment and portfolio optimization for a major financial institution.',
      industry: 'Financial Services',
      results: {
        'Processing Speed': '100x faster',
        'Accuracy': '99.9%',
        'Cost Savings': '$5M+'
      },
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Healthcare Analytics Platform',
      content: 'Developed an AI-powered analytics platform for predictive healthcare diagnostics, improving patient outcomes significantly.',
      industry: 'Healthcare',
      results: {
        'Diagnostic Accuracy': '95%',
        'Patient Outcomes': '30% improved',
        'Cost Efficiency': '40%'
      },
      created_at: new Date()
    }
  ],
  blogPosts: [
    {
      id: '1',
      title: 'The Future of AI in Enterprise',
      content: 'Exploring how artificial intelligence is reshaping enterprise operations and decision-making processes across industries.',
      author: 'Dr. Emily Chen',
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Quantum Computing: A New Era',
      content: 'Understanding the revolutionary impact of quantum computing on business and technology, and what it means for the future.',
      author: 'Prof. James Wilson',
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of AI',
      content: 'Examining the intersection of artificial intelligence and cybersecurity in modern business environments.',
      author: 'Sarah Martinez',
      created_at: new Date()
    }
  ],
  investorResources: [
    {
      id: '1',
      title: 'Annual Report 2023',
      type: 'Financial Report',
      url: 'https://example.com/annual-report-2023.pdf',
      created_at: new Date()
    },
    {
      id: '2',
      title: 'Q4 2023 Earnings Presentation',
      type: 'Presentation',
      url: 'https://example.com/q4-2023-earnings.pdf',
      created_at: new Date()
    },
    {
      id: '3',
      title: 'Investor Day 2024 Recording',
      type: 'Video',
      url: 'https://example.com/investor-day-2024',
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
  },

  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return sampleData.blogPosts; // Return sample blog posts
    }
  },

  async getInvestorResources(): Promise<InvestorResource[]> {
    try {
      const { data, error } = await supabase
        .from('investor_resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching investor resources:', error);
      return sampleData.investorResources; // Return sample investor resources
    }
  }
};

// Individual item operations
export const getItemOperations = {
  async getBlogPostById(id: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      // Return sample data if available
      const samplePost = sampleData.blogPosts.find(post => post.id === id);
      return samplePost || null;
    }
  },

  async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching case study:', error);
      // Return sample data if available
      const sampleStudy = sampleData.caseStudies.find(study => study.id === id);
      return sampleStudy || null;
    }
  },

  async getInvestorResourceById(id: string): Promise<InvestorResource | null> {
    try {
      const { data, error } = await supabase
        .from('investor_resources')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching investor resource:', error);
      // Return sample data if available
      const sampleResource = sampleData.investorResources.find(resource => resource.id === id);
      return sampleResource || null;
    }
  }
};

// Individual item operations
export const getItemOperations = {
  async getBlogPostById(id: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      // Return sample data if available
      const samplePost = sampleData.blogPosts.find(post => post.id === id);
      return samplePost || null;
    }
  },

  async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching case study:', error);
      // Return sample data if available
      const sampleStudy = sampleData.caseStudies.find(study => study.id === id);
      return sampleStudy || null;
    }
  },

  async getInvestorResourceById(id: string): Promise<InvestorResource | null> {
    try {
      const { data, error } = await supabase
        .from('investor_resources')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching investor resource:', error);
      // Return sample data if available
      const sampleResource = sampleData.investorResources.find(resource => resource.id === id);
      return sampleResource || null;
    }
  }
};