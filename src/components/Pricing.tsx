import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  // const plans = [
  //   {
  //     name: "Starter Plan",
  //     price: "₹999",
  //     period: "/month",
  //     description: "Perfect for small homestays and BnBs",
  //     features: [
  //       "OTA Account Setup",
  //       "Content & Photo Optimization",
  //       "Monthly Listing Review",
  //       "Email Support",
  //     ],
  //     popular: false,
  //   },
  //   {
  //     name: "Growth Plan",
  //     price: "₹1,999",
  //     period: "/month",
  //     description: "Ideal for boutique hotels and growing properties",
  //     features: [
  //       "Everything in Starter",
  //       "Dynamic Pricing Strategy",
  //       "Weekly OTA Monitoring",
  //       "Priority Support",
  //       "Competitor Analysis",
  //     ],
  //     popular: true,
  //   },
  //   {
  //     name: "Premium Plan",
  //     price: "₹3,999",
  //     period: "/month",
  //     description: "Complete solution for established hotels",
  //     features: [
  //       "Everything in Growth",
  //       "Competitor Reports",
  //       "Full-time Support & Updates",
  //       "Custom Rate Management",
  //       "Dedicated Account Manager",
  //     ],
  //     popular: false,
  //   },
  // ];

  const plans = [];

  const oneTimeServices = [
    {
      name: "Basic Setup",
      price: "₹4,000",
      description: "One-time setup on up to All OTAs",
      permonth: false,
      features: [
        "Listing on All OTAs eg. Goibibo, MMT, Booking.com",
        "Photo upload & descriptions",
        "Rate & inventory setup",
        "Training on OTA management",
        // "1 month free support",
      ],
    },
    {
      name: "Advanced Setup",
      price: "₹15,000 ",
      permonth: true,
      description: "Complete setup with revenue management",
      features: [
        "All Basic features",
        "Airbnb & Agoda inclusion",
        "Promotional setup",
        "revenue management support",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Affordable Plans to Suit Every Property
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs and budget
          </p>
        </div>

        {/* Monthly Plans */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Monthly Management Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular
                    ? "ring-2 ring-orange-500 transform scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-gray-800 hover:bg-gray-900"
                  } text-white`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div> */}

        {/* One-time Services */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Service Management Plans
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {oneTimeServices.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-orange-500">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    {service.permonth ? "per month" : "one-time"}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Custom plans available for hotel chains
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            Contact us for details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
