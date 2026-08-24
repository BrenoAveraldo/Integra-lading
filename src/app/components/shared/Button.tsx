import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import { Link } from "react-router";

type Variant = "primary" | "outline-dark" | "outline-light" | "dark" | "light";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  style?: CSSProperties;
}

interface ButtonAsButton extends BaseProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  onClick?: undefined;
  href?: undefined;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  target?: string;
  onClick?: undefined;
  to?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const VARIANT_STYLES: Record<Variant, CSSProperties> = {
  primary: { background: "#C8102E", color: "#fff", border: "none" },
  dark: { background: "#1a1a1a", color: "#fff", border: "none" },
  light: { background: "#fff", color: "#C8102E", border: "none" },
  "outline-dark": { background: "transparent", color: "#1a1a1a", border: "1px solid rgba(0,0,0,0.2)" },
  "outline-light": { background: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" },
};

const HOVER_STYLES: Record<Variant, { background: string; color?: string; borderColor?: string }> = {
  primary: { background: "#a50d24" },
  dark: { background: "#333" },
  light: { background: "#f0f0f0" },
  "outline-dark": { background: "#1a1a1a", color: "#fff", borderColor: "#1a1a1a" },
  "outline-light": { background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.7)" },
};

const baseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "14px 30px",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  cursor: "pointer",
  borderRadius: 2,
  fontFamily: "'Poppins', sans-serif",
  textDecoration: "none",
  transition: "background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s",
};

// Componente de botão único para todo o site — substitui os estilos de botão
// duplicados que existiam em HeroSection, ServicesSection e nas páginas do catálogo.
export function Button(props: ButtonProps) {
  const { children, variant = "primary", style } = props;
  const combined: CSSProperties = { ...baseStyle, ...VARIANT_STYLES[variant], ...style };

  const applyHover = (el: HTMLElement, entering: boolean) => {
    const hover = HOVER_STYLES[variant];
    // Cards com sombra própria (como os do CategoriesGrid) sobem mais no hover,
    // reforçando a sensação de flutuação; botões normais mantêm o leve -2px de sempre.
    const hasCardShadow = Boolean(combined.boxShadow);
    const liftDistance = hasCardShadow ? -8 : -2;
    if (entering) {
      el.style.background = hover.background;
      if (hover.color) el.style.color = hover.color;
      if (hover.borderColor) el.style.borderColor = hover.borderColor;
      el.style.transform = `translateY(${liftDistance}px)`;
    } else {
      el.style.background = combined.background as string;
      el.style.color = combined.color as string;
      el.style.borderColor = (combined.border as string)?.includes("rgba") ? (combined.border as string).split(" ").pop()! : (combined.border as string);
      el.style.transform = "translateY(0)";
    }
  };

  if ("to" in props && props.to) {
    return (
      <Link
        to={props.to}
        style={combined}
        onMouseEnter={(e) => applyHover(e.currentTarget, true)}
        onMouseLeave={(e) => applyHover(e.currentTarget, false)}
      >
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        style={combined}
        onMouseEnter={(e) => applyHover(e.currentTarget, true)}
        onMouseLeave={(e) => applyHover(e.currentTarget, false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={props.onClick}
      style={combined}
      onMouseEnter={(e) => applyHover(e.currentTarget, true)}
      onMouseLeave={(e) => applyHover(e.currentTarget, false)}
    >
      {children}
    </button>
  );
}