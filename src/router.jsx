import AuthLayout from "./layouts/authLayout/AuthLayout";
import ErrorPage from "./pages/ErrorPage";
import Register from "./componentes/Register/Register";
import Pagina_inicial from "./pages/Pagina_inicial";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//config do router

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Pagina_inicial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
