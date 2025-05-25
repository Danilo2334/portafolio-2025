import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/ui/Navbar"

export const metadata: Metadata = {
  title: "Portafolio | Danilo Carlosama",
  description: "Portafolio profesional de Danilo Carlosama",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: "5rem" }}>{children}</main>
      </body>
    </html>
  )
}
