import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter Website",
      price: "₹25,000",
      duration: "One-time",
      description: "Perfect for small businesses and startups",
      features: [
        "5 Page Website",
        "Mobile Responsive Design", 
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Free Support",
        "Social Media Integration",
        "Google Analytics Setup"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Business Website",
      price: "₹45,000", 
      duration: "One-time",
      description: "Ideal for growing businesses with advanced features",
      features: [
        "10 Page Website",
        "Custom Design & Development",
        "CMS Integration", 
        "Advanced SEO Optimization",
        "E-commerce Ready (5 products)",
        "Payment Gateway Integration",
        "3 Months Free Support",
        "Speed Optimization",
        "Security Setup"
      ],
      popular: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Enterprise Solution",
      price: "₹1,00,000+",
      duration: "Project based", 
      description: "Comprehensive solutions for large enterprises",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced E-commerce (Unlimited products)",
        "Multi-language Support",
        "Advanced Analytics & Reports",
        "API Integrations",
        "6 Months Free Support",
        "Priority Support 24/7",
        "Dedicated Project Manager",
        "Training & Documentation"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const addOns = [
    { name: "Logo Design", price: "₹5,000" },
    { name: "Content Writing", price: "₹8,000" },
    { name: "Professional Photography", price: "₹12,000" },
    { name: "Social Media Setup", price: "₹3,000" },
    { name: "Advanced SEO Package", price: "₹15,000" },
    { name: "Website Maintenance", price: "₹8,000/month" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises. 
            All plans include free consultation and project planning.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 relative ${
                plan.popular ? 'border-2 border-accent scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent px-6 py-2 rounded-full text-sm font-bold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "gradient" : "ghost"} 
                className="w-full group-hover:scale-105 transition-transform duration-300"
                size="lg"
              >
                {plan.popular ? "Get Started Now" : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index} 
                className="flex justify-between items-center p-4 bg-background/20 rounded-xl hover:bg-background/30 transition-colors"
              >
                <span className="font-medium">{addon.name}</span>
                <span className="text-accent font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gradient">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              {
                q: "What's included in the free support?",
                a: "Bug fixes, minor content updates, and basic technical support during the specified period."
              },
              {
                q: "Do you provide hosting services?",
                a: "Yes, we can arrange hosting or help you set up with your preferred hosting provider."
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade anytime and we'll adjust the pricing accordingly."
              },
              {
                q: "What about payment terms?",
                a: "We typically take 50% advance and 50% on completion. EMI options available for enterprise plans."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and provide you with a custom quote.
            </p>
            <Button variant="gradient" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};