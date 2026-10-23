import { useState } from "react";
import { Link } from "react-router-dom";
import { car } from "../../contexts/posts";

// const featuredPhotos = [
//   {
//     src: "https://i.pinimg.com/736x/86/92/ed/8692ed041377064d2811324f9a30b7a2.jpg",
//     alt: "Foto destacada 1",
//   },
//   {
//     src: "https://i.pinimg.com/736x/5a/ca/de/5acaded7ce8e50fdd93984c816b7b9c8.jpg",
//     alt: "Foto destacada 2",
//   },
//   {
//     src: "https://i.pinimg.com/736x/dc/17/e0/dc17e0ccfb861ec002e17e8874e5198b.jpg",
//     alt: "Foto destacada 3",
//   },
//   {
//     src: "https://i.pinimg.com/736x/ce/fe/71/cefe71261c6981e533a2d7b02bd064c3.jpg",
//     alt: "Foto destacada 4",
//   },
//   ...car.slice(0, 2).map((post, index) => ({
//     src: post.imagen,
//     alt: `Foto de publicación ${index + 1}`,
//   })),
// ];





function FeaturedPhotos() {

  const [galeriVerMas, setGaleryVerMas] = useState(false);



const photos = JSON.parse(
  localStorage.getItem("rutas-gallery-photos") || "[]"
);

   const fotosLimite = photos.slice(0, galeriVerMas? 20: 5 );



  return (
    <section className="sidebar__card" aria-labelledby="featured-photos-title">
      <div className="sidebar__card-heading">
        <h2 className="sidebar__title" id="featured-photos-title">
          Galeria
        </h2>
        <Link className="sidebar__text-button" to="/galeria">
          Ver todas
        </Link>
      </div>
      <div className="sidebar__photos">
        {photos.length > 0 ? fotosLimite.map((foto) =>   (<img className="sidebar__gallery" key={foto} src={foto} alt="galeria imagenes " />  ) ) : <p className="sidebar__gallery-text">aun no hay imagenes</p>}


             {!galeriVerMas && photos.length > 5 && (
          <button
            className="sidebar__btn-ver-mas"
            type="button"
            onClick={() => setGaleryVerMas(true)}
          >
            Ver más
          </button>
        )}

   
        
       

      </div>
    </section>
  );
}

export default FeaturedPhotos;
