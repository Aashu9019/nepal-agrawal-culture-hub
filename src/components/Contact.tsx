
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            Get In <span className="text-yellow-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for any questions or to join our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-red-500 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Office Address</h3>
                  <p className="text-gray-600">Durbar Marg, Kathmandu<br />Nepal</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-500 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Phone Number</h3>
                  <p className="text-gray-600">+977-1-4123456<br />+977-9801234567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Email Address</h3>
                  <p className="text-gray-600">info@nepalagrawalsamaj.org<br />contact@nepalagrawalsamaj.org</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Your name" className="border-red-200 focus:border-red-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="border-red-200 focus:border-red-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="Message subject" className="border-red-200 focus:border-red-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Write your message here..." 
                      rows={5}
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
