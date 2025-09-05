import { Button } from "@/components/ui/button";
import { Code2, Palette, Rocket, Zap, Globe, Cpu } from "lucide-react";

export const Skills3D = () => {
  const skills = [
    {
      icon: Code2,
      title: "Three.js",
      description: "Advanced 3D graphics and WebGL programming",
      level: 95,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Modern UI/UX with 3D elements and interactions",
      level: 88,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized 3D rendering and smooth animations",
      level: 92,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "WebGL",
      description: "Hardware-accelerated graphics in web browsers",
      level: 90,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Interactive animations and user responsiveness",
      level: 85,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Optimization",
      description: "Memory management and efficient rendering",
      level: 87,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Technical Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gradient">Skills &</span>
            <br />Technologies
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering the art of 3D web development with cutting-edge technologies 
            and modern design principles.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-4 perspective-1000"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transform-3d group-hover:rotate-y-12 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Animated Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Proficiency</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2 + 0.5}s`
                      }}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="sm" className="w-full">
                    View Projects
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Technology Stack */}
        <div className="glass-card p-8 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-8 text-gradient">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Three.js", "WebGL", "React", "TypeScript", "GLSL", 
              "Blender", "CSS3", "JavaScript", "Node.js", "Vite"
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="group transform hover:scale-105 transition-all duration-300">
            See My Work
            <Rocket className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};