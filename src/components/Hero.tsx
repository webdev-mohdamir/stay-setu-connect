
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Get Your Hotel Online.{" "}
                <span className="text-orange-500">Hassle-Free.</span>{" "}
                <span className="text-blue-600">Worry-Free.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                StaySetu helps hotels, homestays, and resorts get listed on top OTAs like 
                Booking.com, MakeMyTrip, Goibibo, Agoda, Airbnb, and more—without stress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-600">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600">Major OTAs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Setup Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Tell us about your property</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>We set up & optimize listings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Enjoy more bookings!</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
