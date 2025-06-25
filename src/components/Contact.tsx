
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    propertyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      propertyName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let's Get Your Property Online Today!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to boost your bookings? Get in touch for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Name *
                  </label>
                  <Input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your property
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full"
                  placeholder="Describe your property type, location, number of rooms, current booking challenges..."
                />
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">contact@staysetu.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">StaySetu Solutions, Delhi NCR, India</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">Mon-Sat: 9 AM - 7 PM</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <h3 className="text-xl font-bold mb-4">Book a Free Consultation</h3>
              <p className="mb-4">
                Get expert advice on maximizing your property's online presence. 
                Our OTA specialists will analyze your current listings and suggest improvements.
              </p>
              <Button variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                Schedule Call
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Response Promise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Email responses within 4 hours</li>
                <li>✓ Free consultation within 24 hours</li>
                <li>✓ Listing setup starts in 48 hours</li>
                <li>✓ Complete onboarding in 3-5 days</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
