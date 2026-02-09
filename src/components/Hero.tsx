import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10 animate-pulse" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 right-16 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
        <Zap className="w-16 h-16" />
      </div>
      <div className="absolute top-40 right-20 text-accent/20 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-10 h-10" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Product Person Extraordinaire
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight">
          I Turn Ideas Into
          <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Products People Love
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Strategy, execution, and a sprinkle of magic. Let&apos;s build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-secondary hover:shadow-pop transition-bounce text-lg px-8 py-6"
          >
            Let&apos;s Talk
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 hover:border-primary hover:bg-primary/5 transition-smooth text-lg px-8 py-6"
          >
            View My Work
          </Button>
        </div>

        {/* Social proof hint */}
        <div className="pt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary" />
          </div>
          <span>Trusted by founders & teams worldwide</span>
        </div>
      </div>
    </section>
  );
}