import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

export type TabId = "inicio" | "veiculos" | "sobre" | "contato";

// Mapeia as âncoras antigas (#sobre, #veiculos, etc.) para a nova navegação por abas.
// "#servicos" continua dentro da aba "inicio" (a seção de Serviços faz parte da Home),
// então navegar para ela apenas troca para a aba "inicio" e rola até a seção.
const ANCHOR_MAP: Record<string, { tab: TabId; scrollToId?: string }> = {
  "#inicio": { tab: "inicio" },
  "#veiculos": { tab: "veiculos" },
  "#sobre": { tab: "sobre" },
  "#servicos": { tab: "inicio", scrollToId: "servicos" },
  "#contato": { tab: "contato" },
};

interface NavigationContextValue {
  activeTab: TabId;
  navigateTo: (tab: TabId, scrollToId?: string) => void;
  navigateToHref: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>("inicio");
  const pendingScrollId = useRef<string | null>(null);

  const navigateTo = (tab: TabId, scrollToId?: string) => {
    pendingScrollId.current = scrollToId ?? null;
    setActiveTab(tab);

    if (scrollToId) {
      // Se já estamos na aba certa, apenas rola até a seção.
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navigateToHref = (href: string) => {
    const target = ANCHOR_MAP[href];
    if (target) {
      navigateTo(target.tab, target.scrollToId);
    }
  };

  // Após trocar de aba (e o novo conteúdo renderizar), rola até a âncora pendente.
  useEffect(() => {
    if (pendingScrollId.current) {
      const id = pendingScrollId.current;
      pendingScrollId.current = null;
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [activeTab]);

  return (
    <NavigationContext.Provider value={{ activeTab, navigateTo, navigateToHref }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation deve ser usado dentro de um NavigationProvider");
  return ctx;
}
