import { Search } from "lucide-react";
import Nav from "../../components/Header/Nav/Nav";


function Buscar() {

  

  return (
    <section className="buscar">

        <Nav/>
      <div className="buscar__header">
        <h1 className="buscar__titulo">Buscar</h1>

        <div className="buscar__barra">
          <Search size={20} />

          <input
            className="buscar__input"
            type="text"
            placeholder="Buscar publicaciones..."
          />

          <button className="buscar__boton">
            Buscar
          </button>
        </div>
      </div>

      <div className="buscar__resultados">
        <article className="buscar__resultado">
          <img
            className="buscar__imagen"
            src="https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg"
            alt="Publicación"
          />

          <div className="buscar__contenido">
            <h2>Viaje a Japón</h2>
            <p>
              Descubre lugares increíbles para visitar y conocer.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Buscar;