import { Navigate, useParams } from "react-router";
import { getCategory, getSubcategory, getVehiclesBySubcategory } from "../../data/vehicles";
import { Breadcrumb } from "../components/catalog/Breadcrumb";
import { VehicleCard } from "../components/catalog/VehicleCard";

export function SubCategoryPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const categoryData = category ? getCategory(category) : undefined;
  const subData = category && subcategory ? getSubcategory(category, subcategory) : undefined;

  if (!categoryData || !subData) return <Navigate to="/" replace />;

  const vehicles = getVehiclesBySubcategory(categoryData.slug, subData.slug);

  return (
    <div style={{ background: "#fff", minHeight: "60vh" }}>
      <Breadcrumb
        items={[
          { label: "Início", to: "/" },
          { label: categoryData.name, to: `/${categoryData.slug}` },
          { label: subData.name },
        ]}
      />

      <div style={{ background: "#1a1a1a", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Open Sans', sans-serif" }}>
              {categoryData.name}
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: 10,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {subData.name}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: 560, fontFamily: "'Open Sans', sans-serif" }}>
            {subData.shortDescription}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 96px" }}>
        {vehicles.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        ) : (
          <p style={{ color: "#777", fontFamily: "'Open Sans', sans-serif" }}>Nenhum veículo cadastrado nesta linha ainda.</p>
        )}
      </div>
    </div>
  );
}
