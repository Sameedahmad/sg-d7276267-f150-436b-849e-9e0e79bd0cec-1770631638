import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container relative mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Available for consulting & advisory</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]">
            I Ship Products That
            <span className="block text-accent mt-2">Actually Work</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            Full-stack product leader who speaks fluent engineer, handles support like a pro, and knows the startup ecosystem inside out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="gradient-accent text-lg px-8 py-6 shadow-glow hover:scale-105 transition-smooth font-semibold group"
            >
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold"
            >
              See My Work
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>0→1 Product Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Team Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Founder Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}