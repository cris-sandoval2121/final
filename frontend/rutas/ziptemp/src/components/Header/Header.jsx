import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
function Header({ handlePopup }) {
  return (
    <header className="header contenedor">
      <Nav />
      <Banner handlePopup={handlePopup} />
    </header>
  );
}

export default Header;
