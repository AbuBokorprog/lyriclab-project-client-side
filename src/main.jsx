import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
//max-w-screen-lg mx-auto
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <HelmetProvider>
      <AuthProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AuthProvider>
    </HelmetProvider>
  </div>
);
