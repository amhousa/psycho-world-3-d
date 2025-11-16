import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Psycho World 3D | amhousa.art',
  description: 'An immersive psychedelic 3D experience with scroll-driven animations by amhousa',
  generator: 'v0.app',
  authors: [{ name: 'amhousa', url: 'https://amhousa.art' }],
  keywords: ['3D', 'psychedelic', 'scroll animation', 'three.js', 'react-three-fiber', 'amhousa'],
  openGraph: {
    title: 'Psycho World 3D | amhousa.art',
    description: 'An immersive psychedelic 3D experience with scroll-driven animations',
    url: 'https://amhousa.art',
    siteName: 'amhousa.art',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psycho World 3D | amhousa.art',
    description: 'An immersive psychedelic 3D experience with scroll-driven animations',
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
