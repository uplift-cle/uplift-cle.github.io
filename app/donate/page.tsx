import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Target, Building } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="relative flex flex-col min-h-screen  text-slate-200">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-20">
        <section className="w-full py-16 md:py-24  text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Support Our Mission</h1>
            <p className="mx-auto max-w-[700px] text-slate-300 text-lg">
              Help us uplift Cleveland communities through your generous support. Every contribution makes a meaningful
              difference.
            </p>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="w-full py-16 md:py-24 border">
          <div className="container px-4 md:px-6 mx-auto">
            <Card className="max-w-2xl mx-auto border-slate-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Donation Platform Coming Soon</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <Heart className="h-16 w-16 text-green-600 mx-auto" />
                <p className="text-white/80 text-lg">
                  We're currently setting up our secure donation platform to make it easy for supporters like you to
                  contribute to our mission of uplifting Cleveland communities.
                </p>
                <p className="text-white/80">
                  In the meantime, if you'd like to support our work or learn about partnership opportunities, please
                  reach out to us directly.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="w-full py-16 md:py-24 border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Your Support Will Help</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                When our donation platform launches, your contributions will directly support these key areas of our
                work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Community Programs</h3>
                  <p className="text-white/80 text-sm">
                    Direct support for community health, economic mobility, and housing initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Research & Data</h3>
                  <p className="text-white/80 text-sm">
                    Funding for evidence-based research that informs our community interventions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Infrastructure</h3>
                  <p className="text-white/80 text-sm">
                    Technology and operational support to scale our impact across Cleveland.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Team Growth</h3>
                  <p className="text-white/80 text-sm">
                    Expanding our team to serve more communities and increase our impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      <Footer />
      </main>
    </div>
  )
}
