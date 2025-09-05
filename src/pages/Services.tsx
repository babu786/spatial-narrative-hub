import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CallDesktopModal } from "@/components/CallDesktopModal";
import { handleCallClick } from "@/utils/deviceDetection";
import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code2, 
  Palette, 
  Zap, 
  Search, 
  Shield, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

export default function Services() {
  const [showCallModal, setShowCallModal] = useState(false);
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"],
      price: "Starting from ₹15,000",
      color: "from-blue-500 to-cyan-500",
      timeline: "2-4 weeks",
      team: "2-3 developers",
      includes: ["Custom Design", "Content Management System", "Mobile Optimization", "Basic SEO Setup", "SSL Certificate", "1 Year Support"],
      process: ["Requirements Analysis", "Design Mockups", "Development", "Testing", "Deployment", "Training & Handover"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      price: "Starting from ₹35,000",
      color: "from-green-500 to-emerald-500",
      timeline: "6-12 weeks",
      team: "3-4 developers",
      includes: ["Cross-platform Development", "App Store Submission", "Push Notifications", "Offline Functionality", "API Integration", "6 Months Support"],
      process: ["App Strategy", "UI/UX Design", "Development", "Quality Assurance", "App Store Deployment", "Post-launch Support"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Admin Panel"],
      price: "Starting from ₹25,000",
      color: "from-purple-500 to-pink-500",
      timeline: "4-8 weeks",
      team: "3-4 developers",
      includes: ["Product Catalog", "Payment Integration", "Order Management", "Customer Dashboard", "Analytics", "Security Features"],
      process: ["Business Analysis", "System Design", "Development", "Payment Setup", "Testing", "Launch & Training"]
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Tailored web applications for your business needs",
      features: ["Database Design", "API Development", "User Authentication", "Dashboard"],
      price: "Starting from ₹40,000",
      color: "from-orange-500 to-red-500",
      timeline: "8-16 weeks",
      team: "4-5 developers",
      includes: ["Custom Features", "Database Design", "API Development", "User Management", "Admin Panel", "Scalable Architecture"],
      process: ["Requirements Gathering", "System Architecture", "Database Design", "Development", "Integration Testing", "Deployment"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      price: "Starting from ₹12,000",
      color: "from-indigo-500 to-purple-500",
      timeline: "2-6 weeks",
      team: "2 designers",
      includes: ["User Research", "Wireframes", "High-fidelity Designs", "Prototypes", "Design System", "Handoff Documentation"],
      process: ["Research & Discovery", "Wireframing", "Visual Design", "Prototyping", "User Testing", "Final Delivery"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and reach more customers",
      features: ["On-page SEO", "Content Strategy", "Social Media", "Analytics"],
      price: "Starting from ₹8,000/month",
      color: "from-teal-500 to-green-500",
      timeline: "Ongoing",
      team: "2-3 marketers",
      includes: ["SEO Audit", "Keyword Research", "Content Creation", "Social Media Management", "Analytics Setup", "Monthly Reports"],
      process: ["SEO Audit", "Strategy Development", "Content Creation", "Implementation", "Monitoring", "Optimization"]
    }
  ];

  const additionalServices = [
    { icon: Zap, title: "Performance Optimization", desc: "Speed up your existing website" },
    { icon: Shield, title: "Security Audits", desc: "Protect your digital assets" },
    { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical support" },
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 sm:pt-24 sm:pb-12 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            We offer comprehensive web development and digital solutions to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-8 px-4 sm:py-12 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="glass-card p-4 sm:p-6 lg:p-8 hover:shadow-glow transition-all duration-500 group">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-semibold text-primary">{service.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="group/btn">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3 text-2xl">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {service.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Timeline
                              </h4>
                              <p className="text-muted-foreground">{service.timeline}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Team Size
                              </h4>
                              <p className="text-muted-foreground">{service.team}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">What's Included</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {service.includes?.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Our Process</h4>
                            <div className="space-y-2">
                              {service.process?.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                                    {idx + 1}
                                  </div>
                                  <span className="text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-primary">{service.price}</p>
                                <p className="text-sm text-muted-foreground">Starting price</p>
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button className="px-6">Get Started</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl text-center">Get in Touch</DialogTitle>
                                    <DialogDescription className="text-center">
                                      Choose your preferred way to contact us about {service.title}
                                    </DialogDescription>
                                  </DialogHeader>
                                  
                                  <div className="space-y-4">
                                    <Button 
                                      variant="outline" 
                                      size="lg" 
                                      className="w-full text-lg py-4"
                                      onClick={() => {
                                        const message = `Hi! I'm interested in ${service.title}. Can you please provide more details and a quote?`;
                                        const phoneNumber = "918764551955";
                                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappUrl, '_blank');
                                      }}
                                    >
                                      <Smartphone className="w-5 h-5 mr-2" />
                                      WhatsApp Contact
                                    </Button>
                                    
                                    <Button 
                                      variant="outline" 
                                      size="lg" 
                                      className="w-full text-lg py-4"
                                        onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
                                    >
                                      <Zap className="w-5 h-5 mr-2" />
                                      Call Now
                                    </Button>
                                    
                                    <Button 
                                      variant="outline" 
                                      size="lg" 
                                      className="w-full text-lg py-4"
                                      onClick={() => {
                                        const subject = `Inquiry about ${service.title}`;
                                        const body = `Hi,\n\nI'm interested in ${service.title}. Please provide more details about this service and a quote.\n\nThank you!`;
                                        const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                        window.location.href = mailtoUrl;
                                      }}
                                    >
                                      <Search className="w-5 h-5 mr-2" />
                                      Email Contact
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="glass-card p-4 sm:p-6 text-center hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                  Get Free Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center">Get in Touch for Free Quote</DialogTitle>
                  <DialogDescription className="text-center">
                    Choose your preferred way to contact us for a free project quote
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => {
                      const message = "Hi! I'm interested in getting a free quote for my project. Can you please provide more details?";
                      const phoneNumber = "918764551955";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    WhatsApp Contact
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => {
                      const subject = "Free Quote Request";
                      const body = "Hi,\n\nI'm interested in getting a free quote for my project. Please provide more details about your services and pricing.\n\nThank you!";
                      const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoUrl;
                    }}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Email Contact
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = '/learn'}
            >
              Learn Web Design
            </Button>
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
}