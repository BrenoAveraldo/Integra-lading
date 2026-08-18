import fachadaImg from "../../imports/images/Logo/FOTO-FACHADA.png";
import { Award, Cog, Handshake, ShieldCheck } from "lucide-react";
import VIDEOPECA from "../../imports/videos/PEÇAS-VIDEO-AGRALE-INTEGRA_.mp4";
import { SectionTag } from "./shared/SectionTag";
import { StatsBar } from "./shared/StatsBar";
import { Button } from "./shared/Button";
import { TeamSection } from "./TeamSection";
import { useNavigation } from "../NavigationContext";

// Números institucionais de referência — troque pelos dados reais da Integra.
const ABOUT_STATS = [
  { value: 20, suffix: "+", label: "Anos de atuação" },
  { value: 500, suffix: "+", label: "Veículos entregues" },
  { value: 50, suffix: "+", label: "Municípios atendidos" },
  { value: 100, suffix: "%", label: "Suporte pós-venda" },
];

const TIMELINE = [
  {
    year: "2006",
    title: "Fundação",
    desc: "A Integra Serviços Ltda. surge como parte do Grupo Araujo, com foco em soluções eficientes para o mercado de transporte regional.",
  },
  {
    year: "2010",
    title: "Expansão",
    desc: "Com o crescimento da demanda, a Integra expande sua equipe e infraestrutura, consolidando atendimento ao setor público e privado.",
  },
  {
    year: "2018",
    title: "Consolidação",
    desc: "Grandes contratos de fornecimento de veículos para prefeituras e empresas privadas afirmam a reputação da Integra no Maranhão.",
  },
  {
    year: "2026",
    title: "Concessionária Agrale",
    desc: "A Integra torna-se Concessionária Autorizada Agrale, oferecendo o portfólio completo da marca com suporte técnico especializado.",
  },
];

export function AboutSection() {
  return (
    <>
      {/* About intro */}
      <section id="sobre" style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 72, alignItems: "center" }}>
            {/* Left: text */}
            <div>
              <SectionTag text="Sobre a Integra" />
              <h2 style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "#1a1a1a",
                textTransform: "uppercase",
                lineHeight: 1.1,
                marginBottom: 24,
                letterSpacing: "-0.01em",
                fontFamily: "'Poppins', sans-serif",
              }}>
                Soluções que movem<br />
                <span style={{ color: "#C8102E" }}>há mais de 20 anos</span>
              </h2>
              <p style={{ color: "#555", lineHeight: 1.9, marginBottom: 20, fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}>
                <strong style={{ color: "#1a1a1a" }}>A Integra Serviços Ltda.</strong>, integrante do Grupo Araujo,
                possui mais de 20 anos de atuação no mercado de transporte, oferecendo soluções eficientes,
                seguras e confiáveis para clientes dos setores público e privado.
              </p>
              <p style={{ color: "#555", lineHeight: 1.9, marginBottom: 36, fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem" }}>
                Ao longo de sua trajetória, construiu uma reputação baseada em compromisso, qualidade e
                relacionamento, acompanhando as transformações do mercado e evoluindo continuamente
                para atender novas demandas.
              </p>

              {/* Values grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: Award, label: "Compromisso" },
                  { icon: Cog, label: "Qualidade" },
                  { icon: Handshake, label: "Relacionamento" },
                  { icon: ShieldCheck, label: "Confiabilidade" },
                ].map((v) => (
                  <div key={v.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#f8f8f8", borderLeft: "3px solid #C8102E" }}>
                    <v.icon size={18} color="#C8102E" strokeWidth={2} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif" }}>{v.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: fachada photo */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -16, right: -16, width: "calc(100% - 32px)", height: "calc(100% - 32px)", border: "3px solid #C8102E", borderRadius: 2, zIndex: 0 }} />
              <img
                src={fachadaImg}
                alt="Integra Agrale Fachada"
                style={{ width: "100%", height: 440, objectFit: "cover", borderRadius: 2, position: "relative", zIndex: 1, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
              />
              <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2, background: "#C8102E", color: "#fff", padding: "12px 20px" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, fontFamily: "'Open Sans', sans-serif" }}>Concessionária Autorizada</div>
                <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.06em", fontFamily: "'Poppins', sans-serif" }}>AGRALE</div>
              </div>
            </div>
          </div>

          {/* Números institucionais */}

        </div>



      </section>
      <section style={{ background: "#C8102E", padding: "80px 24px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "100%", background: "rgba(0,0,0,0.12)", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56, alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px 0" }}>
              <video autoPlay muted loop playsInline style={{ width: "100%", maxWidth: 700, height: 340, objectFit: "cover", borderRadius: 8, }}>
                <source src={VIDEOPECA} type="video/mp4" />
              </video>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "20px", lineHeight: 1.85, marginBottom: 20, fontFamily: "'Open Sans', sans-serif" }}>
                Mais do que acompanhar as mudanças do mercado, a Integra decidiu ampliar sua atuação.
              </p>
              <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "20px", lineHeight: 1.85, marginBottom: 32, fontFamily: "'Open Sans', sans-serif" }}>
                Agora como Concessionária Autorizada Agrale, oferecendo soluções completas para o
                agronegócio, transporte de cargas, mobilidade urbana e operações especiais.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Tecnologia de ponta Agrale",
                  "Robustez e confiabilidade comprovadas",
                  "Suporte técnico especializado",
                  "Portfólio completo de veículos",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ display: "block", width: 6, height: 6, background: "#fff", opacity: 0.7, transform: "rotate(45deg)", flexShrink: 0 }} />
                    <span style={{ color: "#fff", fontSize: 17, fontFamily: "'Open Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section style={{ background: "#f5f5f5", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionTag text="Nossa Trajetória" centered />
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "-0.01em", fontFamily: "'Poppins', sans-serif" }}>
              Nossa História
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Linha conectora entre os marcos (visível a partir de telas médias) */}
            <div
              className="hidden md:block"
              style={{ position: "absolute", top: 8, left: "6%", right: "6%", height: 2, background: "rgba(200,16,46,0.2)", zIndex: 0 }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28, position: "relative", zIndex: 1 }}>
              {TIMELINE.map((item) => (
                <div key={item.year}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#C8102E", border: "3px solid #f5f5f5", boxShadow: "0 0 0 2px #C8102E", flexShrink: 0 }} />
                    <span style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 900, color: "#1a1a1a", fontFamily: "'Poppins', sans-serif" }}>{item.year}</span>
                  </div>
                  <div style={{ background: "#fff", padding: "20px 22px", borderTop: "3px solid #C8102E", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#C8102E", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif" }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    

      <section
        style={{
          background: "#C8102E",
          padding: "9px 2px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "#C8102E",
              color: "#fff",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 32,
              padding: "56px 24px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  opacity: 0.9,
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Anos de atuação
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                4
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  opacity: 0.9,
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Linhas de veículos Agrale
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  opacity: 0.9,
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Municípios atendidos
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  opacity: 0.9,
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Suporte pós-venda
              </div>
            </div>
          </div>
        </div>
      </section>
        <ClosingCTA />
    </>
  );
}

function ClosingCTA() {
  const { navigateTo } = useNavigation();
  return (
    <section style={{ background: "#1a1a1a", padding: "45px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem, 2.6vw, 2rem)", fontWeight: 800, textTransform: "uppercase", marginBottom: 16, fontFamily: "'Poppins', sans-serif" }}>
          Pronto para conhecer nosso catálogo?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14.5, lineHeight: 1.8, marginBottom: 32, fontFamily: "'Open Sans', sans-serif" }}>
          Explore os veículos Agrale disponíveis ou fale diretamente com nossa equipe comercial.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button to="/caminhoes" variant="primary">
            Ver catálogo ›
          </Button>
          <Button variant="outline-light" onClick={() => navigateTo("contato")}>
            Falar com a equipe
          </Button>
        </div>
      </div>
    </section>
  );
}
