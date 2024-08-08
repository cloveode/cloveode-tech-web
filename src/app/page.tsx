import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

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
