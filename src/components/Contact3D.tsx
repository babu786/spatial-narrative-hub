import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Github, Linkedin } from "lucide-react";

export const Contact3D = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Linkedin, 
      label: "LinkedIn",
      href: "#",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "#", 
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's Create Something
            <span className="text-gradient block">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life with cutting-edge 3D web technology? 
            Let's discuss your project and create extraordinary digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">Connect With Me</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about creating immersive 3D web experiences that push 
                the boundaries of what's possible. Whether you have a project in mind 
                or just want to chat about the latest in web technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Me</h4>
                  <p className="text-muted-foreground">hello@3dexperience.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Me</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">India (Remote Available)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-lg mb-6">Follow My Work</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Start Your Project</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary transition-colors">
                  <option>Select project type</option>
                  <option>3D Website Development</option>
                  <option>Interactive Experience</option>
                  <option>WebGL Application</option>
                  <option>3D Game Development</option>
                  <option>Custom 3D Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-primary/20 focus:border-primary transition-colors">
                  <option>Select budget range</option>
                  <option>$1K - $5K</option>
                  <option>$5K - $10K</option>
                  <option>$10K - $25K</option>
                  <option>$25K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea
                  placeholder="Tell me about your vision, goals, timeline, and any specific requirements..."
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group transform hover:scale-105 transition-all duration-300">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>

            {/* Features */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>24h response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Global availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};