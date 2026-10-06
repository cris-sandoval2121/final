import { car } from "../../contexts/posts";

const featuredPhotos = [
  {
    src: "https://i.pinimg.com/736x/86/92/ed/8692ed041377064d2811324f9a30b7a2.jpg",
    alt: "Foto destacada 1",
  },
  {
    src: "https://i.pinimg.com/736x/5a/ca/de/5acaded7ce8e50fdd93984c816b7b9c8.jpg",
    alt: "Foto destacada 2",
  },
  {
    src: "https://i.pinimg.com/736x/dc/17/e0/dc17e0ccfb861ec002e17e8874e5198b.jpg",
    alt: "Foto destacada 3",
  },
  {
    src: "https://i.pinimg.com/736x/ce/fe/71/cefe71261c6981e533a2d7b02bd064c3.jpg",
    alt: "Foto destacada 4",
  },
  ...car.slice(0, 2).map((post, index) => ({
    src: post.imagen,
    alt: `Foto de publicación ${index + 1}`,
  })),
];

function FeaturedPhotos() {
  return (
    <section className="sidebar__card" aria-labelledby="featured-photos-title">
      <div className="sidebar__card-heading">
        <h2 className="sidebar__title" id="featured-photos-title">
          Fotos destacadas
        </h2>
        <button className="sidebar__text-button" type="button">
          Ver todas
        </button>
      </div>
      <div className="sidebar__photos">
        {featuredPhotos.map(({ src, alt }) => (
          <img className="sidebar__photo" src={src} alt={alt} key={src} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedPhotos;
