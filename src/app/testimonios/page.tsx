"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonios = [
  {
    autor: "Compañera Camila Zambrano",
    cargo: "Estudiante Ing Software",
    mensaje:
      "Un estudiante excepcional con gran capacidad para resolver problemas complejos. Su ayuda es crucial al realizar grupos de trabajo.",
  },
  {
    autor: "Compañero Sebastian Rojas",
    cargo: "Estudiante Ing Software",
    mensaje:
      "Tiene una gran capacidad para trabajar en equipo y liderar iniciativas técnicas. Siempre cumple con los objetivos propuestos.",
  },
  {
    autor: "Compañero Francisco Molina",
    cargo: "Estudiante Ing Software",
    mensaje:
      "Es muy organizado, creativo y proactivo. Fue un gusto trabajar con él en el desarrollo de soluciones innovadoras.",
  },
]

export default function Testimonios() {
  const [actual, setActual] = useState(0)

  const avanzar = () => setActual((actual + 1) % testimonios.length)
  const retroceder = () => setActual((actual - 1 + testimonios.length) % testimonios.length)

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1e1e1e, #2a2a2a, #1e1e1e)",
        padding: "4rem 1.5rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#2a8d53", marginBottom: "0.5rem" }}>
        Testimonios
      </h2>
      <p style={{ marginBottom: "2rem", color: "#a1a1aa", textAlign: "center" }}>
        Lo que dicen mis profesores, compañeros y mentores sobre mi trabajo y colaboración.
      </p>

      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#1a1a1a",
          padding: "2rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <Quote color="#2a8d53" size={32} />
        </div>

        <p style={{ fontSize: "1.25rem", margin: "1rem 0", lineHeight: 1.6 }}>
          "{testimonios[actual].mensaje}"
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div>
            <strong style={{ fontSize: "1rem" }}>{testimonios[actual].autor}</strong>
            <p style={{ fontSize: "0.875rem", color: "#a1a1aa" }}>{testimonios[actual].cargo}</p>
          </div>
        </div>

        {/* Botones de navegación abajo, centrados y separados */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={retroceder}
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "9999px",
              padding: "0.5rem",
              color: "white",
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={avanzar}
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "9999px",
              padding: "0.5rem",
              color: "white",
            }}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem" }}>
        {testimonios.map((_, i) => (
          <span
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              backgroundColor: actual === i ? "#2a8d53" : "#555",
              transition: "background-color 0.3s ease",
            }}
          ></span>
        ))}
      </div>
    </section>
  )
}
