import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://thedjvic.com'),
  title: 'V!C (DJ Vic) — Portland | The Music Your Event Will Be Remembered For',
  description: 'Vic Dubbeld brings soul-forward curation to clubs, brand activations, and private events across Portland. R&B, funk, hip-hop — vinyl and digital. Inquire for availability.',
  keywords: ['DJ Vic', 'DJ Vic Portland', 'V!C DJ', 'Vic Dubbeld', 'Portland DJ', 'open format DJ Portland', 'Portland DJ for hire', 'R&B DJ Portland', 'soul funk hip hop DJ Portland'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://thedjvic.com',
  },
  openGraph: {
    title: 'V!C (DJ Vic) — Portland | The Music Your Event Will Be Remembered For',
    description: 'Vic Dubbeld brings soul-forward curation to clubs, brand activations, and private events across Portland. R&B, funk, hip-hop — vinyl and digital.',
    url: 'https://thedjvic.com',
    siteName: 'V!C',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'V!C — DJ Vic Dubbeld, Portland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V!C (DJ Vic) — Portland | The Music Your Event Will Be Remembered For',
    description: 'Vic Dubbeld brings soul-forward curation to clubs, brand activations, and private events across Portland. R&B, funk, hip-hop — vinyl and digital.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}
