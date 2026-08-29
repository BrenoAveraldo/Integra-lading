import type { ComponentType } from "react";
import {
  Cog,
  Gauge,
  Wrench,
  Fuel,
  Package,
  RotateCw,
  Ruler,
  Weight,
  Settings2,
  Users,
  ShieldCheck,
  FileDown,
  Maximize2,
  Tractor,
  Bolt,
} from "lucide-react";

interface ProductSpecsProps {
  specifications: Record<string, string>;
  highlights: string[];
  // Caminho do PDF da ficha técnica (vem de vehicle.datasheetUrl em src/data/vehicles.ts).
  // Enquanto estiver undefined, o botão aparece desabilitado como lembrete de preencher.
  datasheetUrl?: string;
  // Caminho da imagem com o desenho técnico de dimensões (vehicle.dimensionsUrl).
  // Nem todo veículo tem esse desenho — se undefined, o botão simplesmente não aparece.
  dimensionsUrl?: string;
}

const RED = "#C8102E";
const INK = "#1a1a1a";

// Escolhe um ícone coerente com o nome do campo (funciona pra qualquer
// categoria de veículo, já que cada uma tem specs diferentes).
function iconForLabel(label: string): ComponentType<{ size?: number; color?: string; strokeWidth?: number }> {
  const l = label.toLowerCase();
  if (l.includes("motor")) return Cog;
  if (l.includes("potênc") || l.includes("potenc")) return Gauge;
  if (l.includes("torque")) return Wrench;
  if (l.includes("consumo") || l.includes("combust")) return Fuel;
  if (l.includes("capacidade") || l.includes("carga") || l.includes("carroceria")) return Package;
  if (l.includes("raio") || l.includes("giro")) return RotateCw;
  if (l.includes("dimens") || l.includes("comprimento") || l.includes("largura") || l.includes("altura") || l.includes("entre-eixos") || l.includes("entre eixos")) return Ruler;
  if (l.includes("peso") || l.includes("massa") || l.includes("tara")) return Weight;
  if (l.includes("passageiro") || l.includes("lugares") || l.includes("ocupantes")) return Users;
  return Bolt;
}

export function ProductSpecs({ specifications, highlights, datasheetUrl, dimensionsUrl }: ProductSpecsProps) {
  const entries = Object.entries(specifications);

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "80px 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 64,
        alignItems: "start",
      }}
    >
      {/* Especificações — cards com ícone, não mais tabela crua */}
      <div>
        <SectionTitle>Especificações Técnicas</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 1,
            background: "#e8e8e8",
            border: "1px solid #e8e8e8",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}
        >
          {entries.map(([label, value]) => {
            const Icon = iconForLabel(label);
            return (
              <div
                key={label}
                style={{
                  background: "#fff",
                  padding: "22px 20px",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                <Icon size={20} color={RED} strokeWidth={2} />
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8a8a8a",
                    marginBottom: 6,
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 16.5, fontWeight: 700, color: INK, fontFamily: "'Poppins', sans-serif", lineHeight: 1.3 }}>
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diferenciais + botão da ficha técnica no espaço em branco ao lado */}
      <div>
        <SectionTitle>Diferenciais</SectionTitle>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {highlights.map((h, i) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 18px",
                  background: "#f8f8f8",
                  borderLeft: `3px solid ${RED}`,
                  transition: "transform 0.2s ease, background 0.2s ease",
                  maxWidth: 350,
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff2f2";
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8f8f8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <ShieldCheck size={19} color={RED} strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#333", fontWeight: 500, lineHeight: 1.6, fontFamily: "'Open Sans', sans-serif" }}>
                  {h}
                </span>
              </div>
            ))}
          </div>

          {/* Botões de download: Ficha Técnica (sempre aparece) + Dimensões (só se existir) */}
          <div style={{ flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
            {datasheetUrl ? (
              <DocButton href={datasheetUrl} icon={FileDown} label="Ficha Técnica" />
            ) : (
              <DocButtonPending icon={FileDown} label="Ficha em breve" />
            )}

            {dimensionsUrl && <DocButton href={dimensionsUrl} icon={Maximize2} label="Dimensões" />}
          </div>
        </div>
      </div>
    </div>
  );
}

function DocButton({ href, icon: Icon, label }: { href: string; icon: ComponentType<{ size?: number }>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: RED,
        color: "#fff",
        padding: "14px 24px",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: 2,
        fontFamily: "'Poppins', sans-serif",
        whiteSpace: "nowrap",
        transition: "background 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#a50d24";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = RED;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Icon size={16} /> {label}
    </a>
  );
}

function DocButtonPending({ icon: Icon, label }: { icon: ComponentType<{ size?: number }>; label: string }) {
  return (
    <span
      title="Preencha o caminho do arquivo em src/data/vehicles.ts para ativar este botão"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: "#eee",
        color: "#999",
        padding: "14px 24px",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        borderRadius: 2,
        fontFamily: "'Poppins', sans-serif",
        whiteSpace: "nowrap",
        cursor: "not-allowed",
        border: "1px dashed #ccc",
      }}
    >
      <Icon size={16} /> {label}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, maxWidth: 385, width: "100%" }}>
      <span style={{ display: "block", width: 32, height: 2, background: RED }} />
      <h2
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: INK,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {children}
      </h2>
    </div>
  );
}