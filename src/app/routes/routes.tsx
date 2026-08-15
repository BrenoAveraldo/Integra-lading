import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage";
import { SubCategoryPage } from "../pages/SubCategoryPage";
import { ProductPage } from "../pages/ProductPage";

// Estrutura de navegação de 3 níveis do catálogo:
//   /                      -> Home (institucional, mantém navegação por abas)
//   /:category             -> Nível 1: página da categoria (ex: /caminhoes)
//   /:category/:subcategory-> Nível 2: página da subcategoria (ex: /caminhoes/leves)
//   /veiculo/:slug         -> Nível 3: página completa do produto
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/veiculo/:slug" element={<ProductPage />} />
      <Route path="/:category/:subcategory" element={<SubCategoryPage />} />
      <Route path="/:category" element={<CategoryPage />} />
    </Routes>
  );
}
