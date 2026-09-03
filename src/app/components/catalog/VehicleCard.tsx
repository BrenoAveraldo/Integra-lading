import { Link } from "react-router";
import type { Vehicle } from "../../../data/vehicles";
import { getSubcategoryVariant } from "../../../data/vehicles";
import { Tag } from "../shared/Tag";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link
      to={`/veiculo/${vehicle.slug}`}
      style={{
        display: "block",
        background: "#fff",
        border: "1px solid #0b0b0b29",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        transition: "transform 0.25s, box-shadow 0.25s",
        textDecoration: "none",
        color: "inherit",
        height: 401,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(200, 16, 47, 0.27)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)";
      }}
    >
      <div
        style={{
          background: "#ffffff",
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 245,
        }}
      >
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          style={{ maxWidth: "100%", maxHeight: 190, objectFit: "contain" }}
        />
      </div>
      <div style={{ padding: "22px 24px 26px" }}>
        <div style={{ marginTop: -40, marginBottom: 16 }}>
          <Tag variant={getSubcategoryVariant(vehicle.category, vehicle.subcategory)} size="lg">
            <span style={{ whiteSpace: "pre-line" }}>
               {vehicle.name}
            </span>
          </Tag>
        </div>
        <p style={{ fontSize: 13, color: "#777", marginBottom: 18, lineHeight: 1.6, fontFamily: "'Open Sans', sans-serif" }}>
          {vehicle.tagline}
        </p>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#C8102E",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Ver detalhes <span style={{ fontSize: 16 }}>›</span>
        </span>
      </div>
    </Link>
  );
}