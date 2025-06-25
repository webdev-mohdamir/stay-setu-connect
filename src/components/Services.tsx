
import { Card } from "@/components/ui/card";
import { Globe, Camera, TrendingUp, Clock, BarChart3, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "End-to-End OTA Listing Support",
      description: "We create your accounts, set up your property, and manage your listings across all platforms.",
      color: "bg-blue-500"
    },
    {
      icon: Camera,
      title: "Professional Photos & Content",
      description: "We craft descriptions and optimize photos that make your property irresistible to online guests.",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Pricing Strategy",
      description: "Get competitive yet profitable rates with our market-driven pricing recommendations.",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "24x7 Listing Updates",
      description: "Festive offers, new rooms, price changes—we update everything for you instantly.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      description: "Monthly reports on competitor rates and performance to keep you ahead.",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Customer Support Management",
      description: "We can handle guest queries on OTAs so you can focus on hospitality.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose StaySetu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete OTA management solutions tailored for hotels, homestays, and resorts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Who is StaySetu for?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Boutique Hotels",
              "Homestays & BnBs", 
              "Resorts in tourist destinations",
              "Newly opened or unlisted properties"
            ].map((type, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-800">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
