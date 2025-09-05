import { Linkedin, Github, Mail } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Rohit Sharma",
      role: "Lead Developer & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "8+ years experience in full-stack development. Expert in React, Node.js, and modern web technologies.",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      social: {
        linkedin: "#",
        github: "#", 
        email: "rohit@bugnbull.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Senior UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e2?w=300&h=300&fit=crop&crop=face",
      bio: "Creative designer with expertise in user experience and modern design principles. 6+ years in digital design.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@bugnbull.com"
      }
    },
    {
      name: "Arjun Singh",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Specialized in React Native and Flutter development. Built 50+ mobile applications for various industries.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        linkedin: "#",
        github: "#",
        email: "arjun@bugnbull.com"
      }
    },
    {
      name: "Sneha Gupta",
      role: "Digital Marketing Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "SEO and digital marketing specialist. Helped 100+ businesses improve their online presence and rankings.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sneha@bugnbull.com"
      }
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate team of developers, designers, and digital marketing experts 
            are dedicated to bringing your vision to life with cutting-edge solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-4 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href={member.social.github}
                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Why Choose Our Team?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "8+", label: "Years Experience" },
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};