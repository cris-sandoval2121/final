import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
function Header({ handlePopup, perfil, isProfileLoading }) {
  return (
    <header className="header contenedor">
      <Nav />
      <Banner
        handlePopup={handlePopup}
        perfil={perfil}
        isProfileLoading={isProfileLoading}
      />
    </header>
  );
}

export default Header;
