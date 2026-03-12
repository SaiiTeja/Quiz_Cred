import React from "react";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Rithu sharma",
    role: "ECE Student",
    feedback: "QuizCred quizzes helped me identify weak areas and improve my preparation.",
    image: "/images/student-1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Reddy",
    role: "CSE Student", 
    feedback: "The certification tests and analytics dashboard helped me track my progress.",
    image: "/images/student-2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Mechanical Student",
    feedback: "The platform is simple, clean, and perfect for skill assessment.",
    image: "/images/student-3.jpg",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="startup-card p-6 text-center h-full flex flex-col justify-between group">
      {/* Profile Image */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a placeholder if image doesn't exist
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=ffffff&size=128`;
            }}
          />
        </div>
        
        {/* Student Info */}
        <h4 className="text-white font-semibold text-lg mb-1">
          {testimonial.name}
        </h4>
        <p className="text-blue-300 text-sm mb-4">
          {testimonial.role}
        </p>
      </div>

      {/* Star Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Feedback */}
      <p className="text-gray-300 text-sm leading-relaxed italic flex-1 flex items-center">
        "{testimonial.feedback}"
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-5" style={{ backgroundColor: '#0b1220' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-center text-4xl font-bold mb-16">
          Student Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;