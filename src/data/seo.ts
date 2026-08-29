import type { CategorySlug } from "./vehicles";

// Textos de SEO (título de aba + meta descrição) por página. Baseado nas
// palavras-chave levantadas pelo responsável de tráfego pago — ajuste o
// texto livremente, só evite passar de ~60 caracteres no título e
// ~155 no description (limites que o Google costuma exibir por completo).

export const HOME_SEO = {
  title: "Integra Veículos | Concessionária Autorizada Agrale em São Luís - MA",
  description:
    "Concessionária Agrale em São Luís, Maranhão. Caminhões, ônibus, tratores e utilitários Marruá com financiamento, consórcio e assistência técnica autorizada.",
};

export const CATEGORY_SEO: Record<CategorySlug, { title: string; description: string }> = {
  caminhoes: {
    title: "Caminhões Agrale em São Luís - MA | Integra Veículos",
    description:
      "Compre caminhão Agrale zero km ou seminovo com financiamento, consórcio e FINAME na Integra, concessionária autorizada Agrale em São Luís, Maranhão.",
  },
  onibus: {
    title: "Chassi de Ônibus e Microônibus Agrale | Integra São Luís - MA",
    description:
      "Chassi para ônibus urbano, microônibus escolar e fretamento Agrale. Venda e assistência técnica na Integra, revenda autorizada em São Luís, Maranhão.",
  },
  tratores: {
    title: "Tratores Agrale em São Luís - MA | Integra Veículos",
    description:
      "Tratores Agrale para agronegócio e uso industrial no Maranhão. Financiamento, peças originais e assistência técnica na Integra, concessionária autorizada.",
  },
  marrua: {
    title: "Agrale Marruá 4x4 | Preço e Concessionária em São Luís - MA",
    description:
      "Conheça o Marruá 4x4 da Agrale: utilitário off-road para construção civil e agronegócio. Preço e condições na Integra, concessionária em São Luís - MA.",
  },
};