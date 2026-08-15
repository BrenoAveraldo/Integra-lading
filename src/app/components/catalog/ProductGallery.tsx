import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div style={{ background: "#f5f5f5", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
            Galeria
          </h2>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 380,
            marginBottom: 16,
          }}
        >
          <img src={images[active]} alt={`${alt} - imagem ${active + 1}`} style={{ maxWidth: "100%", maxHeight: 360, objectFit: "contain" }} />
        </div>

        {images.length > 1 && (
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(images.length, 5)}, 1fr)`, gap: 12 }}>
            {images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => setActive(i)}
                style={{
                  background: "#fff",
                  border: i === active ? "2px solid #C8102E" : "1px solid #ddd",
                  padding: 10,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 90,
                }}
              >
                <img src={img} alt={`${alt} - miniatura ${i + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
