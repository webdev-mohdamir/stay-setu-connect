
import { Card } from "@/components/ui/card";
import { Shield, Eye, TrendingUp, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships based on reliability and integrity"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest reporting in everything we do"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to growing your business alongside ours"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success - we go above and beyond"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Trusted Partner in Hotel Success
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                At StaySetu, we believe that every hotel, no matter how big or small, deserves to reach guests across the globe. Our mission is simple: to make your property shine on top travel websites without hassle.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With years of hospitality and OTA experience, we understand what works in online travel listings. From setup to daily management, pricing to photo optimization—we handle it all while you focus on giving the best guest experience.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Why Outsource to StaySetu?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Save Time", desc: "Focus on hospitality" },
                { title: "Increase Bookings", desc: "Professional optimization" },
                { title: "Reduce Mistakes", desc: "Expert management" },
                { title: "Stay Competitive", desc: "Market insights" }
              ].map((benefit, index) => (
                <div key={index}>
                  <div className="text-lg font-semibold mb-2">✓ {benefit.title}</div>
                  <div className="text-orange-100">{benefit.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
