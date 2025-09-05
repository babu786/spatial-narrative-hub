import { WebDevHero } from "@/components/WebDevHero";
import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code2, 
  Palette, 
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Index = () => {
  const servicesPreview = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies",
      price: "Starting from ₹15,000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      price: "Starting from ₹35,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      price: "Starting from ₹25,000",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const portfolioPreview = [
    {
      title: "E-Commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Healthcare Management System",
      category: "Web App", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  const teamPreview = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma", 
      role: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Amit Singh",
      role: "Senior Frontend Developer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <WebDevHero />

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We provide comprehensive web development solutions to help your business grow online.
            </p>
            <Link to="/services">
              <Button variant="outline" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="glass-card p-6 hover:shadow-glow transition-all duration-500 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{service.price}</span>
                    <Link to="/services">
                      <Button variant="ghost" size="sm">Learn More</Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Take a look at some of our recent work and see how we've helped businesses succeed.
            </p>
            <Link to="/portfolio">
              <Button variant="outline" className="group">
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/portfolio">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden costs. Choose the perfect plan for your business needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold text-primary mb-4">₹15,000</div>
              <p className="text-muted-foreground text-sm mb-4">Perfect for small businesses</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  5 Pages Website
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Basic SEO
                </li>
              </ul>
            </Card>
            
            <Card className="glass-card p-6 ring-2 ring-primary">
              <Badge className="mb-2 bg-gradient-primary text-primary-foreground">Most Popular</Badge>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold text-primary mb-4">₹35,000</div>
              <p className="text-muted-foreground text-sm mb-4">Ideal for growing businesses</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  15 Pages Website
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Custom Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Advanced SEO
                </li>
              </ul>
            </Card>
            
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-primary mb-4">₹75,000</div>
              <p className="text-muted-foreground text-sm mb-4">Complete business solution</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Unlimited Pages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Custom Web App
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  E-commerce Platform
                </li>
              </ul>
            </Card>
          </div>
          
          <Link to="/pricing">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
              View Detailed Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our experienced team of developers and designers are here to bring your vision to life.
            </p>
            <Link to="/team">
              <Button variant="outline" className="group">
                Meet The Full Team
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamPreview.map((member, index) => (
              <Card key={index} className="glass-card text-center hover:shadow-glow transition-all duration-500 group">
                <div className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Project?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Get in touch with us today for a free consultation and let's bring your vision to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm">+918764551955</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm">contact@bugnbull.com</p>
            </Card>
            
            <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">Mumbai, India</p>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
