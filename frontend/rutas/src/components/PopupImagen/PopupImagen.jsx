import { useEffect } from "react";

function PopupImagen({ close, activePopupImagen, perfil }) {
  const nombre = perfil?.nombre || "Usuario";
  const imagenPerfil =
    perfil?.avatar ||
    "https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg";

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
