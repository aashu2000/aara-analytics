import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'AARA Analytics',
  description: 'Vehicle Registration Analytics',
  metadataBase: new URL('https://aara-analytics.vercel.app'), // Replace with your actual domain
  openGraph: {
    title: 'AARA Analytics',
    description: 'Vehicle Registration Analytics',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}