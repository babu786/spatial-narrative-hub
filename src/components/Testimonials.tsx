import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Enterprises",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "BUGnBULL transformed our online presence completely! Their team delivered a stunning e-commerce website that increased our sales by 300%. Highly professional and responsive.",
      project: "E-commerce Website"
    },
    {
      name: "Meera Joshi",
      company: "Joshi Fashion House",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Amazing work! The mobile app they developed for our fashion business is exactly what we needed. User-friendly interface and excellent performance. Our customers love it!",
      project: "Mobile App Development"
    },
    {
      name: "Vikash Agarwal",
      company: "Agarwal Industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional team with excellent communication. They understood our requirements perfectly and delivered on time. The website looks modern and loads super fast.",
      project: "Corporate Website"
    },
    {
      name: "Sunita Sharma",
      company: "Sharma Consultancy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Best investment we made for our business! The SEO services helped us rank #1 on Google for our main keywords. Traffic increased by 400% in just 6 months.",
      project: "SEO & Digital Marketing"
    },
    {
      name: "Amit Patel",
      company: "Patel Tech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Incredible attention to detail! The custom CRM system they built for us streamlined our entire workflow. Saved us hours of manual work every day.",
      project: "Custom Web Application"
    },
    {
      name: "Kavita Singh",
      company: "Singh Beauty Parlour",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "They made the whole process so easy! From design to launch, everything was smooth. Our booking website has increased appointments by 250%. Excellent ROI!",
      project: "Booking Website"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with BUGnBULL and the results they've achieved.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="glass-card p-8 rounded-3xl max-w-md mx-auto">
            <div className="text-6xl font-bold text-gradient mb-4">4.9</div>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-muted-foreground">Based on 200+ client reviews</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-accent mb-6 opacity-50" />
              
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-accent">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Trusted By Businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {[
              "Kumar Enterprises", "Joshi Fashion", "Agarwal Industries", "Sharma Consultancy", "Patel Tech"
            ].map((company, index) => (
              <div
                key={index}
                className="text-center p-4 bg-background/20 rounded-xl hover:bg-background/30 transition-colors"
              >
                <div className="text-lg font-bold text-gradient">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};