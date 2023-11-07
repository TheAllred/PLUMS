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
      note: {
        Row: {
          attachment_description: string | null
          attachment_url: string | null
          created_at: string
          id: number
          indent: number
          name: string
          pinned: boolean
          sort_order: number
          user_id: number | null
        }
        Insert: {
          attachment_description?: string | null
          attachment_url?: string | null
          created_at?: string
          id?: number
          indent?: number
          name: string
          pinned?: boolean
          sort_order?: number
          user_id?: number | null
        }
        Update: {
          attachment_description?: string | null
          attachment_url?: string | null
          created_at?: string
          id?: number
          indent?: number
          name?: string
          pinned?: boolean
          sort_order?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "note_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: number
          last_name: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: number
          last_name: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: number
          last_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
