import { useEffect } from "react";
import { useProfile } from "../../contexts/profileContext.jsx";

function PopupImagen({ close, activePopupImagen }) {
  const { nombre, imagenPerfil } = useProfile();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  return (
    <div className="popup-overlay" onClick={close}>
      <div
        className="popup-imagen"
        role="dialog"
        aria-modal="true"
        aria-label="Publicación"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar publicación"
          onClick={close}
        >
          ×
        </button>
        <div className="popup__usuario-perfil">
          <img
            src={imagenPerfil}
            alt="imagen-perfil "
            className="popup__usuario-perfil-img"
          ></img>
          <p className="popup__usuario-perfil-nombre">{nombre}</p>
        </div>
        <img
          src={activePopupImagen.imagen}
          alt="imagen"
          className="popup__imagen"
        ></img>

        <p className="popup__descrip">{activePopupImagen.texto}</p>
      </div>
    </div>
  );
}

export default PopupImagen;
