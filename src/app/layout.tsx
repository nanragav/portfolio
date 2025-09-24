import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getIconPath } from '@/utils/assets'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Ragavendra Bharath S - Python Developer & Full Stack Engineer',
  description: 'Portfolio of Sri Ragavendra Bharath S - Python Developer with expertise in FastAPI, Flutter, Azure, and backend development. Specialized in secure, scalable applications and automation.',
  keywords: 'Python Developer, FastAPI, Flutter, Azure, Backend Development, SQLAlchemy, PostgreSQL, Security Testing, Full Stack Engineer',
  authors: [{ name: 'Sri Ragavendra Bharath S' }],
  icons: {
    icon: getIconPath('happy-man.svg'),
    shortcut: getIconPath('happy-man.svg'),
    apple: getIconPath('happy-man.svg'),
  },
  openGraph: {
    title: 'Sri Ragavendra Bharath S - Python Developer & Full Stack Engineer',
    description: 'Portfolio showcasing expertise in Python, FastAPI, Flutter, and modern backend technologies',
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