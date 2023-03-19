import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import styles
import "./styles/App.css";
import "./styles/normalize.css";

// import auth context
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
