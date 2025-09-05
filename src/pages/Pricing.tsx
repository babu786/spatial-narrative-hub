import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, X, Zap, Crown, Rocket, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "₹15,000",
      period: "one-time",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5 Pages Website",
        "Responsive Design",
        "Basic SEO Setup", 
        "Contact Form",
        "Social Media Integration",
        "1 Month Support",
        "Mobile Optimized"
      ],
      notIncluded: [
        "E-commerce Features",
        "Advanced Analytics",
        "Custom Integrations",
        "Priority Support"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "₹35,000",
      period: "one-time",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "15 Pages Website",
        "Custom Design",
        "Advanced SEO",
        "Blog/News Section",
        "Analytics Integration",
        "Payment Gateway",
        "Admin Panel",
        "3 Months Support",
        "Speed Optimization",
        "Security Features"
      ],
      notIncluded: [
        "Mobile App",
        "Advanced E-commerce",
        "Custom Integrations"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "₹75,000",
      period: "one-time",
      description: "Complete solution for large businesses",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "E-commerce Platform",
        "Multi-user System",
        "Advanced Analytics",
        "API Development",
        "Third-party Integrations",
        "6 Months Support",
        "Performance Monitoring",
        "Security Audits",
        "Training Session",
        "Priority Support"
      ],
      notIncluded: [],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const addOns = [
    { name: "Mobile App Development", price: "₹25,000", desc: "Native iOS/Android app" },
    { name: "Advanced E-commerce", price: "₹15,000", desc: "Multi-vendor marketplace" },
    { name: "Custom CRM Integration", price: "₹12,000", desc: "Salesforce, HubSpot, etc." },
    { name: "Digital Marketing Setup", price: "₹8,000", desc: "SEO, Social Media, Ads" },
    { name: "Maintenance Package", price: "₹5,000/month", desc: "Ongoing updates & support" },
    { name: "Additional Training", price: "₹3,000/session", desc: "Team training sessions" }
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All packages include modern design, mobile optimization, and professional support.
          </p>
          
          {/* Special Offer Banner */}
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-12 animate-pulse-glow">
            <h3 className="text-2xl font-bold text-gradient mb-2">Limited Time Offer!</h3>
            <p className="text-lg text-muted-foreground mb-2">
              Get 25% OFF on any package + Free SEO optimization
            </p>
            <p className="text-sm text-accent font-semibold">Offer expires in 30 days</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`glass-card p-8 relative hover:shadow-glow transition-all duration-500 ${
                    plan.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant={plan.popular ? "gradient" : "outline"} 
                        className="w-full text-lg py-3 min-h-[3rem]"
                        style={{ minWidth: "100%" }}
                      >
                        <span className="inline-flex items-center justify-center w-full">
                          Get Started
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-center">Get in Touch</DialogTitle>
                        <DialogDescription className="text-center">
                          Choose your preferred way to contact us about the {plan.name} plan
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full text-lg py-4"
                          onClick={() => {
                            const message = `Hi! I'm interested in the ${plan.name} plan (${plan.price}). Can you please provide more details about this package?`;
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
                          onClick={() => {
                            window.location.href = "tel:+918764551955";
                          }}
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Call Now
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full text-lg py-4"
                          onClick={() => {
                            const subject = `Interest in ${plan.name} Plan`;
                            const body = `Hi,\n\nI'm interested in the ${plan.name} plan (${plan.price}). Please provide more details about this package and the next steps.\n\nThank you!`;
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
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your package with additional services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-glow transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{addon.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{addon.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">What's included in the support period?</h3>
              <p className="text-muted-foreground">Our support includes bug fixes, minor content updates, technical assistance, and guidance on using your website effectively.</p>
            </Card>
            
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">Yes! You can upgrade to a higher plan at any time. We'll adjust the pricing based on what you've already paid.</p>
            </Card>
            
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">Do you provide hosting services?</h3>
              <p className="text-muted-foreground">We can help you choose and set up hosting, or work with your existing hosting provider. Hosting costs are separate from our development fees.</p>
            </Card>
            
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">What's your typical project timeline?</h3>
              <p className="text-muted-foreground">Starter projects take 1-2 weeks, Professional projects 3-4 weeks, and Enterprise projects 6-8 weeks depending on complexity.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <a href="tel:+918764551955">
                Schedule Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}