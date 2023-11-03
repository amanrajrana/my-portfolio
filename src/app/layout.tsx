import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Raj Rana",
  description: "Welcome to my virtual home on the internet. - Aman Raj Rana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#131212] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
