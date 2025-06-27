import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard"
import { motion } from "framer-motion"

export default function WhoWeArePage() {
    const techLeads = [
        { name: "Jacob Slater", title: "Hydroponics Tech Lead", image: "/placeholder.svg?height=200&width=200" },
        { name: "Praveen Sureshkumar", title: "Refrigeration Tech Lead", image: "/placeholder.svg?height=200&width=200" },
        { name: "Donovan Crowley", title: "Project Tech Lead", image: "/placeholder.svg?height=200&width=200" },
    ]

    const stratLeads = [
        { name: "Adam Joseph", title: "Hydroponics Strategic Lead", image: "/placeholder.svg?height=150&width=150" },
        { name: "Adam Esa", title: "Refrigeration Strategic Lead", image: "/placeholder.svg?height=150&width=150" },
        { name: "Brendan Bradish", title: "Project Strategic Lead", image: "/placeholder.svg?height=150&width=150" },
    ]

    const analysts = [
        { name: "Analyst 1", title: "Data Analyst", image: "/placeholder.svg?height=120&width=120" },
        { name: "Analyst 2", title: "Policy Analyst", image: "/placeholder.svg?height=120&width=120" },
        { name: "Analyst 3", title: "Research Analyst", image: "/placeholder.svg?height=120&width=120" },
        { name: "Analyst 4", title: "Community Analyst", image: "/placeholder.svg?height=120&width=120" },
        { name: "Analyst 5", title: "Technology Analyst", image: "/placeholder.svg?height=120&width=120" },
    ]

    return (
        <div className="relative flex flex-col min-h-screen  text-slate-200">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 pt-20">
                <section className="w-full py-16 md:py-24 text-slate-200 border-b">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Who We Are</h1>
                        <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
                            Meet the dedicated team working to uplift Cleveland through innovative solutions and community-centered approaches.
                        </p>
                    </div>
                </section>


                <section className="w-full py-16 md:py-24 border-b">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#0B7D44]">Technical Leads</h2>
                            <div className="w-24 h-1 bg-[#0B7D44] mx-auto mb-6 rounded"></div>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Our technical leads bring together proficiency in data science, software development, and community engagement to drive impactful projects.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {techLeads.map((member, index) => (
                                <SpotlightCard key={index} className="border border-[#0B7D44] hover:shadow-lg transition-shadow">
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

                <section className="w-full py-16 md:py-24 border-b">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#0B7D44]">Strategic Leads</h2>
                            <div className="w-24 h-1 bg-[#0B7D44] mx-auto mb-6 rounded"></div>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Our strategic leads manage key projectg insights and initiatives, ensuring alignment with our mission and effective execution of our programs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stratLeads.map((member, index) => (
                                <SpotlightCard key={index} className="border border-[#0B7D44]  hover:shadow-lg transition-shadow">
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

                <section className="w-full py-16 md:py-24 border-b">
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
                                <SpotlightCard key={index} className="border border-[#0B7D44]  hover:shadow-lg transition-shadow w-64">
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
                <Footer />
            </main>
        </div>
    )
}
