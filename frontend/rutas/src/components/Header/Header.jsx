import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
function Header({handlePopup, nombre, imagenPerf, description}) {
    return (
        <header className="header contenedor">
            <Nav />
            <Banner  handlePopup={handlePopup} 
            nombre={nombre}
            imagenPerf={imagenPerf}
            description={description}/>


        </header>
    );
}

export default Header;