// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QuizProvider } from '../context/QuizContext';
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NPTEL Wildlife Practice Quiz App Made by Mohammad Shaad",
  description: "A simple quiz app to practice for the NPTEL Wildlife course.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuizProvider>{children}</QuizProvider>
        <Analytics mode={'production'} />
        <Footer />
      </body>
    </html>
  );
}
