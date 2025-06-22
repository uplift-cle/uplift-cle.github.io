import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function ContactPage() {
    return (
      <div className="relative flex flex-col min-h-screen  text-slate-200">
      <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-20">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 text-white">
            <div className="container px-4 md:px-6 mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
              <p className="mx-auto max-w-[900px] text-slate-300 text-lg">
                Ready to get involved? We'd love to hear from you. Reach out to learn more about our work or explore partnership opportunities.
              </p>
            </div>
          </section>
  
          {/* Contact Form and Info */}
          <section className="w-full py-16 md:py-24 border-b">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className=" border-slate-900 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-200">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="bg-slate-900 text-white border-slate-600 placeholder-slate-400" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-200">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="bg-slate-900 text-white border-slate-600 placeholder-slate-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="bg-slate-900 text-white border-slate-600 placeholder-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-200">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(216) 555-0123" className="bg-slate-900 text-white border-slate-600 placeholder-slate-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason" className="text-slate-200">Reason for Contact</Label>
                      <Select>
                        <SelectTrigger className="bg-slate-900 text-white border-slate-600">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 text-white border-slate-900">
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-200">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about how you'd like to get involved or what you'd like to know..."
                        rows={5}
                        className="bg-slate-900 text-white border-slate-600 placeholder-slate-400"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-900 hover:to-emerald-900 text-white">
                      Send Message
                      {/** TODO: add server-side code to actually implement this */}
                    </Button>
                  </CardContent>
                </Card>
  
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      Whether you're interested in partnering with us, volunteering your time, or simply learning more
                      about our work, we're here to help. Our team is committed to building meaningful relationships with
                      everyone who shares our vision for a better Cleveland.
                    </p>
                  </div>
  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-slate-300">hello@uplift.cle</p>
                        <p className="text-sm text-slate-500">We typically respond within 24 hours</p>
                      </div>
                    </div>
  
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-slate-300">(216) 555-0123</p>
                        <p className="text-sm text-slate-500">Monday - Friday, 9AM - 5PM EST</p>
                      </div>
                    </div>
  
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Current Locations</h3>
                        <p className="text-slate-300">Cleveland, Ohio</p>
                        <p className="text-sm text-slate-500">Serving the Greater Cleveland area</p>
                      </div>
                    </div>
                  </div>
  
                  <Card className="bg-slate-900 border-slate-900 text-white">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-3">Office Hours</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Monday - Friday</span>
                          <span className="text-white">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Saturday</span>
                          <span className="text-white">10:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Sunday</span>
                          <span className="text-white">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>  
      </div>
    )
  }
  