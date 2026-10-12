import { useState } from "react";
import { isValidImageUrl } from "../../utils/imageUrlValidation.js";

const MAX_POST_TEXT_LENGTH = 2000;

function CreatePostPopup({ close, postTextConect }) {
  const [createPostInput, setCreatePostInput] = useState("");
  const [createPostImagenInput, setCreatePostImagenInput] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const postText = createPostInput.trim();
    const imageUrl = createPostImagenInput.trim();

    if (!postText) {
      setValidationError("Escribe el contenido de la publicación.");
      return;
    }

    if (postText.length > MAX_POST_TEXT_LENGTH) {
      setValidationError(
        "La publicación no puede superar los 2000 caracteres.",
      );
      return;
    }

    if (!isValidImageUrl(imageUrl)) {
      setValidationError(
        "La URL debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg.",
      );
      return;
    }

    setValidationError("");
    postTextConect(postText, imageUrl);

    close();
  }

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={close}></div>

      <div className="popup__container">
        <div className="popup__header">
          <h2 className="popup__title">Crear publicación</h2>

          <button className="popup__close" type="button" onClick={close}>
            ×
          </button>
        </div>

        <form className="popup__form" noValidate onSubmit={handleSubmit}>
          <textarea
            className="popup__textarea"
            placeholder="¿Qué estás pensando?"
            //guadador de valor
            value={createPostInput}
            onChange={(e) => {
              setCreatePostInput(e.target.value.slice(0, MAX_POST_TEXT_LENGTH));
              setValidationError("");
            }}
          />

          <input
            className="popup__image-url"
            type="text"
            inputMode="url"
            placeholder="Pega la URL de tu imagen..."
            title="La URL debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg."
            value={createPostImagenInput}
            onChange={(e) => {
              setCreatePostImagenInput(e.target.value);
              setValidationError("");
            }}
          />

          {validationError && (
            <p className="popup__validation-error" role="alert">
              {validationError}
            </p>
          )}

          <div className="popup__bottom">
            <button className="popup__publish" type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPopup;
