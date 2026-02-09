import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="relative rounded-3xl overflow-hidden shadow-pop">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl" />
          
          <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 sm:p-16 text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Available for projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
                Ready to Build Something{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Awesome?
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Let&apos;s chat about your product. No sales pitch, just real talk about what you&apos;re building.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-secondary hover:shadow-pop transition-bounce text-lg px-8 py-6"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:border-primary hover:bg-primary/5 transition-smooth text-lg px-8 py-6 group"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send an Email
              </Button>
            </div>

            {/* Trust indicator */}
            <p className="text-sm text-muted-foreground pt-4">
              ⚡ Usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}