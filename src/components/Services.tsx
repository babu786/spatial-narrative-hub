import { Button } from "@/components/ui/button";
import { Code, Smartphone, Search, ShoppingCart, Palette, Zap, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "Bespoke websites tailored to your business needs with modern technologies and clean code.",
    features: ["Custom Design", "Responsive Layout", "Fast Loading", "SEO Ready"],
    price: "Starting ₹25,000",
    popular: false
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and hybrid mobile applications for Android and iOS platforms.",
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    price: "Starting ₹50,000",
    popular: true
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment gateways, inventory management, and admin panels.",
    features: ["Payment Integration", "Inventory System", "Order Management", "Analytics"],
    price: "Starting ₹40,000",
    popular: false
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Boost your online presence with professional SEO and digital marketing strategies.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics Tracking"],
    price: "Starting ₹15,000/month",
    popular: false
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    description: "Beautiful, user-friendly interfaces that convert visitors into customers.",
    features: ["User Research", "Wireframing", "Prototype", "Design System"],
    price: "Starting ₹20,000",
    popular: false
  },
  {
    icon: Shield,
    title: "Website Maintenance",
    description: "Keep your website secure, updated, and performing at its best with our maintenance packages.",
    features: ["Security Updates", "Backup Service", "Performance Monitoring", "24/7 Support"],
    price: "Starting ₹8,000/month",
    popular: false
  }
];

export const Services = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business thrive online.
            From custom websites to mobile apps, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 relative ${
                  service.popular ? 'border-2 border-accent' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gradient">{service.price}</div>
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building your website with latest technologies" },
              { step: "04", title: "Launch", desc: "Testing, deployment and ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" className="group">
            Get Free Consultation
            <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};