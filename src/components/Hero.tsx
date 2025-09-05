import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">3D Website Development Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Stunning
            <span className="text-gradient block">3D Websites</span>
            That Captivate
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge 3D web experiences. 
            We build immersive websites that engage, convert, and leave lasting impressions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Code className="w-5 h-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-2xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-2xl font-bold text-gradient">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-2xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="text-2xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground">Years Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-1/4 left-10 perspective-1000">
        <div className="w-16 h-16 bg-gradient-primary rounded-lg shadow-3d animate-float transform-3d rotate-y-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 perspective-1000">
        <div className="w-12 h-12 bg-gradient-accent rounded-full shadow-glow animate-float transform-3d rotate-x-12" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};