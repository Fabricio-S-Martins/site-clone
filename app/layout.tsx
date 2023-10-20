"use client"

import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import logoVermelho from '../public/images/logoVermelho.png'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml+png" href="/images/LogoTitle.png" />
        <title>Maximidia</title>
        <meta name='description' content='Description' />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
