import {
  Camera,
  Sparkles,
  Plane,
  Music4,
  BookOpenText,
  PencilLine,
  FileText,
} from "lucide-react";
import { useProfile } from "../../contexts/profileContext";

function Profile({ handlePopup }) {
  const {
    nombre,
    setNombre,
    imagenPerfil,
    setImagenPerfil,

    sobreMi,
  } = useProfile();

  const perfilDeafault = 'https://i.pinimg.com/736x/f1/f4/70/f1f47023de6ab6a5c2dc37a6853c0f24.jpg';
  const Namedeafault = 'Cris Sandoval';
  const sobreMideafault = 'Me gusta tomar fotografias y viajar...';
  return (
    <div className="perfil">
      <img
        className="perfil__imagen"
        src={imagenPerfil || perfilDeafault}
        alt="imagen de perfil"
      ></img>
      <div className="perfil__gustos">
        <button className="perfil__gustos-btn">
          <Camera size={16} /> Fotos
        </button>
        <button className="perfil__gustos-btn">
          <Sparkles size={16} /> Anime
        </button>
        <button className="perfil__gustos-btn">
          <Plane size={16} /> Viajes
        </button>
        <button className="perfil__gustos-btn">
          <Music4 size={16} /> Musica
        </button>
        <button className="perfil__gustos-btn">
          <BookOpenText size={16} /> Historis
        </button>
      </div>
      <div className="perfil__tableros">
        <img
          className="perfil__tableros-imagenes"
          src="https://i.pinimg.com/736x/86/92/ed/8692ed041377064d2811324f9a30b7a2.jpg"
        ></img>
        <img
          className="perfil__tableros-imagenes"
          src="https://i.pinimg.com/736x/5a/ca/de/5acaded7ce8e50fdd93984c816b7b9c8.jpg"
        ></img>

        <img
          className="perfil__tableros-imagenes"
          src="https://i.pinimg.com/736x/dc/17/e0/dc17e0ccfb861ec002e17e8874e5198b.jpg"
        ></img>
        <img
          className="perfil__tableros-imagenes"
          src="https://i.pinimg.com/736x/ce/fe/71/cefe71261c6981e533a2d7b02bd064c3.jpg"
        ></img>
      </div>


      <div className="perfil__card">
        <h1 className="perfil__nombre">{nombre || Namedeafault}</h1>
        <p className="perfil__descrip">{sobreMi || sobreMideafault}</p>
      </div>


      <div className="perfil__btn">
        <button
          className=" perfil__editar perfil__editaruno "
          onClick={() => handlePopup("perfil")}
        >
          <PencilLine size={16} /> Editar Perfil
        </button>
        <button
          className="perfil__editar"
          onClick={() => handlePopup("description")}
        >
          <FileText size={16} /> Editar description
        </button>
      </div>
    </div>
  );
}

export default Profile;
