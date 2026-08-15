import { ReactNode, CSSProperties } from "react";

export type TagVariant = "red" | "dark" | "gray";

// Ordem usada para colorir automaticamente cada subcategoria dentro de uma
// categoria (1ª = red, 2ª = dark, 3ª = gray) — ver getSubcategoryVariant em
// src/data/vehicles.ts.
export const TAG_VARIANT_ORDER: TagVariant[] = ["red", "dark", "gray"];

const TAG_COLORS: Record<TagVariant, string> = {
  red: "#C8102E",
  dark: "#1a1a1a",
  gray: "#54545a",
};

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}

// Selo em formato de bandeirola/paralelogramo — mesmo estilo visual usado
// nos rótulos "LEVES / MÉDIOS / SEMIPESADOS". Gerado 100% em CSS (skew +
// contra-skew no texto) para não depender de uma imagem nova por rótulo;
// reutilizável em qualquer lugar do site (grade de subcategorias, cards de
// veículo, hero de produto etc.).
export function Tag({ children, variant = "red", size = "md", style }: TagProps) {
  const padding = size === "sm" ? "6px 16px 6px 12px" : size === "lg" ? "10px 26px 10px 18px" : "8px 22px 8px 16px";
  const fontSize = size === "sm" ? 11.5 : size === "lg" ? 14 : 13;

  return (
    <span
      style={{
        display: "inline-block",
        background: TAG_COLORS[variant],
        transform: "skewX(-12deg)",
        padding,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: "skewX(12deg)",
          color: "#fff",
          fontSize,
          fontWeight: 800,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          fontFamily: "'Poppins', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </span>
  );
}