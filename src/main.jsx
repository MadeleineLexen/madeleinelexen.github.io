import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes/Routes";
import { ThemeProvider } from "./contexts/ThemeContext";

const redirectPath = new URLSearchParams(window.location.search).get("redirect");

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
