import { MapPin, Clock, Phone } from "lucide-react";
import { SectionTag } from "./shared/SectionTag";

const ADDRESS = " BR 135 KM 6,4 S/N VILA SARNEY MARACANÃ, São Luís - MA. CEP: 65095-602";
const PHONE = "(98) 2016-8515";
const HOURS = ["Segunda a sexta: 07:40h às 17:30h"];
const MAPS_EMBED_SRC =  "https://www.google.com/maps?q=-2.6337000,-44.2662000&output=embed";

export function LocationSection() {
  return (
    <section style={{ background: "#f5f5f5", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <SectionTag text="Onde Estamos" />
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#1a1a1a",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 24,
                lineHeight: 1.1,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Visite nossa concessionária
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <InfoRow icon={MapPin} title="Endereço" lines={[ADDRESS]} />
              <InfoRow icon={Phone} title="Telefone / WhatsApp" lines={[PHONE]} />
              <InfoRow icon={Clock} title="Horário de atendimento" lines={HOURS} />
            </div>
          </div>

          {/* Mini mapa real do Google Maps (embed público, sem necessidade de API key). */}
          <div
            style={{
              height: 380,
              border: "1px solid #ddd",
              overflow: "hidden",
            }}
          >
            <iframe
              title="Localização da Integra no Google Maps"
              src={MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ width: 40, height: 40, background: "#fff0f3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} color="#C8102E" strokeWidth={2} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4, fontFamily: "'Poppins', sans-serif" }}>
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, fontFamily: "'Open Sans', sans-serif" }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}