import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Product Person
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Building products people love, one pixel at a time
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Work
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" /> in 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}