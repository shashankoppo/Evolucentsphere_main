import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AdminContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  hasUsers: boolean | null;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType>({
  user: null,
  session: null,
  loading: true,
  hasUsers: null,
  signIn: async () => ({ error: 'Not initialized' }),
  signUp: async () => ({ error: 'Not initialized' }),
  signOut: async () => {},
});

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasUsers, setHasUsers] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Check if any admin users exist (only when not logged in)
  useEffect(() => {
    if (!user && !loading) {
      checkExistingUsers();
    }
  }, [user, loading]);

  const checkExistingUsers = async () => {
    try {
      // Try to sign in with a fake email to check if users exist
      // This will fail but we can infer from the error type
      const { error } = await supabase.auth.signInWithPassword({
        email: '__setup_check__@elsxglobal.com',
        password: '__setup_check__',
      });
      // If we get "Invalid login credentials", users exist
      // If we get a different error, might mean no users
      if (error?.message?.toLowerCase().includes('invalid login')) {
        setHasUsers(true);
      } else {
        // Assume no users on other errors (rate limit, etc. still show login)
        setHasUsers(true);
      }
    } catch {
      setHasUsers(true);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signUp = async (email: string, password: string) => {
    // Only allow signup if we haven't confirmed users exist
    if (hasUsers === true) {
      return { error: 'Admin account already exists. Please sign in.' };
    }
    const { error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      setHasUsers(true);
    }
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AdminContext.Provider value={{ user, session, loading, hasUsers, signIn, signUp, signOut }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
