import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'V!C — DJ · Portland, OR',
  description: 'Open format DJ based in Portland, Oregon. R&B, soul, funk, and hip-hop — vinyl and digital. Available for clubs, corporate events, and private parties.',
  openGraph: {
    title: 'V!C — DJ · Portland, OR',
    description: 'Open format DJ based in Portland, Oregon. R&B, soul, funk, and hip-hop — vinyl and digital.',
    url: 'https://thedjvic.com',
    siteName: 'V!C',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V!C — DJ · Portland, OR',
    description: 'Open format DJ based in Portland, Oregon.',
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
      </body>
    </html>
  )
}
