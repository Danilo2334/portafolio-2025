"use client"

import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react"

export default function Contacto() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem 2rem",
        background: "linear-gradient(to bottom right, #1e1e1e, #2a2a2a, #1e1e1e)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#2a8d53", marginBottom: "0.5rem" }}>
        Contacto
      </h2>
      <p style={{ marginBottom: "2rem", color: "#a1a1aa", textAlign: "center" }}>
        ¿Interesado en trabajar juntos? Ponte en contacto conmigo a través de este formulario o mis redes sociales.
      </p>

      <div
        style={{
          maxWidth: "80rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <form
          style={{
            backgroundColor: "#1a1a1a",
            padding: "2rem",
            borderRadius: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3 style={{ color: "#2a8d53", fontWeight: 600 }}>Envíame un mensaje</h3>
          <label style={{ fontWeight: 500 }}>Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none" }}
          />
          <label style={{ fontWeight: 500 }}>Email</label>
          <input
            type="email"
            placeholder="tu@email.com"
            style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none" }}
          />
          <label style={{ fontWeight: 500 }}>Mensaje</label>
          <textarea
            rows={5}
            placeholder="Tu mensaje"
            style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "none" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#2a8d53",
              padding: "0.75rem",
              color: "white",
              fontWeight: 600,
              borderRadius: "0.5rem",
              border: "none",
              marginTop: "1rem",
            }}
          >
            Enviar mensaje
          </button>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              borderRadius: "0.75rem",
            }}
          >
            <h3 style={{ color: "#2a8d53", fontWeight: 600, marginBottom: "1rem" }}>
              Información de contacto
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <Mail size={20} />
              <a
                href="mailto:danilocarlosama96@gmail.com"
                style={{
                  color: "#d4d4d8",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2a8d53")}
                onMouseLeave={e => (e.currentTarget.style.color = "#d4d4d8")}
              >
                danilocarlosama96@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Phone size={20} />
              <a
                href="https://wa.me/573117916236"
                target="_blank"
                style={{
                  color: "#d4d4d8",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2a8d53")}
                onMouseLeave={e => (e.currentTarget.style.color = "#d4d4d8")}
              >
                +57 3117916236
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              borderRadius: "0.75rem",
            }}
          >
            <h3 style={{ color: "#2a8d53", fontWeight: 600, marginBottom: "1rem" }}>
              Redes sociales
            </h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                style={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2a8d53")}
                onMouseLeave={e => (e.currentTarget.style.color = "white")}
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Danilo2334"
                target="_blank"
                style={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2a8d53")}
                onMouseLeave={e => (e.currentTarget.style.color = "white")}
              >
                <Github />
              </a>
              <a
                href="https://instagram.com/daniloc_0"
                target="_blank"
                style={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2a8d53")}
                onMouseLeave={e => (e.currentTarget.style.color = "white")}
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
