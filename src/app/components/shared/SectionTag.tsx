// Rótulo padrão usado no topo das seções ("— SOBRE A INTEGRA", "— NOSSA TRAJETÓRIA", etc).
// Antes duplicado em AboutSection.tsx e ServicesSection.tsx; centralizado aqui para
// reaproveitar em qualquer seção nova (Home, Sobre, Catálogo).
interface SectionTagProps {
  text: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionTag({ text, light = false, centered = false }: SectionTagProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: centered ? "center" : "flex-start",
        gap: 10,
        marginBottom: 16,
      }}
    >
      <span style={{ display: "block", width: 36, height: 2, background: light ? "rgba(255,255,255,0.6)" : "#C8102E" }} />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: light ? "rgba(255,255,255,0.7)" : "#C8102E",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        {text}
      </span>
      {centered && <span style={{ display: "block", width: 36, height: 2, background: light ? "rgba(255,255,255,0.6)" : "#C8102E" }} />}
    </div>
  );
}
