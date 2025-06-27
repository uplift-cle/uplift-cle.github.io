"use client";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const MotionCard = motion.create(Card)

export default function MissionSection() {
    return (
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
    )
}