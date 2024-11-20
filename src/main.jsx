import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Register from "./componentes/Register/Register"
import Pagina_inicial from "./pages/Pagina_inicial"
//config do router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Pagina_inicial />,
      },
      {
        path: "/Criar_conta",
        element: <Register />
      }
    ]
  }


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
