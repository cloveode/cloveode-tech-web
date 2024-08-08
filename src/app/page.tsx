import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloveode Technologies | Leading Web and Blockchain Development Agency",
  description:
    "Discover Cloveode Technologies, a premier web and blockchain development agency. We specialize in custom software solutions that drive innovation and growth for businesses worldwide.",
  keywords:
    "web development, blockchain development, custom software, Cloveode Technologies, digital transformation, secure applications, scalable solutions",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CallToAction />
      <Contact />
    </div>
  );
}
