import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO 
        title="Product Leader | Full-Stack PM for Startups"
        description="End-to-end product leadership for startups. Strategy, execution, team building. I ship products that actually work."
      />
      
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <Services />
        <CTA />
        <Footer />
      </main>
    </>
  );
}