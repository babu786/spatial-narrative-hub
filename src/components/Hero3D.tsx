import { Button } from "@/components/ui/button";
import { Scene3D } from "@/components/Scene3D";
import { ArrowRight, Download, Github } from "lucide-react";

export const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D className="absolute inset-0 z-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-pulse-glow">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Interactive 3D Experience</span>
          </div>

          {/* Main Heading with 3D Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="inline-block animate-float text-gradient">
              Welcome
            </span>
            <br />
            <span className="inline-block animate-float text-gradient" style={{ animationDelay: '0.5s' }}>
              to the
            </span>
            <br />
            <span className="inline-block animate-float text-gradient" style={{ animationDelay: '1s' }}>
              Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Experience the next generation of web interaction with stunning 3D visuals, 
            immersive animations, and cutting-edge technology.
          </p>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300"
            >
              Explore Experience
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Source Code
            </Button>
          </div>

          {/* Interactive Stats with 3D Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "3D Objects", value: "15+", delay: "0s" },
              { label: "Animations", value: "∞", delay: "0.2s" },
              { label: "Interactions", value: "Real-time", delay: "0.4s" },
              { label: "Performance", value: "60 FPS", delay: "0.6s" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl transform hover:-translate-y-2 hover:shadow-glow transition-all duration-500 perspective-1000"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-gradient mb-2 transform-3d hover:rotate-y-12 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};