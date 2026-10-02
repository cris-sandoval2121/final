function Nav() {
    return ( 
         <nav className="nav">
                <ul className="nav__contenedor">
                    <li className="nav__links"><a href="#">Perfil</a></li>

                </ul>

                <ul className="nav__contenedor">
                    <li className="nav__links"><a href="#">Home</a></li>
                    <li className="nav__links"><a href="#">Buscar</a></li>
                    <li className="nav__links"><a href="#">Favoritos</a></li>
                </ul>

                <ul className="nav__contenedor">
                    <li className="nav__links"><a href="#">Salir</a></li>
                    <li className="nav__links"><a href="#">Cambair</a></li>
                </ul>

            </nav>
     );
}

export default Nav;