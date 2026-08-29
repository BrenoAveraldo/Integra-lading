import { useState, useEffect } from "react";

/**
 * Retorna true quando a largura da tela está abaixo do breakpoint (768px por
 * padrão). Usado para decidir o que renderizar (menu desktop vs. hambúrguer)
 * via JavaScript puro, em vez de depender de classes responsivas do Tailwind
 * combinadas com estilos inline — essa mistura causou um bug real no Navbar
 * (um `style={{ display: "flex" }}` inline sobrepunha silenciosamente a
 * classe `hidden` do Tailwind, já que estilo inline sempre tem prioridade
 * sobre classes de CSS, não importa a media query).
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}