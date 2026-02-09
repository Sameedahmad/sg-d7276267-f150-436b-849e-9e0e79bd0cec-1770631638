import { MessageSquare, Users, Zap, Code, LineChart, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Product Strategy & Roadmapping",
    description: "Turn messy ideas into clear execution plans. Prioritize what matters, kill what doesn't.",
  },
  {
    icon: Code,
    title: "Engineering Team Leadership",
    description: "Bridge product and engineering. Ship faster without burning out your team.",
  },
  {
    icon: Users,
    title: "Startup Ecosystem Navigation",
    description: "Fundraising? Hiring? Growth? I've been there. Let's skip the costly mistakes.",
  },
  {
    icon: MessageSquare,
    title: "Customer Feedback Systems",
    description: "Build feedback loops that actually inform decisions. No more guessing games.",
  },
  {
    icon: Headphones,
    title: "Support & Success Operations",
    description: "Turn support from a cost center into your best product insights source.",
  },
  {
    icon: LineChart,
    title: "0→1 Product Launches",
    description: "From concept to market. Fast validation, smart pivots, real traction.",
  },
];

export function Services() {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What I Actually Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end product leadership for startups that need to move fast and get it right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-elevated transition-smooth border-border/50 group hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce shadow-glow">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}