import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/componentes/Register/Register";
import Pagina_inicial from "./pages/Pagina_inicial";
import App from "./App";
import "./src/index.css";

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
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
