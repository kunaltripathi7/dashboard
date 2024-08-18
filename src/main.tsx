import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WidgetProvider } from "./context/WidgetContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>
  </StrictMode>
);
