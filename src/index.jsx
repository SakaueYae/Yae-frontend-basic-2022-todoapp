import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";
import { AlertHandlerProvider } from "./contexts/alert_handler";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
