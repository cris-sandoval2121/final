import { useState } from "react";
import { useProfile } from "../../contexts/profileContext";

function PopupForm({ close, type }) {
  const {
    nombre,
    setNombre,
    imagenPerfil,
    setImagenPerfil,
    bannerImagen,
                setBannerImagen,
                sobreMi,
                setSobreMi
  } = useProfile();

  // Estados temporales del formulario
  const [nombreInput, setNombreInput] = useState(nombre);
  const [imagenInput, setImagenInput] = useState(imagenPerfil);

  const [bannerInput, setBannerInput] = useState(bannerImagen);
  const [sobremiInput, setSobreMiInput]= useState(sobreMi);

  function handleSubmit(e) {
    e.preventDefault();

    // Guardamos los cambios en el Context
    setNombre(nombreInput);
    setImagenPerfil(imagenInput);

    setBannerImagen(bannerInput);
    setSobreMi(sobremiInput);

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

            <form className="popup__form" onSubmit={handleSubmit}>
              <label className="popup__label">
                Nombre

                <input
                  className="popup__input"
                  type="text"
                  placeholder="Cris Sandoval"
                  value={nombreInput}
                  onChange={(e) => setNombreInput(e.target.value)}
                />
              </label>

              <label className="popup__label">
                Imagen de perfil

                <input
                  className="popup__input"
                  type="text"
                  placeholder="URL de la imagen"
                  value={imagenInput}
                  onChange={(e) => setImagenInput(e.target.value)}
                />
              </label>

              <button
                className="popup__guardar-perfil"
                type="submit"
              >
                Guardar
              </button>
            </form>
          </>
        )}

        {type === "description" && (
          <>
            <h2 className="popup__title">Editar descripción</h2>

            <form className="popup__form" onSubmit={handleSubmit}>

                 <label className="popup__label">
              Descripción

              <textarea
                className="popup__textarea"
                placeholder="Escribe una descripción..."
                value={sobremiInput}
                onChange={(e)=> setSobreMiInput(e.target.value)}
              />
            </label>

             <button
                className="popup__guardar-perfil"
                type="submit"
              >
                Guardar
              </button>
            
            </form>
         
          </>
        )}

        {type === "banner" && (
          <>
            <h2 className="popup__title">Editar banner</h2>

            <form className="popup__form" onSubmit={handleSubmit}>
                <label className="popup__label">
              Imagen de banner

              <input
                className="popup__input-banner"
                type="text"
                placeholder="URL del banner"
                value={bannerInput}
                onChange={(e)=> setBannerInput(e.target.value)}
              />
            </label>
               <button
                className="popup__guardar-perfil"
                type="submit"
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