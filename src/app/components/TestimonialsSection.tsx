import { SectionTag } from "./shared/SectionTag";
import { Landmark, Factory, Truck } from "lucide-react";

// Diferente de um depoimento (fala atribuída a alguém), isto é um resumo de
// casos reais do Grupo Araujo — verificável e muito mais forte do que uma
// citação genérica de "Cliente Corporativo" sem nome.
const TRUST_CASES = [
  {
    icon: Landmark,
    title: "Governo do Maranhão",
    tag: "Programa Travessia",
    desc:
      "Transporte gratuito porta a porta para pessoas com deficiência, idosos e pacientes em tratamento, em parceria com o Grupo Araujo desde 2016.",
  },
  {
    icon: Factory,
    title: "Vale e Alumar",
    tag: "Grandes operações industriais",
    desc:
      "Suporte a projetos de grande porte no Pará, como a UHE Belo Monte, o Projeto S11D e a Mineração Onça-Puma.",
  },
  {
    icon: Truck,
    title: "Suzano S/A",
    tag: "Região Tocantina",
    desc:
      "Parceria de transporte na cidade de Imperatriz desde 2009, atendendo operações da companhia na região.",
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
          <SectionTag text="Quem Confia no Grupo Araujo" light centered />
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: 12,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Mais de 20 anos de parcerias sólidas
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.8, fontFamily: "'Open Sans', sans-serif" }}>
            A experiência que a Integra traz para o setor de veículos vem da operação de transportes
            do Grupo Araujo, hoje a maior empresa de fretamento genuinamente maranhense.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0 }}>
          {TRUST_CASES.map((c, i) => (
            <div key={c.title} className={`border-l border-white/15 ${i === TRUST_CASES.length - 1 ? "border-r" : ""}`}
              style={{
                padding: "32px 32px 8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <c.icon size={22} color="#fff" strokeWidth={1.75} />
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 10,
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {c.tag}
              </div>
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
                {c.desc}
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
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}