import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

const RED = "#C8102E";

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const hasMultiple = images.length > 1;
  const isFirstRender = useRef(true);

  const goTo = useCallback(
    (i: number) => {
      if (images.length === 0) return;
      setActive(((i % images.length) + images.length) % images.length);
    },
    [images.length]
  );
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Mantém a miniatura ativa sempre visível na tira, mesmo com muitas fotos.
  // Só faz isso quando o usuário TROCA de foto (não na primeira renderização
  // da página) — sem esse cuidado, a página inteira rolava sozinha até a
  // galeria assim que a rota abria, já que scrollIntoView também dispara
  // no efeito inicial.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    thumbRefs.current[active]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  // Navegação por teclado (setas + Esc) quando o lightbox está aberto.
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goPrev() : goNext();
    }
    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <div style={{ background: "#f5f5f5", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <span style={{ display: "block", width: 32, height: 2, background: RED }} />
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

        {/* Imagem principal */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            background: "#fff",
            border: "1px solid #eee",
            aspectRatio: "16 / 9",
            maxHeight: 460,
            marginBottom: 16,
            overflow: "hidden",
            cursor: "zoom-in",
          }}
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Ampliar imagem"
          onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
        >
          <img
            key={active}
            src={images[active]}
            alt={`${alt} - imagem ${active + 1}`}
            loading="eager"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              animation: "gallery-fade 0.25s ease",
            }}
          />

          {/* Dica de zoom */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              width: 34,
              height: 34,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <ZoomIn size={16} />
          </div>

          {/* Contador */}
          {hasMultiple && (
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 20,
                fontFamily: "'Open Sans', sans-serif",
                pointerEvents: "none",
              }}
            >
              {active + 1} / {images.length}
            </div>
          )}

          {/* Setas de navegação */}
          {hasMultiple && (
            <>
              <NavArrow direction="left" onClick={(e) => { e.stopPropagation(); goPrev(); }} />
              <NavArrow direction="right" onClick={(e) => { e.stopPropagation(); goNext(); }} />
            </>
          )}
        </div>

        {/* Tira de miniaturas — rola horizontalmente, funciona com qualquer quantidade de fotos */}
        {hasMultiple && (
          <div
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              paddingBottom: 4,
              scrollbarWidth: "thin",
            }}
          >
            {images.map((img, i) => (
              <button
                key={img + i}
                ref={(el) => { thumbRefs.current[i] = el; }}
                onClick={() => goTo(i)}
                aria-label={`Ver imagem ${i + 1}`}
                aria-current={i === active}
                style={{
                  flex: "0 0 auto",
                  background: "#fff",
                  border: i === active ? `2px solid ${RED}` : "1px solid #ddd",
                  opacity: i === active ? 1 : 0.65,
                  padding: 6,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 84,
                  height: 84,
                  transition: "opacity 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = i === active ? "1" : "0.65")}
              >
                <img
                  src={img}
                  alt={`${alt} - miniatura ${i + 1}`}
                  loading="lazy"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox em tela cheia */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} - visualização ampliada`}
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,10,10,0.94)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            aria-label="Fechar"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#fff",
              width: 42,
              height: 42,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>

          {hasMultiple && (
            <div
              style={{
                position: "absolute",
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                fontSize: 13,
                fontFamily: "'Open Sans', sans-serif",
                background: "rgba(255,255,255,0.1)",
                padding: "6px 16px",
                borderRadius: 20,
              }}
            >
              {active + 1} / {images.length}
            </div>
          )}

          <img
            key={`lightbox-${active}`}
            src={images[active]}
            alt={`${alt} - imagem ${active + 1} ampliada`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(1100px, 92vw)",
              maxHeight: "88vh",
              objectFit: "contain",
              animation: "gallery-fade 0.25s ease",
            }}
          />

          {hasMultiple && (
            <>
              <NavArrow direction="left" large onClick={(e) => { e.stopPropagation(); goPrev(); }} />
              <NavArrow direction="right" large onClick={(e) => { e.stopPropagation(); goNext(); }} />
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes gallery-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function NavArrow({
  direction,
  onClick,
  large = false,
}: {
  direction: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
  large?: boolean;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const size = large ? 48 : 38;
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Imagem anterior" : "Próxima imagem"}
      style={{
        position: "absolute",
        top: "50%",
        [direction]: large ? 8 : 12,
        transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.5)",
        border: "none",
        color: "#fff",
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = RED)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
    >
      <Icon size={large ? 26 : 20} />
    </button>
  );
}