import { useIsMobile } from "../../hooks/useIsMobile";
import type { Vehicle, CategorySlug } from "../../../data/vehicles";

interface ProductHeroProps {
  vehicle: Vehicle;
}

// Rótulo exibido na tarja acima do título — singular, por categoria.
const CATEGORY_LABEL: Record<CategorySlug, string> = {
  caminhoes: "Caminhão",
  onibus: "Ônibus",
  tratores: "Trator",
  marrua: "Marruá",
};

export function ProductHero({ vehicle }: ProductHeroProps) {
  const isMobile = useIsMobile();
  return (
    <div style={{ background: "#1a1a1a" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: 48,
          minHeight: 420,
        }}
      >
        <div style={{ padding: "56px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C8102E",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              {CATEGORY_LABEL[vehicle.category]}
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: 14,
              lineHeight: 1.1,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {vehicle.name}
          </h1>
          <p
            style={{
              color: "#C8102E",
              fontWeight: 700,
              fontSize: "1.05rem",
              marginBottom: 20,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {vehicle.tagline}
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 480, fontFamily: "'Open Sans', sans-serif" }}>
            {vehicle.description}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px 0" }}>
          <img
            src={vehicle.image2}
            alt={vehicle.name}
            style={{ width: "120%", maxWidth: isMobile ? 300 : 850, marginTop: 21, objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}