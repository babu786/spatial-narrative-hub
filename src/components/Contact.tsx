import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something
            <span className="text-gradient block">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence with cutting-edge 3D technology?
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you create extraordinary 3D web experiences.
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">hello@3dwebdev.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free consultation and project estimation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Fast delivery and implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your full name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input placeholder="+91 98765 43210" className="bg-background/50" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-input">
                  <option>Select project type</option>
                  <option>3D Website Development</option>
                  <option>E-commerce 3D</option>
                  <option>Interactive Showcase</option>
                  <option>Custom 3D Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-input">
                  <option>Select budget range</option>
                  <option>₹50K - ₹1L</option>
                  <option>₹1L - ₹3L</option>
                  <option>₹3L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  rows={5}
                  className="bg-background/50"
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};