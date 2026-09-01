import { MessageCircle, Handshake, LifeBuoy, Settings, Wrench, Headset } from "lucide-react";
import { SectionTag } from "./shared/SectionTag";

const SERVICES = [
  { icon: MessageCircle, title: "Consultoria na Escolha", desc: "Orientação especializada para encontrar o veículo ideal para sua operação e necessidade." },
  { icon: Handshake, title: "Atendimento Comercial", desc: "Equipe comercial dedicada para oferecer as melhores condições de negociação." },
  { icon: LifeBuoy, title: "Pós-Venda", desc: "Suporte contínuo após a compra para garantir a máxima performance do seu veículo." },
  { icon: Settings, title: "Peças Genuínas", desc: "Estoque de peças originais Agrale para manutenções rápidas e de qualidade." },
  { icon: Wrench, title: "Assistência Técnica", desc: "Técnicos certificados Agrale prontos para manter seus veículos operando com eficiência." },
  { icon: Headset, title: "Suporte ao Cliente", desc: "Atendimento dedicado durante toda a jornada do cliente com a Integra." },
];

export function ServicesSection() {
  return (
    <>
      {/* Services */}
      <section id="servicos" style={{ background: "#f5f5f5", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionTag text="Pós-Vendas" centered />
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 12, fontFamily: "'Poppins', sans-serif" }}>
              Suporte especializado onde você estiver
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.8, fontFamily: "'Open Sans', sans-serif" }}>
              A Integra oferece atendimento especializado durante toda a jornada do cliente, com suporte completo antes, durante e após a compra.
            </p>
            <p style={{ color: "#C8102E", fontSize: 13, fontWeight: 700, marginTop: 14, letterSpacing: "0.02em", fontFamily: "'Poppins', sans-serif" }}>
              Apoiada pela experiência de mais de 20 anos do Grupo Araujo administrando frotas.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {SERVICES.map((service) => (
              <div
                key={service.title}
                style={{ background: "#fff", padding: "32px 28px", boxShadow: "6px 6px 18px 0px rgba(0, 0, 0, 0.3)", borderBottom: "3px solid #C8102E", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "6px 6px 18px 0px rgba(250, 7, 7, 0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "6px 6px 18px 0px rgba(2, 2, 2, 0.3)"; }}
              >
                <div style={{ width: 48, height: 48, background: "#fff0f3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <service.icon size={22} color="#C8102E" strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: "'Poppins', sans-serif" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer network / Agrale partnership */}
      <section style={{ background: "#1a1a1a", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(200,16,46,0.025) 0px, rgba(200,16,46,0.025) 1px, transparent 1px, transparent 44px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <SectionTag text="Rede de Concessionárias" light />
              <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 20, fontFamily: "'Poppins', sans-serif" }}>
                Atendimento completo<br />e próximo de você
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.85, fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", maxWidth: 440 }}>
                Como Concessionária Autorizada Agrale, a Integra garante acesso a toda a rede de suporte da marca — peças genuínas, garantia oficial, recall e assistência técnica certificada.
              </p>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Presença da marca Agrale em todo o território nacional.",
                  "Garantia de fábrica reconhecida em qualquer unidade Agrale do país.",
                  "Recall e campanhas de segurança comunicados automaticamente pela marca.",
                  "Suporte que acompanha você mesmo fora do Maranhão.",
                ].map((item, i, arr) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, paddingBottom: 18, marginBottom: 18, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
                      <polygon points="6,0 12,12 0,12" fill="#C8102E" />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.65, fontFamily: "'Open Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}