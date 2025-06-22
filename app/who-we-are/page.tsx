import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard"

export default function WhoWeArePage() {
  const executiveBoard = [
    { name: "Seth Tivakaran", title: "Founder & Executive Director", image: "/placeholder.svg?height=200&width=200" },
    { name: "Board Member 1", title: "Chief Strategy Officer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Board Member 2", title: "Chief Operations Officer", image: "/placeholder.svg?height=200&width=200" },
  ]

  const projectManagers = [
    { name: "Manager 1", title: "Community Health Analytics Lead", image: "/placeholder.svg?height=150&width=150" },
    { name: "Manager 2", title: "Economic Mobility Lead", image: "/placeholder.svg?height=150&width=150" },
    { name: "Manager 3", title: "Housing & Infrastructure Lead", image: "/placeholder.svg?height=150&width=150" },
  ]

  const analysts = [
    { name: "Analyst 1", title: "Data Analyst", image: "/placeholder.svg?height=120&width=120" },
    { name: "Analyst 2", title: "Policy Analyst", image: "/placeholder.svg?height=120&width=120" },
    { name: "Analyst 3", title: "Research Analyst", image: "/placeholder.svg?height=120&width=120" },
    { name: "Analyst 4", title: "Community Analyst", image: "/placeholder.svg?height=120&width=120" },
    { name: "Analyst 5", title: "Technology Analyst", image: "/placeholder.svg?height=120&width=120" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-slate-900 text-slate-200">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Who We Are</h1>
            <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
              Meet the dedicated team working to uplift Cleveland through innovative solutions and community-centered approaches.
            </p>
          </div>
        </section>

        {/* Executive Board */}
        <section className="w-full py-16 md:py-24 bg-slate-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#0B7D44]">Executive Board</h2>
              <div className="w-24 h-1 bg-[#0B7D44] mx-auto mb-6 rounded"></div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our leadership team brings together diverse expertise and a shared commitment to Cleveland's future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {executiveBoard.map((member, index) => (
                <SpotlightCard key={index} className="border border-[#0B7D44] bg-slate-900 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <Image
                      src={member.image}
                      width={200}
                      height={200}
                      alt={member.name}
                      className="rounded-full mx-auto mb-6 border-4 border-[#0B7D44]"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">{member.name}</h3>
                    <p className="text-[#0B7D44] font-medium">{member.title}</p>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Project Managers */}
        <section className="w-full py-16 md:py-24 bg-slate-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#0B7D44]">Project Managers</h2>
              <div className="w-24 h-1 bg-[#0B7D44] mx-auto mb-6 rounded"></div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our project managers lead specialized initiatives, coordinating teams and driving impact in key focus areas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectManagers.map((member, index) => (
                <SpotlightCard key={index} className="border border-[#0B7D44] bg-slate-900 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={member.image}
                      width={150}
                      height={150}
                      alt={member.name}
                      className="rounded-full mx-auto mb-4 border-4 border-[#0B7D44]"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-slate-200">{member.name}</h3>
                    <p className="text-[#0B7D44] font-medium text-sm">{member.title}</p>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Analysts */}
        <section className="w-full py-16 md:py-24 bg-slate-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#0B7D44]">Analysts</h2>
              <div className="w-24 h-1 bg-[#0B7D44] mx-auto mb-6 rounded"></div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our analysts provide the research, data insights, and specialized expertise that inform our evidence-based approach.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {analysts.map((member, index) => (
                <SpotlightCard key={index} className="border border-[#0B7D44] bg-slate-900 hover:shadow-lg transition-shadow w-64">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={member.image}
                      width={120}
                      height={120}
                      alt={member.name}
                      className="rounded-full mx-auto mb-4 border-4 border-[#0B7D44]"
                    />
                    <h3 className="text-lg font-semibold mb-1 text-slate-200">{member.name}</h3>
                    <p className="text-[#0B7D44] font-medium text-sm">{member.title}</p>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
