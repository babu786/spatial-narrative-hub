import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export const Navbar3D = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">3D Experience</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="gradient" size="sm" className="animate-pulse-glow">
              Experience Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card hover:shadow-glow transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="gradient" size="sm" className="mt-4 w-fit animate-pulse-glow">
                Experience Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};