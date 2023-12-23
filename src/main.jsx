import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./components/context/LoginContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>
);
