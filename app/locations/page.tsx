import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building, Users, Calendar, Navigation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LocationsPage() {
    const locations = [
        {
            id: 1,
            name: "Cleveland",
            status: "active",
            position: { top: "29%", left: "68%" },
            description: "Our headquarters and primary service area",
            established: "2024",
            neighborhoods: "15+",
            projects: "3",
        },
        {
            id: 2,
            name: "NYC",
            status: "planned",
            position: { top: "25%", left: "75%" },
            description: "Planned expansion to an urban hub",
            established: "Coming 2025",
            neighborhoods: "TBD",
            projects: "TBD",
        },
        {
            id: 3,
            name: "Las Vegas",
            status: "planned",
            position: { top: "45%", left: "36%" },
            description: "Extending our impact to the West Coast",
            established: "Coming 2025",
            neighborhoods: "TBD",
            projects: "TBD",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
            <Navbar />

            <main className="flex-1 pt-20">
                <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Our Locations</h1>
                        <p className="mx-auto max-w-[700px] text-slate-300 text-lg">
                            Currently serving Cleveland with plans to expand our impact across Ohio and beyond.
                        </p>
                    </div>
                </section>

                <section className="w-full py-16 md:py-24">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Network</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                                Explore our current operations and planned expansion across Ohio
                            </p>
                        </div>

                        <div className="relative rounded-2xl shadow-2xl overflow-hidden mb-12">
                        <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-slate-850 via-60% to-emerald-950">                                <div className="absolute inset-0">
                                    <Image
                                        src="https://simplemaps.com/static/demos/resources/svg-library/svgs/us.svg"
                                        alt="Map of the United States"
                                        width={1000}
                                        height={600}
                                        className="w-full h-auto max-w-4xl mx-auto object-contain rounded-xl"
                                    />
                                </div>

                                <div className="absolute inset-0 opacity-20">
                                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                                        {Array.from({ length: 48 }).map((_, i) => (
                                            <div key={i} className="border border-slate-300/30"></div>
                                        ))}
                                    </div>
                                </div>

                                {locations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                                        style={{ top: location.position.top, left: location.position.left }}
                                    >
                                        <div className={`relative ${location.status === "active" ? "animate-bounce" : ""}`}>
                                            <div
                                                className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${location.status === "active"
                                                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                                                    : "bg-gradient-to-br from-slate-400 to-slate-500"
                                                    }`}
                                            >
                                                <MapPin className="w-4 h-4 text-white" />
                                            </div>
                                            {location.status === "active" && (
                                                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
                                            )}
                                        </div>

                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div className="bg-slate-800 text-slate-100 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
                                                <div className="font-semibold">{location.name}</div>
                                                <div className="text-slate-300 text-xs">{location.description}</div>
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                                            </div>
                                        </div>

                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                                            <div className={`font-semibold text-sm ${location.status === "active" ? "text-green-400" : "text-slate-400"}`}>
                                                {location.name}
                                            </div>
                                            <div className="text-xs text-slate-500">{location.established}</div>
                                        </div>
                                    </div>
                                ))}

                                <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                    <h4 className="font-semibold text-white mb-2 text-sm">Legend</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600"></div>
                                            <span className="text-xs text-slate-300">Active Location</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-slate-400 to-slate-500"></div>
                                            <span className="text-xs text-slate-300">Planned Location</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                    <Navigation className="w-6 h-6 text-slate-200" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {locations.map((location) => (
                                <Card
                                    key={location.id}
                                    className="border border-slate-700 bg-slate-800 hover:border-slate-600 transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center ${location.status === "active"
                                                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                                                    : "bg-gradient-to-br from-slate-400 to-slate-500"
                                                    }`}
                                            >
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">{location.name}</h3>
                                                <p className={`text-sm font-medium ${location.status === "active" ? "text-green-400" : "text-slate-400"}`}>
                                                    {location.status === "active" ? "Active" : "Planned"}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-slate-300 mb-4">{location.description}</p>

                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-slate-400" />
                                                <span className="text-sm text-slate-300">Established: {location.established}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Building className="h-4 w-4 text-slate-400" />
                                                <span className="text-sm text-slate-300">Neighborhoods: {location.neighborhoods}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-slate-400" />
                                                <span className="text-sm text-slate-300">Active Projects: {location.projects}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Want to Bring uplift.cle to Your Community?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for opportunities to expand our impact. If you're interested in partnering with us or
                            bringing our approach to your community, we'd love to hear from you.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                        >
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}
