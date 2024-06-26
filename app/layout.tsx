// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Caudex } from 'next/font/google'
import { Libre_Baskerville } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { ReactNode } from 'react'

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

export default function Layout({ children } : { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Reservas UNLAM</title>
      </head>
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
              Usuarios
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    JD
                  </Avatar>
                  Mi Perfil
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuLabel>
                  <div className="font-medium">Juan Díaz</div>
                  <div className="text-muted-foreground text-sm">Personal Administrativo</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
        {children}
        </div>
      </body>
    </html>
  )
}