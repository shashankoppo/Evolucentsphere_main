import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables, using fallback mode');
}

// Create Supabase client with fallback values for development
export const supabase = createClient<Database>(
  supabaseUrl || 'https://example.supabase.co',
  supabaseAnonKey || 'fallback-anon-key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true
    }
  }
);

// Test connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count')
      .limit(1);
    
    if (error) throw error;
    console.log('Supabase connection successful');
    return true;
  } catch (error) {
    console.warn('Supabase connection error:', error);
    return false;
  }
};

// Export database operations
export * from './db';