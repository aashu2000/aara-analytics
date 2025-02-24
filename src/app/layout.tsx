import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AARA Analytics - Telangana Vehicle Registration Insights',
  description: 'Access comprehensive vehicle registration data analytics for Telangana through interactive Power BI dashboards.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'AARA Analytics',
    description: 'Vehicle Registration Analytics for Telangana',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}