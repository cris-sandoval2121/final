import { useProfile } from "../../contexts/profileContext.jsx";


function PopupImagen({close, activePopupImagen}) {

  const { nombre, imagenPerfil } = useProfile();


    return ( 


        <div className="popup-overlay" onClick={()=>close()}>

            <div className="popup-imagen">
            <div className="popup__usuario-perfil">
                <img src={imagenPerfil} alt="imagen-perfil " className="popup__usuario-perfil-img"></img>
                <p className="popup__usuario-perfil-nombre">{nombre}</p>
            </div>
            <img src={activePopupImagen.imagen} alt="imagen" className="popup__imagen"></img>

            <p className="popup__descrip">{activePopupImagen.texto}</p>
        </div>
        </div>

        
     );
}

export default PopupImagen;