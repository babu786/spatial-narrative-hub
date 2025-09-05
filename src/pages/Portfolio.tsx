import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Star } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "E-commerce",
      description: "Full-featured online marketplace with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Web App",
      description: "Comprehensive healthcare management system for hospitals and clinics with appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Website",
      description: "Modern restaurant website with online ordering system, table reservations, and menu management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tech: ["Next.js", "Sanity", "Stripe", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform mobile app for fitness tracking with workout plans and progress monitoring.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Redux", "Firebase", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web App",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tech: ["Angular", "Laravel", "MySQL", "MapBox"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "E-learning",
      description: "Online learning platform with video courses, quizzes, and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tech: ["React", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const categories = ["All", "Website", "Web App", "Mobile App", "E-commerce", "E-learning"];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-6 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}