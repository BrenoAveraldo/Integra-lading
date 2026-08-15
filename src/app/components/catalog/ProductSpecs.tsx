interface ProductSpecsProps {
  specifications: Record<string, string>;
  highlights: string[];
}

export function ProductSpecs({ specifications, highlights }: ProductSpecsProps) {
  const entries = Object.entries(specifications);

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "72px 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 56,
      }}
    >
      {/* Especificações */}
      <div>
        <SectionTitle>Especificações Técnicas</SectionTitle>
        <div style={{ border: "1px solid #eee", borderRadius: 4, overflow: "hidden" }}>
          {entries.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                background: i % 2 === 0 ? "#f8f8f8" : "#fff",
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  fontFamily: "'Poppins', sans-serif",
                  borderRight: "1px solid #eee",
                }}
              >
                {label}
              </div>
              <div style={{ padding: "14px 18px", fontSize: 13, color: "#555", fontFamily: "'Open Sans', sans-serif" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais */}
      <div>
        <SectionTitle>Diferenciais</SectionTitle>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {highlights.map((h) => (
            <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: 5 }}>
                <polygon points="5,0 10,10 0,10" fill="#C8102E" />
              </svg>
              <span style={{ fontSize: 15, color: "#444", lineHeight: 1.7, fontFamily: "'Open Sans', sans-serif" }}>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
      <h2
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1a1a1a",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
