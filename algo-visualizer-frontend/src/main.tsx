import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppRouting from "./routing/AppRouting.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouting />
  </StrictMode>,
);
