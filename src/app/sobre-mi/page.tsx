"use client"

export default function SobreMi() {
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
        Sobre Mí
      </h2>
      <p style={{ marginBottom: "2rem", color: "#a1a1aa", textAlign: "center" }}>
        Conoce más sobre mi experiencia, habilidades y lo que me apasiona.
      </p>

      {/* Info + Habilidades */}
      <div
        style={{
          maxWidth: "80rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "2rem",
          alignItems: "start",
        }}
      >
        {/* Info general */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "32rem",
          }}
        >
          <p>
            Mi nombre es Erik Danilo Carlosama Muñoz, soy ingeniero en software.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Cuento con sólidos conocimientos.
          </p>
        </div>

        {/* Habilidades + Hobbies */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Habilidades */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              borderRadius: "0.75rem",
            }}
          >
            <h3 style={{ color: "#2a8d53", fontWeight: 600, marginBottom: "1rem" }}>
              Mis Habilidades
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                { titulo: "Desarrollo Frontend", detalle: "HTML, CSS, JavaScript, React" },
                { titulo: "Frameworks", detalle: "Next.js, Tailwind CSS" },
                { titulo: "Diseño UI/UX", detalle: "Figma" },
                { titulo: "Herramientas", detalle: "Git, VS Code" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#2a2a2a",
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#2a8d53",
                        borderRadius: "9999px",
                      }}
                    ></span>
                    <strong>{item.titulo}</strong>
                  </div>
                  <p style={{ color: "#a1a1aa" }}>{item.detalle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies e Intereses */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              borderRadius: "0.75rem",
              marginTop: "0.5rem",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h3 style={{ color: "#2a8d53", fontWeight: 600 }}>Hobbies e Intereses</h3>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {["Gimnasio", "Videojuegos", "Lectura", "Música"].map((hobbie, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#1a5d38",
                    color: "white",
                    padding: "0.4rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {hobbie}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
