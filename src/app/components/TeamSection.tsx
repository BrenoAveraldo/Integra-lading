import { UserRound } from "lucide-react";
import { SectionTag } from "./shared/SectionTag";

// Equipe de referência — troque nomes/cargos pelos reais e, quando houver fotos
// disponíveis, substitua o avatar de ícone por <img src={...} />.
const TEAM = [
  { name: "Diretoria Comercial", role: "Negociação e relacionamento com clientes" },
  { name: "Consultoria Técnica", role: "Escolha do veículo ideal para cada operação" },
  { name: "Assistência Técnica", role: "Manutenção e suporte pós-venda certificado Agrale" },
  { name: "Peças e Estoque", role: "Peças genuínas e disponibilidade rápida" },
];

export function TeamSection() {
  return (
    <section style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionTag text="Nossa Equipe" centered />
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
            Pessoas que fazem a diferença
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.8, fontFamily: "'Open Sans', sans-serif" }}>
            Times dedicados em cada etapa da sua jornada com a Integra, da escolha do veículo ao suporte pós-venda.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {TEAM.map((member) => (
            <div key={member.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  background: "#f5f5f5",
                  border: "2px solid #C8102E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                }}
              >
                <UserRound size={38} color="#C8102E" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 6, fontFamily: "'Poppins', sans-serif" }}>
                {member.name}
              </h3>
              <p style={{ fontSize: 12.5, color: "#777", lineHeight: 1.6, fontFamily: "'Open Sans', sans-serif" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
