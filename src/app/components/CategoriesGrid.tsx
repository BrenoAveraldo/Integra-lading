import { CATEGORIES } from "../../data/vehicles";
import { SectionTag } from "./shared/SectionTag";
import { Button } from "./shared/Button";

// Ponte visual entre a Home e o catálogo completo (/caminhoes, /onibus, /tratores,
// /marrua). Reaproveita os mesmos dados de src/data/vehicles.ts usados nas
// páginas de categoria, então qualquer alteração de nome/imagem lá se reflete aqui.
export function CategoriesGrid() {
  return (
    <section style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionTag text="Nosso Portfólio" centered />
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: 12,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Um veículo para cada operação
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.8, fontFamily: "'Open Sans', sans-serif" }}>
            Do transporte urbano ao off-road mais extremo, conheça as quatro linhas completas da Agrale disponíveis na Integra.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.slug}
              to={`/${cat.slug}`}
              variant="dark"
              style={{
                display: "block",
                padding: 0,
                borderRadius: 0,
                overflow: "hidden",
                position: "relative",
                height: 320,
                textAlign: "left",
                boxShadow: "6px 6px 18px 0px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.5,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.92) 100%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 22px" }}>
                  <span
                    style={{
                      display: "block",
                      width: 28,
                      height: 2,
                      background: "#C8102E",
                      marginBottom: 12,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#fff",
                      textTransform: "uppercase",
                      marginBottom: 6,
                      fontFamily: "'Poppins', sans-serif",
                      whiteSpace: "normal",
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 12, fontFamily: "'Open Sans', sans-serif", whiteSpace: "normal" }}>
                    {cat.tagline}
                  </p>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Poppins', sans-serif" }}>
                    Explorar linha ›
                  </span>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}