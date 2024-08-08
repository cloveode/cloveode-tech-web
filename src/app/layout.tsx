import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import CustomCursor from "@/components/animation/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="lofi" lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
