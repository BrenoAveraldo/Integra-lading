import { useNavigation } from "../NavigationContext";
import { useDocumentHead } from "../hooks/useDocumentHead";
import { HOME_SEO } from "../../data/seo";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { VehicleShowcase } from "../components/VehicleShowcase";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { CategoriesGrid } from "../components/CategoriesGrid";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { StatsBar } from "../components/shared/StatsBar";

// Números institucionais de referência — troque pelos dados reais da Integra
// (anos de atuação, veículos entregues, municípios/clientes atendidos, marcas/linhas).
const HOME_STATS = [
  { value: 20, suffix: "+", label: "Anos de mercado" },
  { value: 4, label: "Linhas de veículos Agrale" },
  { value: 500, suffix: "+", label: "Veículos entregues" },
  { value: 100, suffix: "%", label: "Concessionária autorizada" },
];

export function HomePage() {
  const { activeTab } = useNavigation();
  useDocumentHead(HOME_SEO.title, HOME_SEO.description);

  return (
    <>
      {/* Aba Início: Hero + ponte para o catálogo + números + serviços + prova social */}
      {activeTab === "inicio" && (
        <>
          <HeroSection />
          <CategoriesGrid />
          <TestimonialsSection />
          <ServicesSection />
          
        </>
      )}

      {/* Aba Sobre — offset para compensar o header fixo, já que não há mais o Hero acima */}
      {activeTab === "sobre" && (
        <div>
          <AboutSection />
        </div>
      )}

      {/* Aba Veículos — mostra a vitrine com acesso rápido; o catálogo completo
          vive nas páginas /:categoria, /:categoria/:subcategoria e /veiculo/:slug */}
      {activeTab === "veiculos" && (
        <div>
          <VehicleShowcase />
        </div>
      )}

      {/* Aba Contato */}
      {activeTab === "contato" && (
        <div>
          <ContactSection />
        </div>
      )}
    </>
  );
}