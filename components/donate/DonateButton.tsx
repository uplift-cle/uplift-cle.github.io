'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function DonateButton() {
  const [loading, setLoading] = useState(false)

  const handleDonate = async () => {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Failed to initiate donation.')
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleDonate}
      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
      disabled={loading}
    >
      {loading ? 'Redirecting…' : `Donate`}
    </Button>
  )
}
