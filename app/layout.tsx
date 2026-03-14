import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Giorgi Gochitidze | Ethical Hacker & Penetration Tester',
  description:
    'Full-Stack Developer turned Ethical Hacker — breaking things to make them safer. Portfolio of Giorgi Gochitidze, aspiring penetration tester.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
