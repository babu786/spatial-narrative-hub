import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, MapPin, Calendar, Award } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years of experience in full-stack development with expertise in React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      location: "Mumbai, India",
      experience: "10+ years",
      projects: 150,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Certified AWS Solutions Architect",
        "React Expert Certification",
        "Led 50+ successful projects"
      ]
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer passionate about creating beautiful and intuitive user experiences with modern design principles.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      location: "Bangalore, India",
      experience: "7+ years",
      projects: 120,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Adobe Certified Expert",
        "UX Design Specialist",
        "Winner of Design Awards 2023"
      ]
    },
    {
      name: "Amit Singh",
      role: "Senior Frontend Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Frontend specialist with deep knowledge of modern JavaScript frameworks and responsive web design.",
      skills: ["Vue.js", "React", "TypeScript", "Tailwind CSS"],
      location: "Delhi, India",
      experience: "6+ years",
      projects: 85,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "JavaScript Expert Certification",
        "Vue.js Certified Developer",
        "Open Source Contributor"
      ]
    },
    {
      name: "Sneha Patel",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Backend engineering expert specializing in scalable APIs, databases, and cloud infrastructure.",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      location: "Pune, India",
      experience: "5+ years",
      projects: 70,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Python Expert Certification",
        "Database Design Specialist",
        "Cloud Infrastructure Expert"
      ]
    },
    {
      name: "Vikram Mehta",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Mobile development expert creating native and cross-platform applications for iOS and Android.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      location: "Hyderabad, India",
      experience: "6+ years",
      projects: 95,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "React Native Certified",
        "Flutter Expert Developer",
        "App Store Featured Apps"
      ]
    },
    {
      name: "Kavya Reddy",
      role: "Digital Marketing Specialist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Digital marketing expert helping businesses grow their online presence through SEO, content, and social media.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      location: "Chennai, India",
      experience: "4+ years",
      projects: 60,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      achievements: [
        "Google Ads Certified",
        "SEO Specialist Certification",
        "Social Media Marketing Expert"
      ]
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "15+", icon: "👥" },
    { label: "Years in Business", value: "8+", icon: "📅" },
    { label: "Projects Delivered", value: "500+", icon: "🚀" },
    { label: "Client Satisfaction", value: "99%", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We're a passionate team of developers, designers, and digital strategists dedicated to creating exceptional web experiences.
          </p>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card overflow-hidden hover:shadow-glow transition-all duration-500 group">
                {/* Profile Image */}
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                        <MapPin className="w-3 h-3" />
                        Location
                      </div>
                      <div className="text-xs font-medium">{member.location}</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                        <Calendar className="w-3 h-3" />
                        Experience
                      </div>
                      <div className="text-xs font-medium">{member.experience}</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                        <Award className="w-3 h-3" />
                        Projects
                      </div>
                      <div className="text-xs font-medium">{member.projects}+</div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                We never compromise on quality and always deliver exceptional work that exceeds expectations.
              </p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-muted-foreground text-sm">
                We believe in building long-term partnerships with our clients based on trust and mutual success.
              </p>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We stay ahead of technology trends to provide cutting-edge solutions for modern businesses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}