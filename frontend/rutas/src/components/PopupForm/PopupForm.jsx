import { useState } from "react";
import { useProfile } from "../../contexts/profileContext";

const MAX_PROFILE_DESCRIPTION_LENGTH = 80;

function isOptionalHttpUrl(value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) return true;
  if (!/^https?:\/\//i.test(trimmedValue)) return false;

  try {
    const url = new URL(trimmedValue);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function PopupForm({ close, type }) {
  const {
    nombre,
    setNombre,
    imagenPerfil,
    setImagenPerfil,
    bannerImagen,
    setBannerImagen,
    sobreMi,
    setSobreMi,
  } = useProfile();

  // Estados temporales del formulario
  const [nombreInput, setNombreInput] = useState(nombre);
  const [imagenInput, setImagenInput] = useState(imagenPerfil);

  const [bannerInput, setBannerInput] = useState(bannerImagen);
  const [sobremiInput, setSobreMiInput] = useState(sobreMi);
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "perfil") {
      const trimmedName = nombreInput.trim();
      if (trimmedName.length < 2 || trimmedName.length > 60) {
        setValidationError("El nombre debe tener entre 2 y 60 caracteres.");
        return;
      }
      if (!isOptionalHttpUrl(imagenInput)) {
        setValidationError(
          "La imagen debe usar una URL válida con http:// o https://.",
        );
        return;
      }

      setNombre(trimmedName);
      setImagenPerfil(imagenInput.trim());
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

      setSobreMi(trimmedDescription);
    }

    if (type === "banner") {
      if (!isOptionalHttpUrl(bannerInput)) {
        setValidationError(
          "El banner debe usar una URL válida con http:// o https://.",
        );
        return;
      }

      setBannerImagen(bannerInput.trim());
    }

    close();
  }

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close" onClick={close}>
          ✕
        </button>

        {type === "perfil" && (
          <>
            <h2 className="popup__title">Editar perfil</h2>

            <form className="popup__form" noValidate onSubmit={handleSubmit}>
              <label className="popup__label">
                Nombre
                <input
                  className="popup__input"
                  type="text"
                  placeholder="Cris Sandoval"
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
                  title="Ingresa una URL válida que comience con http:// o https://."
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
              <button className="popup__guardar-perfil" type="submit">
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
              <button className="popup__guardar-perfil" type="submit">
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
                  title="Ingresa una URL válida que comience con http:// o https://."
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
              <button className="popup__guardar-perfil" type="submit">
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
