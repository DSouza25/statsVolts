import { ReactDOM } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./src/index.css";

import RoutesApp from "./src/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>
);
