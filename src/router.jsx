import AuthLayout from "./layouts/authLayout/AuthLayout";
import ErrorPage from "./pages/ErrorPage";
import Register from "./componentes/Register/Register";
import Pagina_inicial from "./pages/Pagina_inicial";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LayoutDash from "./layouts/dashboardLayout/LayoutDash";
import Dashboard from "./pages/DashBoard";
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

        <Route path="/dashboard" element={<LayoutDash />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
