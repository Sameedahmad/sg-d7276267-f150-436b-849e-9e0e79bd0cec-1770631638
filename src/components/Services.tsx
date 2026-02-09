import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Target, Palette, Code, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description: "From vision to roadmap - I help you figure out what to build and why.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Target,
    title: "User Research",
    description: "Get inside your users' heads. Real insights, not assumptions.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Interfaces that users actually enjoy using. Beauty meets function.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Rocket,
    title: "Go-to-Market",
    description: "Launch strategies that make noise. Because great products deserve great launches.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Code,
    title: "Tech Collaboration",
    description: "Bridge the gap between product and engineering. I speak both languages.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Users,
    title: "Team Coaching",
    description: "Level up your product team. Workshops, mentorship, and real talk.",
    gradient: "from-accent to-secondary",
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
            What I Can Do{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Full-stack product expertise, delivered with personality
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group relative p-8 hover:shadow-elevated transition-bounce cursor-pointer border-2 hover:border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-smooth">→</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}