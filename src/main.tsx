import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Evita que o navegador restaure automaticamente a última posição de
  // rolagem ao recarregar a página (comportamento nativo do browser que
  // fazia a Home abrir já rolada, por exemplo, na seção de Serviços).
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );