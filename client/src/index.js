import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DonorProvider } from "./DonorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DonorProvider>
    <App />
  </DonorProvider>
);
