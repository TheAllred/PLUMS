
import Home from "@/components/home";
import "./globals.css";
import type { Metadata } from "next";
import { createContext, useContext, useEffect } from 'react';


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmmdogzicvjmjhsiqshx.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Home>{children}</Home><section></section></body>
    </html>
  );
}
