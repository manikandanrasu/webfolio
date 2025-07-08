import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manikandan",
  description: "Portfolio Website of Manikandan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased relative`}>
        <div
          className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url(/bg-portfolio.jpeg)" }}
        />
        <Navbar />
        <Navigation />
        <main className="relative z-10 overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );  
}
