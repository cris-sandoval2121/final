import { useState } from "react";
import { useProfile } from "../../contexts/profileContext.jsx";
import { Trash2 } from "lucide-react";

function Post({ posts, onDeletePost, postGuardados, Guardado, handlePopupImagen }) {
  const perfilDefault2 =
    "https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg";

  const { nombre, imagenPerfil } = useProfile();




  return (
    <div className="postCon contenedordos">

      <div className="post__header">
        <h2 className="post__heading">
          Publicaciones
        </h2>

        <button className="post__agregar-btn">
          !
        </button>
      </div>

      {posts.map((post) => (
        <PostIndividual
          key={post.id}
          post={post}
          nombre={nombre}
          imagenPerfil={imagenPerfil}
          perfilDefault2={perfilDefault2}
          onDeletePost={onDeletePost}
          postGuardados={postGuardados}
          Guardado={Guardado}
          handlePopupImagen={handlePopupImagen}
        />
      ))}

    </div>
  );
}


function PostIndividual({post,nombre,imagenPerfil,perfilDefault2,onDeletePost, postGuardados, Guardado, handlePopupImagen}) {

  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  const limit = 300;

  const textoLargo = post.texto.length > limit;

  const textoMostrar =
    mostrarCompleto || !textoLargo
      ? post.texto
      : post.texto.slice(0, limit) + "...";

      console.log("POST:", post);
console.log("GUARDADOS:", Guardado);

      const estaGuardado = Guardado.some(
  (guardado) => guardado.publicacionId === post.id
);


  return (
    <article className="post">

      <div className="post__usuario">

        <div className="post__usuario-info">

          <img
            className="post__usuario-imagen"
            src={imagenPerfil || perfilDefault2}
            alt="Foto de perfil"
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
          onClick={()=>handlePopupImagen(post.imagen, post.texto)}
        />

      </div>


      <div className="post__contenido">
        <p className="post__comentario">{textoMostrar}

              {textoLargo && (
                  <button className="post__read-more" type="button" onClick={() => setMostrarCompleto(!mostrarCompleto)}>
                    `{mostrarCompleto  ? "Ver menos": "Ver más"}`
                  </button>
          )}
        </p>


        <div className="post__acciones">

          <button className="post__boton">
            Likes
          </button>


          <button className={`post__boton ${estaGuardado ? "post__btn-guardado" : ""}`} onClick={() => postGuardados(post.id)}>
            {estaGuardado
              ? "Guardado"
              : "Guardar"}
          </button>


          <button
            className="post__boton post__boton--eliminar"
            type="button"
            aria-label="Eliminar publicación"
            title="Eliminar publicación"
            onClick={() =>
              onDeletePost(post.id)
            }
          >
            <Trash2
              size={16}
              aria-hidden="true"
            />
          </button>

        </div>

      </div>

    </article>
  );
}

export default Post;