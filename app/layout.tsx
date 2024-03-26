import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NomadsFuel',
  description: 'Best travel platform to explore destinations, experiences and plan travels better. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='max-w-[1200px] mx-auto'>
      <body className={` ${inter.className} bg-slate-100 antialiased `}>
        {/* <NavBar />
        <hr /> */}
        {children}
      </body>
    </html>
  )
}
