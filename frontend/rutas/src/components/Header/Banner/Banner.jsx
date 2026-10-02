import Profile from "../../Profile/Profile";
function Banner({handlePopup, nombre, imagenPerf, description}) {
    return (
             <div className="banner">
                <img className="banner__imagen" src="https://i.pinimg.com/1200x/6c/12/69/6c1269afc479c6324f1942d7e9300897.jpg" alt="banner"></img>

                <button className="banner__btn"  onClick={()=>handlePopup("banner")}>🔧</button>

                <Profile handlePopup={handlePopup}
                nombre={nombre}
                imagenPerf={imagenPerf}
                description={description}/>
  </div>
      );
}

export default Banner;