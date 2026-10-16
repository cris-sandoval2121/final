import AboutMe from "./AboutMe";
import FeaturedPhotos from "./FeaturedPhotos";
import Statistics from "./Statistics";
import "./Sidebar.css";

function Sidebar({ publicacionesCuenta }) {
  return (
    <aside className="sidebar" aria-label="Información del perfil">
      <AboutMe />
      <Statistics publicacionesCuenta={publicacionesCuenta} />
      <FeaturedPhotos />
    </aside>
  );
}

export default Sidebar;
