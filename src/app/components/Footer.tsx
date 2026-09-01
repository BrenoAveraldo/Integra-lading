import integraLogo from "../../imports/images/Logo/INTEGRA.png";
import { MapPin, Mail, Phone, Clock, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router";
import { useNavigation } from "../NavigationContext";
import { WhatsappIcon } from "./shared/WhatsappIcon";

// ---------------------------------------------------------------------------
// Footer com duas variantes de cor, controladas por uma única fonte de
// verdade (VARIANTS) para não duplicar o layout inteiro por cor:
//   <Footer variant="light" />  -> fundo branco, texto preto, acento vermelho
//   <Footer variant="red" />    -> fundo vermelho, texto branco, acento branco
// ---------------------------------------------------------------------------

type FooterVariant = "light" | "red";

const VARIANTS: Record<
  FooterVariant,
  {
    bg: string;
    borderTop: string;
    heading: string;
    text: string;
    textMuted: string;
    divider: string;
    accent: string;
    iconColor: string;
    chipLogo: boolean;
    socialBorder: string;
    socialBorderHover: string;
    ctaBg: string;
    ctaText: string;
    ctaSubtext: string;
  }
> = {
  light: {
    bg: "#fff",
    borderTop: "1px solid rgba(0,0,0,0.08)",
    heading: "#1a1a1a",
    text: "rgba(0,0,0,0.6)",
    textMuted: "rgba(0,0,0,0.4)",
    divider: "rgba(0,0,0,0.08)",
    accent: "#C8102E",
    iconColor: "#C8102E",
    chipLogo: false,
    socialBorder: "rgba(0,0,0,0.15)",
    socialBorderHover: "#C8102E",
    ctaBg: "#1a1a1a",
    ctaText: "#fff",
    ctaSubtext: "rgba(255,255,255,0.65)",
  },
  red: {
    bg: "#C8102E",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    heading: "#fff",
    text: "rgba(255,255,255,0.85)",
    textMuted: "rgba(255,255,255,0.6)",
    divider: "rgba(255,255,255,0.2)",
    accent: "#fff",
    iconColor: "#fff",
    chipLogo: true,
    socialBorder: "rgba(255,255,255,0.35)",
    socialBorderHover: "#fff",
    ctaBg: "#1a1a1a",
    ctaText: "#fff",
    ctaSubtext: "rgba(255,255,255,0.65)",
  },
};

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/integraveiculos" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/559820168515?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." },
];

const PRODUCT_LINES = ["Caminhões Agrale", "Ônibus", "Tratores Agrale", "Utilitários Marruá"];

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = "light" }: FooterProps) {
  const v = VARIANTS[variant];
  const { navigateToHref } = useNavigation();
  const navigate = useNavigate();

  const scrollTop = () => {
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
  };

  return (
    <footer style={{ background: v.bg, borderTop: `2px solid ${v.accent}`, fontFamily: "'Open Sans', 'Poppins', sans-serif", position: "relative" }}>
      {/* Faixa de CTA no topo do footer */}
      

      <div style={{ padding: "64px 24px 48px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
            gap: 40,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            {v.chipLogo ? (
              <div style={{ display: "inline-block", background: "#fff", padding: "10px 16px", marginBottom: 22 }}>
                <img src={integraLogo} alt="Integra" style={{ height: 26, objectFit: "contain", display: "block" }} />
              </div>
            ) : (
              <img src={integraLogo} alt="Integra" style={{ height: 32, objectFit: "contain", marginBottom: 22 }} />
            )}
            <p style={{ color: v.text, fontSize: 13, lineHeight: 1.85, marginBottom: 26, maxWidth: 280 }}>
              A força da Agrale, mais perto de você. Sua nova Concessionária Autorizada Agrale, com atendimento
              completo antes, durante e depois da compra.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `1px solid ${v.socialBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: v.iconColor,
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = variant === "red" ? "#1a1a1a" : "#C8102E";
                    e.currentTarget.style.borderColor = variant === "red" ? "#1a1a1a" : "#C8102E";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = v.socialBorder;
                    e.currentTarget.style.color = v.iconColor;
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <FooterColumn title="Contato" v={v}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <FooterInfoRow icon={MapPin} v={v}>
               RD BR 135 KM 6,4,<br />
               Vila Sarney - Maracanã,<br />
               São Luís - MA, <br/>
               CEP: 65095-602
              </FooterInfoRow>
              <FooterInfoRow icon={Mail} v={v}>
                <a
                  href="mailto:contato@integraveiculos.com"
                  style={{ color: v.text, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = v.heading)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = v.text)}
                >
                  contato@integraveiculos.com
                </a>
              </FooterInfoRow>
              <FooterInfoRow icon={Phone} v={v}>
                <a
                  href="tel:+559820168515"
                  style={{ color: v.text, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = v.heading)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = v.text)}
                >
                  (98) 2016-8515
                </a>
              </FooterInfoRow>
            </div>
          </FooterColumn>

          {/* Linhas de produtos */}
          <FooterColumn title="Linhas de Produtos" v={v}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {PRODUCT_LINES.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <polygon points="4,0 8,8 0,8" fill={v.accent} />
                  </svg>
                  <span style={{ color: v.text, fontSize: 13 }}>{item}</span>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Navegação */}
          <FooterColumn title="Navegação" v={v}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Sobre a Integra", href: "#sobre" },
                { label: "Nossa História", href: "#sobre" },
                { label: "Veículos", href: "#veiculos" },
                { label: "Pós-Vendas", href: "#servicos" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigateToHref(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: v.text,
                      fontSize: 13,
                      padding: 0,
                      textAlign: "left",
                      fontFamily: "'Open Sans', sans-serif",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = v.heading)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = v.text)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Horário de atendimento */}
          <FooterColumn title="Atendimento" v={v}>
            <FooterInfoRow icon={Clock} v={v}>
              Segunda a sexta: 8h às 18h<br />
              Sábado: 8h às 12h
            </FooterInfoRow>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid ${v.divider}`,
          padding: "20px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <span style={{ color: v.textMuted, fontSize: 11 }}>
          © 2026 Integra Serviços Ltda. — Concessionária Autorizada Agrale. Todos os direitos reservados.
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ color: v.textMuted, fontSize: 11 }}>Grupo Araujo</span>
          <button
            onClick={scrollTop}
            title="Voltar ao topo"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: `1px solid ${v.socialBorder}`,
              background: "transparent",
              color: v.iconColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = variant === "red" ? "#1a1a1a" : "#C8102E";
              e.currentTarget.style.borderColor = variant === "red" ? "#1a1a1a" : "#C8102E";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = v.socialBorder;
              e.currentTarget.style.color = v.iconColor;
            }}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterColumn({ title, v, children }: { title: string; v: (typeof VARIANTS)[FooterVariant]; children: React.ReactNode }) {
  return (
    <div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: v.heading,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 22,
          paddingBottom: 12,
          borderBottom: `1px solid ${v.divider}`,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <span style={{ display: "block", width: 6, height: 6, background: v.accent, transform: "rotate(45deg)", flexShrink: 0 }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterInfoRow({ icon: Icon, v, children }: { icon: typeof MapPin; v: (typeof VARIANTS)[FooterVariant]; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <Icon size={15} color={v.iconColor} style={{ flexShrink: 0, marginTop: 2 }} />
      <span style={{ color: v.text, fontSize: 13, lineHeight: 1.75 }}>{children}</span>
    </div>
  );
}