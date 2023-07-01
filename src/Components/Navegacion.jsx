import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navegacion = ({ handleMenu }) => {
  return (
<<<<<<< HEAD
    <div className="w-10/12 pt-4 pb-8 mx-auto text-white">
      {isLogged ? (
        <nav className="flex gap-6 flex-row justify-between items-center h-full">
          <a href="/">{"StuCode (>'-'<)"}</a>

          {/* <button
            className="block md:hidden ml-4 text-white"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button> */}

          <ul
            className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:flex-row gap-6`}
          >
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Comunidad</a>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
          </ul>

          <ul className="flex flex-row">
            <li>
              <button
                onClick={() => {
                  setIsLogged(false);
                }}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex  gap-6 flex-row justify-between items-center align-middle h-full">
          <p className="hover:cursor-pointer">{"StuCode (>'-'<)"}</p>
          {/* 
=======
    <div className="w-full sm:w-10/12 pt-4 pb-8 mx-auto text-white">
      <nav className="flex gap-6 flex-row justify-between items-center align-middle h-full">
        <section className="flex gap-5 sm:gap-10">
>>>>>>> 46a5fe7ef83d97fb8abfecc92290dfcf896d52b9
          <button
            className="block sm:hidden ml-4 text-white"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <p className="hover:cursor-pointer">{"StuCode (>'-'<)"}</p>
          <ul className="hidden lg:flex gap-6">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Comunidad</a>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
          </ul>
        </section>
        <ul className="hidden sm:flex flex-row gap-1 sm:gap-6">
          <li>
            <Button name={"Iniciar sesión"}></Button>
          </li>
          <li>
            <Button className="bg-white text-red-800" name={"Registrarse"} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navegacion;

const Button = ({ name, className }) => (
  <button
    className={`text-[10px] sm:text-sm  font-medium border-2 px-4 py-1 rounded-xl ${className}`}
  >
    {name}
  </button>
);
