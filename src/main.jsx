import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/1.landing_page/Home";
<<<<<<< HEAD
import Cursos from "./pages/3.main_page/PrincipalCursos";
=======
import Profile from "./pages/5.profile/profile";
>>>>>>> 46a5fe7ef83d97fb8abfecc92290dfcf896d52b9

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
