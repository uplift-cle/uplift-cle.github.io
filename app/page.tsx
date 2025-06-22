import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, Mail, Phone, MapPin, Heart, Building, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Temp function for headshots
const nameToPicture = (name: string) => {
    const [first, last] = name.split(' ');
    return `https://athletics.case.edu/images/2024/8/17/${last}_${first}.jpg`
}

export default function HomePage() {
    const teams = [
        {
            id: 1,
            name: "Sustainable Food Distribution",
            product: "Hydroponics Microgreens System",
            description:
                "A comprehensive data platform that identifies health disparities across Cleveland neighborhoods, providing real-time insights for targeted interventions and resource allocation.",
            focus: "Urban Agriculture",
            techLead: { name: "Jacob Slater", image: "/placeholder.svg?height=120&width=120" },
            strategicLead: { name: "Adam Joseph", image: "/placeholder.svg?height=120&width=120" },
            analysts: [
                { name: "Paul Salah", image: "/placeholder.svg?height=120&width=120" },
                { name: "Finn Bonner", image: "/placeholder.svg?height=120&width=120" },
            ],
        },
        {
            id: 2,
            name: "Stable Food Storage",
            product: "Food Refrigeration Enhancement",
            description:
                "An integrated workforce development and financial literacy platform connecting underserved residents with career opportunities, skills training, and financial resources.",
            focus: "Food Security",
            techLead: { name: "Praveen Sureshkumar", image: "/placeholder.svg?height=120&width=120" },
            strategicLead: { name: "Adam Esa", image: "/placeholder.svg?height=120&width=120" },
            analysts: [
                { name: "Lucas Siepser", image: "/placeholder.svg?height=120&width=120" },
                { name: "George Wood-Leness", image: "/placeholder.svg?height=120&width=120" },
            ],
        },
        {
            id: 3,
            name: "New Initiative Development",
            product: "Idea #3",
            description:
                "A community-driven platform that coordinates housing rehabilitation efforts, connects residents with resources, and facilitates neighborhood improvement projects through collaborative planning.",
            focus: "Innovation & Future Projects",
            techLead: { name: "Donovan Crowley", image: "/placeholder.svg?height=120&width=120" },
            strategicLead: { name: "Brendan Bradish", image: "/placeholder.svg?height=120&width=120" },
            analysts: [
                { name: "Owen Schessler", image: "/placeholder.svg?height=120&width=120" },
                { name: "Joseph Rivello", image: "/placeholder.svg?height=120&width=120" },
                { name: "Will Larson", image: "/placeholder.svg?height=120&width=120" },
            ],
        },
    ];

    return (
        <div className="relative flex flex-col min-h-screen">
            
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 pt-20">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge
                                    variant="secondary"
                                    className="bg-[#0B7D44] text-white hover:bg-green-700"
                                >
                                    For the community, by the community
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">
                                    Uplifting Cleveland Through{" "}
                                    <span className="text-[#0B7D44]">Innovation</span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Addressing acute, systemic issues within Cleveland through innovative,
                                    interdisciplinary, and research-driven solutions.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <a href="#mission">
                                    <Button
                                        size="lg"
                                        className="bg-[#0B7D44] hover:bg-green-700"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a href="#teams">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-[#0B7D44] text-[#0B7D44] hover:bg-[#143e26]"
                                    >
                                        View Teams
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mission" className="w-full py-16 md:py-24 lg:py-32 border  text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                                <p className="mx-auto max-w-[800px] text-slate-300 text-lg md:text-xl/relaxed leading-relaxed">
                                    Uplift.cle is dedicated to addressing acute, systemic issues within Cleveland through innovative,
                                    interdisciplinary, and research-driven solutions. We aim to develop scalable interventions and
                                    coordinate relief efforts integrating public health, technology, policy, and business strategies to
                                    uplift underserved communities.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                                <Card className=" border-slate-700">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <Users className="h-12 w-12 text-[#0B7D44] mx-auto" />
                                        <h3 className="text-xl font-semibold text-white">Community Impact</h3>
                                        <p className="text-slate-300">
                                            Working directly with Cleveland residents to understand and address their most pressing needs.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className=" border-slate-700">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <Target className="h-12 w-12 text-[#0B7D44] mx-auto" />
                                        <h3 className="text-xl font-semibold text-white">Research-Driven</h3>
                                        <p className="text-slate-300">
                                            Leveraging data and evidence-based approaches to create sustainable, scalable solutions.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className=" border-slate-700">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <Lightbulb className="h-12 w-12 text-[#0B7D44] mx-auto" />
                                        <h3 className="text-xl font-semibold text-white">Innovation</h3>
                                        <p className="text-slate-300">
                                            Bringing together diverse expertise to develop creative solutions to complex challenges.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tenants Section */}
                <section id="tenants" className="w-full py-16 md:py-24 lg:py-32 border">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-12">
                            <div className="space-y-4 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-100">
                                    Our Core Tenants
                                </h2>
                                <p className="mx-auto max-w-[700px] text-slate-400 text-lg">
                                    The fundamental principles that guide our work and decision-making in every initiative we undertake.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#0B7D44] to-green-700 rounded-lg flex items-center justify-center">
                                            <Users className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Community-Centered</h3>
                                        <p className="text-slate-400">
                                            Every solution begins with listening to and learning from the communities we serve, ensuring their
                                            voices guide our approach.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                                            <Target className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Evidence-Based</h3>
                                        <p className="text-slate-400">
                                            We ground our interventions in rigorous research and data analysis to ensure effectiveness and
                                            measurable impact.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#0B7D44] to-green-700 rounded-lg flex items-center justify-center">
                                            <Lightbulb className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Interdisciplinary</h3>
                                        <p className="text-slate-400">
                                            Complex problems require diverse perspectives. We bring together experts from multiple fields to
                                            create comprehensive solutions.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                                            <Globe className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Scalable Impact</h3>
                                        <p className="text-slate-400">
                                            We design interventions that can grow and adapt, creating lasting change that extends beyond
                                            individual projects.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#0B7D44] to-green-700 rounded-lg flex items-center justify-center">
                                            <Heart className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Equity-Focused</h3>
                                        <p className="text-slate-400">
                                            We prioritize addressing systemic inequities and ensuring our work benefits those who need it
                                            most.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-slate-700 hover:shadow-lg transition-shadow bg-slate-900">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                                            <Building className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-100">Sustainable</h3>
                                        <p className="text-slate-400">
                                            We build solutions that can be maintained and improved over time, creating lasting positive change
                                            for Cleveland.
                                        </p>
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
