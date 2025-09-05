import { Button } from "@/components/ui/button";
import { Palette, Rocket, Smartphone, Globe, Zap, Box } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D Website Development",
    description: "Interactive 3D experiences with WebGL, Three.js, and advanced animations.",
    features: ["WebGL Integration", "3D Animations", "Interactive Elements"]
  },
  {
    icon: Smartphone,
    title: "Responsive 3D Design",
    description: "Mobile-optimized 3D websites that perform seamlessly across all devices.",
    features: ["Mobile First", "Cross Platform", "Touch Interactions"]
  },
  {
    icon: Palette,
    title: "Creative UI/UX",
    description: "Beautiful interfaces that combine aesthetic appeal with intuitive functionality.",
    features: ["Modern Design", "User Experience", "Brand Identity"]
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Lightning-fast 3D websites optimized for speed and user experience.",
    features: ["Fast Loading", "SEO Optimized", "Analytics Ready"]
  },
  {
    icon: Globe,
    title: "E-commerce 3D",
    description: "Revolutionary shopping experiences with 3D product visualization.",
    features: ["Product 3D Views", "AR Integration", "Payment Systems"]
  },
  {
    icon: Zap,
    title: "Custom Solutions",
    description: "Tailored 3D web solutions for unique business requirements.",
    features: ["Custom Features", "API Integration", "Scalable Architecture"]
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive 3D web solutions
            that transform your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" className="group">
            Get Custom Quote
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};