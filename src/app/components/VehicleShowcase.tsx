import { useState } from "react";
import { Link } from "react-router";
import truckImg from "../../imports/images/caminhao/caminhao hero.png";
import truckCard from "../../imports/images/caminhao/CAMINH_O.png";
import c1Img from "../../imports/images/caminhao/agarale8700-card-pequeno.jpeg";
import chassiImg from "../../imports/images/onibus/CHASSI-PARA-ONIBUS.png";
import busImg from "../../imports/images/onibus/Onibus hero.png";
import tratorImg from "../../imports/images/trator/Trator hero.png";
import marruaImg from "../../imports/images/marrua/MARRUA HERO.png";
import VIDEOCAMINAO from "../../imports/videos/VIDEO-AGRALE-CAMINAO.mp4";
import VIDEOCHASSI from "../../imports/videos/VIDEO-AGRALE-CHASSIS.mp4";
import VIDEOTRATOR from "../../imports/videos/VIDEO-AGRALE-TRATOR.mp4";
import VIDEOMARRUA from "../../imports/videos/VIDEO-AGRALE-MARRUA.mp4";

type Category = "caminhoes" | "Onibus" | "tratores" | "marrua";

interface VehicleCard {
  name: string;
  subtitle: string;
  image: string;
  features: string[];
}

// Mapeia os ids usados nesta vitrine para os slugs reais das rotas do
// catálogo (/caminhoes, /onibus, /tratores, /marrua) e de cada subcategoria.
const CATEGORY_SLUG: Record<Category, string> = {
  caminhoes: "caminhoes",
  Onibus: "onibus",
  tratores: "tratores",
  marrua: "marrua",
};

const SUBCATEGORY_SLUG: Record<Category, Record<string, string>> = {
  caminhoes: { Leves: "leves", Medios: "medios", Semipesados: "semipesados" },
  Onibus: { Microbus: "microbus", Midibus: "midibus", Motorhome: "motorhome" },
  tratores: { "Agrícolas": "agricolas", Industriais: "industriais" },
  marrua: { Civil: "civil", "Defesa e Segurança": "defesa-e-seguranca" },
};

const CATEGORIES: { id: Category; label: string; sub: string }[] = [
  { id: "caminhoes", label: "Caminhões", sub: "Leves · Médios · Semipesados" },
  { id: "Onibus", label: "Ônibus", sub: "Microbus · Midibus · Motorhome" },
  { id: "tratores", label: "Tratores", sub: "Agrícolas · Industriais" },
  { id: "marrua", label: "Utilitários Marruá", sub: "Civil · Defesa · Segurança" },
];

const VEHICLES: Record<Category, { hero: { video: string; tag: string; title: string; desc: string }; cards: VehicleCard[] }> = {
  caminhoes: {
    hero: {
      video: VIDEOCAMINAO,
      tag: "Caminhões Agrale",
      title: "Força e robustez\npara qualquer trabalho.",
      desc: "Dos centros urbanos às aplicações mais exigentes, os caminhões Agrale oferecem excelente capacidade de carga, baixo custo operacional e alta confiabilidade. Ideais para transporte urbano, distribuição de mercadorias, serviços públicos e operações rodoviárias.",
    },
    cards: [
      {
        name: "Leves",
        subtitle: "Ideais para entregas urbanas e distribuição regional",
        image: c1Img,
        features: ["Agilidade em centros urbanos", "Economia de combustível", "Baixo custo operacional", "Versatilidade para diferentes implementos"],
      },
      {
        name: "Médios",
        subtitle: "Equilíbrio entre capacidade e performance",
        image: truckCard,
        features: ["Transporte urbano e intermunicipal", "Robustez para diversas aplicações", "Conforto e eficiência operacional", "Indicados para carga e serviço"],
      },
      {
        name: "Semipesados",
        subtitle: "Alta capacidade para operações exigentes",
        image: truckImg,
        features: ["Operações de maior exigência", "Alta capacidade de carga", "Desempenho em longas jornadas", "Confiabilidade comprovada"],
      },
    ],
  },
  Onibus: {
    hero: {
      video: VIDEOCHASSI,
      tag: "Onibus Agrale",
      title: "Confie em quem é referência\nhá mais de 25 anos.",
      desc: "A Agrale é referência nacional na fabricação de chassis para ônibus e micro-ônibus, consagrada pela parceria de longa data com a Volare. Com uma gama de soluções para as mais diversas atividades em todo o território brasileiro, a Agrale desenvolve produtos que promovem economia de combustível, aliada a robustez, segurança e confiabilidade mecânica.",
    },
    cards: [
      {
        name: "Microbus",
        subtitle: "Transporte urbano, escolar e fretamento",
        image: chassiImg,
        features: ["Conforto e segurança", "Baixo custo operacional", "Fácil manutenção", "Alta confiabilidade"],
      },
      {
        name: "Midibus",
        subtitle: "Maior capacidade de passageiros",
        image: busImg,
        features: ["Operações urbanas e rodoviárias", "Robustez e eficiência", "Economia e conforto", "Excelente desempenho"],
      },
      {
        name: "Motorhome",
        subtitle: "Projetos especiais e personalizados",
        image: chassiImg,
        features: ["Estrutura robusta", "Viagens de longa distância", "Estabilidade e segurança", "Versatilidade de personalização"],
      },
    ],
  },
  tratores: {
    hero: {
      video: VIDEOTRATOR,
      tag: "Tratores Agrale",
      title: "Mais desempenho\nno dia a dia do campo.",
      desc: "Projetados para atender às mais diversas operações agrícolas, os tratores Agrale unem potência, economia, robustez e tecnologia para aumentar a produtividade no campo e muito além dele.",
    },
    cards: [
      {
        name: "Agrícolas",
        subtitle: "Força no campo para maior produtividade",
        image: tratorImg,
        features: ["Potência e robustez", "Tecnologia de ponta", "Economia de combustível", "Versatilidade de aplicações"],
      },
      {
        name: "Industriais",
        subtitle: "Movimentação eficiente em ambientes industriais",
        image: tratorImg,
        features: ["Alto desempenho", "Baixo custo de manutenção", "Economia operacional", "Confiabilidade contínua"],
      },
    ],
  },
  marrua: {
    hero: {
      video: VIDEOMARRUA,
      tag: "Agrale Marruá",
      title: "É mais que off-road,\né para todo terreno.",
      desc: "Desenvolvido para superar os mais severos desafios, o Agrale Marruá combina robustez, tração 4x4, confiabilidade e versatilidade em um veículo preparado para qualquer missão. Com desempenho comprovado nos mais diversos terrenos, atende aplicações civis, de defesa e segurança, sendo utilizado pelo Exército Brasileiro. O Marruá entrega a força e a resistência que transformam obstáculos em caminhos.",
    },
    cards: [
      {
        name: "Civil",
        subtitle: "Uso corporativo, público e operações logísticas",
        image: marruaImg,
        features: ["DNA militar adaptado ao uso civil", "Off-road e uso urbano", "Baixo custo de manutenção", "Robustez e confiabilidade"],
      },
      {
        name: "Defesa e Segurança",
        subtitle: "Missões de alta exigência operacional",
        image: marruaImg,
        features: ["Tração 4x4", "Transporte de tropas e ambulância", "Suspensão de longo curso", "Missões críticas e reconhecimento"],
      },
    ],
  },
};

export function VehicleShowcase() {
  const [active, setActive] = useState<Category>("caminhoes");
  const data = VEHICLES[active];

  return (
    <section id="veiculos" style={{ background: "#fff"}}>
      {/* Dark header with tabs */}
      <div style={{ background: "#1a1a1a", padding: "64px 24px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section title */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ display: "block", width: 36, height: 2, background: "#C8102E" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Open Sans', sans-serif" }}>PRODUTOS</span>
              <span style={{ display: "block", width: 36, height: 2, background: "#C8102E" }} />
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8, fontFamily: "'Poppins', sans-serif" }}>
              Soluções completas para diferentes necessidades
            </h2>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  flex: "1 1 180px",
                  padding: "20px 24px",
                  background: active === cat.id ? "#C8102E" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.25s",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => { if (active !== cat.id) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { if (active !== cat.id) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: "'Poppins', sans-serif", marginBottom: 4 }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: 10, color: active === cat.id ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)", fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.05em" }}>
                  {cat.sub}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div style={{ background: "#f5f5f5", borderBottom: "3px solid #C8102E" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "center", gap: 48, minHeight: 360 }}>
          <div style={{ padding: "80px 0" }}>
            {/* Agrale-style tag */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ display: "block", width: 32, height: 2, background: "#C8102E" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Open Sans', sans-serif" }}>
                {data.hero.tag}
              </span>
            </div>
            <h3 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1, whiteSpace: "pre-line", fontFamily: "'Poppins', sans-serif" }}>
              {data.hero.title}
            </h3>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: "0.9rem", maxWidth: 460, fontFamily: "'Open Sans', sans-serif" }}>
              {data.hero.desc}
            </p>
            <Link
              to={`/${CATEGORY_SLUG[active]}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 24,
                background: "#C8102E",
                color: "#fff",
                padding: "13px 26px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Ver catálogo completo ›
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "32px 0" }}>
            <video key={active} autoPlay muted loop playsInline style={{ width: "100%", maxWidth: 700, height: 340, objectFit: "cover", borderRadius: 8,}}>
              <source src={data.hero.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
