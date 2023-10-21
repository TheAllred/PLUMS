
import Home from "@/components/home";
import "./globals.css";
import type { Metadata } from "next";
import { createContext, useContext } from 'react';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Home>{children}</Home></body>
    </html>
  );
}
