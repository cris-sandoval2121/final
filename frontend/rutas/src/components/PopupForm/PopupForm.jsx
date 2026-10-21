import { useEffect, useState } from "react";
import { isValidImageUrl } from "../../utils/imageUrlValidation.js";

const MAX_PROFILE_DESCRIPTION_LENGTH = 80;

function PopupForm({
  close,
  type,
  perfil,
  isProfileLoaded,
  profileLoadError,
  subirPerfil,
}) {
  // Estados temporales del formulario
  const [nombreInput, setNombreInput] = useState(perfil?.nombre || "Usuario");
  const [imagenInput, setImagenInput] = useState(
    perfil?.avatar ||
      "https://i.pinimg.com/736x/19/c5/3c/19c53c3030d61e2730fe81eae112049d.jpg",
  );
  const [bannerInput, setBannerInput] = useState(
    perfil?.banner ||
      "https://i.pinimg.com/originals/c7/1f/1c/c71f1cd83ea73ab458eabe8fed20687f.gif",
  );
  const [sobremiInput, setSobreMiInput] = useState(perfil?.description || "");
  const [validationError, setValidationError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (type === "perfil") {
      const trimmedName = nombreInput.trim();
      if (trimmedName.length < 2 || trimmedName.length > 60) {
        setValidationError("El nombre debe tener entre 2 y 60 caracteres.");
        return;
      }
      if (imagenInput.trim() && !isValidImageUrl(imagenInput)) {
        setValidationError(
          "La imagen debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg.",
        );
        return;
      }
    }

    if (type === "description") {
      const trimmedDescription = sobremiInput.trim();
      if (
        trimmedDescription.length < 10 ||
        trimmedDescription.length > MAX_PROFILE_DESCRIPTION_LENGTH
      ) {
        setValidationError(
          "La descripción debe tener entre 10 y 80 caracteres.",
        );
        return;
      }
    }

    if (type === "banner") {
      if (bannerInput.trim() && !isValidImageUrl(bannerInput)) {
        setValidationError(
          "El banner debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg.",
        );
        return;
      }
    }

    if (!isProfileLoaded) {
      setValidationError(
        profileLoadError || "Espera a que termine la carga del perfil.",
      );
      return;
    }

    setIsSaving(true);
    try {
      await subirPerfil(
        nombreInput.trim(),
        imagenInput.trim(),
        sobremiInput.trim(),
        bannerInput.trim(),
      );
      close();
    } catch (error) {
      setValidationError(error.message || "No se pudo guardar el perfil.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div
      className="popup"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="popup__container" role="dialog" aria-modal="true">
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={close}
        >
          ✕
        </button>

        {profileLoadError && (
          <p className="popup__validation-error" role="alert">
            {profileLoadError}
          </p>
        )}

        {type === "perfil" && (
          <>
            <h2 className="popup__title">Editar perfil</h2>

            <form className="popup__form" noValidate onSubmit={handleSubmit}>
              <label className="popup__label">
                Nombre
                <input
                  className="popup__input"
                  type="text"
                  placeholder="Usuario:3"
                  value={nombreInput}
                  onChange={(e) => {
                    setNombreInput(e.target.value.slice(0, 60));
                    setValidationError("");
                  }}
                />
              </label>

              <label className="popup__label">
                Imagen de perfil
                <input
                  className="popup__input"
                  type="text"
                  inputMode="url"
                  placeholder="URL de la imagen"
                  title="La URL debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg."
                  value={imagenInput}
                  onChange={(e) => {
                    setImagenInput(e.target.value);
                    setValidationError("");
                  }}
                />
              </label>

              {validationError && (
                <p className="popup__validation-error" role="alert">
                  {validationError}
                </p>
              )}
              <button
                className="popup__guardar-perfil"
                type="submit"
                disabled={isSaving || !isProfileLoaded}
              >
                Guardar
              </button>
            </form>
          </>
        )}

        {type === "description" && (
          <>
            <h2 className="popup__title">Editar descripción</h2>

            <form className="popup__form" noValidate onSubmit={handleSubmit}>
              <label className="popup__label">
                Descripción
                <textarea
                  className="popup__textarea"
                  placeholder="Escribe una descripción..."
                  value={sobremiInput}
                  onChange={(e) => {
                    setSobreMiInput(
                      e.target.value.slice(0, MAX_PROFILE_DESCRIPTION_LENGTH),
                    );
                    setValidationError("");
                  }}
                />
                <small className="popup__character-count" aria-live="polite">
                  {sobremiInput.length}/{MAX_PROFILE_DESCRIPTION_LENGTH}{" "}
                  caracteres
                </small>
              </label>

              {validationError && (
                <p className="popup__validation-error" role="alert">
                  {validationError}
                </p>
              )}
              <button
                className="popup__guardar-perfil"
                type="submit"
                disabled={isSaving || !isProfileLoaded}
              >
                Guardar
              </button>
            </form>
          </>
        )}

        {type === "banner" && (
          <>
            <h2 className="popup__title">Editar banner</h2>

            <form className="popup__form" noValidate onSubmit={handleSubmit}>
              <label className="popup__label">
                Imagen de banner
                <input
                  className="popup__input-banner"
                  type="text"
                  inputMode="url"
                  placeholder="URL del banner"
                  title="La URL debe terminar en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg."
                  value={bannerInput}
                  onChange={(e) => {
                    setBannerInput(e.target.value);
                    setValidationError("");
                  }}
                />
              </label>
              {validationError && (
                <p className="popup__validation-error" role="alert">
                  {validationError}
                </p>
              )}
              <button
                className="popup__guardar-perfil"
                type="submit"
                disabled={isSaving || !isProfileLoaded}
              >
                Guardar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupForm;
