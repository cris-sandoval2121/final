import { useProfile } from "../../contexts/profileContext.jsx";
// import car from "../../contexts/posts.js";




function Post({posts}) {


    const perfilDefault2 = 'https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg';

    const { nombre,
        imagenPerfil,
    } = useProfile();

    
    return (
        <div className=" postCon contenedordos">

            <div className="post__header">
                <h2 className="post__heading"> Agregar Post</h2>
                <button className="post__agregar-btn">+</button>
            </div>


          {posts.map((post, index) => (
  <article className="post" key={index}>

    <div className="post__usuario">
      <div className="post__usuario-info">

        <img
          className="post__usuario-imagen"
          src={imagenPerfil || perfilDefault2}
          alt="Foto de perfil de Cris"
        />

        <h2 className="post__usuario-nombre">
          {nombre || "Usuario"}
        </h2>

      </div>
    </div>

    <div className="post__imagen-contenedor">
       <img
      className="post__imagen"
      src={post.imagen}
      alt="Publicación"
    />
    </div>

   

    <div className="post__contenido">

      <p className="post__comentario">
        {post.texto}
      </p>

      <div className="post__acciones">
        <button className="post__boton">
          Like
        </button>

        <button className="post__boton">
          Guardar
        </button>
      </div>

    </div>

  </article>
))}

        </div>


    );
}

export default Post;