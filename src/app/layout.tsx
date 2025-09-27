import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getIconPath } from '@/utils/assets'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Ragavendra Bharath S - Backend Python Developer & API Architect',
  description: 'Portfolio of Sri Ragavendra Bharath S - Backend Python Developer specializing in FastAPI, microservices, database design, and scalable server architectures. Expert in building robust APIs and backend systems.',
  keywords: 'Backend Python Developer, FastAPI, API Development, Microservices, SQLAlchemy, PostgreSQL, Server Architecture, Python Backend Engineer, REST API, Database Design',
  authors: [{ name: 'Sri Ragavendra Bharath S' }],
  icons: {
    icon: getIconPath('happy-man.svg'),
    shortcut: getIconPath('happy-man.svg'),
    apple: getIconPath('happy-man.svg'),
  },
  openGraph: {
    title: 'Sri Ragavendra Bharath S - Backend Python Developer & API Architect',
    description: 'Portfolio showcasing expertise in Python backend development, FastAPI, microservices, and scalable server architectures',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}