import { NavbarWebDev } from "@/components/NavbarWebDev";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Zap
} from "lucide-react";

export default function Learn() {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Comprehensive full stack program covering HTML, CSS, JavaScript, React, and Node.js. Build responsive, dynamic websites from scratch.",
      level: "Beginner to Advanced",
      duration: "20 weeks",
      students: 2850,
      rating: 4.9,
      price: "₹11,999",
      originalPrice: "₹19,999",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 80,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      icon: Code,
      featured: true
    },
    {
      id: 2,
      title: "Frontend Development Mastery",
      description: "Master modern frontend technologies including React, Vue.js, and advanced JavaScript concepts for building interactive web applications.",
      level: "Intermediate",
      duration: "12 weeks",
      students: 1890,
      rating: 4.8,
      price: "₹8,999",
      originalPrice: "₹14,999",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 48,
      skills: ["React", "Vue.js", "TypeScript", "State Management"],
      icon: Palette,
      featured: true
    },
    {
      id: 3,
      title: "Backend Development with Node.js",
      description: "Learn server-side development with Node.js, Express, and database management for full-stack applications.",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1270,
      rating: 4.7,
      price: "₹7,499",
      originalPrice: "₹12,999",
      thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 40,
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      icon: Layout,
      featured: false
    },
    {
      id: 4,
      title: "Web Security & Cyber Protection",
      description: "Learn to build secure websites and protect against cyber threats with modern security practices.",
      level: "Advanced",
      duration: "8 weeks",
      students: 920,
      rating: 4.8,
      price: "₹9,499",
      originalPrice: "₹15,499",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 32,
      skills: ["Web Security", "SSL/TLS", "Authentication", "Data Protection"],
      icon: Smartphone,
      featured: false
    },
    {
      id: 5,
      title: "E-commerce Website Development",
      description: "Build complete e-commerce solutions with payment gateways, user management, and modern features.",
      level: "Intermediate",
      duration: "16 weeks",
      students: 1580,
      rating: 4.9,
      price: "₹13,999",
      originalPrice: "₹22,999",
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 64,
      skills: ["E-commerce", "Payment Integration", "User Management", "Shopping Cart"],
      icon: Search,
      featured: false
    },
    {
      id: 6,
      title: "Digital Marketing for Developers",
      description: "Learn SEO, digital marketing strategies, and how to promote websites effectively online.",
      level: "Beginner",
      duration: "6 weeks",
      students: 1150,
      rating: 4.6,
      price: "₹4,999",
      originalPrice: "₹7,999",
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
      instructor: "Expert Team",
      lessons: 24,
      skills: ["SEO", "Google Ads", "Social Media Marketing", "Analytics"],
      icon: Zap,
      featured: false
    }
  ];

  const learningPaths = [
    {
      title: "Full-Stack Developer",
      description: "Complete journey from frontend to backend development",
      courses: ["Complete Web Development", "Backend Development", "Web Security"],
      duration: "38 weeks",
      price: "₹24,999",
      originalPrice: "₹47,997"
    },
    {
      title: "E-commerce Specialist",
      description: "Build and market complete e-commerce solutions",
      courses: ["Frontend Development", "E-commerce Development", "Digital Marketing"],
      duration: "34 weeks", 
      price: "₹22,999",
      originalPrice: "₹42,997"
    }
  ];

  const features = [
    { icon: BookOpen, title: "50+ Courses", desc: "Comprehensive curriculum" },
    { icon: Users, title: "Expert Instructors", desc: "Industry professionals" },
    { icon: Award, title: "Certificates", desc: "Verified completion" },
    { icon: Clock, title: "Lifetime Access", desc: "Learn at your pace" }
  ];

  return (
    <div className="min-h-screen">
      <NavbarWebDev />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Learn Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master <span className="text-gradient">Web Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From beginner to expert, learn full-stack web development, build secure websites, 
            and create powerful web applications with modern technologies.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-card p-4 rounded-2xl text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with our most popular courses designed by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {courses.filter(course => course.featured).map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/80">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <Button variant="gradient" className="group">
                        Enroll Now
                        <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning <span className="text-gradient">Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow structured learning paths designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {learningPaths.map((path, index) => (
              <Card key={index} className="glass-card p-8 text-center hover:shadow-glow transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-gradient">{path.title}</h3>
                <p className="text-muted-foreground mb-6">{path.description}</p>
                
                <div className="space-y-3 mb-6">
                  {path.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{course}</span>
                    </div>
                  ))}
                </div>
                
                <div className="glass-card p-4 rounded-2xl mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Complete in {path.duration}</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">{path.price}</span>
                    <span className="text-muted-foreground line-through">{path.originalPrice}</span>
                  </div>
                  <div className="text-xs text-accent mt-1">Save {Math.round((1 - parseInt(path.price.replace(/[₹,]/g, '')) / parseInt(path.originalPrice.replace(/[₹,]/g, ''))) * 100)}%</div>
                </div>
                
                <Button variant="gradient" size="lg" className="w-full">
                  Start Learning Path
                </Button>
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

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-background/80 text-xs">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <h3 className="font-bold text-lg">{course.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-primary">{course.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        View Course
                      </Button>
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
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
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
    </div>
  );
}