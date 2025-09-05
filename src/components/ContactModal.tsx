import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  trigger: React.ReactNode;
}

export const ContactModal = ({ trigger }: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleSubmit = () => {
    // Collect form data
    const firstName = (document.getElementById('modal-firstName') as HTMLInputElement)?.value || '';
    const lastName = (document.getElementById('modal-lastName') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('modal-email') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('modal-phone') as HTMLInputElement)?.value || '';
    const company = (document.getElementById('modal-company') as HTMLInputElement)?.value || '';
    const service = (document.getElementById('modal-service') as HTMLSelectElement)?.value || '';
    const budget = (document.getElementById('modal-budget') as HTMLSelectElement)?.value || '';
    const timeline = (document.getElementById('modal-timeline') as HTMLSelectElement)?.value || '';
    const message = (document.getElementById('modal-message') as HTMLTextAreaElement)?.value || '';
    
    // Create email content
    const subject = `New Quote Request from ${firstName} ${lastName}`;
    const body = `
New Quote Request Details:

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
This quote request was submitted through the BUGnBULL website.
    `.trim();
    
    // Send email
    const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
    // Close modal
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="glass-card max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">Get Your Quote</DialogTitle>
        </DialogHeader>
        
        <form className="space-y-4 mt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-firstName">First Name *</Label>
              <Input id="modal-firstName" placeholder="Enter your first name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="modal-lastName">Last Name *</Label>
              <Input id="modal-lastName" placeholder="Enter your last name" className="mt-1" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-email">Email Address *</Label>
              <Input id="modal-email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="modal-phone">Phone Number</Label>
              <Input id="modal-phone" placeholder="Enter your phone number" className="mt-1" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="modal-company">Company Name</Label>
            <Input id="modal-company" placeholder="Enter your company name" className="mt-1" />
          </div>
          
          <div>
            <Label htmlFor="modal-service">Service Needed</Label>
            <select id="modal-service" className="w-full mt-1 p-3 rounded-md border border-input bg-background text-foreground">
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
          
          <div>
            <Label htmlFor="modal-budget">Project Budget</Label>
            <select id="modal-budget" className="w-full mt-1 p-3 rounded-md border border-input bg-background text-foreground">
              <option value="">Select budget range</option>
              <option value="under-25k">Under ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-100k">₹50,000 - ₹1,00,000</option>
              <option value="above-100k">Above ₹1,00,000</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="modal-timeline">Project Timeline</Label>
            <select id="modal-timeline" className="w-full mt-1 p-3 rounded-md border border-input bg-background text-foreground">
              <option value="">Select timeline</option>
              <option value="urgent">ASAP (Rush project)</option>
              <option value="1-2weeks">1-2 weeks</option>
              <option value="1month">1 month</option>
              <option value="2-3months">2-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="modal-message">Project Details *</Label>
            <Textarea 
              id="modal-message" 
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
              rows={4}
              className="mt-1"
            />
          </div>
          
          <Button 
            variant="gradient" 
            size="lg" 
            className="w-full text-lg py-3"
            onClick={handleSubmit}
          >
            <Send className="w-5 h-5 mr-2" />
            Send Quote Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};