import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/1.landing_page/Home";
import Cursos from "./pages/3.main_page/PrincipalCursos";
import Curso from "./pages/4.course_page/course";
import Profile from "./pages/5.profile/profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/perfil",
    element: <Profile />,
  },
  {
    path: "/curso",
    element: <Curso />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
