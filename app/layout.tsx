import type { Metadata } from 'next'
import './globals.css'
import { normalFont } from '@/utils/fonts'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'IN3',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_with_bg.png" sizes="any" />
      </head>
      <body className={`${normalFont} bg-primary text-dark scroll-smooth`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
