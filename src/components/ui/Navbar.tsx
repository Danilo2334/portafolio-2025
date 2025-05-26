"use client"

import Link from "next/link"
import { Moon, Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [esMovil, setEsMovil] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark", !darkMode)
  }

  useEffect(() => {
    const verificarTamaño = () => setEsMovil(window.innerWidth < 768)
    verificarTamaño()
    window.addEventListener("resize", verificarTamaño)
    return () => window.removeEventListener("resize", verificarTamaño)
  }, [])

  return (
    <header
      style={{
        width: "100%",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: 50,
        backgroundColor: "#121212",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h1 style={{ fontWeight: 700, fontSize: "1.25rem", color: "#2a8d53" }}>
        Danilo Carlosama
      </h1>

      {esMovil && (
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "1rem",
          }}
        >
          <Menu />
        </button>
      )}

      {(menuAbierto || !esMovil) && (
        <nav
          style={{
            display: "flex",
            flexDirection: esMovil ? "column" : "row",
            gap: esMovil ? "1rem" : "1.5rem",
            position: esMovil ? "absolute" : "static",
            top: "4rem",
            left: 0,
            right: 0,
            backgroundColor: esMovil ? "#121212" : "transparent",
            padding: esMovil ? "1rem 2rem" : "0",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
          <Link href="/sobre-mi" style={{ color: "white", textDecoration: "none" }}>Sobre Mí</Link>
          <Link href="/proyectos" style={{ color: "white", textDecoration: "none" }}>Proyectos</Link>
          <Link href="/testimonios" style={{ color: "white", textDecoration: "none" }}>Testimonios</Link>
          <Link href="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link>
        </nav>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <button
          onClick={toggleTheme}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            padding: "0.4rem 0.6rem",
            backgroundColor: "transparent",
            color: "#2a8d53",
            display: "flex",
            gap: "0.25rem",
          }}
        >
          <Moon size={16} />
          <Sun size={16} />
        </button>

        <Link
          href="/contacto"
          style={{
            backgroundColor: "var(--primary)",
            color: "white",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontWeight: 500,
            fontSize: "0.875rem",
            textDecoration: "none",
            lineHeight: "1",
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: "3.7rem",
          }}
        >
          Contactar
        </Link>
      </div>
    </header>
  )
}
