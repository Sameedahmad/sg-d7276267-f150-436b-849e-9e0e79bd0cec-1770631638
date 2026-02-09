import { Star, TrendingUp, Users, Rocket } from "lucide-react";

const stats = [
  { icon: Rocket, value: "12+", label: "Products Launched" },
  { icon: Users, value: "50+", label: "Teams Led" },
  { icon: TrendingUp, value: "$25M+", label: "Revenue Impact" },
  { icon: Star, value: "100%", label: "Founder Satisfaction" },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-3 group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/30 transition-smooth">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold">{stat.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}