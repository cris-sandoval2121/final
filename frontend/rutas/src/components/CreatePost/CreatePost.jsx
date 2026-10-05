import { useProfile } from "../../contexts/profileContext.jsx";


function CreatePost({handlePopupCreatePost}) {

                   
const {imagenPerfil} = useProfile();

    return (
        <section className="create-post">
            <div className="create-post__top">
                <img
                    className="create-post__avatar"
                    src={imagenPerfil || 'https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg'}
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

                <button className="create-post__publish">
                    Publicar
                </button>
            </div>
        </section>
    );
}

export default CreatePost;