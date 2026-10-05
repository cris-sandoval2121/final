import { useProfile } from "../../contexts/profileContext.jsx";



function Post({textoPost}) {


    const perfilDefault2 = 'https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg';

    const { nombre,
        imagenPerfil,
    } = useProfile();

    
    return (
        <div className="contenedor">

            <div className="post__header">
                <h2 className="post__heading"> Agregar Post</h2>
                <button className="post__agregar-btn">+</button>
            </div>


            <article className="post">

                <div className="post__usuario">
                    <div className="post__usuario-info">
                        <img
                            className="post__usuario-imagen"
                            src={imagenPerfil || perfilDefault2} alt="Foto de perfil de Cris" />
                        <h2 className="post__usuario-nombre">{nombre || 'Usuario'}</h2>
                    </div>
                </div>

                <img
                    className="post__imagen"
                    src="https://i.pinimg.com/1200x/cb/e6/d2/cbe6d24ce3ba1618abe4c893cf0dbbec.jpg" alt="Publicación de Cris" />

                <div className="post__contenido">
                    <p className="post__comentario">
                        {textoPost}
                    </p>
                    <div className="post__acciones">
                        <button className="post__boton">Like </button>
                        <button className="post__boton"> Guardar</button>
                    </div>
                </div>

            </article>


        </div>


    );
}

export default Post;