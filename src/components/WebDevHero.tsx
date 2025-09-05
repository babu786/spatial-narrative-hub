import { Button } from "@/components/ui/button";
import { Scene3D } from "@/components/Scene3D";
import { ArrowRight, Phone, Play, Star, Users, Award, Zap } from "lucide-react";

export const WebDevHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D className="absolute inset-0 z-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-pulse-glow">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Trusted by 200+ Businesses</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold">4.9/5</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="text-gradient block">Website Development</span>
            Services in India
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with stunning, high-performance websites. We create 
            <span className="text-accent font-semibold"> modern, responsive, and SEO-optimized </span>
            websites that drive results and grow your business.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Professional Service</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Quality Assured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call Now: +918764551955
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="group transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Play className="w-5 h-5" />
              Learn With Us
            </Button>
          </div>

          {/* Stats with 3D Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Projects Completed", value: "500+", delay: "0s", icon: Award },
              { label: "Happy Clients", value: "200+", delay: "0.2s", icon: Users },
              { label: "Years Experience", value: "8+", delay: "0.4s", icon: Star },
              { label: "Technologies Used", value: "15+", delay: "0.6s", icon: Zap },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl transform hover:-translate-y-2 hover:shadow-glow transition-all duration-500 perspective-1000 group"
                  style={{ animationDelay: stat.delay }}
                >
                  <Icon className="w-8 h-8 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gradient mb-2 transform-3d group-hover:rotate-y-12 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Special Offer */}
          <div className="mt-16 glass-card p-6 rounded-2xl max-w-2xl mx-auto animate-pulse-glow">
            <h3 className="text-2xl font-bold text-gradient mb-2">Limited Time Offer!</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Get 25% OFF on your first website project + Free SEO optimization
            </p>
            <p className="text-sm text-accent font-semibold">Offer expires in 30 days</p>
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