import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GoogleMap from "@/components/GoogleMap";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  Globe,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+918764551955", "+918764551956"],
      description: "Available Mon-Fri, 9 AM to 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@bugnbull.com", "support@bugnbull.com"],
      description: "We reply within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Tech Park, Sector 5", "Mumbai, Maharashtra 400001"],
      description: "Our main office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "Sunday: Closed"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-500" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-500" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-500" },
    { icon: Globe, name: "Website", url: "#", color: "hover:text-green-500" }
  ];

  const officeLocations = [
    {
      city: "Mumbai",
      address: "123 Tech Park, Sector 5, Mumbai, MH 400001",
      phone: "+918764551955",
      isMain: true
    },
    {
      city: "Bangalore", 
      address: "456 Innovation Hub, Koramangala, Bangalore, KA 560034",
      phone: "+918764551956",
      isMain: false
    },
    {
      city: "Delhi",
      address: "789 Business Center, Connaught Place, New Delhi, DL 110001", 
      phone: "+918764551957",
      isMain: false
    }
  ];

  const services = [
    "Website Development",
    "Mobile App Development", 
    "E-commerce Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "Custom Web Applications",
    "SEO Services",
    "Maintenance & Support"
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to start your next project? Contact us today for a free consultation and let's bring your vision to life.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = "tel:+918764551955"}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="mt-2" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter your company name" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <select className="w-full mt-2 p-3 rounded-md border border-input bg-background text-foreground">
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="budget">Project Budget</Label>
                  <select className="w-full mt-2 p-3 rounded-md border border-input bg-background text-foreground">
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="above-100k">Above ₹1,00,000</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <select className="w-full mt-2 p-3 rounded-md border border-input bg-background text-foreground">
                    <option value="">Select timeline</option>
                    <option value="urgent">ASAP (Rush project)</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full text-lg py-4"
                  onClick={() => {
                    // Collect form data
                    const firstName = (document.getElementById('firstName') as HTMLInputElement)?.value || '';
                    const lastName = (document.getElementById('lastName') as HTMLInputElement)?.value || '';
                    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                    const company = (document.getElementById('company') as HTMLInputElement)?.value || '';
                    const service = (document.querySelector('select:nth-of-type(1)') as HTMLSelectElement)?.value || '';
                    const budget = (document.querySelector('select:nth-of-type(2)') as HTMLSelectElement)?.value || '';
                    const timeline = (document.querySelector('select:nth-of-type(3)') as HTMLSelectElement)?.value || '';
                    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                    
                    // Create email content
                    const subject = `New Project Inquiry from ${firstName} ${lastName}`;
                    const body = `
New Project Inquiry Details:

Personal Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Company: ${company || 'N/A'}

Project Requirements:
- Service Needed: ${service || 'Not specified'}
- Budget Range: ${budget || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}

Project Details:
${message || 'No additional details provided'}

---
This inquiry was submitted through the BUGnBULL contact form.
                    `.trim();
                    
                    // Send email
                    const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = mailtoUrl;
                  }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Contact Details */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                        <p className="text-xs text-accent mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
            
            {/* Social Links */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`p-3 hover:shadow-glow transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  );
                })}
              </div>
            </Card>
            
            {/* Office Locations */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Our Offices</h3>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${office.isMain ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{office.city}</h4>
                      {office.isMain && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Main Office
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                    <p className="text-primary text-sm font-medium">{office.phone}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Emergency Contact */}
            <Card className="glass-card p-6 bg-accent/5 border-accent/20">
              <h3 className="text-xl font-bold mb-3 text-accent">Emergency Support</h3>
              <p className="text-muted-foreground text-sm mb-3">
                For urgent issues with existing projects
              </p>
              <Button 
                variant="outline" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.location.href = "tel:+918764551955"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Line
              </Button>
            </Card>
            
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us on Map</h2>
          <GoogleMap />
        </div>
      </section>
    </div>
  );
}