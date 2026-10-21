function CreatePost({ handlePopupCreatePost, perfil }) {
  return (
    <section className="create-post contenedordos">
      <div className="create-post__top">
        <img
          className="create-post__avatar"
          src={
            perfil?.avatar ||
            "https://i.pinimg.com/736x/37/a6/2f/37a62f1efd07210aee6cf44312f08a95.jpg"
          }
          alt="Foto de perfil"
        />

        <button className="create-post__input" onClick={handlePopupCreatePost}>
          ¿Qué estás pensando?
        </button>
      </div>

      <div className="create-post__actions">
        <button className="create-post__action">
          <span className="create-post__icon">▣</span>
          <span>Foto</span>
        </button>

        <button className="create-post__action">
          <span className="create-post__icon">▣</span>
          <span>Video</span>
        </button>

        <button className="create-post__action">
          <span className="create-post__icon">⌖</span>
          <span>Ubicación</span>
        </button>

        <button className="create-post__publish">Publicar</button>
      </div>
    </section>
  );
}

export default CreatePost;
