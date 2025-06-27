"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Lottie from "lottie-react"
import plantAnimation from "../animations/plant.json"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen py-10 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full lg:w-1/2 text-left space-y-6"
          >
            <Badge variant="secondary" className="bg-[#0B7D44] text-white hover:bg-green-700">
              For the community, by the community
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">
              Uplifting Cleveland Through <span className="text-[#31fc75]">Innovation</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white text-lg sm:text-xl">
              Addressing acute, systemic issues within Cleveland through innovative, interdisciplinary, and research-driven solutions.
            </p>

            <div className="space-x-4">
              <a href="#mission">
                <Button size="lg" className="bg-[#31fc75] hover:bg-green-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="lg" className="border-[#31fc75] text-[#31fc75] hover:bg-[#143e26]">
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div className="absolute top-0 w-0 h-0 overflow-hidden rounded-b-[10rem] bg-green-900 lg:w-[35rem] lg:h-[37rem]">
              <Lottie animationData={plantAnimation} loop={false} className="absolute w-[45rem] left-[-5rem] bottom-[-12rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
