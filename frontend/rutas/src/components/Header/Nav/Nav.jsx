import { User, Home, Search, LogOut, PencilLine, Bookmark, Images } from "lucide-react";
import { Link } from "react-router-dom";


function Nav() {
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
            <Bookmark   size={16} className="nav__heart"  /> Guardados
          </Link>
        </li>
      </ul>

      <ul className="nav__contenedor">
        <li className="nav__links">
          <Link to="/">
            <LogOut size={16} /> Salir
          </Link>
        </li>
        <li className="nav__links">
          <Link to="/">
            <PencilLine size={16} /> Cambair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
