"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Card - QATAR AIRWAYS",
      descripcion:
        "Clon visual de un pase de abordar hecho en Next.js + Tailwind, replicado a partir de un diseño dado.",
      tecnologias: ["Next.js", "Tailwind CSS"],
      imagen: "/card-qatar.png",
      demo: "https://examen-momento-bdbz.vercel.app/",
      codigo: "https://github.com/Danilo2334/Examen-momento",
    },
    {
      titulo: "Tinger Landing Page",
      descripcion:
        "Landing page visualmente moderna con animación de encendido/apagado. Basado en un diseño entregado.",
      tecnologias: ["Next.js", "Tailwind CSS", "Modo Oscuro"],
      imagen: "/tinger.png",
      demo: "https://ejercicio-taller-window-ui.vercel.app/",
      codigo: "https://github.com/Danilo2334/EjercicioTallerWindowUI",
    },
    {
      titulo: "Panel de Preferencias UI",
      descripcion:
        "Panel interactivo con personalización de tema, idioma y accesibilidad. Preciso visualmente.",
      tecnologias: ["Next.js", "Tailwind CSS", "UI moderna"],
      imagen: "/ui-panel.png",
      demo: "https://prueba-ia-beta.vercel.app/",
      codigo: "https://github.com/Danilo2334/PruebaIA",
    },
  ]

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 2rem",
        background: "linear-gradient(to bottom right, #1e1e1e, #2a2a2a, #1e1e1e)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#2a8d53",
          marginBottom: "0.5rem",
        }}
      >
        Mis Proyectos
      </h2>
      <p
        style={{
          marginBottom: "2rem",
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        Una selección de los proyectos en los que he trabajado, demostrando mis habilidades y experiencia.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {proyectos.map((proyecto, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "0.75rem",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
            }}
          >
            {proyecto.imagen ? (
              <img
                src={proyecto.imagen}
                alt={`Miniatura de ${proyecto.titulo}`}
                style={{ height: "180px", width: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "#cbd5cb",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "2rem", opacity: 0.3 }}>🖼</span>
              </div>
            )}

            <div style={{ padding: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {proyecto.titulo}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#a1a1aa",
                  marginBottom: "1rem",
                }}
              >
                {proyecto.descripcion}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {proyecto.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: "#2a2a2a",
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.75rem",
                      borderRadius: "0.375rem",
                      color: "#d4d4d8",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "transparent",
                    border: "1px solid #2a2a2a",
                    borderRadius: "9999px",
                    padding: "0.4rem 1rem",
                    color: "white",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={14} /> Demo
                </a>
                <a
                  href={proyecto.codigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#2a2a2a",
                    borderRadius: "9999px",
                    padding: "0.4rem 1rem",
                    color: "white",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  <Github size={14} /> Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
