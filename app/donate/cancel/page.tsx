import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { XCircle } from "lucide-react"

export default function DonateSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-200 relative">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-green-500/10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 text-center px-4">
        <section className="w-full py-16 md:py-24 text-white">
          <XCircle className="mx-auto h-20 w-20 text-red-500 mb-6" />
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Your donation was cancelled.
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 text-lg">
            Your donation session was canceled. If this was a mistake, you can try again below.</p>
          </div>
          <Button asChild className="bg-green-600 hover:bg-green-700 pt-4 pb-4 px-8 mt-8">
          <Link href="/donate">Try Again</Link>
        </Button>
        </section>
      </main>
      <div className="z-10">
      <Footer />
      </div>
    </div>
  )
}
