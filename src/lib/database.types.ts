export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          message?: string
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          client_name: string
          company: string
          content: string
          rating: number
          created_at: string
        }
        Insert: {
          id?: string
          client_name: string
          company: string
          content: string
          rating: number
          created_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          company?: string
          content?: string
          rating?: number
          created_at?: string
        }
      }
      case_studies: {
        Row: {
          id: string
          title: string
          content: string
          industry: string
          results: Json
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          industry: string
          results: Json
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          industry?: string
          results?: Json
          created_at?: string
        }
      }
    }
  }
}