import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { useNavigation } from "../NavigationContext";
import { Button } from "./shared/Button";
import busHero from "../../imports/images/onibus/Onibus hero.png";
import truckHero from "../../imports/images/caminhao/caminhao hero.png";
import tratorHero from "../../imports/images/trator/Trator hero.png";
import marruaHero from "../../imports/images/marrua/MARRUA HERO.png";
import fachadaHero from "../../imports/images/Logo/FOTO-FACHADA.png";

// Slides que apontam para uma categoria real do catálogo usam "to" (rota),
// o último slide (institucional) usa "href" (âncora dentro da própria Home).
const SLIDES = [
  {
    img: marruaHero,
    tag: "Agrale Marruá",
    title: "É mais que off-road,\né para todo terreno.",
    cta: "Conhecer Marruá",
    to: "/marrua",
  },
  {
    img: truckHero,
    tag: "Caminhões Agrale",
    title: "Força e robustez\npara qualquer trabalho.",
    cta: "Ver Caminhões",
    to: "/caminhoes",
  },
  {
    img: tratorHero,
    tag: "Tratores Agrale",
    title: "Mais desempenho\nno dia a dia do campo.",
    cta: "Ver Tratores",
    to: "/tratores",
  },
  {
    img: busHero,
    tag: "Ônibus Agrale",
    title: "Confie em quem é referência\nhá mais de 25 anos.",
    cta: "Ônibus",
    to: "/onibus",
  },
  {
    img: fachadaHero,
    tag: "Integra — Concessionária Autorizada Agrale",
    title: "A nova etapa\ncomeça aqui.",
    cta: "Saiba Mais",
    href: "#sobre",
  },
] as const;

const AUTOPLAY_MS = 6000;

export function HeroSection() {
  const isMobile = useIsMobile();
  // Altura real do Navbar: 68px de barra branca sempre, +37px da faixa
  // escura de produtos que só aparece fora do mobile. Sem descontar isso,
  // "100vh" no Hero + a altura do Navbar ficavam mais altos que a tela,
  // empurrando as setas de navegação e a barra de progresso pra baixo da
  // dobra em celulares com tela mais baixa (ex: iPhone SE).
  const navbarHeight = isMobile ? 68 : 105;
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { navigateToHref } = useNavigation();
  const navigate = useNavigate();

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const step = 100 / (AUTOPLAY_MS / 50);
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

  const handleNav = (target: { to?: string; href?: string }) => {
    if (target.to) navigate(target.to);
    else if (target.href) navigateToHref(target.href);
  };

  const slide = SLIDES[current];

  return (
    <section
      style={{
        position: "relative",
        height: `calc(100vh - ${navbarHeight}px)`,
        minHeight: 500,
        maxHeight: 900,
        overflow: "hidden",
        background: "#0d0d0d",
      }}
    >
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <img
          key={i}
          src={s.img}
          alt={s.tag}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: i === current ? (fading ? 0 : 0.38) : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.4) 60%, transparent 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 220, background: "linear-gradient(to top, #0d0d0d 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Red corner accent */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "100px 100px 0 0", borderColor: "#C8102E transparent transparent transparent", opacity: 0.85, pointerEvents: "none" }} />

      {/* Slide indicator line (left vertical) */}
      <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: 180, background: "rgba(255,255,255,0.08)", zIndex: 10 }}>
        <div style={{ width: "100%", background: "#C8102E", height: `${((current + 1) / SLIDES.length) * 100}%`, transition: "height 0.4s ease" }} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px 0 48px",
        }}
      >
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            maxWidth: 700,
          }}
        >
          {/* Tag */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
            <span style={{ color: "#C8102E", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "'Open Sans', sans-serif" }}>
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 36,
              whiteSpace: "pre-line",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {slide.title}
          </h1>

          {/* CTA */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary" onClick={() => handleNav(slide)}>
              {slide.cta} →
            </Button>
            <Button variant="outline-light" onClick={() => handleNav({ href: "#contato" })}>
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Slide bullets */}
        <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 10, zIndex: 20 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: 6,
                height: i === current ? 32 : 6,
                borderRadius: 3,
                background: i === current ? "#C8102E" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "height 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Arrow navigation */}
      {(["prev", "next"] as const).map((dir) => (
        <button
          key={dir}
          onClick={dir === "prev" ? prev : next}
          style={{
            position: "absolute",
            bottom: 40,
            [dir === "prev" ? "right" : "right"]: dir === "prev" ? 80 : 32,
            zIndex: 20,
            background: dir === "prev" ? "rgba(255,255,255,0.1)" : "#C8102E",
            border: "none",
            width: 44,
            height: 44,
            borderRadius: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = dir === "next" ? "#a50d24" : "rgba(255,255,255,0.2)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = dir === "next" ? "#C8102E" : "rgba(255,255,255,0.1)"; }}
        >
          {dir === "prev" ? "‹" : "›"}
        </button>
      ))}

      {/* Progress bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.1)", zIndex: 20 }}>
        <div style={{ height: "100%", background: "#C8102E", width: `${progress}%`, transition: "width 0.05s linear" }} />
      </div>
    </section>
  );
}