// ============================================================================
// src/data/vehicles.ts
// Fonte central de dados do catálogo (Categorias > Subcategorias > Produtos).
//
// Nomes de modelo, chassis, categorias e alguns campos de especificação
// (motor, potência, torque, PBT) foram levantados a partir do catálogo
// público da Agrale (agrale.com.br) — usado apenas como referência de
// nomenclatura e arquitetura de navegação, conforme solicitado.
//
// Campos de especificação que a Agrale não publica na página do produto
// (transmissão detalhada, dimensões completas, entre-eixos, tanque, etc.)
// foram deixados como "Consultar concessionária" — troque pelos dados reais
// da Integra Veículos / ficha técnica oficial quando disponíveis.
// ============================================================================

import { TagVariant, TAG_VARIANT_ORDER } from "../app/components/shared/Tag";

// ---- Imagens já existentes no projeto (src/imports) -----------------------
// Caminhões
import caminhaoA10000 from "../imports/images/caminhao/Agrale10000-card-pequeno.jpeg";
import caminhaoA10000galeria from "../imports/images/caminhao/Agrale-10000-galeria.jpg";
import caminhaoA10000galeria2 from "../imports/images/caminhao/Agrale-10000-galeria2.jpg";
import caminhaoA10000galeria3 from "../imports/images/caminhao/Caminhao-A10000-4X4-Militar-Galeria.jpeg";

import caminhaoLeveGenerico from "../imports/images/caminhao/agarale8700-card-pequeno.jpeg";
import caminhaoCard from "../imports/images/caminhao/CAMINH_O.png";
import caminhaoSemipesado from "../imports/images/caminhao/agarale8700-card-pequeno.jpeg";
import caminhao8700 from "../imports/images/caminhao/agarale8700-card-pequeno.jpeg";
import caminhao8700galeria from "../imports/images/caminhao/agrale-8700-galeria.jpg";
import caminhao8700galeria2 from "../imports/images/caminhao/agrale-8700-galeria2.jpg";
import caminhaoHero from "../imports/images/caminhao/caminhao hero.png";
import caminhao10004x4 from"../imports/images/caminhao/Agrale-100004x4-card-pequeno.jpeg";
import caminhao11000 from "../imports/images/caminhao/agraçe-11000-gas.jpeg";
import caminhaoEXT from "../imports/images/caminhao/ext-4x4-card-pequeno.jpeg";
import caminhaoEXTgaleria from "../imports/images/caminhao/Caminhão-EXT-gaelria.jpg";



// Ônibus / Chassis
import chassiOnibus from "../imports/images/onibus/CHASSI-PARA-ONIBUS.png";
import chassiMicrobus from "../imports/images/onibus/CHASSIS-MICROBUS.png";
import chassiMidibus from "../imports/images/onibus/CHASSIS-MIDBUS.png";
import chassiMotorhome from "../imports/images/onibus/CHASSIS-MOTORHOME.png";
import microbusMA92 from "../imports/images/onibus/MICROBUS - MA9.2.png";
import microbusMA100 from "../imports/images/onibus/MICROBUS MA 10.0.png";
import midibusMA170 from "../imports/images/onibus/MIDBUS 17.0.png";
import motorhomeMA110 from "../imports/images/onibus/MOTORHOME MA11.0.png";
import onibusHero from "../imports/images/onibus/Onibus hero.png";

// Tratores
import Principal4125 from "../imports/images/trator/TRATOR-4125-2.png";
import trator4125 from "../imports/images/trator/4125.jpeg";
import trator4125Cargo from "../imports/images/trator/TRATOR AGRICOLA 4125 CARGO.png";
import trator4125Coletor from "../imports/images/trator/TRATOR AGRICOLA 4125 COLETOR.png";
import trator4233 from "../imports/images/trator/TRATOR AGRICOLA 4233.png";
import trator525 from "../imports/images/trator/TRATOR AGRICOLA 525.png";
import trator540TX from "../imports/images/trator/TRATOR AGRICOLA 540 TX.png";
import trator575Compact from "../imports/images/trator/TRATOR AGRICOLA 575 COMPACT.png";
import trator575Super from "../imports/images/trator/TRATOR AGRICOLA 575 SUPER.png";
import trator5105 from "../imports/images/trator/TRATOR AGRICOLA 5105.png";
import trator6185 from "../imports/images/trator/TRATOR AGRICOLA 6185.png";
import trator7215 from "../imports/images/trator/TRATOR AGRICOLA 7215.png";
import tratorIndustrial from "../imports/images/trator/trator agricola.jpeg";
import tratorHero from "../imports/images/trator/Trator hero.png";
import tratoracricola from "../imports/images/trator/TRATOR-AGRÍCOLA.png"

// Marruá
import marruaAM200MO from "../imports/images/marrua/MARRUA CIVIL  AM200 MO.png";
import marruaAM200MOEscolar from "../imports/images/marrua/MARRUA CIVIL AM200 MO ESCOLAR.png";
import marruaAM250Dupla from "../imports/images/marrua/MARRUA CIVIL  AM250 CABINE DUPLA.png";
import marruaAM250Simples from "../imports/images/marrua/MARRUA CIVIL  AM250 CABINE SIMPLES.png";
import marruaAM11Reconhecimento from "../imports/images/marrua/MARRUA DEFESA E SEGURANCA AM11 RECONHECIMENTO.png";
import marruaAM21VTNE from "../imports/images/marrua/MARRUA DEFESA E SEGURANCA AM21 VTNE 3-4 TON.png";
import marruaAM23Chassi from "../imports/images/marrua/MARRUA DEFESA E SEGURANCA AM23 CHASSI CABINE.png";
import marruaAM23VTNE from "../imports/images/marrua/MARRUA DEFESA E SEGURANCA AM23 VTNE 3-4 TON.png";
import marruaAM31 from "../imports/images/marrua/MARRUA DEFESA E SEGURANCA AM31.png";
import marruaCivilGenerico from "../imports/images/marrua/MARRUA-CIVIL.png";
import marruaHero from "../imports/images/marrua/MARRUA HERO.png";

// ---- Tipos ------------------------------------------------------------------

export type CategorySlug = "caminhoes" | "onibus" | "tratores" | "marrua";

export interface SubcategoryDef {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
}

export interface CategoryDef {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: SubcategoryDef[];
}

export interface Vehicle {
  id: string;
  category: CategorySlug;
  subcategory: string; // slug da subcategoria
  name: string;
  slug: string;
  tagline: string;
  image: string;
  image2: string;
  datasheetUrl?: string;
  dimensionsUrl?: string;
  gallery?: string[];
  description: string;
  specifications: Record<string, string>;
  highlights: string[];
}

// ---- Categorias e subcategorias ---------------------------------------------

export const CATEGORIES: CategoryDef[] = [
  {
    slug: "caminhoes",
    name: "Caminhões",
    tagline: "Força e robustez para qualquer trabalho.",
    description:
      "Dos centros urbanos às aplicações mais exigentes, os caminhões Agrale oferecem excelente capacidade de carga, baixo custo operacional e alta confiabilidade. Ideais para transporte urbano, distribuição de mercadorias, serviços públicos e operações rodoviárias.",
    heroImage: caminhaoHero,
    subcategories: [
      { slug: "leves", name: "Leves", shortDescription: "Agilidade e economia para entregas urbanas e distribuição regional", image: caminhaoA10000 },
      { slug: "medios", name: "Médios", shortDescription: "Equilíbrio entre capacidade de carga e performance operacional", image: caminhaoCard },
      { slug: "semipesados", name: "Semipesados", shortDescription: "Alta capacidade de carga para operações mais exigentes", image: caminhaoSemipesado },
    ],
  },
  {
    slug: "onibus",
    name: "Ônibus",
    tagline: "Confie em quem é referência há mais de 25 anos.",
    description:
      "A Agrale é referência nacional na fabricação de chassis para ônibus e micro-ônibus, consagrada pela parceria de longa data com a Volare. Soluções para as mais diversas operações de transporte de passageiros em todo o Brasil, aliando economia, robustez e confiabilidade mecânica.",
    heroImage: onibusHero,
    subcategories: [
      { slug: "microbus", name: "Microbus", shortDescription: "Transporte urbano, escolar e fretamento", image: chassiMicrobus },
      { slug: "midibus", name: "Midibus", shortDescription: "Maior capacidade de passageiros em porte médio", image: chassiMidibus },
      { slug: "motorhome", name: "Motorhome", shortDescription: "Chassi robusto para projetos especiais e personalizados", image: chassiMotorhome },
    ],
  },
  {
    slug: "tratores",
    name: "Tratores",
    tagline: "Mais desempenho no dia a dia do campo.",
    description:
      "Projetados para atender às mais diversas operações agrícolas e industriais, os tratores Agrale unem potência, economia, robustez e tecnologia para aumentar a produtividade no campo e muito além dele.",
    heroImage: tratorHero,
    subcategories: [
      { slug: "agricolas", name: "Agrícolas", shortDescription: "Força no campo para maior produtividade", image: tratoracricola },
      { slug: "industriais", name: "Industriais", shortDescription: "Movimentação eficiente em ambientes industriais e pátios", image: tratorIndustrial },
    ],
  },
  {
    slug: "marrua",
    name: "Utilitários Marruá",
    tagline: "É mais que off-road, é para todo terreno.",
    description:
      "Desenvolvido para superar os mais severos desafios, o Agrale Marruá combina robustez, tração 4x4, confiabilidade e versatilidade. Com desempenho comprovado nos mais diversos terrenos, atende aplicações civis, de defesa e segurança, sendo utilizado inclusive pelo Exército Brasileiro.",
    heroImage: marruaHero,
    subcategories: [
      { slug: "civil", name: "Civil", shortDescription: "Uso corporativo, público e operações logísticas", image: marruaCivilGenerico },
      { slug: "defesa-e-seguranca", name: "Defesa e Segurança", shortDescription: "Missões de alta exigência operacional", image: marruaAM31 },
    ],
  },
];

export function getCategory(slug: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string): SubcategoryDef | undefined {
  return getCategory(categorySlug)?.subcategories.find((s) => s.slug === subSlug);
}

// Cor do selo (Tag) de cada subcategoria — decidida automaticamente pela
// posição dela dentro da categoria (1ª = red, 2ª = dark, 3ª = gray), pra não
// precisar cadastrar cor manualmente em cada entrada de subcategoria.
export function getSubcategoryVariant(categorySlug: string, subSlug: string): TagVariant {
  const category = getCategory(categorySlug);
  const idx = category?.subcategories.findIndex((s) => s.slug === subSlug) ?? -1;
  return TAG_VARIANT_ORDER[idx] ?? "red";
}

// ---- Produtos -----------------------------------------------------------------

const CONSULTAR = "Consultar concessionária";

export const VEHICLES: Vehicle[] = [
  // ============================== CAMINHÕES ==============================
  {
    id: "caminhao-a-8700",
    category: "caminhoes",
    subcategory: "leves",
    name: "Agrale A 8.700",
    slug: "agrale-a-8700",
    tagline: "Agilidade urbana com baixo custo operacional",
    image: caminhao8700,
    image2: caminhao8700,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-8-700-atualizado-manual.pdf",
    dimensionsUrl: "/dimensions/Dimensoes Caminhao A8700.jpg",
    gallery: [caminhao8700galeria2, caminhao8700galeria],
    description:
      "O Agrale A 8.700 é a escolha ideal para entregas urbanas e distribuição regional, unindo agilidade em centros urbanos, economia de combustível e versatilidade para diferentes tipos de implemento.",
    specifications: {
      "Motorização": "CUMMINS F3.8",
      "Potência": "175 Cv",
      "Torque": "600 Nm / 1.100 a 1.800 rpm",
      "Peso Bruto Total (PBT)": "8.700 kg",
      "Capacidade Máxima de tração": "11.000 Kg",
      "Tanque de combustível": "150 L"
    },
    highlights: [
      "Agilidade em centros urbanos",
      "Economia de combustível",
      "Baixo custo operacional",
      "Completo de série",
    ],
  },
{
    id: "caminhao-a-10000",
    category: "caminhoes",
    subcategory: "leves",
    name: "Agrale A 10.000",
    slug: "agrale-a-10000",
    tagline: "Robustez e economia para o dia a dia da distribuição",
    image: caminhaoA10000,
    image2: caminhaoLeveGenerico,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-10-000-atualizado - fixa tecnica.pdf",
    gallery: [caminhaoA10000galeria, caminhaoA10000galeria2, caminhaoA10000galeria3],
    description:
      "Reconhecido pela economia, robustez e durabilidade, o Agrale A 10.000 tem baixo custo de manutenção e atende às necessidades de operações urbanas e de distribuição regional.",
    specifications: {
      "Motorização": "CUMMINS F3.8",
      "Potência": "175 cv",
      "Torque": "600 Nm / 1.100 a 1.800 rpm",
      "Peso Bruto Total (PBT)": "10.700 Kg",
      "Capacidade de carga": "13.000 Kg",
      "Tanque de combustível": "150 L"
    },
    highlights: [
      "Baixo custo de manutenção",
      "Economia de combustível",
      "Durabilidade comprovada",
      "Facilidade de encarroçamento",
    ],
  },
  {
    id: "caminhao-10000-4x4",
    category: "caminhoes",
    subcategory: "leves",
    name: "Agrale A 10.000 4x4",
    slug: "agrale-a-10000-4x4",
    tagline: "O único da categoria com tração integral e opção de câmbio automático, pronto para vencer qualquer terreno.",
    image: caminhao10004x4,
    image2: caminhaoLeveGenerico,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-10-000-4x4-atualizado - fixa tecnica.pdf",
    dimensionsUrl: "/dimensions/caminhao A 10.000 4x4.jpg",
    description:
      "O Agrale A 10.000 4x4 é o único caminhão da categoria com tração integral (4x2H, 4x4H e 4x4L) e opção de câmbio automático Allison, feito para enfrentar terrenos difíceis sem abrir mão de conforto e tecnologia. Com motor Cummins F 3.8 Euro VI, suspensão elevada e ângulos de entrada e saída ampliados, é a escolha certa para operações off-road, obras e áreas de difícil acesso.",
    specifications: {
      "Motorização": "CUMMINS F3.8",
      "Potência": "175 Cv",
      "Torque": "600 Nm / 1.100 a 1.800 rpm",
      "Peso Bruto Total (PBT)": "10.700 kg",
      "CMT - Capacidade máxima de tração": "13.000 kg",
      "Tanque de combustível": "150 L",
    },
    highlights: [
      "Agilidade em centros urbanos",
      "Economia de combustível",
      "Baixo custo operacional",
      "Versatilidade para diferentes implementos",
    ],
  },
  {
    id: "caminhao-a-11000-gas",
    category: "caminhoes",
    subcategory: "leves",
    name: "Agrale A 11.000 Gás",
    slug: "agrale-a-11000-gas",
    tagline: "Elo estratégico entre centros de distribuição e grandes cidades",
    image: caminhao11000,
    image2: caminhaoLeveGenerico,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-11-000-g-s-atualizado -  Fixa tecnica.pdf",
    description:
      "Elo estratégico entre os centros de distribuição e as grandes cidades, o A 11.000 Gás entrega agilidade, eficiência e sustentabilidade. Com motor movido a GNV e Biometano, reduz emissões e ruído, tornando o transporte urbano mais limpo e inteligente.",
    specifications: {
      "Motor": "WP4.6NNG200E60",
      "Potência": "195 cv (143 kW) a 2.300 rpm",
      "Torque": "642 Nm a 1.400 rpm",
      "Tanque de combustível": "330 L (Três Cilindros)",
      "Peso Bruto Total (PBT)": "10.700 kg",
      "CMT - Capacidade máxima de tração": "13.000 kg",
    },
    highlights: [
      "Motor a GNV/Biometano — menos emissões e ruído",
      "Transporte urbano mais limpo e eficiente",
      "Alta agilidade entre centros de distribuição",
      "Baixo custo operacional",
    ],
  },
  {
    id: "caminhao-ext-4x4",
    category: "caminhoes",
    subcategory: "leves",
    name: "Agrale EXT 4x4\n(Truck Home)",
    slug: "agrale-EXT",
    tagline: " une robustez, desempenho e liberdade em um só veículo",
    image: caminhaoEXT,
    image2: caminhaoLeveGenerico,
    datasheetUrl: "/datasheets/caminh-o-agrale-ext-4x4-truck-home--atualizado - fixa tecnica.pdf",
    gallery: [caminhaoEXTgaleria],
    description:
      "O Agrale A 8.700 é a escolha ideal para entregas urbanas e distribuição regional, unindo agilidade em centros urbanos, economia de combustível e versatilidade para diferentes tipos de implemento.",
    specifications: {
      "Motorização": "Cummins F3.8",
      "Potência": "129 kW (175cv) a 2500 rpm",
      "Torque": "600Nm / 1.100 - 1.800 rpm",
      "Transmissão": "Automática de 6 Marchas",
      "Peso Bruto Total (PBT)": " 10.000 Kg",
      "CMT - Capacidade Máxima de tração": "13.000 Kg",
    },
    highlights: [
      "Agilidade em centros urbanos",
      "Economia de combustível",
      "Baixo custo operacional",
      "Versatilidade para diferentes implementos",
    ],
  },
  
  {
    id: "caminhao-14000",
    category: "caminhoes",
    subcategory: "  ",
    name: "Agrale 14.000",
    slug: "agrale-14000",
    tagline: "Força e eficiência para aplicações de maior exigência",
    image: caminhaoA10000,
    image2: caminhaoLeveGenerico,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-8-700-atualizado-manual.pdf",
    gallery: [caminhaoA10000, caminhaoCard],
    description:
      "Desenvolvido para aplicações que exigem força, robustez e eficiência operacional, o Agrale 14.000 tem cabine com conforto, ergonomia e itens de segurança de série, elevando a produtividade diária do motorista.",
    specifications: {
      "Motorização": "MWM 6 cilindros turbodiesel",
      "Potência": "230 cv",
      "Torque": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "14.000 kg",
      "Capacidade de carga": CONSULTAR,
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: [
      "Cabine ergonômica com itens de segurança de série",
      "Elevada capacidade de carga",
      "Facilidade de encarroçamento",
      "Confiabilidade e baixo custo operacional",
    ],
  },
  {
    id: "caminhao-15000",
    category: "caminhoes",
    subcategory: "medios",
    name: "Agrale 15.000",
    slug: "agrale-15000",
    tagline: "Desempenho consistente para operações urbanas e intermunicipais",
    image: caminhaoCard,
    image2: caminhaoLeveGenerico,
    gallery: [caminhaoCard, caminhaoA10000],
    description:
      "Com elevada capacidade de carga e facilidade de encarroçamento, o Agrale 15.000 entrega desempenho consistente, confiabilidade e excelente custo operacional em transporte urbano e intermunicipal.",
    specifications: {
      "Motorização": "MWM 6 cilindros turbodiesel",
      "Potência": "250 cv",
      "Torque": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "15.000 kg",
      "Capacidade de carga": CONSULTAR,
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: [
      "Robustez para diversas aplicações",
      "Conforto e eficiência operacional",
      "Indicado para carga e serviço",
      "Excelente custo operacional",
    ],
  },
  {
    id: "caminhao-17000",
    category: "caminhoes",
    subcategory: "semipesados",
    name: "Agrale 17.000",
    slug: "agrale-17000",
    tagline: "Robustez e capacidade de carga elevada",
    image: caminhaoSemipesado,
    image2: caminhaoLeveGenerico,
    gallery: [caminhaoSemipesado, caminhaoHero],
    description:
      "Desenvolvido para operações de maior exigência, o Agrale 17.000 combina robustez, capacidade de carga elevada e eficiência operacional, com cabine projetada com foco em ergonomia, conforto e segurança.",
    specifications: {
      "Motorização": "MWM 6 cilindros turbodiesel",
      "Potência": "280 cv",
      "Torque": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "17.000 kg",
      "Capacidade de carga": CONSULTAR,
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: [
      "Alta capacidade de carga",
      "Ampla possibilidade de encarroçamento",
      "Alta confiabilidade mecânica",
      "Baixo custo operacional ao longo da vida útil",
    ],
  },
  {
    id: "caminhao-19000",
    category: "caminhoes",
    subcategory: "semipesados",
    name: "Agrale 19.000",
    slug: "agrale-19000",
    tagline: "O topo de linha para as operações mais exigentes",
    image: caminhaoHero,
    image2: caminhaoLeveGenerico,
    gallery: [caminhaoHero, caminhaoSemipesado],
    description:
      "O Agrale 19.000 é o modelo de maior capacidade da linha, indicado para operações rodoviárias e industriais que exigem desempenho em longas jornadas e confiabilidade comprovada.",
    specifications: {
      "Motorização": "MWM 6 cilindros turbodiesel",
      "Potência": "310 cv",
      "Torque": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "18.000 kg",
      "Capacidade de carga": CONSULTAR,
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: [
      "Desempenho em longas jornadas",
      "Confiabilidade comprovada",
      "Maior capacidade de carga da linha",
      "Durabilidade e baixo custo operacional",
    ],
  },

  // ================================ ÔNIBUS ================================
  {
    id: "chassi-ma-9-2",
    category: "onibus",
    subcategory: "microbus",
    name: "Chassi MA 9.2",
    slug: "chassi-ma-9-2",
    tagline: "Mobilidade com confiança para o transporte urbano e escolar",
    image: microbusMA92,
    image2: caminhaoLeveGenerico,
    gallery: [microbusMA92, chassiMicrobus, chassiOnibus],
    description:
      "Líder há mais de 25 anos no segmento de chassi para micro-ônibus, o MA 9.2 é referência em versatilidade de encarroçamento, economia e capacidade de adaptação a diferentes operações urbanas.",
    specifications: {
      "Motorização": "MWM 4 cilindros turbodiesel",
      "Potência": "Consultar ficha técnica",
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": CONSULTAR,
      "Capacidade de passageiros": "Até 32 lugares (conforme encarroçamento)",
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: ["Conforto e segurança", "Baixo custo operacional", "Fácil manutenção", "Alta confiabilidade"],
  },
  {
    id: "chassi-ma-10-0",
    category: "onibus",
    subcategory: "microbus",
    name: "Chassi MA 10.0",
    slug: "chassi-ma-10-0",
    tagline: "Robustez e economia para o transporte coletivo",
    image: microbusMA100,
    image2: caminhaoLeveGenerico,
    gallery: [microbusMA100, chassiMicrobus, chassiOnibus],
    description:
      "Chassi projetado exclusivamente para o transporte de pessoas, o MA 10.0 une robustez, tecnologia e economia operacional para diferentes necessidades do transporte coletivo.",
    specifications: {
      "Motorização": "MWM 4 cilindros turbodiesel",
      "Potência": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": CONSULTAR,
      "Capacidade de passageiros": "Até 34 lugares (conforme encarroçamento)",
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: ["Segurança e conforto", "Eficiência operacional", "Ampla rede de encarroçadoras", "Alta confiabilidade mecânica"],
  },
  {
    id: "chassi-ma-11-0-gas",
    category: "onibus",
    subcategory: "microbus",
    name: "Chassi MA 11.0 Gás",
    slug: "chassi-ma-11-0-gas",
    tagline: "Transporte coletivo mais limpo e econômico",
    image: chassiMicrobus,
    image2: caminhaoLeveGenerico,
    gallery: [chassiMicrobus, microbusMA92, microbusMA100],
    description:
      "Versão a gás da linha Microbus, o MA 11.0 Gás reduz custo operacional e emissões, mantendo a robustez e a confiabilidade que consagraram a Agrale no segmento de chassis para ônibus.",
    specifications: {
      "Combustível": "GNV",
      "Motorização": "MWM 4 cilindros a gás",
      "Potência": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": CONSULTAR,
      "Capacidade de passageiros": "Até 34 lugares (conforme encarroçamento)",
      "Entre-eixos": CONSULTAR,
    },
    highlights: ["Menor custo por km rodado", "Redução de emissões", "Robustez da linha Microbus", "Ampla versatilidade de encarroçamento"],
  },
  {
    id: "chassi-ma-17-0",
    category: "onibus",
    subcategory: "midibus",
    name: "Chassi MA 17.0",
    slug: "chassi-ma-17-0",
    tagline: "Segurança e eficiência para o transporte de médio porte",
    image: midibusMA170,
    image2: caminhaoLeveGenerico,
    gallery: [midibusMA170, chassiMidibus, chassiOnibus],
    description:
      "A solução Agrale para o transporte de passageiros em médio porte. Projetado para operações que exigem maior capacidade de transporte, o MA 17.0 combina robustez, conforto e eficiência em aplicações urbanas, rodoviárias ou de fretamento.",
    specifications: {
      "Motorização": "MWM 6 cilindros turbodiesel",
      "Potência": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "17.000 kg",
      "Capacidade de passageiros": "Até 45 lugares (conforme encarroçamento)",
      "Entre-eixos": CONSULTAR,
      "Tanque de combustível": CONSULTAR,
    },
    highlights: ["Maior capacidade de passageiros", "Robustez e eficiência", "Versatilidade urbana, rodoviária e fretamento", "Excelente desempenho"],
  },
  {
    id: "chassi-ma-11-0-motorhome",
    category: "onibus",
    subcategory: "motorhome",
    name: "Chassi MA 11.0 Motorhome",
    slug: "chassi-ma-11-0-motorhome",
    tagline: "O chassi que acompanha grandes jornadas",
    image: motorhomeMA110,
    image2: caminhaoLeveGenerico,
    gallery: [motorhomeMA110, chassiMotorhome, chassiOnibus],
    description:
      "Chassi exclusivo para motorhome, une resistência, segurança e tecnologia. Projetado para atender às exigências de longas viagens e diferentes tipos de terreno, garantindo a liberdade do campismo com a confiança de quem entende de mobilidade.",
    specifications: {
      "Motorização": "MWM 4 cilindros turbodiesel",
      "Potência": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso Bruto Total (PBT)": "11.000 kg",
      "Entre-eixos": "Extra longo (projetos especiais)",
      "Tanque de combustível": CONSULTAR,
    },
    highlights: ["Estrutura robusta para longas viagens", "Estabilidade e segurança", "Versatilidade de personalização", "Suporte a projetos especiais"],
  },

  // =============================== TRATORES ===============================
  {
    id: "trator-4125",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 4125",
    slug: "trator-4125",
    tagline: "Potência e robustez para o dia a dia do campo",
    image: trator4125,
    image2: Principal4125,
    gallery: [trator4125, trator4125Cargo, trator4125Coletor],
    description:
      "Trator compacto e versátil, o 4125 é indicado para pequenas e médias propriedades, unindo potência, economia de combustível e tecnologia para aumentar a produtividade no campo.",
    specifications: {
      "Motorização": "Agrale 3 cilindros",
      "Potência": "25,0 cv (18,4 kW) a 2.400 rpm",
      "Torque": "9,43 kgf.m (92 Nm) a 1.600 rpm",
      "Raio de Giro": "Menor da Categoria",
    },
    highlights: ["Potência e robustez", "Tecnologia de ponta", "Economia de combustível", "Versatilidade de aplicações"],
  },
  {
    id: "trator-4125-cargo",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 4125 Cargo",
    slug: "trator-4125-cargo",
    tagline: "Versão preparada para transporte de carga na propriedade",
    image: trator4125Cargo,
    image2: caminhaoLeveGenerico,
    gallery: [trator4125Cargo, trator4125, trator4125Coletor],
    description:
      "Versão do 4125 equipada para transporte de carga dentro da propriedade rural, mantendo a robustez e a economia que caracterizam a linha agrícola Agrale.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "125 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x2 / 4x4 (conforme versão)",
      "Capacidade de carga": CONSULTAR,
      "Peso operacional": CONSULTAR,
    },
    highlights: ["Configuração para transporte de carga", "Robustez comprovada", "Baixo custo de manutenção", "Versatilidade operacional"],
  },
  {
    id: "trator-4125-coletor",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 4125 Coletor",
    slug: "trator-4125-coletor",
    tagline: "Projetado para operações de coleta",
    image: trator4125Coletor,
    image2: caminhaoLeveGenerico,
    gallery: [trator4125Coletor, trator4125, trator4125Cargo],
    description:
      "Versão especializada do 4125 para operações de coleta, combinando a mesma robustez mecânica da linha com adaptações voltadas à aplicação específica.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "125 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x2 / 4x4 (conforme versão)",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Aplicação especializada em coleta", "Robustez da linha 4125", "Economia operacional", "Fácil manutenção"],
  },
  {
    id: "trator-4233",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 4233",
    slug: "trator-4233",
    tagline: "Equilíbrio entre potência e agilidade",
    image: trator4233,
    image2: caminhaoLeveGenerico,
    gallery: [trator4233, trator4125],
    description:
      "O Trator 4233 entrega bom equilíbrio entre potência e agilidade, indicado para operações agrícolas de médio porte que exigem versatilidade de implementos.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "75 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x2 / 4x4 (conforme versão)",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Versatilidade de implementos", "Agilidade operacional", "Baixo custo de manutenção", "Robustez Agrale"],
  },
  {
    id: "trator-525",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 525",
    slug: "trator-525",
    tagline: "Compacto e versátil para pequenas propriedades",
    image: trator525,
    image2: caminhaoLeveGenerico,
    gallery: [trator525, trator4233],
    description:
      "Compacto e ágil, o Trator 525 é indicado para pequenas propriedades, pomares e operações que exigem manobrabilidade sem abrir mão de robustez mecânica.",
    specifications: {
      "Motorização": "3 cilindros",
      "Potência": "50 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x2 / 4x4 (conforme versão)",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Compacto e ágil", "Ideal para pequenas propriedades", "Baixo custo operacional", "Fácil manutenção"],
  },
  {
    id: "trator-540-xt",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 540 XT",
    slug: "trator-540-xt",
    tagline: "Mais tecnologia para operações de precisão",
    image: trator540TX,
    image2: caminhaoLeveGenerico,
    gallery: [trator540TX, trator575Compact],
    description:
      "O 540 XT traz tecnologia embarcada e conforto para o operador, indicado para propriedades que buscam mais precisão e produtividade nas operações do dia a dia.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "54 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x2 / 4x4 (conforme versão)",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Tecnologia embarcada", "Conforto para o operador", "Produtividade no campo", "Economia de combustível"],
  },
  {
    id: "trator-575-compact",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 575 Compact",
    slug: "trator-575-compact",
    tagline: "Compacto, ágil e potente",
    image: trator575Compact,
    image2: caminhaoLeveGenerico,
    gallery: [trator575Compact, trator575Super],
    description:
      "Versão compacta da linha 575, ideal para operações em espaços reduzidos, entrelinhas de cultivo e propriedades que exigem agilidade sem perder potência.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "75 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x4",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Formato compacto", "Ideal para entrelinhas", "Potência da linha 575", "Robustez mecânica"],
  },
  {
    id: "trator-575-super",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 575 Super",
    slug: "trator-575-super",
    tagline: "Mais força para operações exigentes",
    image: trator575Super,
    image2: caminhaoLeveGenerico,
    gallery: [trator575Super, trator575Compact],
    description:
      "Versão Super da linha 575, com reforços mecânicos para operações mais exigentes, mantendo a economia e a confiabilidade que marcam a linha agrícola Agrale.",
    specifications: {
      "Motorização": "3 cilindros turbodiesel",
      "Potência": "75 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x4",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Reforço mecânico para uso intenso", "Confiabilidade contínua", "Economia de combustível", "Versatilidade de aplicações"],
  },
  {
    id: "trator-5105",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 5105",
    slug: "trator-5105",
    tagline: "Potência intermediária para produtividade no campo",
    image: trator5105,
    image2: caminhaoLeveGenerico,
    gallery: [trator5105, trator6185],
    description:
      "O Trator 5105 oferece potência intermediária, ideal para operações de preparo de solo, plantio e tração de implementos de médio porte.",
    specifications: {
      "Motorização": "4 cilindros turbodiesel",
      "Potência": "105 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x4",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Potência intermediária versátil", "Tração 4x4", "Tecnologia de ponta", "Alta produtividade"],
  },
  {
    id: "trator-6185",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 6185",
    slug: "trator-6185",
    tagline: "Alta potência para grandes operações",
    image: trator6185,
    image2: caminhaoLeveGenerico,
    gallery: [trator6185, trator7215],
    description:
      "Com alta potência, o Trator 6185 é indicado para grandes propriedades e operações que demandam tração de implementos pesados com eficiência.",
    specifications: {
      "Motorização": "4 cilindros turbodiesel",
      "Potência": "185 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x4",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Alta potência", "Tecnologia de ponta", "Economia de combustível", "Robustez para grandes operações"],
  },
  {
    id: "trator-7215",
    category: "tratores",
    subcategory: "agricolas",
    name: "Trator 7215",
    slug: "trator-7215",
    tagline: "O topo de linha da Agrale para grandes propriedades",
    image: trator7215,
    image2: caminhaoLeveGenerico,
    gallery: [trator7215, trator6185],
    description:
      "Modelo topo de linha da Agrale, o 7215 entrega máxima potência e tecnologia para grandes propriedades, com foco em produtividade e economia operacional.",
    specifications: {
      "Motorização": "6 cilindros turbodiesel",
      "Potência": "215 cv",
      "Transmissão": CONSULTAR,
      "Tração": "4x4",
      "Peso operacional": CONSULTAR,
      "Capacidade do tanque": CONSULTAR,
    },
    highlights: ["Topo de linha Agrale", "Máxima produtividade", "Tecnologia avançada", "Economia operacional em grande escala"],
  },
  {
    id: "trator-rebocador-4100",
    category: "tratores",
    subcategory: "industriais",
    name: "Trator Rebocador 4100 Industrial",
    slug: "trator-rebocador-4100",
    tagline: "Versatilidade para a movimentação de cargas",
    image: tratorIndustrial,
    image2: caminhaoLeveGenerico,
    gallery: [tratorIndustrial, tratorHero],
    description:
      "A linha de tratores industriais Agrale oferece força, eficiência e confiabilidade para a movimentação de cargas em ambientes industriais, logísticos e operações de pátio.",
    specifications: {
      "Motorização": "Turbodiesel",
      "Potência": CONSULTAR,
      "Capacidade de reboque": CONSULTAR,
      "Transmissão": CONSULTAR,
      "Peso operacional": CONSULTAR,
    },
    highlights: ["Alto desempenho", "Baixo custo de manutenção", "Economia operacional", "Confiabilidade contínua"],
  },
  {
    id: "trator-rebocador-4100-gas",
    category: "tratores",
    subcategory: "industriais",
    name: "Trator Rebocador 4100 Gás",
    slug: "trator-rebocador-4100-gas",
    tagline: "Movimentação de cargas com menor emissão",
    image: tratorHero,
    image2: caminhaoLeveGenerico,
    gallery: [tratorHero, tratorIndustrial],
    description:
      "Versão a gás do Rebocador 4100, indicada para operações industriais e logísticas internas que buscam reduzir emissões sem abrir mão de força e confiabilidade.",
    specifications: {
      "Combustível": "GNV",
      "Motorização": "A gás",
      "Potência": CONSULTAR,
      "Capacidade de reboque": CONSULTAR,
      "Transmissão": CONSULTAR,
    },
    highlights: ["Menor emissão de poluentes", "Ideal para uso interno/industrial", "Robustez Agrale", "Baixo custo operacional"],
  },

  // ================================ MARRUÁ ================================
  {
    id: "marrua-am200-mo",
    category: "marrua",
    subcategory: "civil",
    name: "Marruá AM200 MO",
    slug: "marrua-am200-mo",
    tagline: "DNA militar adaptado para o uso civil",
    image: marruaAM200MO,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM200MO, marruaCivilGenerico, marruaAM200MOEscolar],
    description:
      "O Marruá AM200 MO leva a robustez e a confiabilidade do DNA militar Agrale para operações civis, off-road e uso urbano, com baixo custo de manutenção.",
    specifications: {
      "Motorização": "Cummins ISF turbodiesel",
      "Tração": "4x4",
      "Peso": "≈ 2.460 kg",
      "Comprimento": "≈ 3,8 m",
      "Largura": "≈ 1,92 m",
      "Altura": "≈ 1,95 m",
      "Capacidade": "4 a 6 ocupantes",
      "Velocidade máxima": "≈ 128 km/h",
      "Autonomia": "≈ 1.000 km",
    },
    highlights: ["DNA militar adaptado ao uso civil", "Off-road e uso urbano", "Baixo custo de manutenção", "Robustez e confiabilidade"],
  },
  {
    id: "marrua-am200-mo-escolar",
    category: "marrua",
    subcategory: "civil",
    name: "Marruá AM200 MO Escolar",
    slug: "marrua-am200-mo-escolar",
    tagline: "Transporte escolar robusto para qualquer terreno",
    image: marruaAM200MOEscolar,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM200MOEscolar, marruaAM200MO, marruaCivilGenerico],
    description:
      "Versão adaptada para transporte escolar em áreas rurais e de difícil acesso, unindo a robustez 4x4 do Marruá à segurança necessária para o transporte de estudantes.",
    specifications: {
      "Motorização": "Cummins ISF turbodiesel",
      "Tração": "4x4",
      "Capacidade": "Conforme configuração escolar",
      "Peso": "≈ 2.460 kg",
      "Comprimento": "≈ 3,8 m",
      "Aplicação": "Transporte escolar rural",
    },
    highlights: ["Acesso a áreas rurais de difícil chegada", "Robustez 4x4", "Segurança para transporte de estudantes", "Baixo custo de manutenção"],
  },
  {
    id: "marrua-am250-cabine-dupla",
    category: "marrua",
    subcategory: "civil",
    name: "Marruá AM250 Cabine Dupla",
    slug: "marrua-am250-cabine-dupla",
    tagline: "Versatilidade para operações civis e corporativas",
    image: marruaAM250Dupla,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM250Dupla, marruaAM250Simples, marruaCivilGenerico],
    description:
      "Com cabine dupla, o AM250 é indicado para operações que exigem transporte de equipe e carga simultaneamente, mantendo a tração 4x4 e a robustez da linha Marruá.",
    specifications: {
      "Motorização": "Cummins F38 turbodiesel",
      "Potência": "≈ 175 cv",
      "Tração": "4x4",
      "Transmissão": "Manual 5 marchas / Automática 6 marchas (conforme versão)",
      "Capacidade": "5 ocupantes",
      "Suspensão": "Independente 4x4",
    },
    highlights: ["Cabine dupla para equipe e carga", "Tração 4x4", "Suspensão de longo curso", "Robustez militar adaptada ao civil"],
  },
  {
    id: "marrua-am250-cabine-simples",
    category: "marrua",
    subcategory: "civil",
    name: "Marruá AM250 Cabine Simples",
    slug: "marrua-am250-cabine-simples",
    tagline: "Foco em capacidade de carga",
    image: marruaAM250Simples,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM250Simples, marruaAM250Dupla, marruaCivilGenerico],
    description:
      "Versão cabine simples do AM250, otimizada para maior capacidade de carga útil, mantendo o desempenho 4x4 característico da linha Marruá.",
    specifications: {
      "Motorização": "Cummins F38 turbodiesel",
      "Potência": "≈ 175 cv",
      "Tração": "4x4",
      "Transmissão": "Manual 5 marchas / Automática 6 marchas (conforme versão)",
      "Capacidade": "2 a 3 ocupantes + carga",
      "Suspensão": "Independente 4x4",
    },
    highlights: ["Maior capacidade de carga útil", "Tração 4x4", "Robustez e confiabilidade", "Baixo custo de manutenção"],
  },
  {
    id: "marrua-am11-reconhecimento",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "Marruá AM11 Reconhecimento",
    slug: "marrua-am11-reconhecimento",
    tagline: "Missões críticas e reconhecimento em qualquer terreno",
    image: marruaAM11Reconhecimento,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM11Reconhecimento, marruaAM31, marruaAM21VTNE],
    description:
      "Desenvolvido para missões de reconhecimento, o AM11 combina tração 4x4, suspensão de longo curso e confiabilidade mecânica para operar em condições operacionais críticas.",
    specifications: {
      "Motorização": "MWM turbodiesel 4 cilindros",
      "Potência": "≈ 132 cv (98 kW)",
      "Tração": "4x4",
      "Suspensão": "Independente de longo curso",
      "Aplicação": "Reconhecimento e missões táticas",
      "Velocidade máxima": "≈ 128 km/h",
    },
    highlights: ["Tração 4x4", "Suspensão de longo curso", "Missões de reconhecimento", "Robustez militar"],
  },
  {
    id: "marrua-am21-vtne",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "Marruá AM21 VTNE 3/4 Ton",
    slug: "marrua-am21-vtne-3-4-ton",
    tagline: "Transporte de tropas e cargas táticas",
    image: marruaAM21VTNE,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM21VTNE, marruaAM23VTNE, marruaAM11Reconhecimento],
    description:
      "Veículo de Transporte Não Especializado (VTNE) com capacidade de 3/4 de tonelada, indicado para transporte de tropas, equipamentos e apoio logístico em operações militares.",
    specifications: {
      "Motorização": "Cummins turbodiesel",
      "Tração": "4x4",
      "Capacidade de carga": "3/4 de tonelada",
      "Suspensão": "Independente de longo curso",
      "Aplicação": "Transporte de tropas e ambulância",
    },
    highlights: ["Transporte de tropas e ambulância", "Tração 4x4", "Suspensão de longo curso", "Missões críticas"],
  },
  {
    id: "marrua-am23-chassi-cabine",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "Marruá AM23 Chassi Cabine",
    slug: "marrua-am23-chassi-cabine",
    tagline: "Plataforma versátil para carrocerias especiais",
    image: marruaAM23Chassi,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM23Chassi, marruaAM23VTNE, marruaAM21VTNE],
    description:
      "Configuração chassi-cabine do AM23, pensada para receber carrocerias e implementos especiais em aplicações de defesa e segurança pública.",
    specifications: {
      "Motorização": "Cummins turbodiesel",
      "Tração": "4x4",
      "Configuração": "Chassi-cabine",
      "Suspensão": "Independente de longo curso",
      "Aplicação": "Carrocerias e implementos especiais",
    },
    highlights: ["Plataforma versátil chassi-cabine", "Tração 4x4", "Robustez para uso intensivo", "Suporte a implementos especiais"],
  },
  {
    id: "marrua-am23-vtne",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "Marruá AM23 VTNE 3/4 Ton",
    slug: "marrua-am23-vtne-3-4-ton",
    tagline: "Nova geração do VTNE 3/4 de tonelada",
    image: marruaAM23VTNE,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM23VTNE, marruaAM21VTNE, marruaAM23Chassi],
    description:
      "Evolução da linha VTNE, o AM23 mantém a capacidade de 3/4 de tonelada com atualizações mecânicas que reforçam confiabilidade e desempenho em operações táticas.",
    specifications: {
      "Motorização": "Cummins turbodiesel",
      "Tração": "4x4",
      "Capacidade de carga": "3/4 de tonelada",
      "Suspensão": "Independente de longo curso",
      "Aplicação": "Transporte tático e apoio logístico",
    },
    highlights: ["Nova geração VTNE", "Tração 4x4", "Confiabilidade reforçada", "Missões táticas e reconhecimento"],
  },
  {
    id: "marrua-am31",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "Marruá AM31",
    slug: "marrua-am31",
    tagline: "Máxima capacidade operacional da linha Defesa e Segurança",
    image: marruaAM31,
    image2: caminhaoLeveGenerico,
    gallery: [marruaAM31, marruaAM11Reconhecimento, marruaAM23VTNE],
    description:
      "O AM31 é o modelo de maior capacidade da linha Defesa e Segurança, projetado para as missões mais exigentes com robustez estrutural e desempenho em qualquer terreno.",
    specifications: {
      "Motorização": "Cummins turbodiesel",
      "Tração": "4x4",
      "Suspensão": "Independente de longo curso",
      "Aplicação": "Missões de alta exigência operacional",
      "Velocidade máxima": "≈ 128 km/h",
    },
    highlights: ["Máxima capacidade operacional", "Robustez estrutural", "Desempenho em qualquer terreno", "Confiabilidade em missões críticas"],
  },
];

// ---- Helpers -------------------------------------------------------------

export function getVehiclesByCategory(categorySlug: string): Vehicle[] {
  return VEHICLES.filter((v) => v.category === categorySlug);
}

export function getVehiclesBySubcategory(categorySlug: string, subSlug: string): Vehicle[] {
  return VEHICLES.filter((v) => v.category === categorySlug && v.subcategory === subSlug);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug);
}