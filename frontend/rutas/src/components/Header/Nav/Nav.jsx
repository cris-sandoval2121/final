import { User, Home, Search, Heart, LogOut, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__contenedor">
        <li className="nav__links">
          <a href="#">
            <User size={16} /> Perfil
          </a>
        </li>
      </ul>

      <ul className="nav__contenedor">
        <li className="nav__links">
          <Link to="/">
            <Home size={16} /> Home
          </Link>
        </li>
        <li className="nav__links">
          <Link to="/Buscar">
            <Search size={16} /> Buscar
          </Link>
        </li>
        <li className="nav__links">
          <Link to="/guardados">
            <Heart size={16} /> Guardados
          </Link>
        </li>
      </ul>

      <ul className="nav__contenedor">
        <li className="nav__links">
          <a href="#">
            <LogOut size={16} /> Salir
          </a>
        </li>
        <li className="nav__links">
          <a href="#">
            <PencilLine size={16} /> Cambair
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
