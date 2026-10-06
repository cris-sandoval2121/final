import AboutMe from "./AboutMe";
import FeaturedPhotos from "./FeaturedPhotos";
import Statistics from "./Statistics";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Información del perfil">
      <AboutMe />
      <Statistics />
      <FeaturedPhotos />
    </aside>
  );
}

export default Sidebar;
