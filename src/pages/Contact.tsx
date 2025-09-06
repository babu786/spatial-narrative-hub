import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GoogleMap from "@/components/GoogleMap";
import { CallDesktopModal } from "@/components/CallDesktopModal";
import { handleCallClick } from "@/utils/deviceDetection";
import { useState } from "react";
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
  const [showCallModal, setShowCallModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
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
      <section className="pt-20 pb-8 px-4 sm:pt-24 sm:pb-12 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Ready to start your next project? Contact us today for a free consultation and let's bring your vision to life.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="h-11"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="h-11"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="h-11"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="h-11"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter your company name" 
                    className="h-11"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Service Needed *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">🌐 Website Development</SelectItem>
                      <SelectItem value="mobile-development">📱 Mobile App Development</SelectItem>
                      <SelectItem value="ecommerce">🛒 E-commerce Solutions</SelectItem>
                      <SelectItem value="ui-ux">🎨 UI/UX Design</SelectItem>
                      <SelectItem value="digital-marketing">📈 Digital Marketing</SelectItem>
                      <SelectItem value="custom-web-apps">⚙️ Custom Web Applications</SelectItem>
                      <SelectItem value="seo">🔍 SEO Services</SelectItem>
                      <SelectItem value="maintenance">🔧 Maintenance & Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Project Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">💰 Under ₹25,000</SelectItem>
                      <SelectItem value="25k-50k">💰 ₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-100k">💰 ₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="above-100k">💰 Above ₹1,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">⚡ ASAP (Rush project)</SelectItem>
                      <SelectItem value="1-2weeks">📅 1-2 weeks</SelectItem>
                      <SelectItem value="1month">📅 1 month</SelectItem>
                      <SelectItem value="2-3months">📅 2-3 months</SelectItem>
                      <SelectItem value="flexible">🕐 Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    className="resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full text-lg py-4"
                  onClick={() => {
                    // Create email content using form state
                    const subject = `New Project Inquiry from ${formData.firstName} ${formData.lastName}`;
                    const body = `
New Project Inquiry Details:

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company || 'N/A'}

Project Requirements:
- Service Needed: ${formData.service || 'Not specified'}
- Budget Range: ${formData.budget || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}

Project Details:
${formData.message || 'No additional details provided'}

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
          <div className="space-y-4 sm:space-y-6">
            
            {/* Contact Details */}
            <Card className="glass-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-xs sm:text-sm">{detail}</p>
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
                onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
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

      <CallDesktopModal 
        open={showCallModal} 
        onOpenChange={setShowCallModal}
        phoneNumber="+918764551955"
      />
    </div>
  );
}