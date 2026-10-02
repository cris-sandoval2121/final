
function Post() {
    return (
        <article className="post">

            <div className="post__usuario">
                <div className="post__usuario-info">
                    <img
                        className="post__usuario-imagen"
                        src="https://i.pinimg.com/100x100/13/b8/c1/13b8c10b52b4b986422bbdc66f9fe9da.jpg"alt="Foto de perfil de Cris" />
                    <h2 className="post__usuario-nombre"> Cris Sandoval</h2>
                </div>
            </div>

            <img
                className="post__imagen"
                src="https://i.pinimg.com/1200x/cb/e6/d2/cbe6d24ce3ba1618abe4c893cf0dbbec.jpg"alt="Publicación de Cris" />

            <div className="post__contenido">
                <p className="post__comentario">
                    Explorando nuevos lugares y creando recuerdos. lorem
                </p>
                <div className="post__acciones">
                    <button className="post__boton">Like </button>
                    <button className="post__boton"> Guardar</button>
                </div>
            </div>

        </article>
    );
}

export default Post;