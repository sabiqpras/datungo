import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const osans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-osans",
});

export const metadata: Metadata = {
  title: "The TUN",
  description: "Your Monitoring for TUN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${osans.variable}`}>
      <body className="font-osans p-4">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
