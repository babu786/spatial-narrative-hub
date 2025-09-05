import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"],
      price: "Starting from ₹15,000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      price: "Starting from ₹35,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Admin Panel"],
      price: "Starting from ₹25,000",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Tailored web applications for your business needs",
      features: ["Database Design", "API Development", "User Authentication", "Dashboard"],
      price: "Starting from ₹40,000",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      price: "Starting from ₹12,000",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and reach more customers",
      features: ["On-page SEO", "Content Strategy", "Social Media", "Analytics"],
      price: "Starting from ₹8,000/month",
      color: "from-teal-500 to-green-500"
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
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer comprehensive web development and digital solutions to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="glass-card p-8 hover:shadow-glow transition-all duration-500 group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn Web Design
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}