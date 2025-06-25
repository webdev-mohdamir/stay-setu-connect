
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Property",
      description: "Share details about your hotel, homestay, or resort. We'll understand your unique needs and target audience."
    },
    {
      number: "02", 
      title: "We Set Up & Optimize Your Listings",
      description: "Our experts create compelling profiles, upload professional content, and optimize for maximum visibility."
    },
    {
      number: "03",
      title: "Enjoy More Visibility & Bookings",
      description: "Watch your bookings grow as your property reaches thousands of potential guests across multiple platforms."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your property online in just 3 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block ml-8">
                  <ArrowRight className="h-8 w-8 text-orange-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
