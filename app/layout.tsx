import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Amir Hossein Salmani | Full Stack Developer & AI Specialist',
  description: 'Personal portfolio of Amir Hossein Salmani - Full Stack Web Developer and AI Specialist creating innovative digital experiences',
  generator: 'v0.app',
  authors: [{ name: 'Amir Hossein Salmani', url: 'https://amhousa.art' }],
  keywords: ['Full Stack Developer', 'AI Specialist', 'Web Developer', 'React', 'Next.js', 'amhousa', 'Amir Hossein Salmani'],
  openGraph: {
    title: 'Amir Hossein Salmani | Full Stack Developer & AI Specialist',
    description: 'Personal portfolio of Amir Hossein Salmani - Creating innovative digital experiences with code and AI',
    url: 'https://amhousa.art',
    siteName: 'amhousa.art',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Hossein Salmani | Full Stack Developer & AI Specialist',
    description: 'Personal portfolio of Amir Hossein Salmani - Creating innovative digital experiences with code and AI',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
