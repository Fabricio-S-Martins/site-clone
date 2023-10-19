"use client"

import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Maximidia</title>
        <meta name='description' content='Description' />
        <link rel="shortcut icon" href="/images/LogoTitle.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
