import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { RouteProvider } from "./@Global/contexts/RouteContext.tsx";
import { AppProvider } from "./@Global/contexts/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { FlagProvider } from "./@Global/contexts/FlagContext.tsx";
import "./index.css";
import App from "./App.tsx";
import Flag from "./@Global/components/Flag.tsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <AppProvider>
          <FlagProvider>
            {" "}
            <Flag />
            <App />
          </FlagProvider>
        </AppProvider>
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
