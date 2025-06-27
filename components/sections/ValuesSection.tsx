"use client";
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Users, Target, Lightbulb, Globe, Heart, Building } from "lucide-react"

const MotionCard = motion.create(Card)

export default function ValuesSection() {
    return (
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
    )
}