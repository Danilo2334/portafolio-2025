"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [esMovil, setEsMovil] = useState(false)

  useEffect(() => {
    const verificarTamaño = () => {
      setEsMovil(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMenuAbierto(false)
      }
    }
    verificarTamaño()
    window.addEventListener("resize", verificarTamaño)
    return () => window.removeEventListener("resize", verificarTamaño)
  }, [])

  return (
    <header
      style={{
        width: "100%",
        padding: "1rem 1.5rem",
        position: "fixed",
        top: 0,
        zIndex: 50,
        backgroundColor: "#121212",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h1 style={{ fontWeight: 700, fontSize: "1.25rem", color: "#2a8d53" }}>
          Danilo Carlosama
        </h1>

        {/* Botón hamburguesa solo en móvil */}
        {esMovil && (
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              padding: "0.25rem",
              zIndex: 60,
              marginRight: "1rem", // ⬅️ Mueve el botón más hacia la izquierda del borde
            }}
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Navegación en escritorio */}
        {!esMovil && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <nav style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <span style={{ color: "white" }}>Inicio</span>
              </Link>
              <Link href="/sobre-mi" style={{ textDecoration: "none" }}>
                <span style={{ color: "white" }}>Sobre Mí</span>
              </Link>
              <Link href="/proyectos" style={{ textDecoration: "none" }}>
                <span style={{ color: "white" }}>Proyectos</span>
              </Link>
              <Link href="/testimonios" style={{ textDecoration: "none" }}>
                <span style={{ color: "white" }}>Testimonios</span>
              </Link>
            </nav>

            <Link href="/contacto" style={{ textDecoration: "none" }}>
              <span
                style={{
                  backgroundColor: "var(--primary, #1a5d38)",
                  color: "white",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  lineHeight: "1",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Contactar
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Menú desplegable para móvil */}
      {esMovil && menuAbierto && (
        <nav
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }} onClick={() => setMenuAbierto(false)}>
            <span style={{ color: "white" }}>Inicio</span>
          </Link>
          <Link href="/sobre-mi" style={{ textDecoration: "none" }} onClick={() => setMenuAbierto(false)}>
            <span style={{ color: "white" }}>Sobre Mí</span>
          </Link>
          <Link href="/proyectos" style={{ textDecoration: "none" }} onClick={() => setMenuAbierto(false)}>
            <span style={{ color: "white" }}>Proyectos</span>
          </Link>
          <Link href="/testimonios" style={{ textDecoration: "none" }} onClick={() => setMenuAbierto(false)}>
            <span style={{ color: "white" }}>Testimonios</span>
          </Link>
          <Link href="/contacto" style={{ textDecoration: "none" }} onClick={() => setMenuAbierto(false)}>
            <span
              style={{
                backgroundColor: "var(--primary, #1a5d38)",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: "1",
                display: "inline-block",
              }}
            >
              Contactar
            </span>
          </Link>
        </nav>
      )}
    </header>
  )
}
