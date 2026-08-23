import { Navigate, useParams } from "react-router";
import { getCategory, getSubcategory, getVehicleBySlug } from "../../data/vehicles";
import { Breadcrumb } from "../components/catalog/Breadcrumb";
import { ProductHero } from "../components/catalog/ProductHero";
import { ProductSpecs } from "../components/catalog/ProductSpecs";
import { ProductGallery } from "../components/catalog/ProductGallery";
import { ProductCTA } from "../components/catalog/ProductCTA";

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = slug ? getVehicleBySlug(slug) : undefined;

  if (!vehicle) return <Navigate to="/" replace />;

  const categoryData = getCategory(vehicle.category);
  const subData = getSubcategory(vehicle.category, vehicle.subcategory);

  return (
    <div style={{ background: "#fff" }}>
      <Breadcrumb
        items={[
          { label: "Início", to: "/" },
          { label: categoryData?.name ?? vehicle.category, to: `/${vehicle.category}` },
          { label: subData?.name ?? vehicle.subcategory, to: `/${vehicle.category}/${vehicle.subcategory}` },
          { label: vehicle.name },
        ]}
      />

      <ProductHero vehicle={vehicle} />
      <ProductSpecs
        specifications={vehicle.specifications}
        highlights={vehicle.highlights}
        datasheetUrl={vehicle.datasheetUrl}
        dimensionsUrl={vehicle.dimensionsUrl}
      />
      <ProductGallery images={vehicle.gallery ?? []} alt={vehicle.name} />
      <ProductCTA vehicleName={vehicle.name} />
    </div>
  );
}