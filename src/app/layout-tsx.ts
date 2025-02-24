import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AARA Analytics - Telangana Vehicle Registration Insights',
  description: 'Access comprehensive vehicle registration data analytics for Telangana through interactive Power BI dashboards.',
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