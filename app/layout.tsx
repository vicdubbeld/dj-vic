import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'V!C (DJ Vic) — Portland DJ for Hire | R&B, Soul, Funk & Hip-Hop',
  description: 'Vic Dubbeld, open format DJ based in Portland, Oregon. Specializing in R&B, soul, funk, and hip-hop — vinyl and digital. Available for clubs, corporate events, and private parties.',
  keywords: ['DJ Vic', 'DJ Vic Portland', 'V!C DJ', 'Vic Dubbeld', 'Portland DJ', 'open format DJ Portland', 'Portland DJ for hire', 'R&B DJ Portland', 'soul funk hip hop DJ Portland'],
  openGraph: {
    title: 'V!C (DJ Vic) — Portland DJ for Hire',
    description: 'Vic Dubbeld, open format DJ based in Portland, Oregon. R&B, soul, funk, and hip-hop — vinyl and digital.',
    url: 'https://thedjvic.com',
    siteName: 'V!C',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V!C (DJ Vic) — Portland DJ for Hire',
    description: 'Vic Dubbeld, open format DJ based in Portland, Oregon. R&B, soul, funk, and hip-hop — vinyl and digital.',
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
