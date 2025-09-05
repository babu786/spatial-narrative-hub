import { Button } from "@/components/ui/button";
import { Zap, Eye, Cpu, Sparkles } from "lucide-react";

export const About3D = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "Experience smooth 60fps WebGL animations with advanced lighting and shadows.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Eye,
      title: "Interactive Elements", 
      description: "Mouse-responsive 3D objects that react to your every movement in real-time.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Optimized Performance",
      description: "Built with Three.js for maximum efficiency and cross-device compatibility.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Cutting-edge aesthetics with glassmorphism effects and gradient overlays.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">About This Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Immersive <span className="text-gradient">3D Web</span>
            <br />Technology
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This interactive 3D website showcases the power of modern web technologies. 
            Built with React, Three.js, and WebGL, it demonstrates real-time 3D rendering, 
            interactive animations, and responsive design that adapts to your device.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 perspective-1000"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transform-3d group-hover:rotate-y-12 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-8 text-gradient">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "WebGL Version", value: "2.0", unit: "" },
              { label: "Frame Rate", value: "60", unit: "FPS" },
              { label: "3D Objects", value: "15+", unit: "" },
              { label: "Load Time", value: "<2", unit: "sec" },
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="group transform hover:scale-105 transition-all duration-300">
            Explore More Features
            <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </Button>
        </div>
      </div>
    </section>
  );
};