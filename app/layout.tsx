import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'uplift.cle',
    description: 'Addressing acute, systemic issues within Cleveland through innovative, interdisciplinary, and research-driven solutions.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
