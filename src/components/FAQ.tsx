import { useState } from "react";
import { CallDesktopModal } from "@/components/CallDesktopModal";
import { handleCallClick } from "@/utils/deviceDetection";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showCallModal, setShowCallModal] = useState(false);

  const faqs = [
    {
      question: "How long does it take to develop a website?",
      answer: "The timeline depends on the complexity of your project. A basic website typically takes 2-3 weeks, while complex e-commerce or custom web applications can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in your web development packages?",
      answer: "Our packages include custom design, responsive development, SEO optimization, contact forms, social media integration, Google Analytics setup, and free support for the specified period. Additional features like e-commerce, payment gateways, and custom functionalities are available as add-ons."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive maintenance packages starting from ₹8,000/month. This includes security updates, backups, performance monitoring, content updates, and 24/7 technical support to keep your website running smoothly."
    },
    {
      question: "Can you redesign our existing website?",
      answer: "Absolutely! We specialize in website redesigns to modernize your online presence. We'll analyze your current site, understand your goals, and create a fresh, modern design while preserving your valuable content and SEO rankings."
    },
    {
      question: "Do you develop mobile apps as well?",
      answer: "Yes, we develop both native and hybrid mobile applications for Android and iOS platforms using React Native and Flutter. Our apps are designed for optimal performance and user experience across all devices."
    },
    {
      question: "What about SEO and digital marketing services?",
      answer: "We offer comprehensive SEO and digital marketing services including keyword research, on-page optimization, link building, content marketing, Google Ads management, and social media marketing to boost your online visibility and drive more traffic."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically require 50% advance payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We also offer EMI options for enterprise clients."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can arrange reliable hosting solutions and help you register the perfect domain name. We work with premium hosting providers to ensure your website loads fast and remains secure. We can also help migrate from your existing hosting if needed."
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive. Your website will look and function perfectly on desktops, tablets, and smartphones. We test across multiple devices and browsers."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes! We can integrate a user-friendly Content Management System (CMS) that allows you to easily update text, images, and other content without any technical knowledge. We'll also provide training on how to use it effectively."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most common questions 
            our clients ask about our web development services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-background/10 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-primary/20 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help you 
              with any questions about our services, pricing, or process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Contact Us Now
              </a>
              <button
                className="inline-flex items-center justify-center px-6 py-3 glass-card rounded-lg font-medium hover:bg-background/20 transition-colors duration-300"
                onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
              >
                Call: +918764551955
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallDesktopModal 
        open={showCallModal} 
        onOpenChange={setShowCallModal}
        phoneNumber="+918764551955"
      />
    </section>
  );
};