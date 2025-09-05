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
      title: "Complete Web Design Fundamentals",
      description: "Master the basics of web design including HTML, CSS, typography, color theory, and layout principles.",
      level: "Beginner",
      duration: "6 weeks",
      students: 1250,
      rating: 4.9,
      price: "₹2,999",
      originalPrice: "₹4,999",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
      instructor: "Priya Sharma",
      lessons: 24,
      skills: ["HTML5", "CSS3", "Responsive Design", "Typography"],
      icon: Code,
      featured: true
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      description: "Learn user interface and experience design principles, wireframing, prototyping, and user research.",
      level: "Intermediate",
      duration: "8 weeks",
      students: 890,
      rating: 4.8,
      price: "₹4,999",
      originalPrice: "₹7,999",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      instructor: "Rohit Kumar",
      lessons: 32,
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      icon: Palette,
      featured: true
    },
    {
      id: 3,
      title: "Responsive Web Design",
      description: "Create websites that work perfectly on all devices using modern CSS techniques and frameworks.",
      level: "Intermediate",
      duration: "4 weeks",
      students: 670,
      rating: 4.7,
      price: "₹2,499",
      originalPrice: "₹3,999",
      thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop",
      instructor: "Arjun Singh",
      lessons: 18,
      skills: ["Bootstrap", "Flexbox", "Grid", "Media Queries"],
      icon: Layout,
      featured: false
    },
    {
      id: 4,
      title: "Mobile-First Design",
      description: "Design and develop websites with mobile-first approach for optimal user experience.",
      level: "Advanced",
      duration: "5 weeks",
      students: 420,
      rating: 4.6,
      price: "₹3,499",
      originalPrice: "₹5,499",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
      instructor: "Sneha Patel",
      lessons: 22,
      skills: ["Progressive Web Apps", "Touch Interfaces", "Performance"],
      icon: Smartphone,
      featured: false
    },
    {
      id: 5,
      title: "Web Design SEO Fundamentals",
      description: "Learn how to design websites that rank well in search engines and attract organic traffic.",
      level: "Beginner",
      duration: "3 weeks",
      students: 580,
      rating: 4.5,
      price: "₹1,999",
      originalPrice: "₹2,999",
      thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop",
      instructor: "Vikash Agarwal",
      lessons: 15,
      skills: ["SEO Basics", "Site Structure", "Page Speed", "Meta Tags"],
      icon: Search,
      featured: false
    },
    {
      id: 6,
      title: "Advanced CSS Animations",
      description: "Create stunning animations and interactions using CSS3 and modern web technologies.",
      level: "Advanced",
      duration: "4 weeks",
      students: 350,
      rating: 4.8,
      price: "₹3,999",
      originalPrice: "₹5,999",
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
      instructor: "Meera Joshi",
      lessons: 20,
      skills: ["CSS Animations", "Transitions", "SVG", "WebGL"],
      icon: Zap,
      featured: false
    }
  ];

  const learningPaths = [
    {
      title: "Complete Beginner",
      description: "Start from scratch and become a web designer",
      courses: ["Web Design Fundamentals", "Responsive Web Design", "Web Design SEO"],
      duration: "13 weeks",
      price: "₹6,999",
      originalPrice: "₹10,997"
    },
    {
      title: "UI/UX Specialist",
      description: "Focus on user experience and interface design",
      courses: ["UI/UX Design Masterclass", "Mobile-First Design", "Advanced CSS Animations"],
      duration: "17 weeks", 
      price: "₹9,999",
      originalPrice: "₹15,497"
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
            <span className="text-sm font-medium">Learn Web Design</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master <span className="text-gradient">Web Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From beginner to expert, learn modern web design techniques, UI/UX principles, 
            and build stunning websites that convert visitors into customers.
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
              Choose from our complete collection of web design courses
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
              Ready to Start Your <span className="text-gradient">Web Design Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive web design courses.
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