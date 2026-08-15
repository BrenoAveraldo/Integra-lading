import { SectionTag } from "./shared/SectionTag";

// Depoimentos de referência — troque pelos relatos reais de clientes da Integra
// (prefeituras, transportadoras, empresas atendidas) assim que estiverem disponíveis.
const TESTIMONIALS = [
  {
    quote:
      "A parceria com a Integra trouxe agilidade para a renovação da nossa frota. O suporte técnico pós-venda faz toda a diferença no dia a dia.",
    name: "Cliente Corporativo",
    role: "Setor de Transporte de Cargas",
  },
  {
    quote:
      "Atendimento próximo e peças genuínas sempre disponíveis. Conseguimos manter os veículos operando com o mínimo de parada.",
    name: "Cliente Público",
    role: "Prefeitura Municipal",
  },
  {
    quote:
      "Desde a consultoria na escolha do modelo até a entrega, a equipe da Integra acompanhou cada etapa com transparência.",
    name: "Cliente Privado",
    role: "Frota de Distribuição",
  },
];

// Mesma linguagem visual do bloco "Mais do que acompanhar as mudanças do
// mercado..." do Sobre: vermelho sólido, recorte diagonal escuro no canto,
// texto branco em camadas de opacidade e marcadores em losango — sem cards
// brancos "flutuando" sobre o vermelho.
export function TestimonialsSection() {
  return (
    <section style={{ background: "#C8102E", padding: "96px 24px", overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "35%",
          height: "100%",
          background: "rgba(0,0,0,0.12)",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionTag text="Quem Confia na Integra" light centered />
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            O que dizem nossos clientes
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`border-l border-white/15 ${i === TESTIMONIALS.length - 1 ? "border-r" : ""}`}
              style={{
                padding: "32px 32px 8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 56,
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 4,
                }}
              >
                “
              </span>
              <p
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 28,
                  flex: 1,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <span style={{ display: "block", width: 6, height: 6, background: "#fff", opacity: 0.7, transform: "rotate(45deg)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, fontFamily: "'Open Sans', sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
