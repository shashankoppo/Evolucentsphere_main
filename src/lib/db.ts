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

export interface Client {
  id: string;
  name: string;
  logo_url?: string;
  industry?: string;
  website?: string;
  display_order: number;
  visible: boolean;
  created_at: string;
}

export interface Award {
  id: string;
  title: string;
  organization?: string;
  year?: string;
  description?: string;
  icon: string;
  display_order: number;
  visible: boolean;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photo_url?: string;
  linkedin_url?: string;
  display_order: number;
  visible: boolean;
  created_at: string;
}

export interface LeadNote {
  id: string;
  lead_id: string;
  note: string;
  created_at: string;
}

export interface ToolSubmission {
  id?: string;
  tool_type: string;
  inputs: Record<string, any>;
  result: Record<string, any>;
  email?: string;
  created_at?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest?: string;
  message?: string;
  source?: string;
  status?: string;
  estimated_budget?: string;
  tool_source?: string;
  created_at: string;
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
  },

  async getClients(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('visible', true)
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getAwards(): Promise<Award[]> {
    const { data, error } = await supabase
      .from('awards')
      .select('*')
      .eq('visible', true)
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getTeamMembers(): Promise<TeamMember[]> {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('visible', true)
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async submitToolSubmission(submission: Omit<ToolSubmission, 'id' | 'created_at'>) {
    const { error } = await supabase.from('tool_submissions').insert([submission]);
    if (error) throw error;
  },

  async submitLead(lead: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service_interest?: string;
    message?: string;
    source?: string;
    estimated_budget?: string;
    tool_source?: string;
  }) {
    const { error } = await supabase.from('leads').insert([lead]);
    if (error) throw error;
  },

  async getLeadNotes(leadId: string): Promise<LeadNote[]> {
    const { data, error } = await supabase
      .from('lead_notes')
      .select('*')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async addLeadNote(leadId: string, note: string) {
    const { error } = await supabase
      .from('lead_notes')
      .insert([{ lead_id: leadId, note }]);
    if (error) throw error;
  },

  async getToolSubmissions(): Promise<ToolSubmission[]> {
    const { data, error } = await supabase
      .from('tool_submissions')
      .select('*')
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
