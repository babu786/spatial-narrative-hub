import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CallDesktopModal } from "@/components/CallDesktopModal";
import { handleCallClick } from "@/utils/deviceDetection";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  Play,
  Star,
  CheckCircle,
  Code,
  Palette,
  Layout,
  Smartphone,
  Search,
  Zap,
  QrCode
} from "lucide-react";

export default function Learn() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const courses = [
    {
      id: 1,
      title: "Web Craft",
      description: "Comprehensive full stack program covering HTML, CSS, JavaScript, and Project Integration. Perfect for beginners starting their web development journey.",
      level: "Beginner",
      duration: "8 weeks",
      students: 1250,
      rating: 4.9,
      price: "₹9,999",
      originalPrice: "₹15,999",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
      instructor: "BUGnBULL Team",
      lessons: 32,
      skills: ["HTML5", "CSS3", "JavaScript", "Project Integration"],
      icon: Code,
      featured: true
    },
    {
      id: 2,
      title: "Frontend Fusion",
      description: "Excel in Frontend Development with React JS and Next JS mastery. Advanced course for building modern user interfaces.",
      level: "Advanced",
      duration: "6 weeks",
      students: 890,
      rating: 4.8,
      price: "₹14,999",
      originalPrice: "₹22,999",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      instructor: "BUGnBULL Team",
      lessons: 24,
      skills: ["React JS", "Next JS", "Advanced JavaScript", "Component Architecture"],
      icon: Palette,
      featured: true
    },
    {
      id: 3,
      title: "Backend Synergy",
      description: "Master Backend Development with Relational Database, Node JS, Express JS, and MongoDB. Build powerful server-side applications.",
      level: "Advanced",
      duration: "8 weeks",
      students: 670,
      rating: 4.7,
      price: "₹19,999",
      originalPrice: "₹29,999",
      thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop",
      instructor: "BUGnBULL Team",
      lessons: 32,
      skills: ["Node JS", "Express JS", "MongoDB", "Relational Database"],
      icon: Layout,
      featured: false
    }
  ];

  const learningPaths = [
    {
      title: "Complete Web Developer",
      description: "Start from basics and become a full-stack web developer",
      courses: ["Web Craft", "Frontend Fusion", "Backend Synergy"],
      duration: "22 weeks",
      price: "₹39,999",
      originalPrice: "₹67,997"
    },
    {
      title: "Frontend Specialist",
      description: "Master modern frontend development and user interfaces",
      courses: ["Web Craft", "Frontend Fusion"],
      duration: "14 weeks", 
      price: "₹22,999",
      originalPrice: "₹38,998"
    }
  ];

  const features = [
    { icon: BookOpen, title: "3 Core Courses", desc: "Focused curriculum" },
    { icon: Users, title: "Industry Experts", desc: "Real-world experience" },
    { icon: Award, title: "Certification", desc: "Industry-recognized" },
    { icon: Clock, title: "Flexible Learning", desc: "Learn at your pace" }
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 sm:pt-24 sm:pb-12 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">Learn Web Development</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Master <span className="text-gradient">Web Development</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            From beginner to expert, learn full-stack web development, build secure websites, 
            and create powerful web applications with modern technologies.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                  <h3 className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center">Get in Touch</DialogTitle>
                  <DialogDescription className="text-center">
                    Choose your preferred way to contact us to start learning
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => {
                      const message = "Hi! I'm interested in starting my web development learning journey. Can you please provide more details about the courses?";
                      const phoneNumber = "918764551955";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    WhatsApp Contact
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
                  >
                    <QrCode className="w-5 h-5 mr-2" />
                    Call Now (QR)
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    onClick={() => {
                      const subject = "Interest in Web Development Courses";
                      const body = "Hi,\n\nI'm interested in starting my web development learning journey. Please provide more details about your courses and enrollment process.\n\nThank you!";
                      const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoUrl;
                    }}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Email Contact
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => setShowVideoPreview(true)}>
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>
        </div>
      </section>


      {/* Learning Paths */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Learning <span className="text-gradient">Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Follow structured learning paths designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {learningPaths.map((path, index) => (
              <Card key={index} className="glass-card p-4 sm:p-6 lg:p-8 text-center hover:shadow-glow transition-all duration-500">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gradient">{path.title}</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{path.description}</p>
                
                <div className="space-y-3 mb-6">
                  {path.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{course}</span>
                    </div>
                  ))}
                </div>
                
                <div className="glass-card p-4 rounded-2xl mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">Complete in {path.duration}</div>
                    <div className="text-xs text-accent">Save {Math.round((1 - parseInt(path.price.replace(/[₹,]/g, '')) / parseInt(path.originalPrice.replace(/[₹,]/g, ''))) * 100)}%</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">{path.price}</span>
                    <span className="text-muted-foreground line-through">{path.originalPrice}</span>
                  </div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="gradient" size="lg" className="w-full">
                      Start Learning Path
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-center">Get in Touch</DialogTitle>
                      <DialogDescription className="text-center">
                        Choose your preferred way to contact us about the {path.title}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full text-lg py-4"
                        onClick={() => {
                          const message = `Hi! I'm interested in the ${path.title} learning path (${path.duration}). Can you please provide more details about enrollment and the courses included?`;
                          const phoneNumber = "918764551955";
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        <Smartphone className="w-5 h-5 mr-2" />
                        WhatsApp Contact
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full text-lg py-4"
                        onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
                      >
                        <QrCode className="w-5 h-5 mr-2" />
                        Call Now (QR)
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full text-lg py-4"
                        onClick={() => {
                          const subject = `Interest in ${path.title} Learning Path`;
                          const body = `Hi,\n\nI'm interested in the ${path.title} learning path (${path.duration}). Please provide more details about enrollment and the courses included.\n\nThank you!`;
                          const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                          window.location.href = mailtoUrl;
                        }}
                      >
                        <Search className="w-5 h-5 mr-2" />
                        Email Contact
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our complete collection of web development courses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 sm:h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                      <Badge variant="outline" className="bg-background/80 text-xs">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg">{course.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-primary">{course.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="text-xs">
                            View Course
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center gap-2">
                              <course.icon className="w-6 h-6 text-primary" />
                              {course.title}
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {course.description}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            {/* Course Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="glass-card p-3 rounded-lg text-center">
                                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                                <div className="font-semibold text-sm">{course.duration}</div>
                                <div className="text-xs text-muted-foreground">Duration</div>
                              </div>
                              <div className="glass-card p-3 rounded-lg text-center">
                                <BookOpen className="w-5 h-5 text-primary mx-auto mb-1" />
                                <div className="font-semibold text-sm">{course.lessons}</div>
                                <div className="text-xs text-muted-foreground">Lessons</div>
                              </div>
                              <div className="glass-card p-3 rounded-lg text-center">
                                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                                <div className="font-semibold text-sm">{course.students.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Students</div>
                              </div>
                              <div className="glass-card p-3 rounded-lg text-center">
                                <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                                <div className="font-semibold text-sm">{course.rating}</div>
                                <div className="text-xs text-muted-foreground">Rating</div>
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="font-semibold mb-3">What You'll Learn</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {course.skills.map((skill, skillIndex) => (
                                  <div key={skillIndex} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-sm">{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Pricing */}
                            <div className="glass-card p-3 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-xs text-muted-foreground mb-1">Course Price</div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xl font-bold text-primary">{course.price}</span>
                                    <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                                  </div>
                                  <div className="text-xs text-accent">
                                    Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                                  </div>
                                </div>
                                <Button 
                                  variant="gradient" 
                                  size="sm"
                                  onClick={() => {
                                    const message = `Hi! I'm interested in enrolling in the ${course.title} course. Can you please provide more details about the enrollment process?`;
                                    const phoneNumber = "918764551955";
                                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                    window.open(whatsappUrl, '_blank');
                                  }}
                                >
                                  Enroll Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Web Development Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive web development courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">Get in Touch</DialogTitle>
                    <DialogDescription className="text-center">
                      Choose your preferred way to contact us for consultation
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full text-lg py-4"
                      onClick={() => {
                        const message = "Hi! I'm interested in scheduling a consultation for web development courses. Can you please provide more details?";
                        const phoneNumber = "918764551955";
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      WhatsApp Contact
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full text-lg py-4"
                      onClick={() => handleCallClick("+918764551955", () => setShowCallModal(true))}
                    >
                      <QrCode className="w-5 h-5 mr-2" />
                      Call Now (QR)
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full text-lg py-4"
                      onClick={() => {
                        const subject = "Consultation Request - Web Development Courses";
                        const body = "Hi,\n\nI'm interested in scheduling a consultation for your web development courses. Please provide more details about the consultation process.\n\nThank you!";
                        const mailtoUrl = `mailto:contact@bugnbull.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailtoUrl;
                      }}
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Email Contact
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                7-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Certificate of completion
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Lifetime access
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallDesktopModal 
        open={showCallModal} 
        onOpenChange={setShowCallModal}
        phoneNumber="+918764551955"
      />

      {/* Video Preview Modal */}
      <Dialog open={showVideoPreview} onOpenChange={setShowVideoPreview}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Course Preview</DialogTitle>
            <DialogDescription className="text-center">
              Get a glimpse of what you'll learn in our web development courses
            </DialogDescription>
          </DialogHeader>
          
          <div className="aspect-video w-full bg-muted rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Web Development Course Preview"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="gradient" size="lg" className="flex-1" onClick={() => setShowVideoPreview(false)}>
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
            <Button variant="outline" size="lg" className="flex-1" onClick={() => setShowVideoPreview(false)}>
              Close Preview
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}