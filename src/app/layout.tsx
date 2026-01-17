import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tiptoproofing | Trusted UK Roofers",
  description: "Premier roofing services in the UK. New roofs, repairs, flat roofing, and emergency call-outs. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
