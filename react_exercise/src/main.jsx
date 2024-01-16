import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HolderContextProvider from "./context/HolderContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HolderContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HolderContextProvider>
);
