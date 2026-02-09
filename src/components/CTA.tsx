import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTA() {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="shadow-elevated border-accent/20 overflow-hidden">
          <div className="gradient-hero text-primary-foreground p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Ready to Ship Faster?
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
                Let's talk about your product challenges. First call is always free—no pitch, just real talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="gradient-accent text-lg px-8 py-6 shadow-glow hover:scale-105 transition-smooth font-semibold group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Free Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 pt-4">
              30-minute strategy session • No commitment required • Actionable insights guaranteed
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}