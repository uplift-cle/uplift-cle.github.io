"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, Mail, Phone, MapPin, Heart, Building, Globe } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Lottie from "lottie-react"
import plantAnimation from "./plant.json"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-24">
        <section className="w-full min-h-screen py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
              <motion.div initial = {{x: -25, opacity: 0}} animate = {{x: 0, opacity: 1}} transition = {{duration: 1, ease: "easeInOut"}} className="w-full lg:w-1/2 text-left space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-[#0B7D44] text-white hover:bg-green-700"
                >
                  For the community, by the community
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">
                  Uplifting Cleveland Through{" "}
                  <span className="text-[#31fc75]">Innovation</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-lg sm: text-xl">
                  Addressing acute, systemic issues within Cleveland through innovative,
                  interdisciplinary, and research-driven solutions.
                </p>
              
                <div className="space-x-4">
                  <a href="#mission">
                    <Button
                      size="lg"
                      className="bg-[#31fc75] hover:bg-green-700"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-[#31fc75] text-[#31fc75] hover:bg-[#143e26]"
                    >
                      Contact Us
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className = "w-full lg:w-1/2 flex justify-center items-center">
                <div className = "absolute top-0 w-0 h-0 overflow-hidden rounded-b-[10rem] bg-green-900 lg:w-[35rem] lg:h-[37rem]">
                  <Lottie animationData={plantAnimation} loop={false} className="absolute w-[45rem] left-[-5rem] bottom-[-12rem]"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-16 md:py-24 lg:py-32 text-white bg-black bg-opacity-60">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div initial = {{opacity:0}} whileInView = {{opacity:1}} transition = {{duration: 1, ease: "easeIn"}} viewport = {{once: true, amount: 0.5}} className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mission Statement</h2>
                <p className="mx-auto max-w-[800px] text-lg md:text-xl/relaxed leading-relaxed">
                  Uplift.cle is dedicated to addressing acute, systemic issues within Cleveland through innovative,
                  interdisciplinary, and research-driven solutions. We aim to develop scalable interventions and
                  coordinate relief efforts integrating public health, technology, policy, and business strategies to
                  uplift underserved communities.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.5}} viewport = {{once:true, amount: 0.5}} className=" border-[#31fc75] border-opacity-60">
                  <CardContent className="p-6 text-center space-y-4">
                    <Users className="h-12 w-12 text-[#0B7D44] mx-auto" />
                    <h3 className="text-xl font-semibold text-white">Community Impact</h3>
                    <p className="text-slate-300">
                      Working directly with Cleveland residents to understand and address their most pressing needs.
                    </p>
                  </CardContent>
                </MotionCard>
                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.7}} viewport = {{once:true, amount: 0.5}} className=" border-[#31fc75] border-opacity-60">
                  <CardContent className="p-6 text-center space-y-4">
                    <Target className="h-12 w-12 text-[#0B7D44] mx-auto" />
                    <h3 className="text-xl font-semibold text-white">Research-Driven</h3>
                    <p className="text-slate-300">
                      Leveraging data and evidence-based approaches to create sustainable, scalable solutions.
                    </p>
                  </CardContent>
                </MotionCard>
                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.9}} viewport = {{once:true, amount: 0.5}} className=" border-[#31fc75] border-opacity-60">
                  <CardContent className="p-6 text-center space-y-4">
                    <Lightbulb className="h-12 w-12 text-[#0B7D44] mx-auto" />
                    <h3 className="text-xl font-semibold text-white">Innovation</h3>
                    <p className="text-slate-300">
                      Bringing together diverse expertise to develop creative solutions to complex challenges.
                    </p>
                  </CardContent>
                </MotionCard>
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-12">
              <motion.div initial = {{opacity:0}} whileInView = {{opacity:1}} transition = {{duration: 1, ease: "easeIn"}} viewport = {{once: true, amount: 0.5}} className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">
                  Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-white text-lg">
                  The fundamental principles that guide our work and decision-making in every initiative we undertake.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0B7D44] to-green-700 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Community-Centered</h3>
                    <p className="text-slate-400">
                      Every solution begins with listening to and learning from the communities we serve, ensuring their voices guide our approach.
                    </p>
                  </CardContent>
                </MotionCard>

                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Evidence-Based</h3>
                    <p className="text-slate-400">
                      We ground our interventions in rigorous research and data analysis to ensure effectiveness and measurable impact.
                    </p>
                  </CardContent>
                </MotionCard>

                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-800 to-teal-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Interdisciplinary</h3>
                    <p className="text-slate-400">
                      Complex problems require diverse perspectives. We bring together experts from multiple fields to create comprehensive solutions.
                    </p>
                  </CardContent>
                </MotionCard>

                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Scalable Impact</h3>
                    <p className="text-slate-400">
                      We design interventions that can grow and adapt, creating lasting change that extends beyond individual projects.
                    </p>
                  </CardContent>
                </MotionCard>

                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-700 to-yellow-600 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Equity-Focused</h3>
                    <p className="text-slate-400">
                      We prioritize addressing systemic inequities and ensuring our work benefits those who need it most.
                    </p>
                  </CardContent>
                </MotionCard>

                <MotionCard initial = {{opacity: 0, y: 20}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 1, ease: "easeOut", delay: 0.2}} viewport = {{once:true, amount: 0.5}} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-800 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">Sustainable</h3>
                    <p className="text-slate-400">
                      We build solutions that can be maintained and improved over time, creating lasting positive change for Cleveland.
                    </p>
                  </CardContent>
                </MotionCard>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </main>


    </div>
  )
}
