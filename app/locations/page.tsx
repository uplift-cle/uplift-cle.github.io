"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building, Users, Calendar, Navigation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Point,
} from "react-simple-maps"

export default function LocationsPage() {
    const locations = [
        {
            id: 1,
            name: "Cleveland",
            status: "active",
            coordinates: [-81.6944, 41.4993],
            description: "Our headquarters and primary service area",
            established: "2024",
            neighborhoods: "15+",
            projects: "3",
        },
        {
            id: 2,
            name: "NYC",
            status: "planned",
            coordinates: [-74.006, 40.7128],
            description: "Planned expansion to an urban hub",
            established: "Coming 2025",
            neighborhoods: "TBD",
            projects: "TBD",
        },
        {
            id: 3,
            name: "Los Angeles",
            status: "planned",
            coordinates: [-118.2437, 34.0522],
            description: "Extending our impact to the West Coast",
            established: "Coming 2026",
            neighborhoods: "TBD",
            projects: "TBD",
        },
        {
            id: 4,
            name: "Chicago",
            status: "planned",
            coordinates: [-87.6298, 41.8781],
            description: "Creating solutions in the Midwest",
            established: "Coming 2027",
            neighborhoods: "TBD",
            projects: "TBD",
        },
        {
            id: 5,
            name: "Austin",
            status: "planned",
            coordinates: [-97.7431, 30.2672],
            description: "Expansion into the Deep South",
            established: "Coming 2027",
            neighborhoods: "TBD",
            projects: "TBD",
        },
        {
            id: 6,
            name: "Atlanta",
            status: "planned",
            coordinates: [-84.3879, 33.749],
            description: "Bringing our model to the Southeast",
            established: "Coming 2028",
            neighborhoods: "TBD",
            projects: "TBD",
        }
    ]

    return (
        <div className="relative flex flex-col min-h-screen text-slate-200">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative z-10 flex-1 pt-20">
                <section className="w-full py-16 md:py-24 text-white border-b">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                            Our Locations
                        </h1>
                        <p className="mx-auto max-w-[700px] text-slate-300 text-lg">
                            Currently serving Cleveland with plans to expand our impact across Ohio and beyond.
                        </p>
                    </div>
                </section>

                <section className="w-full py-16 md:py-24 border-b">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">The Network</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                                Explore our current operations and planned expansion: starting in Cleveland, OH.
                            </p>
                        </div>

                        <div className="relative rounded-2xl shadow-2xl overflow-x-auto mb-12">
                            <ComposableMap
                                projection="geoAlbersUsa"
                                width={1000}
                                height={600}
                                className="max-w-full mx-auto"
                            >
                                <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#0B7D44"
                                                stroke="#1f2937"
                                                strokeWidth={0.5}
                                            />
                                        ))
                                    }
                                </Geographies>
                                {locations.map(({ id, name, status, coordinates }) => (
                                    <Marker key={id} coordinates={coordinates as Point}>
                                        <g className={`cursor-pointer ${status === "active" ? "small-bounce" : ""}`} transform="translate(0, 0)">
                                            <circle
                                                fill={status === "active" ? "url(#gradientGreen)" : "url(#gradientGray)"}
                                                stroke="#fff"
                                                strokeWidth={2}
                                            />
                                            <MapPin
                                                size={16}
                                                strokeWidth={2}
                                                color="white"
                                                style={{ pointerEvents: "none" }}
                                                transform="translate(-8, -8)"
                                            />
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={25}
                                            style={{ fontFamily: "arial", fill: "#9ca3af", fontSize: 12 }}
                                        >
                                            {name}
                                        </text>
                                    </Marker>
                                ))}

                                <defs>
                                    <linearGradient id="gradientGreen" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" />
                                        <stop offset="100%" stopColor="#16a34a" />
                                    </linearGradient>
                                    <linearGradient id="gradientGray" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#94a3b8" />
                                        <stop offset="100%" stopColor="#64748b" />
                                    </linearGradient>
                                </defs>
                            </ComposableMap>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {locations.map((location) => (
                                <Card
                                    key={location.id}
                                    className="border border-slate-700 hover:border-slate-600 transition-all duration-300"
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
                                                <p
                                                    className={`text-sm font-medium ${location.status === "active" ? "text-green-400" : "text-slate-400"
                                                        }`}
                                                >
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

                <Footer />
            </main>
        </div>
    )
}
