"use client"

import { Instagram, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        padding: "2rem",
        marginTop: "3rem",
        borderTop: "1px solid #2a2a2a",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Nombre y rol */}
        <div>
          <h3 style={{ color: "#2a8d53", fontSize: "1rem", marginBottom: "0.5rem" }}>
            Danilo Carlosama
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>
            Ingeniero de Software
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Enlaces rápidos
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.75rem",
              lineHeight: "1.8",
            }}
          >
            <li>
              <Link href="/" style={{ color: "#d4d4d8", textDecoration: "none" }}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" style={{ color: "#d4d4d8", textDecoration: "none" }}>
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link href="/proyectos" style={{ color: "#d4d4d8", textDecoration: "none" }}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/testimonios" style={{ color: "#d4d4d8", textDecoration: "none" }}>
                Testimonios
              </Link>
            </li>
            <li>
              <Link href="/contacto" style={{ color: "#d4d4d8", textDecoration: "none" }}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Redes sociales
          </h4>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4d4d8", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2a8d53")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d4d4d8")}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Danilo2334"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4d4d8", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2a8d53")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d4d4d8")}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.instagram.com/daniloc_0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4d4d8", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2a8d53")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d4d4d8")}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#a1a1aa",
        }}
      >
        © 2025 Danilo Carlosama. Todos los derechos reservados.
      </div>
    </footer>
  )
}
