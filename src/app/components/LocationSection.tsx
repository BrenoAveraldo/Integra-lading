import { MapPin, Clock, Phone } from "lucide-react";
import { SectionTag } from "./shared/SectionTag";

// Dados de referência — troque pelo endereço, telefone e horário reais da Integra.
const ADDRESS = "Av. Exemplo, 1234 — Centro, São Luís/MA";
const PHONE = "(98) 0000-0000";
const HOURS = ["Segunda a sexta: 8h às 18h", "Sábado: 8h às 12h"];
const MAPS_QUERY = encodeURIComponent(ADDRESS);

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

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 32,
                background: "#C8102E",
                color: "#fff",
                padding: "14px 30px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Ver no mapa ›
            </a>
          </div>

          {/* Placeholder de mapa — troque por um <iframe> do Google Maps com as
              coordenadas reais assim que o endereço estiver confirmado. */}
          <div
            style={{
              height: 380,
              background: "#e5e5e5",
              border: "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 32px)",
              }}
            />
            <MapPin size={40} color="#C8102E" strokeWidth={1.5} style={{ position: "relative" }} />
            <span style={{ position: "relative", fontSize: 13, color: "#888", fontFamily: "'Open Sans', sans-serif" }}>{ADDRESS}</span>
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
