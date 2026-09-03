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
import caminhaoCard from "../imports/images/caminhao/CAMINH_O.png";
import caminhao8700galeria from "../imports/images/caminhao/agrale-8700-galeria.jpg";
import caminhao8700galeria2 from "../imports/images/caminhao/agrale-8700-galeria2.jpg";
import caminhaoHero from "../imports/images/caminhao/caminhao hero.png";
import caminhaoEXTgaleria from "../imports/images/caminhao/Caminhão-EXT-gaelria.jpg";
import ca8700 from "../imports/images/caminhao/CAMINHÃO AGRALE A 8.700.png";
import ca10000 from "../imports/images/caminhao/CAMINHÃO AGRALE A 10.000.png";
import ca100004x4 from "../imports/images/caminhao/CAMINHÃO AGRALE A 10.000 4x4.png";
import ca11000 from "../imports/images/caminhao/CAMINHÃO AGRALE A 11.000 GÁS.png";
import ca15000 from "../imports/images/caminhao/CAMINHÃO AGRALE A 15.000.png";
import ca18000 from "../imports/images/caminhao/CAMINHÃO AGRALE A 18.000.png";
import ca26000 from "../imports/images/caminhao/CAMINHÃO AGRALE A 26.000.png";
import caEXT4x4 from "../imports/images/caminhao/Caminhão Agrale EXT 4x4 (Truck Home).png";
import CAMINHAOCAPA from "../imports/images/caminhao/caminhao capa.png";


// Ônibus / Chassis
import chassiMicrobus from "../imports/images/onibus/CHASSIS-MICROBUS.png";
import chassiMidibus from "../imports/images/onibus/CHASSIS-MIDBUS.png";
import chassiMotorhome from "../imports/images/onibus/CHASSIS-MOTORHOME.png";
import onibusHero from "../imports/images/onibus/Onibus hero.png";
import MA100 from "../imports/images/onibus/MA 10.0.png";
import MA92 from "../imports/images/onibus/MA 9.2.png";
import MA172 from "../imports/images/onibus/MA 17.0.png";
import MA110 from "../imports/images/onibus/MA 11.0 Motorhome.png"
import MA11gas from "../imports/images/onibus/MA 11.0 Gás.png";
import MA11gasgaleria1 from "../imports/images/onibus/m11 - galeria.jpg"
import MA11gasgaleria2 from "../imports/images/onibus/m11 - galeria1.jpg"
import MA11gasgaleria3 from "../imports/images/onibus/m11 - galeria2.jpg"
import MA11gasgaleria4 from "../imports/images/onibus/m11 - galeria3.jpg"
import MA11gasgaleria from "../imports/images/onibus/m11 - galeria4.jpg"
import MA11gasgaleria5 from "../imports/images/onibus/m11 - galeria5.jpg"
import ONIBUSCAPA from "../imports/images/onibus/onibus (2).png"

// Tratores
import trator4125 from "../imports/images/trator/TRATOR-4125-2.png";
import trator4125Cargo from "../imports/images/trator/TRATOR 4125 CARGO.png";
import trator4125Coletor from "../imports/images/trator/Trator 4125 Coletor.png";
import trator4233 from "../imports/images/trator/trator 4233.png";
import trator525 from "../imports/images/trator/TRATOR 525.png";
import trator540TX from "../imports/images/trator/TRATOR 540 XT.png";
import trator575Compact from "../imports/images/trator/TRATOR 575 COMPACT.png";
import trator575Super from "../imports/images/trator/TRATOR 575 SUPER.png";
import trator5105 from "../imports/images/trator/trator 5105.png";
import trator6185 from "../imports/images/trator/TRATOR 6185.png";
import trator7215 from "../imports/images/trator/trator 7215.png";
import tratorIndustrial from "../imports/images/trator/trator-agricola.png";
import tratorHero from "../imports/images/trator/Trator hero.png";
import tratorRebocador4100 from "../imports/images/trator/TRATOR REBOCADOR 4100 INDUSTRIAL.png";
import tratorRebocador4100gas from "../imports/images/trator/TRATOR REBOCADOR 4100 Gás.png";
import trator4125galeria from "../imports/images/trator/Trator 4125 galeria 1.jpg";
import trator4125galeria2 from "../imports/images/trator/Trator 4125 galeria 2.jpg";
import trator4125galeria3 from "../imports/images/trator/Trator 4125 galeria 3.jpg";
import trator4125galeria4 from "../imports/images/trator/Trator 4125 galeria 4.jpg";
import trator4125galeria5 from "../imports/images/trator/Trator 4125 5.jpg";
import trator4125coletorgaleria from "../imports/images/trator/trator coletor.jpg";
import trator4125coletorgaleria2 from "../imports/images/trator/trator coletor 2.jpg";
import trator4125coletorgaleria3 from "../imports/images/trator/trator coletor 3.jpg";
import trator4125coletorgaleria4 from "../imports/images/trator/trator coletor 4.jpg";
import trator4233galeria from "../imports/images/trator/trator 4233 galeria.jpg";
import trator4233galeria2 from "../imports/images/trator/trator 4233 galeria 2.jpg";
import trator4233galeria3 from "../imports/images/trator/trator 4233 galeria 3.jpg";
import trator525galeria from "../imports/images/trator/trator 525 galeria.jpg";
import trator525galeria2 from "../imports/images/trator/trator 525 galeria 2.jpg";
import trator525galeria3 from "../imports/images/trator/trator 525 galeria 3.jpg";
import trator525galeria4 from "../imports/images/trator/trator 525 galeria 4.jpg";
import trator525galeria5 from "../imports/images/trator/trator 525 galeria 5.jpg";
import trator525galeria6 from "../imports/images/trator/trator 525 galeria 6.jpg";
import trator540TX_galeria from "../imports/images/trator/trator540TXgaleria.jpg";
import trator540TX_galeria2 from "../imports/images/trator/trator540TXgaleria2.jpg";
import trator575 from "../imports/images/trator/575 galeria.jpg";
import trator5752 from "../imports/images/trator/575 galeria 2.jpg";
import trator5753 from "../imports/images/trator/575 galeria 3.jpg";
import trator5754 from "../imports/images/trator/575 galeria 4.jpg";
import trator5755 from "../imports/images/trator/575 galeria 5.jpg";
import super575 from "../imports/images/trator/trator-575-super-galeria.jpg";
import super5752 from "../imports/images/trator/trator-575-super-galeria-2.jpg";
import super5753 from "../imports/images/trator/trator-575-super-galeria-3.jpg";
import super5754 from "../imports/images/trator/trator-575-super-galeria-4.jpg";
import super5755 from "../imports/images/trator/trator-575-super-galeria-5.jpg";
import traot5105 from "../imports/images/trator/trator-5105-galeria.jpg";
import traot51052 from "../imports/images/trator/trator-5105-galeria-2.jpg";
import traot51053 from "../imports/images/trator/trator-5105-galeria-3.jpg";
import traot51054 from "../imports/images/trator/trator-5105-galeria-4.jpg";
import traot51055 from "../imports/images/trator/trator-5105-galeria-5.jpg";
import traot51056 from "../imports/images/trator/trator-5105-galeria-6.jpg";
import traot51057 from "../imports/images/trator/trator-5105-galeria-7.jpg";
import trator61857 from "../imports/images/trator/TRATOR 6185 - galeria6.jpg";
import trator61852 from "../imports/images/trator/TRATOR 6185 - galeria.jpg";
import trator61853 from "../imports/images/trator/TRATOR 6185 - galeria2.jpg";
import trator61854 from "../imports/images/trator/TRATOR 6185 - galeria3.jpg";
import trator61855 from "../imports/images/trator/TRATOR 6185 - galeria4.jpg";
import trator61856 from "../imports/images/trator/TRATOR 6185 - galeria5.jpg";
import trator72155 from "../imports/images/trator/trator7215-galeria.jpg";
import trator72152 from "../imports/images/trator/trator7215-galeria2.jpg";
import trator72153 from "../imports/images/trator/trator7215-galeria3.jpg";
import trator72154 from "../imports/images/trator/trator7215-galeria4.jpg";
import TRATORCAPA from "../imports/images/trator/trator.png";


// Marruá
import marruaAM200MO from "../imports/images/marrua/AM200 MO.png";
import marruaAM200MOEscolar from "../imports/images/marrua/AM200 MO ESCOLAR.png";
import marruaAM250Dupla from "../imports/images/marrua/AM250 CABINE DUPLA.png";
import marruaAM250Simples from "../imports/images/marrua/AM250 CABINE SIMPLES.png";
import marruaAM11Reconhecimento from "../imports/images/marrua/VIATURA MILITAR.png";
import marruaAM21VTNE from "../imports/images/marrua/VIATURA MILITAR AM21.png";
import marruaAM23Chassi from "../imports/images/marrua/VIATURA MILITAR A23.png";
import marruaAM23VTNE from "../imports/images/marrua/VIATURA MILITAR A23 VTNE.png";//FALTA
import marruaAM31 from "../imports/images/marrua/VIATURA MILITAR A31.png"; //FALTA
import marruaCivilGenerico from "../imports/images/marrua/MARRUA-CIVIL.png";
import marruaHero from "../imports/images/marrua/MARRUA HERO.png";
import am200m0 from "../imports/images/marrua/marrua200m0galeria.jpg";
import am200m02 from "../imports/images/marrua/marrua200m0galeria2.jpg";
import am200escolar from "../imports/images/marrua/escolar.jpeg";
import am200escolar2 from "../imports/images/marrua/escolar 2.jpeg";
import am200escolar3 from "../imports/images/marrua/escolar 3.jpg";
import am200escolar4 from "../imports/images/marrua/escolar 4.jpg";
import am200cabinedupla from "../imports/images/marrua/cabine_dupla.jpg";
import am200cabinedupla2 from "../imports/images/marrua/cabine_dupla (2).jpg";
import am200cabinedupla3 from "../imports/images/marrua/cabine_dupla (3).jpg";
import am200cabinedupla4 from "../imports/images/marrua/cabine_dupla (4).jpg";
import am200cabinedupla5 from "../imports/images/marrua/cabine_dupla (5).jpg";
import am200cabinedupla6 from "../imports/images/marrua/cabine_dupla (6).jpg";
import am200cabinedupla7 from "../imports/images/marrua/cabine_dupla (7).jpg";
import am200cabinedupla8 from "../imports/images/marrua/cabine_dupla (8).jpg";
import am200cabinedupla9 from "../imports/images/marrua/cabine_dupla (9).png";
import am200cabinedupla10 from "../imports/images/marrua/cabine_dupla (10).jpg";
import am200cabinedupla11 from "../imports/images/marrua/cabine_dupla (11).png";
import am200cabinedupla12 from "../imports/images/marrua/cabine_dupla (12).jpg";
import am200cabinedupla13 from "../imports/images/marrua/cabine_dupla (13).jpg";
import am200cabinedupla14 from "../imports/images/marrua/cabine_dupla (14).png";
import am200cabinedupla15 from "../imports/images/marrua/cabine_dupla (15).jpg";
import am200cabinedupla16 from "../imports/images/marrua/cabine_dupla (16).jpg";
import am200cabinedupla17 from "../imports/images/marrua/cabine_dupla (17).png";
import am200cabinedupla18 from "../imports/images/marrua/cabine_dupla (18).jpg";
import am200cabinedupla19 from "../imports/images/marrua/cabine_dupla (19).jpg";
import am200cabinesimples from "../imports/images/marrua/cabine_simples.jpg";
import am200cabinesimples2 from "../imports/images/marrua/cabine_simples (2).jpg";
import am200cabinesimples3 from "../imports/images/marrua/cabine_simples (3).jpg";
import am200cabinesimples4 from "../imports/images/marrua/cabine_simples (4).jpg";
import am200cabinesimples5 from "../imports/images/marrua/cabine_simples (5).jpg";
import am200cabinesimples6 from "../imports/images/marrua/cabine_simples (6).jpg";
import am200cabinesimples7 from "../imports/images/marrua/cabine_simples (7).jpg";
import am200cabinesimples8 from "../imports/images/marrua/cabine_simples (8).jpg";
import am200cabinesimples9 from "../imports/images/marrua/cabine_simples (9).jpg";
import am200cabinesimples10 from "../imports/images/marrua/cabine_simples (10).jpg";
import AM11galeria from "../imports/images/marrua/AM11.jpg";
import AM11galeria1 from "../imports/images/marrua/AM11 (1).jpg";
import AM11galeria2 from "../imports/images/marrua/AM11 (2).jpg";
import AM11galeria3 from "../imports/images/marrua/AM11 (3).jpg";
import AM11galeria4 from "../imports/images/marrua/AM11 (4).jpg";
import AM11galeria5 from "../imports/images/marrua/AM11 (5).jpg";
import AM11galeria6 from "../imports/images/marrua/AM11 (6).jpg";
import AM11galeria7 from "../imports/images/marrua/AM11 (7).jpg";
import AM11galeria8 from "../imports/images/marrua/AM11 (8).jpg";
import AM11galeria9 from "../imports/images/marrua/AM11 (9).jpg";
import AM11galeria10 from "../imports/images/marrua/AM11 (10).jpg";
import AM11galeria11 from "../imports/images/marrua/AM11 (11).jpg";
import AM11galeria12 from "../imports/images/marrua/AM11 (12).jpg";
import AM11galeria13 from "../imports/images/marrua/AM11 (13).jpg";
import AM11galeria14 from "../imports/images/marrua/AM11 (14).jpg";
import AM11galeria15 from "../imports/images/marrua/AM11 (15).jpg";
import AM11galeria16 from "../imports/images/marrua/AM11 (16).jpg";
import AM11galeria17 from "../imports/images/marrua/AM11 (17).jpg";
import AM11galeria18 from "../imports/images/marrua/AM11 (18).jpg";
import AM21galeria from "../imports/images/marrua/AM21 (1).jpg";
import AM21galeria1 from "../imports/images/marrua/AM21 (2).jpg";
import AM21galeria2 from "../imports/images/marrua/AM21 (3).jpg";
import AM21galeria3 from "../imports/images/marrua/AM21 (4).jpg";
import AM21galeria4 from "../imports/images/marrua/AM21 (5).jpg";
import AM21galeria5 from "../imports/images/marrua/AM21 (6).jpg";
import AM21galeria6 from "../imports/images/marrua/AM21 (7).jpg";
import AM21galeria7 from "../imports/images/marrua/AM21 (8).jpg";
import AM21galeria8 from "../imports/images/marrua/AM21 (9).jpg";
import AM21galeria9 from "../imports/images/marrua/AM21 (10).jpg";
import AM21galeria10 from "../imports/images/marrua/AM21 (11).jpg";
import AM21galeria11 from "../imports/images/marrua/AM21 (12).jpg";
import AM21galeria12 from "../imports/images/marrua/AM21 (13).jpg";
import AM21galeria13 from "../imports/images/marrua/AM21 (14).jpg";
import AM21galeria14 from "../imports/images/marrua/AM21 (15).jpg";
import AM21galeria15 from "../imports/images/marrua/AM21 (16).jpg";
import AM23galeria from "../imports/images/marrua/M23 (1).jpg";
import AM23galeria2 from "../imports/images/marrua/M23 (2).jpg";
import AM23galeria3 from "../imports/images/marrua/M23 (3).jpg";
import AM23galeria4 from "../imports/images/marrua/M23 (4).jpg";
import AM23ambulancia from "../imports/images/marrua/AM23 (1).jpg";
import AM23ambulancia2 from "../imports/images/marrua/AM23 (2).jpg";
import AM23ambulancia3 from "../imports/images/marrua/AM23 (3).jpg";
import AM23ambulancia4 from "../imports/images/marrua/AM23 (4).jpg";
import AM23ambulancia5 from "../imports/images/marrua/AM23 (5).jpg";
import AM23ambulancia6 from "../imports/images/marrua/AM23 (6).jpg";
import AM23ambulancia7 from "../imports/images/marrua/AM23 (7).jpg";
import AM23ambulancia8 from "../imports/images/marrua/AM23 (8).jpg";
import AM23ambulancia9 from "../imports/images/marrua/AM23 (9).jpg";
import AM23ambulancia10 from "../imports/images/marrua/AM23 (10).jpg";
import AM23ambulancia11 from "../imports/images/marrua/AM23 (11).jpg";
import MARRUACAPA from "../imports/images/marrua/marrua capa.png";




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
    heroImage: CAMINHAOCAPA,
    subcategories: [
      { slug: "leves", name: "Leves", shortDescription: "Agilidade e economia para entregas urbanas e distribuição regional", image: ca8700 },
      { slug: "medios", name: "Médios", shortDescription: "Equilíbrio entre capacidade de carga e performance operacional", image: ca15000 },
      { slug: "semipesados", name: "Semipesados", shortDescription: "Alta capacidade de carga para operações mais exigentes", image: ca18000 },
    ],
  },
  {
    slug: "onibus",
    name: "Ônibus",
    tagline: "Confie em quem é referência há mais de 25 anos.",
    description:
      "A Agrale é referência nacional na fabricação de chassis para ônibus e micro-ônibus, consagrada pela parceria de longa data com a Volare. Soluções para as mais diversas operações de transporte de passageiros em todo o Brasil, aliando economia, robustez e confiabilidade mecânica.",
    heroImage: ONIBUSCAPA,
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
    heroImage: TRATORCAPA,
    subcategories: [
      { slug: "agricolas", name: "Agrícolas", shortDescription: "Força no campo para maior produtividade", image: trator540TX },
      { slug: "industriais", name: "Industriais", shortDescription: "Movimentação eficiente em ambientes industriais e pátios", image: tratorIndustrial },
    ],
  },
  {
    slug: "marrua",
    name: "Utilitários Marruá",
    tagline: "É mais que off-road, é para todo terreno.",
    description:
      "Desenvolvido para superar os mais severos desafios, o Agrale Marruá combina robustez, tração 4x4, confiabilidade e versatilidade. Com desempenho comprovado nos mais diversos terrenos, atende aplicações civis, de defesa e segurança, sendo utilizado inclusive pelo Exército Brasileiro.",
    heroImage: MARRUACAPA,
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
    image: ca8700,
    image2: ca8700,
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
    image: ca10000,
    image2: ca10000,
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
    tagline: "O único da categoria com tração integral e opção de câmbio automático",
    image: ca100004x4,
    image2: ca100004x4,
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
    image: ca11000,
    image2: ca11000,
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
    image: caEXT4x4,
    image2: caEXT4x4,
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
    id: "caminhao-15000",
    category: "caminhoes",
    subcategory: "medios",
    name: "Agrale 15.000",
    slug: "agrale-15000",
    tagline: "Versatilidade e produtividade nas cidades e nas estradas.",
    image: ca15000,
    image2: ca15000,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-15-000-atualizado - fixa tecnica.pdf",
    gallery: [caminhaoCard, caminhaoA10000],
    description:
      "Com elevada capacidade de carga e facilidade de encarroçamento, o Agrale 15.000 entrega desempenho consistente, confiabilidade e excelente custo operacional em transporte urbano e intermunicipal.",
    specifications: {
      "Motorização": "CUMMINS F4.5",
      "Potência": "213 cv",
      "Torque": "780 Nm / 1300 - 1500 rpm",
      "Transmissão": "Monodisco à seco com acionamento Hidropneumático",
      "Peso Bruto Total (PBT)": "15.000 Kg",
      "Capacidade máxima de tração (CMT)": "23.000 Kg",
      "Entre-eixos": "4.800 mm (STD)",
      "Tanque de combustível": "300 L / 210 L (Opcional)"
    },
    highlights: [
      "Robustez para diversas aplicações",
      "Conforto e eficiência operacional",
      "Indicado para carga e serviço",
      "Excelente custo operacional",
    ],
  },
  {
    id: "caminhao-18000",
    category: "caminhoes",
    subcategory: "semipesados",
    name: "Agrale 18.000",
    slug: "agrale-18000",
    tagline: "Robustez e capacidade de carga elevada",
    image: ca18000,
    image2: ca18000,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-18-000-atualizado - fixa tecnica.pdf",
    description:
      "Desenvolvido para operações de maior exigência, o Agrale 17.000 combina robustez, capacidade de carga elevada e eficiência operacional, com cabine projetada com foco em ergonomia, conforto e segurança.",
    specifications: {
      "Motorização": "CUMMINS F4.5",
      "Potência": "213 cv",
      "Torque": "780 Nm / 1300 - 1500 rpm",
      "Peso Bruto Total (PBT)": "PBT Legal: 16.000 Kg / PBT Técnico: 17.600 Kg",
      "Capacidade máxima de tração (CMT)": "27.000 Kg",
      "Tanque de combustível": "300 L / 210 L(Opcional)",
    },
    highlights: [
      "Alta capacidade de carga",
      "Ampla possibilidade de encarroçamento",
      "Alta confiabilidade mecânica",
      "Baixo custo operacional ao longo da vida útil",
    ],
  },
  {
    id: "caminhao-26000",
    category: "caminhoes",
    subcategory: "semipesados",
    name: "Agrale 26.000",
    slug: "agrale-26000",
    tagline: "Robustez e capacidade de carga elevada",
    image: ca26000,
    image2: ca26000,
    datasheetUrl: "/datasheets/caminh-o-agrale-a-26-000-atualizado.pdf",
    description:
      "O Agrale A 26.000 combina 310 cv de potência, 1.200 Nm de torque e transmissão ZF de 9 marchas para entregar força e produtividade nas mais diversas operações. Com PBT de até 23 toneladas e carga útil de até 16,28 toneladas, é a escolha para quem busca mais capacidade, segurança e eficiência no transporte.",
    specifications: {
      "Motorização": "CUMMINS B6.7",
      "Potência": "310 cv (227 kW) a 2.300 rpm",
      "Torque": "1.200 Nm / 1.200 - 1.500 rpm",
      "Peso Bruto Total (PBT)": "Legal: 23.000 Kg / Técnico: 25.600 Kg",
      "Capacidade máxima de tração (CMT)": "35.000 Kg",
      "Tanque de combustível": "300 L 210 L (Opcional)",
    },
    highlights: [
      "Motor Cummins B6.7 de 310 cv, 1.200 Nm de torque e transmissão ZF de 9 marchas",
      "Capacidade útil de carga técnica de até 18.880 kg e CMT de 35.000 kg",
      "Pacote avançado de segurança com ESC, EBD, ATC e Assistente de Partida em Rampa (HSA)",
      "Chassi versátil com 7,31 m de comprimento livre para encarroçamento",
      "Motorização Euro VI / PROCONVE P8 com foco em sustentabilidade e eficiência",
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
    image: MA92,
    image2: MA92,
    datasheetUrl: "/datasheets/ma-9-2-atualizado  - fixa tecnica.pdf",
    dimensionsUrl: "/dimensions/MA 92.jpg",
    description:
      "Líder há mais de 25 anos no segmento de chassi para micro-ônibus, o MA 9.2 é referência em versatilidade de encarroçamento, economia e capacidade de adaptação a diferentes operações urbanas.",
    specifications: {
      "Motorização": "Cummins F3.8",
      "Potência": "129kW (175cv) a 2500 rpm",
      "Torque": "600Nm a 1.100 - 1800 rpm",
      "Peso Bruto Total (PBT)": " 9.200 Kg",
      "Entre-eixos": " 4.200mm/4.500mm",
      "Tanque de combustível": "150 L",
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
    image: MA100,
    image2: MA100,
    datasheetUrl: "/datasheets/ma-10-0-atualizado - fixa tecnica.pdf",
    dimensionsUrl: "/dimensions/MA 10.jpg",
    description:
      "Chassi projetado exclusivamente para o transporte de pessoas, o MA 10.0 une robustez, tecnologia e economia operacional para diferentes necessidades do transporte coletivo.",
    specifications: {
      "Motorização": "Cummins F3.8",
      "Potência": "129kW (175cv) a 2500 rpm",
      "Torque": "600Nm a 1.100 - 1800 rpm",
      "Peso Bruto Total (PBT)": "10.000 Kg",
      "Entre-eixos": " 4.500mm/4.800mm - 5.500mm",
      "Tanque de combustível": "150 L",
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
    image: MA11gas,
    image2: MA11gas,
    datasheetUrl: "/datasheets/ma-11-0-g-s-atualizado.pdf",
    gallery: [MA11gasgaleria1, MA11gasgaleria2, MA11gasgaleria3, MA11gasgaleria4, MA11gasgaleria, MA11gasgaleria5],
    description:
      "Versão a gás da linha Microbus, o MA 11.0 Gás reduz custo operacional e emissões, mantendo a robustez e a confiabilidade que consagraram a Agrale no segmento de chassis para ônibus.",
    specifications: {
      "Motorização": "WEICHAI WP4.6NNG",
      "Potência": "143 kW (195 cv) a 2.300 RPM",
      "Tanque de Combustível": "490 Litros - (3 cilindros de 130L e 1 cilindro de 100L)",
      "Peso Bruto Total (PBT)": " 10.700 Kg",
      "Torque": "642 Nm a 1.400 RPM",
      "Distância entre eixos": "5.500 mm"
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
    image: MA172,
    image2: MA172,
    datasheetUrl: "/datasheets/ma-17-0-atualizado - fixa tecnica.pdf", 
    description:
      "A solução Agrale para o transporte de passageiros em médio porte. Projetado para operações que exigem maior capacidade de transporte, o MA 17.0 combina robustez, conforto e eficiência em aplicações urbanas, rodoviárias ou de fretamento.",
    specifications: {
      "Motorização": "Cummins F4.5",
      "Potência": "213 cv (157 kW) - 2200 rpm",
      "Torque": "780 Nm - 1300 / 1500 rpm",
      "Peso Bruto Total (PBT)": "17.000 Kg (Técnico) / 16.000 Kg (Legal)",
      "Entre-eixos": "5.250mm / 5.950mm / 6.500mm (Sob encomenda)",
      "Tanque de combustível": " 210 L / 300 L (OPC.)",
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
    image: MA110,
    image2: MA110,
    datasheetUrl: "/datasheets/ma-11-0-motorhome-atualizado - fixa tecnica.pdf", 
    dimensionsUrl: "/dimensions/MA 10.png", 
    description:
      "Chassi exclusivo para motorhome, une resistência, segurança e tecnologia. Projetado para atender às exigências de longas viagens e diferentes tipos de terreno, garantindo a liberdade do campismo com a confiança de quem entende de mobilidade.",
    specifications: {
      "Motorização": "Cummins F4.5",
      "Potência": "213 cv (157 kW) - 2200 rpm",
      "Torque": "780 Nm - 1300 / 1500 rpm",
      "Peso Bruto Total (PBT)": " 10.700 KG",
      "Entre-eixos": "4.800mm",
      "Tanque de combustível": " 150 L",
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
    image2: trator4125,
    datasheetUrl: "/datasheets/trator-4125-atualizado - fixa tecnica.pdf", 
    gallery: [trator4125galeria, trator4125galeria2, trator4125galeria3, trator4125galeria4, trator4125galeria5],
    description:
      "Trator compacto e versátil, o 4125 é indicado para pequenas e médias propriedades, unindo potência, economia de combustível e tecnologia para aumentar a produtividade no campo.",
    specifications: {
      "Motorização": "3 cilindros YD390T",
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
    image2: trator4125Cargo,
     datasheetUrl: "/datasheets/trator-4125-cargo-atualizado - fixa tecnica.pdf", 
    gallery: [trator4125Cargo, trator4125, trator4125Coletor],
    description:
      "Versão do 4125 equipada para transporte de carga dentro da propriedade rural, mantendo a robustez e a economia que caracterizam a linha agrícola Agrale.",
    specifications: {
      "Motorização": "3 Cilindros YD390T",
      "Torque": "9,43 kgf.m (92 N.m) a 1.600 RPM (NBR ISO 1585)",
      "Potência": "25,0 cv (18,44 kW) a 2.400 rpm",
      "Direção": "Hidráulica / Hidrostática",
      "Capacidade de carga": "1.500 KG",
      "Tanque Combustível": "39 L"
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
    image2: trator4125Coletor,
    datasheetUrl: "/datasheets/trator-4125-cargo-atualizado - fixa tecnica.pdf", 
    gallery: [trator4125coletorgaleria4, trator4125coletorgaleria3, trator4125coletorgaleria2, trator4125coletorgaleria],
    description:
      "Versão especializada do 4125 para operações de coleta, combinando a mesma robustez mecânica da linha com adaptações voltadas à aplicação específica.",
    specifications: {
      "Motorização": "AGRALE YD390",
      "Potência": "125 cv",
      "Capacidade de carga": "1.500 Kg",
      "Tanque Combustível": "39 L",
      "Direção": "Hidráulica / Hidrostática",
      "Giro": " 522 a 2.400 rpm no motor"
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
    image2: trator4233,
    datasheetUrl: "/datasheets/trator-4233-atualizado  - fixa tecnica.pdf.pdf", 
   gallery: [trator4233galeria, trator4233galeria2, trator4233galeria3],
    description:
      "O Trator 4233 entrega bom equilíbrio entre potência e agilidade, indicado para operações agrícolas de médio porte que exigem versatilidade de implementos.",
    specifications: {
      "Motorização": "Agrale 2 Cilindros com 1.270 cilindradas cm³ ",
      "Potência": "24,5 cv (18,0 kW) a 2.700 rpm",
      "Torque": "6,6 kgf.m (65 Nm) a 2.550 rpm",
      "Tanque de Combustível": "35 L",
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
    image2: trator525,
    datasheetUrl: "/datasheets/trator-525-atualizado  - ficha tecnica.pdf", 
    gallery: [trator525galeria, trator525galeria2, trator525galeria3, trator525galeria4, trator525galeria5, trator525galeria6],
    description:
      "Compacto e ágil, o Trator 525 é indicado para pequenas propriedades, pomares e operações que exigem manobrabilidade sem abrir mão de robustez mecânica.",
    specifications: {
      "Motorização": " Agrale KM385",
      "Potência": "25 cv (18,4 kW) a 2.350 rpm (ISO14396)",
      "Torque": "8,5 a 10,2 kgf.m (83 a 100 Nm) a 1.650 rpm (NBR 14396)",
      "Tanque de Combustível": " 30 L",
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
    image2: trator540TX,
    datasheetUrl: "/datasheets/trator-540-xt-atualizado - fixa tecnica.pdf", 
    gallery: [trator540TX_galeria, trator540TX_galeria2],
    description:
      "O 540 XT traz tecnologia embarcada e conforto para o operador, indicado para propriedades que buscam mais precisão e produtividade nas operações do dia a dia.",
    specifications: {
      "Motorização": "Agrale 4 Cilindros",
      "Potência": "40 cv (29,4 kW) - 2.400 rpm",
      "Transmissão": " Carraro T50 (T4.0",
      "Tanque de Combustível": " 44 L",
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
    image2: trator575Compact,
    datasheetUrl: "/datasheets/trator-575-compact-atualizado - fixa tecnica.pdf", 

    gallery: [trator575, trator5752, trator5753, trator5754, trator5755],
    description:
      "Versão compacta da linha 575, ideal para operações em espaços reduzidos, entrelinhas de cultivo e propriedades que exigem agilidade sem perder potência.",
    specifications: {
      "Motorização": "PERKINS 1104D - 44",
      "Potência": "76,1 cv (55,9 kW) - 2.200 RPM ",
      "Torque": "26,6 kgf.m (261 Nm) a 1.700 rpm",
      "Giro Nominal": "540 a 2000 rpm do motor 540 (Eco) a 1600 rpm do motor",
      "Embreagem": "Duplo disco a seco",
      "Tanque de combustível": "70 L",
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
    image2: trator575Super,
    datasheetUrl: "/datasheets/trator-575-super-atualizado - fixa tecnica.pdf", 
    gallery: [super575, super5752, super5753 ,super5754 ,super5755],
    description:
      "Versão Super da linha 575, com reforços mecânicos para operações mais exigentes, mantendo a economia e a confiabilidade que marcam a linha agrícola Agrale.",
    specifications: {
      "Motorização": "PERKINS 1104D - 44",
      "Potência": "76,1 cv (55,9 kW) - 2.200 rpm (SAEJ1995)",
      "Transmissão": "Mecânica Sincronizada",
      "Tanque de combustível": "94 L",
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
    image2: trator5105,
    datasheetUrl: "/datasheets/trator-5105-atualizado - fixa tecnica.pdf", 
    gallery: [traot5105, traot51052, traot51053, traot51054, traot51055, traot51056, traot51057],
    description:
      "O Trator 5105 oferece potência intermediária, ideal para operações de preparo de solo, plantio e tração de implementos de médio porte.",
    specifications: {
      "Motorização": "PERKINS / 1104D-44TA",
      "Potência": " 105,6 cv (77,6kW) - 2.200 rpm (SAEJ1995)",
      "Torque": " 42 kgf.m (412 N.m) a 1.400 rpm",
      "Tanque Combustível": "90 L",
      "Capacidade levante": "4.200 Kg",
      "DIREÇÃO": "Hidráulica e hidrostática. Telescópica e escamoteável"
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
    image2: trator6185,
    gallery: [trator61856, trator61855, trator61854, trator61853, trator61852, trator61857],
    datasheetUrl: "/datasheets/trator-6185-atualizado - fixa tecnica.pdf", 
    description:
      "Com alta potência, o Trator 6185 é indicado para grandes propriedades e operações que demandam tração de implementos pesados com eficiência.",
    specifications: {
      "Motorização": "MWM 229-6 TCE TURBO",
      "Potência": "175 cv (NBR ISO 14396)",
      "Torque": "72 Kgf.m a 1.300 - 1.500 rpm",
      "Tanque Combustível": "280 L",
      "Número de marchas": "24 Frente / 12 Ré",
      "Capacidade levante": "6.700 kg"
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
    image2: trator7215,
    gallery: [trator72154, trator72155, trator72153, trator72152],
    datasheetUrl: "/datasheets/trator-7215-atualizado - fixa tecnica.pdf", 
    description:
      "Modelo topo de linha da Agrale, o 7215 entrega máxima potência e tecnologia para grandes propriedades, com foco em produtividade e economia operacional.",
    specifications: {
      "Motorização": "MWM Maxx Force 6.0A",
      "Potência": "220 cv (ISO 14396)",
      "Transmissão": "Mecânica Sincronizada",
      "Torque": "74,4 kgf.m (730 N.m) a 1.350 - 1.650 rpm",
      "Peso de embarque": "8.430 kg",
      "Tanque Combustível": "460 L",
    },
    highlights: ["Topo de linha Agrale", "Máxima produtividade", "Tecnologia avançada", "Economia operacional em grande escala"],
  },
  {
    id: "trator-rebocador-4100",
    category: "tratores",
    subcategory: "industriais",
    name: "Rebocador 4100",
    slug: "rebocador-4100",
    tagline: "Versatilidade para a movimentação de cargas",
    image: tratorRebocador4100,
    image2: tratorRebocador4100,
    datasheetUrl: "/datasheets/trator-rebocador-4100-industrial-atualizado - fixa tecnica.pdf", 
    gallery: [tratorIndustrial, tratorHero],
    description:
      "A linha de tratores industriais Agrale oferece força, eficiência e confiabilidade para a movimentação de cargas em ambientes industriais, logísticos e operações de pátio.",
    specifications: {
      "Motorização": "AGRALE",
      "Potência": "14,7 cv (10,8 kW) a 2.750 rpm",
      "Torque": "3,9 daNm - 4,0 kgf.m a 2.350 rpm (NBRISO 1585)",
      "Tanque Combustível": "19,6 L",
    },
    highlights: ["Alto desempenho", "Baixo custo de manutenção", "Economia operacional", "Confiabilidade contínua"],
  },
  {
    id: "trator-rebocador-4100-gas",
    category: "tratores",
    subcategory: "industriais",
    name: "Rebocador 4100 Gás",
    slug: "rebocador-4100-gas",
    tagline: "Movimentação de cargas com menor emissão",
    image: tratorRebocador4100gas,
    image2: tratorRebocador4100gas,
    datasheetUrl: "/datasheets/trator-agrale-4100-gas.pdf", 
    gallery: [tratorHero, tratorIndustrial],
    description:
      "Versão a gás do Rebocador 4100, indicada para operações industriais e logísticas internas que buscam reduzir emissões sem abrir mão de força e confiabilidade.",
    specifications: {
      "Motorização": "Vanguard 627 V-Twin",
      "Potência": "16,2CV a 3200 rpm",
      "Tanque de Combustível": "Cilindro Gás 20 Kg",
      "Transmissão": "Mecânica com 7 à frente e 3 à ré",
    },
    highlights: ["Menor emissão de poluentes", "Ideal para uso interno/industrial", "Robustez Agrale", "Baixo custo operacional"],
  },

  // ================================ MARRUÁ ================================
  {
    id: "am200-mo",
    category: "marrua",
    subcategory: "civil",
    name: "AM200 MO",
    slug: "am200-mo",
    tagline: "DNA militar adaptado para o uso civil",
    image: marruaAM200MO,
    image2: marruaAM200MO,
    datasheetUrl: "/datasheets/am200-mo-atualizado - fixa tecnica.pdf",
    gallery: [am200m02, am200m0],
    description:
      "O Marruá AM200 MO leva a robustez e a confiabilidade do DNA militar Agrale para operações civis, off-road e uso urbano, com baixo custo de manutenção.",
    specifications: {
      "Motorização": "Cummins F3.8",
      "Potência": "170 cv (125 kW) a 2.600 rpm",
      "Tanque de combustível": "95 L (divididos em dois tanques)",
      "Torque": "600 Nm 1.200 a 1.900 rpm",
      "lugares": "11 (Motorista + 10 passageiros)",
      "Peso Bruto Total (PBT)": "5.000 Kg",
    },
    highlights: ["DNA militar adaptado ao uso civil", "Off-road e uso urbano", "Baixo custo de manutenção", "Robustez e confiabilidade"],
  },
  {
    id: "am200-mo-escolar",
    category: "marrua",
    subcategory: "civil",
    name: "AM200 MO Escolar",
    slug: "am200-mo-escolar",
    tagline: "Transporte escolar robusto para qualquer terreno",
    image: marruaAM200MOEscolar,
    image2: marruaAM200MOEscolar,
    datasheetUrl: "/datasheets/am200-mo-escolar-atualizado - fixa tecnica.pdf",
    gallery: [am200escolar, am200escolar2, am200escolar3, am200escolar4],
    description:
      "Versão adaptada para transporte escolar em áreas rurais e de difícil acesso, unindo a robustez 4x4 do Marruá à segurança necessária para o transporte de estudantes.",
    specifications: {
      "Motorização": "Cummins F3.8 Turbo Diesel",
      "Torque": "600 Nm 1.200 a 1.900 rpm",
      "Lugares": "15 passageiros (Motorista e Ajudante + 13 passageiros)",
      "Potência": "170 cv",
      "Peso Bruto Total (PBT)": "5.000 Kg",
      "Tanque de combustível": "95 L"
    },
    highlights: ["Acesso a áreas rurais de difícil chegada", "Robustez 4x4", "Segurança para transporte de estudantes", "Baixo custo de manutenção"],
  },
  {
    id: "am250-cabine-dupla",
    category: "marrua",
    subcategory: "civil",
    name: "AM250 Cabine Dupla",
    slug: "am250-cabine-dupla",
    tagline: "Versatilidade para operações civis e corporativas",
    image: marruaAM250Dupla,
    image2: marruaAM250Dupla,
    datasheetUrl: "/datasheets/am250-cabine-dupla-atualizado - fixa tecnica.pdf",
    dimensionsUrl: "/dimensions/AM250.jpg",
    gallery: [am200cabinedupla, am200cabinedupla2, am200cabinedupla3 ,am200cabinedupla4 ,am200cabinedupla5 ,am200cabinedupla6 ,am200cabinedupla7 ,am200cabinedupla8 ,am200cabinedupla9 ,am200cabinedupla10,am200cabinedupla11,am200cabinedupla12 ,am200cabinedupla13 ,am200cabinedupla14 ,am200cabinedupla15 ,am200cabinedupla16 ,am200cabinedupla17 ,am200cabinedupla18,am200cabinedupla19],
    description:
      "Com cabine dupla, o AM250 é indicado para operações que exigem transporte de equipe e carga simultaneamente, mantendo a tração 4x4 e a robustez da linha Marruá.",
    specifications: {
      "Motorização": "Cummins F3.8 Turbo Diesel",
      "Potência": "170 cv",
      "Torque": "600 Nm a 1.200 - 1.900 RPM",
      "Peso Bruto Total (PBT):": "5.700 Kg",
      "Tanque de combustível":" 95 L",
      "Lugares": "5 pessoas"
    },
    highlights: ["Cabine dupla para equipe e carga", "Tração 4x4", "Suspensão de longo curso", "Robustez militar adaptada ao civil"],
  },
  {
    id: "am250-cabine-simples",
    category: "marrua",
    subcategory: "civil",
    name: "AM250 Cabine Simples",
    slug: "am250-cabine-simples",
    tagline: "Foco em capacidade de carga",
    image: marruaAM250Simples,
    image2: marruaAM250Simples,
    datasheetUrl: "/datasheets/am250-cabine-simples-atualizado - fixa tecnica.pdf",
    gallery: [am200cabinesimples, am200cabinesimples2, am200cabinesimples3, am200cabinesimples4, am200cabinesimples5, am200cabinesimples6, am200cabinesimples7, am200cabinesimples8, am200cabinesimples9, am200cabinesimples10],
    description:
      "Versão cabine simples do AM250, otimizada para maior capacidade de carga útil, mantendo o desempenho 4x4 característico da linha Marruá.",
    specifications: {
      "Motorização": "Cummins F3.8 Turbo Diesel",
      "Potência": "170 cv",
      "Torque": "600 Nm a 1.200 - 1.900 rpm",
      "Peso Bruto Total (PBT):": "5.700 kg",
      "Lugares": "2 pessoas",
      "Tanque de combustível": "95 L"
    },
    highlights: ["Maior capacidade de carga útil", "Tração 4x4", "Robustez e confiabilidade", "Baixo custo de manutenção"],
  },
  {
    id: "AM11-reconhecimento",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "AM11 Reconhecimento",
    slug: "AM11-reconhecimento",
    tagline: "Missões críticas e reconhecimento em qualquer terreno",
    image: marruaAM11Reconhecimento,
    image2: marruaAM11Reconhecimento,
    datasheetUrl: "/datasheets/viatura-militar-br-AM11-reconhecimento-atualizado - fixa tecnica.pdf",
    gallery: [ AM11galeria ,AM11galeria1  ,AM11galeria2  ,AM11galeria3  ,AM11galeria4  ,AM11galeria5  ,AM11galeria6  ,AM11galeria7  ,AM11galeria8  ,AM11galeria9  ,AM11galeria10 ,AM11galeria11 ,AM11galeria12 ,AM11galeria13 ,AM11galeria14 ,AM11galeria15 ,AM11galeria16 ,AM11galeria17 ,AM11galeria18],
    description:
      "Desenvolvido para missões de reconhecimento, o AM11 combina tração 4x4, suspensão de longo curso e confiabilidade mecânica para operar em condições operacionais críticas.",
    specifications: {
      "Motorização": "Cummins ISF 3.8 Euro III",
      "Potência": "167 cv",
      "Lugares": " 5 (motorista + 4 passageiros)",
      "Torque": "600 Nm 1.200 a 1.900 rpm",
    },
    highlights: ["Tração 4x4", "Suspensão de longo curso", "Missões de reconhecimento", "Robustez militar"],
  },
  {
    id: "AM21-vtne",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "AM21 VTNE 3/4 Ton",
    slug: "AM21-vtne-3-4-ton",
    tagline: "Transporte de tropas e cargas táticas",
    image: marruaAM21VTNE,
    image2: marruaAM21VTNE,
    datasheetUrl: "/datasheets/viatura-militar-br-AM21---vtne-ton-atualizado - fixa tecnica.pdf",
    gallery: [AM21galeria  ,AM21galeria1  ,AM21galeria2  ,AM21galeria3  ,AM21galeria4  ,AM21galeria5  ,AM21galeria6  ,AM21galeria7  ,AM21galeria8  ,AM21galeria9  ,AM21galeria10 ,AM21galeria11 ,AM21galeria12 ,AM21galeria13 ,AM21galeria14 ,AM21galeria15],
    description:
      "Veículo de Transporte Não Especializado (VTNE) com capacidade de 3/4 de tonelada, indicado para transporte de tropas, equipamentos e apoio logístico em operações militares.",
    specifications: {
      "Motorização": " Cummins ISF 3.8 Euro III",
      "Potência": " 123 kW (167 cv) A 2.600 RPM",
      "Torque": "600 Nm 1.100 - 1.700 RPM",
      "Tanque de combustível": "95 L",
    },
    highlights: ["Transporte de tropas e ambulância", "Tração 4x4", "Suspensão de longo curso", "Missões críticas"],
  },
  {
    id: "m23-chassi-cabine",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "AM23 Chassi Cabine",
    slug: "am23-chassi-cabine",
    tagline: "Plataforma versátil para carrocerias especiais",
    image: marruaAM23Chassi,
    image2: marruaAM23Chassi,
    datasheetUrl: "/datasheets/viatura-militar-br-am23-chassi-cabine-atualizado - fixa tecnica.pdf",
    gallery: [AM23galeria, AM23galeria2, AM23galeria3, AM23galeria4],
    description:
      "Configuração chassi-cabine do AM23, pensada para receber carrocerias e implementos especiais em aplicações de defesa e segurança pública.",
    specifications: {
      "Motorização": "Cummins ISF 3.8 Euro III",
      "Torque": "600 Nm @ 1.100 - 1.700 rpm",
      "Potência": " 123 kW (167 cv) A 2.600 rpm",
      "Número de marchas": "5 Frente / 1 Ré",
      "Marca / Modelo Transmissão": "EATON ESO 6205",
      "Freio de Serviço": "Tipo Disco nas 04 rodas"
    },
    highlights: ["Plataforma versátil chassi-cabine", "Tração 4x4", "Robustez para uso intensivo", "Suporte a implementos especiais"],
  },
  {
    id: "am23-vtne",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "AM23 VTNE 3/4 Ton",
    slug: "m23-vtne-3-4-ton",
    tagline: "Nova geração do VTNE 3/4 de tonelada",
    image: marruaAM23VTNE,
    image2: marruaAM23VTNE,
    datasheetUrl: "/datasheets/viatura-militar-br-am23---vtne-ton-atualizado - fixa tecnica.pdf",
    gallery: [AM23ambulancia ,AM23ambulancia2  ,AM23ambulancia3  ,AM23ambulancia4  ,AM23ambulancia5  ,AM23ambulancia6  ,AM23ambulancia7  ,AM23ambulancia8  ,AM23ambulancia9  ,AM23ambulancia10 ,AM23ambulancia11],
    description:
      "Evolução da linha VTNE, o AM23 mantém a capacidade de 3/4 de tonelada com atualizações mecânicas que reforçam confiabilidade e desempenho em operações táticas.",
    specifications: {
      "Motorização": "Cummins ISF 3.8 Euro III",
      "Potência": "167 cv",
      "Torque": "600 Nm 1.200 a 1.900 RPM",
      "Cabine": " Simples - 2 lugares",
    },
    highlights: ["Nova geração VTNE", "Tração 4x4", "Confiabilidade reforçada", "Missões táticas e reconhecimento"],
  },
  {
    id: "am31",
    category: "marrua",
    subcategory: "defesa-e-seguranca",
    name: "AM31",
    slug: "am31",
    tagline: "Máxima capacidade operacional da linha Defesa e Segurança",
    image: marruaAM31,
    image2: marruaAM31,
    datasheetUrl: "/datasheets/viatura-militar-br-am31-atualizado - fixa tecnica.pdf",
    description:
      "O AM31 é o modelo de maior capacidade da linha Defesa e Segurança, projetado para as missões mais exigentes com robustez estrutural e desempenho em qualquer terreno.",
    specifications: {
      "Motorização": "Cummins ISF 3.8 Euro III",
      "Torque": " 600 Nm A 1.100 - 1.700 rpm",
      "Potência": "123 kW (167 cv) A 2.600 rpm",
      "Tanque de combustível": "95 L",
      "Cabine": "Simples - 2 ocupantes",
      "Número de marchas": "5 Frente / 1 Ré"
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