import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="bg-amber-200 dark:bg-gray-800">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <NavLink to="/" className="text-2xl font-semibold text-amber-800 dark:text-amber-300">
          MiniMarket
        </NavLink>

        <button
          type="button"
          className="rounded p-2 text-amber-900 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:text-gray-100 dark:hover:bg-gray-700 md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}

        </button>

        <div
          id="primary-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col gap-2 pt-3 font-medium md:flex md:w-auto md:flex-row md:items-center md:gap-4 md:pt-0`}
        >
          <button
            type="button"
            className="flex items-center gap-2 rounded px-3 py-2 text-left hover:bg-amber-300 dark:text-gray-100 dark:hover:bg-gray-700"
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            aria-pressed={isDark}
            onClick={() => setIsDark((current) => !current)}
          >
            {isDark ? <CiSun size={20} /> : <IoMoonOutline size={20} />}
          </button>
          <NavLink
            to="/"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `rounded px-3 py-2 hover:bg-amber-300 dark:text-gray-100 dark:hover:bg-gray-700 ${isActive ? "text-amber-900 dark:text-amber-300" : "text-amber-800"}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/Login"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `rounded px-3 py-2 hover:bg-amber-300 dark:text-gray-100 dark:hover:bg-gray-700 ${isActive ? "text-amber-900 dark:text-amber-300" : "text-amber-800"}`
            }
          >
            Iniciar sesión
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
