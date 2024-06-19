// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Caudex } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
  weight: "400"
})
const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_baskerville',
  weight: "400"
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={caudex.variable + ' ' + libre_baskerville.variable}>
        <div>
        <header className="bg-primary text-primary-foreground py-4 px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-lg" prefetch={false}>
              Reservas UNLAM
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/reservar" className="hover:underline" prefetch={false}>
              Reservas
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Instalaciones
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sobre Nosotros
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contacto
            </Link>
          </div>
        </nav>
      </header>
        {children}
        </div>
      </body>
    </html>
  )
}