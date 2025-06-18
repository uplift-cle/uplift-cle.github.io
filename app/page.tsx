import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileNavbar from "@/components/Navbar"

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
        <div className="flex flex-col min-h-screen">
            <MobileNavbar />

            <main className="flex-1 pt-20">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                    By CWRU Students
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                                    Uplifting Cleveland Through
                                    <span className="text-emerald-600"> Innovation</span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Addressing acute, systemic issues within Cleveland through innovative, interdisciplinary, and
                                    research-driven solutions.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <a href="#mission">
                                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a href="#teams">
                                    <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                        View Teams
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mission" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Mission</h2>
                                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        “Addressing acute, systemic issues
                                        within Cleveland through innovative,
                                        interdisciplinary, and research-driven
                                        solutions. We aim to develop scalable
                                        interventions and coordinate relief
                                        efforts, integrating public health,
                                        technology, policy, and business
                                        strategies to uplift underserved
                                        communities.”
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <div className="flex items-center space-x-2 text-emerald-600">
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                            <Target className="h-5 w-5 font-bold" />
                                            <span className="text-sm font-medium">Research-Driven Solutions</span>
                                        </Badge>

                                    </div>
                                    <div className="flex items-center space-x-2 text-emerald-600">
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                            <Users className="h-5 w-5 font-bold" />
                                            <span className="text-sm font-medium">Community-Centered Approach</span>
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2 text-emerald-600">
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                            <Lightbulb className="h-5 w-5 font-bold" />
                                            <span className="text-sm font-medium">Innovative Interventions</span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-teal-400/20 to-blue-500/20 backdrop-blur-sm border border-white/20 shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                    <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                                        <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-1 mb-4">
                                            <div className="rounded-full bg-white p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-6 w-6 text-teal-500"
                                                >
                                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800">Uplifting Cleveland</h2>
                                        <p className="mt-2 text-gray-600">
                                            Through innovative, interdisciplinary, and research-driven solutions.
                                        </p>
                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
                                                <div className="text-2xl font-bold text-emerald-600">3</div>
                                                <div className="text-xs text-gray-500">Active Teams</div>
                                            </div>
                                            <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
                                                <div className="text-2xl font-bold text-teal-400">15+</div>
                                                <div className="text-xs text-gray-500">Team Members</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teams Section */}
                <section id="teams" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Teams</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Three interdisciplinary teams working on innovative solutions to address Cleveland's most pressing
                                    challenges.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-1 lg:gap-12">
                            {teams.map((team) => (
                                <Card key={team.id} className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <div className="flex flex-col space-y-2">
                                            <Badge variant="outline" className="w-fit text-emerald-700 border-emerald-200">
                                                {team.focus}
                                            </Badge>
                                            <CardTitle className="text-2xl text-gray-900">{team.name}</CardTitle>
                                            <CardDescription className="text-lg font-semibold text-emerald-600">
                                                {team.product}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <p className="text-gray-600 leading-relaxed">{team.description}</p>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Team Members</h4>
                                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-x-12 md:gap-x-16">
                                                {/* Tech Lead */}
                                                <div className="flex flex-col items-center space-y-3">
                                                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                                                        <Image
                                                            src={nameToPicture(team.techLead.name) || "/placeholder.svg"}
                                                            width={120}
                                                            height={120}
                                                            alt={`${team.techLead.name} - Tech Lead`}
                                                            className="rounded-full object-cover w-full h-full border-4 border-[#f2aa84]"
                                                        />
                                                    </div>
                                                    {/* ADJUSTED max-w values */}
                                                    <div className="text-center w-full max-w-[90px] sm:max-w-[120px] md:max-w-[140px]">
                                                        <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">{team.techLead.name}</p>
                                                        <p className="text-xs font-bold text-[#f2aa84] sm:text-sm">Tech Lead</p>
                                                    </div>
                                                </div>


                                                {/* Strategic Lead */}
                                                <div className="flex flex-col items-center space-y-3">
                                                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                                                        <Image
                                                            src={nameToPicture(team.strategicLead.name) || "/placeholder.svg"}
                                                            width={120}
                                                            height={120}
                                                            alt={`${team.strategicLead.name} - Strategic Lead`}
                                                            className="rounded-full object-cover w-full h-full border-4 border-[#d86ecc]"
                                                        />
                                                    </div>
                                                    {/* ADJUSTED max-w values */}
                                                    <div className="text-center w-full max-w-[90px] sm:max-w-[120px] md:max-w-[140px]">
                                                        <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">{team.strategicLead.name}</p>
                                                        <p className="text-xs font-bold text-[#d86ecc] sm:text-sm">Strategic Lead</p>
                                                    </div>
                                                </div>

                                                {/* Analysts */}
                                                {team.analysts.map((analyst, index) => (
                                                    <div key={index} className="flex flex-col items-center space-y-3">
                                                        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
                                                            <Image
                                                                src={nameToPicture(analyst.name) || "/placeholder.svg"}
                                                                width={120}
                                                                height={120}
                                                                alt={`${analyst.name} - Analyst`}
                                                                className="rounded-full object-cover w-full h-full border-4 border-emerald-100"
                                                            />
                                                        </div>
                                                        {/* ADJUSTED max-w values */}
                                                        <div className="text-center w-full max-w-[90px] sm:max-w-[120px] md:max-w-[140px]">
                                                            <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">{analyst.name}</p>
                                                            <p className="text-xs font-bold text-emerald-600 sm:text-sm">
                                                                Analyst
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Get Involved</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join us in our mission to uplift Cleveland's communities through innovative solutions.
                                </p>
                            </div>
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 w-full max-w-4xl">
                                <div className="flex flex-col items-center space-y-2">
                                    <Mail className="h-8 w-8 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">involve@uplift.cle</p>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Phone className="h-8 w-8 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">(216) 555-0123</p>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <MapPin className="h-8 w-8 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                                    <p className="text-gray-600">Cleveland, OH</p>
                                </div>
                            </div>
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                Partner With Us
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} uplift.cle. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
                        Terms of Service
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
