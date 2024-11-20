import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/componentes/Register/Register";
import Pagina_inicial from "./pages/Pagina_inicial";
import Fundo from "./pages/componentes/telaFundo/Fundo";
//config do router

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Fundo />}>
        <Route index element={<Pagina_inicial />} />
        <Route path="/pagina-inicial" element={<Pagina_inicial />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;
