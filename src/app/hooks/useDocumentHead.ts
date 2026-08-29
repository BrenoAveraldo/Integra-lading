import { useEffect } from "react";

/**
 * Atualiza o <title> e a <meta name="description"> da página conforme a
 * rota atual. Necessário porque este é um SPA sem gerenciamento de head por
 * página (react-helmet, etc.) — sem isso, todas as rotas (Home, categorias,
 * subcategorias e cada veículo) compartilhavam o mesmo título/descrição
 * genéricos do index.html, desperdiçando as palavras-chave específicas de
 * cada página no Google.
 */
export function useDocumentHead(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
}