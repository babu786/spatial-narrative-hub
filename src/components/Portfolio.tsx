import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce 3D Showcase",
    description: "Interactive product visualization with AR capabilities",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    tech: ["Three.js", "WebGL", "React", "AR.js"],
    rating: 5.0,
    category: "E-commerce"
  },
  {
    title: "Immersive Brand Experience",
    description: "3D storytelling website for luxury brand",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tech: ["WebGL", "GSAP", "Three.js", "Next.js"],
    rating: 4.9,
    category: "Branding"
  },
  {
    title: "Interactive Architecture Tour",
    description: "Virtual property walkthrough with 360° views",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    tech: ["A-Frame", "WebXR", "360° Video", "VR"],
    rating: 4.8,
    category: "Real Estate"
  },
  {
    title: "Gaming Portal 3D",
    description: "Immersive gaming community platform",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    tech: ["Babylon.js", "WebGL", "Socket.io", "Node.js"],
    rating: 5.0,
    category: "Gaming"
  },
  {
    title: "Medical 3D Visualization",
    description: "Interactive anatomical models for education",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tech: ["Three.js", "WebGL", "Medical APIs", "React"],
    rating: 4.9,
    category: "Healthcare"
  },
  {
    title: "Automotive Configurator",
    description: "3D car customization and configuration tool",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop",
    tech: ["Three.js", "WebGL", "React", "Material Design"],
    rating: 4.8,
    category: "Automotive"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of groundbreaking 3D web experiences that push
            the boundaries of what's possible on the web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm font-medium">{project.rating}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="flex-1 group/btn">
                    <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Preview
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Site
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};