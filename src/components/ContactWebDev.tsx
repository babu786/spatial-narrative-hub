import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Award, Users, Headphones } from "lucide-react";

export const ContactWebDev = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your
            <span className="text-gradient block">Dream Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your vision and transform it into a powerful digital solution. 
            Get in touch for a free consultation and detailed project proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help bring your digital vision to life. Whether you need a 
                simple website or a complex web application, our team has the expertise 
                to deliver exceptional results.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us Now</h4>
                  <p className="text-muted-foreground">+918764551955</p>
                  <p className="text-sm text-accent">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">contact@bugnbull.com</p>
                  <p className="text-sm text-accent">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Our Office</h4>
                  <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  <p className="text-sm text-accent">Remote services available</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-lg mb-6">Why Choose BUGnBULL?</h4>
              <div className="space-y-4">
                {[
                  { icon: Award, text: "8+ years of proven expertise" },
                  { icon: Users, text: "200+ satisfied clients" },
                  { icon: Clock, text: "On-time delivery guarantee" },
                  { icon: Headphones, text: "24/7 support & maintenance" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-accent" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Get Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input 
                    type="tel" 
                    placeholder="+918764551955" 
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors" 
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Required *</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary transition-colors" required>
                  <option value="">Select service</option>
                  <option>Custom Website Development</option>
                  <option>E-commerce Development</option>
                  <option>Mobile App Development</option>
                  <option>SEO & Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Website Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary transition-colors">
                  <option value="">Select budget range</option>
                  <option>₹25,000 - ₹50,000</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>₹1,00,000 - ₹2,00,000</option>
                  <option>₹2,00,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <Textarea
                  placeholder="Tell us about your project requirements, goals, timeline, and any specific features you need..."
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group transform hover:scale-105 transition-all duration-300">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Get Free Quote
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 2 hours with a detailed proposal.
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="grid grid-cols-2 gap-4 text-sm text-center">
                <div className="glass-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-gradient">2hrs</div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-gradient">FREE</div>
                  <div className="text-muted-foreground">Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16">
          <div className="glass-card p-6 rounded-2xl max-w-md mx-auto">
            <h4 className="text-lg font-bold mb-2 text-gradient">Need Urgent Help?</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              For urgent project requirements or technical support
            </p>
            <a
              href="tel:+918764551955"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-accent rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              Call Now: +918764551955
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};