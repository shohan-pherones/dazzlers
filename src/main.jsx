import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./contexts/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </BlogProvider>
);
