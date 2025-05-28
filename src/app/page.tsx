"use client"

import { Download } from "lucide-react"

export default function Inicio() {
  return (
    <>
      <section
        id="inicio"
        style={{
          background: "linear-gradient(to bottom right, #1e1e1e, #2a2a2a, #1e1e1e)",
          color: "#ffffff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "90rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* IZQUIERDA */}
          <div
            style={{
              maxWidth: "40rem",
              flex: "1 1 300px",
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
              }}
            >
              Hola, soy{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #2a8d53, #1a5d38)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Danilo
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#a1a1aa",
                marginBottom: "2rem",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
              }}
            >
              Ingeniero de Software en proceso de formación
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a
                href="/CV-Danilo.pdf"
                download
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#1a5d38",
                  color: "white",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                  width: "100%",
                  maxWidth: "240px",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0d3d23")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1a5d38")}
              >
                <Download style={{ width: "1rem", height: "1rem" }} />
                Descargar CV
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div
            style={{
              borderRadius: "9999px",
              width: "18rem",
              height: "18rem",
              backgroundColor: "rgba(26, 93, 56, 0.1)",
              border: "4px solid rgba(26, 93, 56, 0.3)",
              boxShadow: "0 0 40px rgba(26, 93, 56, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              margin: "2rem auto 0 auto",
            }}
          >
            <img
              src="/foto.jpg"
              alt="Foto de Danilo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section
        style={{
          width: "100%",
          padding: "1rem 0",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#121212",
          borderTop: "1px solid #2a2a2a",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#d4d4d8",
          }}
        >
          <span>HTML</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>
    </>
  )
}
