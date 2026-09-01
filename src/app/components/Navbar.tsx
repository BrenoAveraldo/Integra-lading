import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import integraLogo from "../../imports/images/Logo/INTEGRA.png";
import { useNavigation } from "../NavigationContext";
import { useIsMobile } from "../hooks/useIsMobile";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { WhatsappIcon } from "./shared/WhatsappIcon";

const NAV_LINKS = [
  { label: "Home", href: "#inicio" },
  { label: "Produtos", href: "#veiculos" },
  { label: "Sobre", href: "#sobre" },
];

// Links do submenu "Produtos": levam direto para a página da categoria
// (nível 1 da navegação hierárquica do catálogo).
const PRODUCTS = [
  { label: "Tratores", to: "/tratores" },
  { label: "Caminhões", to: "/caminhoes" },
  { label: "Ônibus", to: "/onibus" },
  { label: "Utilitários Marruá", to: "/marrua" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeTab, navigateToHref } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  // Controla o que renderizar via estado do React (matchMedia), não via
  // classes CSS — ver comentário em useIsMobile.ts sobre o motivo.
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Se a tela deixar de ser mobile (ex: usuário girou o tablet ou aumentou
  // a janela) com o menu aberto, fecha o dropdown pra não ficar "preso".
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Links da Home (Home/Produtos/Sobre/Contato) funcionam por âncora dentro
  // da página institucional. Se o usuário estiver em outra rota (ex: uma
  // página de categoria/produto), primeiro voltamos para "/" e então
  // trocamos a aba/rolamos até a âncora.
  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => navigateToHref(href), 60);
    } else {
      navigateToHref(href);
    }
  };

  const handleProductNav = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };
  const SOCIALS = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/integraveiculos", label: "Instagram" },
    { icon: WhatsappIcon, href: "https://wa.me/559820168515?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.", label: "Whatsapp" },
  ];

  // Considera um link "ativo" se a aba correspondente estiver aberta
  // (Serviços é tratado como parte da aba Início).
  const isActive = (href: string) => {
    if (href === "#inicio") return activeTab === "inicio";
    if (href === "#sobre") return activeTab === "sobre";
    if (href === "#veiculos") return activeTab === "veiculos";
    if (href === "#contato") return activeTab === "contato";
    return false;
  };

  return (
    <header style={{ fontFamily: "'Poppins', 'Open Sans', sans-serif" }}>
      {/* Top bar */}
      <div
        style={{
          background: scrolled ? "#fff" : "rgba(255,255,255,0.97)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
          transition: "box-shadow 0.3s, background 0.3s",
        }}
      >
        <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo — clicável, leva para o topo da Home */}
          <button
            onClick={() => handleNav("#inicio")}
            aria-label="Ir para o início"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img src={integraLogo} alt="Integra" style={{ height: 30, objectFit: "contain" }} />
            {!isMobile && (
              <>
                <span style={{ width: 1, height: 24, background: "#e0e0e0" }} />
                <span
                  style={{ fontSize: 10, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.4, fontFamily: "'Open Sans', sans-serif", textAlign: "left" }}
                >
                  Concessionária<br />Autorizada Agrale
                </span>
              </>
            )}
          </button>

          {/* Desktop nav — só renderiza fora do mobile */}
          {!isMobile && (
            <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px 16px",
                        fontSize: 13,
                        color: active ? "#C8102E" : "#1a1a1a",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        transition: "color 0.2s",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C8102E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = active ? "#C8102E" : "#1a1a1a")}
                    >
                      {link.label}
                      {active && (
                        <span
                          style={{
                            position: "absolute",
                            left: 16,
                            right: 16,
                            bottom: 2,
                            height: 2,
                            background: "#C8102E",
                            borderRadius: 1,
                          }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => handleNav("#contato")}
                  style={{
                    background: "#C8102E",
                    border: "none",
                    cursor: "pointer",
                    padding: "9px 22px",
                    fontSize: 12,
                    color: "#fff",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    borderRadius: 2,
                    marginLeft: 8,
                    fontFamily: "'Poppins', sans-serif",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#a50d24"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#C8102E"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          )}

          {/* Mobile hamburger — só renderiza no mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexShrink: 0 }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 22, height: 16, justifyContent: "center" }}>
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#C8102E",
                    borderRadius: 2,
                    transition: "transform 0.25s ease, opacity 0.2s ease",
                    transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#C8102E",
                    borderRadius: 2,
                    transition: "opacity 0.2s ease",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#C8102E",
                    borderRadius: 2,
                    transition: "transform 0.25s ease, opacity 0.2s ease",
                    transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          )}
        </nav>
      </div>

      {/* Agrale product sub-strip — só renderiza fora do mobile */}
      {!isMobile && (
        <div style={{ background: "#1a1a1a", borderBottom: "2px solid #C8102E", height: 37 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 0 }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", paddingRight: 20, borderRight: "1px solid rgba(255,255,255,0.1)", marginRight: 4, fontFamily: "'Open Sans', sans-serif" }}>
              Produtos
            </span>
            {PRODUCTS.map((p, i) => (
              <button
                key={p.to}
                onClick={() => handleProductNav(p.to)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "9px 16px",
                  fontFamily: "'Open Sans', sans-serif",
                  borderRight: i < PRODUCTS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(200,16,46,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "none"; }}
              >
                {p.label}
              </button>
            ))}

            {/* Social links right side */}
            <div style={{ marginLeft: "auto", display: "flex", gap: 14, alignItems: "center" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "color 0.2s, background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "#C8102E";
                    e.currentTarget.style.borderColor = "#C8102E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "12px 24px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
          {[...NAV_LINKS, { label: "Fale Conosco", href: "#contato" }].map((link) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 0",
                  fontSize: 14,
                  color: active ? "#C8102E" : "#1a1a1a",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  borderBottom: "1px solid #f0f0f0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </button>
            );
          })}
          {/* Mobile product list */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "2px solid #C8102E" }}>
            <p style={{ fontSize: 10, color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Produtos Agrale</p>
            {PRODUCTS.map((p) => (
              <button
                key={p.to}
                onClick={() => handleProductNav(p.to)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "8px 0", fontSize: 13, color: "#555", fontFamily: "'Open Sans', sans-serif" }}
              >
                → {p.label}
              </button>
            ))}
          </div>

          {/* Redes sociais — só aparecem na faixa escura em telas grandes, então
              replicamos aqui pra quem acessa pelo celular não perder o acesso */}
          <div style={{ display: "flex", gap: 12, marginTop: 20, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
            {SOCIALS.map((s) => (
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
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#555",
                }}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}