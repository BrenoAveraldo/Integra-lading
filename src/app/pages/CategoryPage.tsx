import { Link, Navigate, useParams } from "react-router";
import { getCategory, getSubcategoryVariant } from "../../data/vehicles";
import { CATEGORY_SEO } from "../../data/seo";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { Breadcrumb } from "../components/catalog/Breadcrumb";
import { Tag } from "../components/shared/Tag";

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const data = category ? getCategory(category) : undefined;

  const seo = data ? CATEGORY_SEO[data.slug] : undefined;
  useDocumentHead(seo?.title ?? "Integra Veículos", seo?.description ?? "");

  if (!data) return <Navigate to="/" replace />;

  return (
    <div style={{ background: "#fff" }}>
      <Breadcrumb items={[{ label: "Início", to: "/" }, { label: data.name }]} />

      {/* Hero da categoria */}
      <div style={{ background: "#1a1a1a" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "minmax(320px, 0.8fr) minmax(450px, 1.2fr)",
            alignItems: "center",
            gap: 32,
            minHeight: 360,
          }}
        >
          <div style={{ padding: "80px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Open Sans', sans-serif" }}>
                Produtos Agrale
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
              {data.name}
            </h1>
            <p style={{ color: "#C8102E", fontWeight: 700, marginBottom: 18, fontFamily: "'Poppins', sans-serif" }}>{data.tagline}</p>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 480, fontFamily: "'Open Sans', sans-serif" }}>
              {data.description}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "32px 0",
            }}
          >
            <img
              src={data.heroImage}
              alt={data.name}
              style={{
                width: "100%",
                maxWidth: 650,
                aspectRatio: "16 / 9",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Grade de subcategorias */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a1a", fontFamily: "'Poppins', sans-serif" }}>
            Linhas de produtos
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {data.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              to={`/${data.slug}/${sub.slug}`}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid #eee",
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(200,16,46,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ padding: "28px 32px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 180 }}>
                <img src={sub.image} alt={sub.name} style={{ maxWidth: "100%", maxHeight: 160, objectFit: "contain" }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ marginTop: -40, marginBottom: 16 }}>
                  <Tag variant={getSubcategoryVariant(data.slug, sub.slug)}>{sub.name}</Tag>
                </div>
                <p style={{ fontSize: 13, color: "#757171", marginBottom: 18, lineHeight: 1.6, fontFamily: "'Open Sans', sans-serif" }}>{sub.shortDescription}</p>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Poppins', sans-serif" }}>
                  Ver modelos ›
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}