import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductContextProvider } from "./Context/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { HeaderContextProvider } from "./Context/HeaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <HeaderContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeaderContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
