
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Sharma",
      business: "Homestay Owner, Mussoorie",
      content: "StaySetu made our Mussoorie homestay visible on 6 platforms within 4 days. Bookings doubled!",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Priya Patel",
      business: "Boutique Hotel, Goa",
      content: "Professional service and amazing results. Our occupancy rate increased by 60% in just 2 months.",
      rating: 5,
      avatar: "P"
    },
    {
      name: "Rajesh Kumar",
      business: "Resort Owner, Rishikesh",
      content: "The team handled everything perfectly. Now we're on all major OTAs without any hassle from our side.",
      rating: 5,
      avatar: "R"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real hotel owners who trusted StaySetu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-orange-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
