import { useEffect, useState } from "react";
import {
  User,
  Home,
  Search,
  Bookmark,
  Images,
  Moon,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";

const THEME_STORAGE_KEY = "rutas-theme";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "dark",
  );

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [isDarkMode]);

  return (
    <nav className="nav">
      <ul className="nav__contenedor">
        <li className="nav__links">
          <Link to="/">
            <User size={16} /> Perfil
          </Link>
        </li>
      </ul>

      <ul className="nav__contenedor">
        <li className="nav__links">
          <Link to="/galeria">
            <Images size={16} /> Galeria
          </Link>
        </li>
        <li className="nav__links">
          <Link to="/Buscar">
            <Search size={16} /> Buscar
          </Link>
        </li>
        <li className="nav__links">
          <Link to="/guardados">
            <Bookmark size={16} className="nav__heart" /> Guardados
          </Link>
        </li>
      </ul>

      <ul className="nav__contenedor">
        <li className="nav__theme-item">
          <button
            className="nav__theme-toggle"
            type="button"
            aria-label={
              isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
            }
            aria-pressed={isDarkMode}
            title={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
            onClick={() => setIsDarkMode((currentMode) => !currentMode)}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
