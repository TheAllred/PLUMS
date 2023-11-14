
import Home from "@/components/home";
import "./globals.css";
import type { Metadata } from "next";
import { createContext, useContext, useEffect } from 'react';

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
