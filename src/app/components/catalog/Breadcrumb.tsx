import { Link } from "react-router";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav style={{ background: "#f5f5f5", borderBottom: "1px solid #eee" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {item.to ? (
              <Link
                to={item.to}
                style={{ fontSize: 12, color: "#777", textDecoration: "none", fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C8102E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#777")}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ fontSize: 12, color: "#1a1a1a", fontWeight: 700, fontFamily: "'Open Sans', sans-serif" }}>{item.label}</span>
            )}
            {i < items.length - 1 && <span style={{ color: "#ccc", fontSize: 12 }}>/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
