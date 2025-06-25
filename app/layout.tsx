import type { Metadata } from 'next'
import './globals.css'

//import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'uplift.cle | Transforming Cleveland',
  icons: {
    icon: "/favicon.ico",
  },
  description:
    'uplift.cle addresses systemic issues in Cleveland through interdisciplinary collaboration, data-driven research, and sustainable, community-first solutions.',
  keywords: [
    'Cleveland',
    'urban innovation',
    'community research',
    'systemic issues',
    'interdisciplinary solutions',
    'social impact',
    'Uplift CLE',
    'public policy',
    'research-driven solutions',
    'Students',
    ''
  ],
  authors: [{ name: 'Uplift.CLE Team', url: 'https://uplift.cle' }], // Make sure to update this we don't have this domain name
  creator: 'Uplift.CLE',
  publisher: 'Uplift.CLE',

  openGraph: {
    title: 'Uplift.CLE | Transforming Cleveland',
    description:
      'Driving change in Cleveland through innovative, research-based, and community-focused approaches.',
    url: 'https://uplift-cle.vercel.app',
    siteName: 'uplift.cle',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/216775761?s=200&v=4',
        width: 1200,
        height: 630,
        alt: 'Uplift.CLE — Transforming Cleveland',
      },
    ],
  },

//   twitter: {
//     card: 'summary_large_image',
//     title: 'Uplift.CLE | Transforming Cleveland Through Innovation & Research',
//     description:
//       'Tackling systemic issues in Cleveland with data, innovation, and community partnerships.',
//     site: '@upliftcle',
//     creator: '@upliftcle',
//     images: ['https://avatars.githubusercontent.com/u/216775761?s=200&v=4'],
//   },

  metadataBase: new URL('https://uplift-cle.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": 'large',
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className='dark'>
            <body className='bg-green-500 text-slate-900 antialiased'>
                {children}
                {/*<SpeedInsights />*/}
            </body>
        </html>
    )
}
