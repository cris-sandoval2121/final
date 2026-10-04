import { User, Home, Search, Heart, LogOut, PencilLine } from "lucide-react";

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
          <a href="#">
            <Home size={16} /> Home
          </a>
        </li>
        <li className="nav__links">
          <a href="#">
            <Search size={16} /> Buscar
          </a>
        </li>
        <li className="nav__links">
          <a href="#">
            <Heart size={16} /> Favoritos
          </a>
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
