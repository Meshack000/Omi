import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Omi",
  description: "Frontend Developer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans bg-neutral-950 text-stone-100 relative`}>

        {/* Global floating gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-700/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-700/10 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>

      </body>
    </html>
  );
}