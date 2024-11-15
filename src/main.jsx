import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import PageHome from "./pages/PageHome";
import Carregamento from "./pages/Carregamento";

//config do router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Pagina-Inicial",
    element: <PageHome />,
  },
  {
    path: "/car",
    element: <Carregamento />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
