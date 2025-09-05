import { WebDevHero } from "@/components/WebDevHero";
import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CallDesktopModal } from "@/components/CallDesktopModal";
import { handleCallClick } from "@/utils/deviceDetection";
import { useState } from "react";
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
  Award,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

const Index = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  const servicesPreview = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites built with React, Next.js, and modern frameworks. Fully responsive, SEO-optimized, and blazing fast performance.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Mobile-First", "Modern Tech Stack"],
      price: "Starting from ₹15,000",
      color: "from-blue-500 to-cyan-500",
      deliveryTime: "7-14 days"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native iOS & Android apps plus cross-platform solutions using React Native. From concept to App Store deployment.",
      features: ["iOS & Android", "Cross-Platform", "App Store Ready", "Push Notifications", "Backend Integration"],
      price: "Starting from ₹35,000",
      color: "from-green-500 to-emerald-500",
      deliveryTime: "4-8 weeks"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment gateways, inventory management, and analytics. Built for scalability and conversions.",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics", "Multi-Currency"],
      price: "Starting from ₹25,000",
      color: "from-purple-500 to-pink-500",
      deliveryTime: "2-4 weeks"
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
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs px-2 py-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Delivery Time */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Delivery: {service.deliveryTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{service.price}</span>
                    <Link to="/services">
                      <Button variant="ghost" size="sm" className="group/btn">
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
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
            <Card 
              className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm">+918764551955</p>
              <p className="text-xs text-accent mt-2">Click to call or get QR</p>
            </Card>
            
            <Card 
              className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => {
                const subject = "General Inquiry";
                const body = "Hi,\n\nI'm interested in your services. Please provide more information.\n\nThank you!";
                const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
              }}
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm">contact@bugnbull.com</p>
              <p className="text-xs text-accent mt-2">Click to email</p>
            </Card>
            
            <Card 
              className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => {
                const address = "Mumbai, Maharashtra, India";
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                window.open(mapsUrl, '_blank');
              }}
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">Mumbai, India</p>
              <p className="text-xs text-accent mt-2">Click to view on maps</p>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            {/* Mobile: Call functionality, Desktop: Contact form */}
            <div className="block md:hidden">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
              >
                Contact Us
              </Button>
            </div>
            <div className="hidden md:block">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallDesktopModal 
        open={showCallModal} 
        onOpenChange={setShowCallModal}
        phoneNumber="+918764551955"
      />
    </div>
  );
};

export default Index;
