import { supabase } from './supabase';

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  rating: number;
  created_at: string;
  client_name: string;
  company: string;
  image_url?: string;
  approved: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  content: string;
  industry: string;
  client_name?: string;
  results: Record<string, string>;
  image_url?: string;
  slug?: string;
  created_at: string;
  published: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  category?: string;
  image_url?: string;
  slug?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface InvestorResource {
  id: string;
  title: string;
  type: string;
  url: string;
  description?: string;
  created_at: string;
  published: boolean;
}

// Database operations
export const dbOperations = {
  async submitContactForm(formData: Omit<ContactForm, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getContactSubmissions(): Promise<ContactForm[]> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getCaseStudies(): Promise<CaseStudy[]> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getInvestorResources(): Promise<InvestorResource[]> {
    const { data, error } = await supabase
      .from('investor_resources')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};

// Individual item operations
export const getItemOperations = {
  async getBlogPostById(id: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getCaseStudyById(id: string): Promise<CaseStudy | null> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('id', id)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getInvestorResourceById(id: string): Promise<InvestorResource | null> {
    const { data, error } = await supabase
      .from('investor_resources')
      .select('*')
      .eq('id', id)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data;
  }
};
