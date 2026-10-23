import {
  CalendarDays,
  Camera,
  Heart,
  MapPin,
  Music4,
  PencilLine,
  Plane,
} from "lucide-react";

const profileDetails = [
  { icon: MapPin, label: "Nicaragua" },
  { icon: CalendarDays, label: "Joined 2024" },
  { icon: Camera, label: "Fotografía" },
  { icon: Plane, label: "Viajes" },
  { icon: Music4, label: "Música" },
  { icon: Heart, label: "Anime" },
];

function AboutMe({perfil, handlePopup}) {
  return (
    <section className="sidebar__card" aria-labelledby="about-me-title">
      <div className="sidebar__card-heading">
        <h2 className="sidebar__title" id="about-me-title">
          Sobre mí
        </h2>
        <button
          className="sidebar__icon-button"
          type="button"
          aria-label="Editar sobre mí"
          onClick={()=> handlePopup('description')}
        
        >
          <PencilLine size={16} />
        </button>
      </div>
      <p className="sidebar__description">{perfil?.description || 'aun no hay datos:3'} </p>
      <ul className="sidebar__details">
        {profileDetails.map(({ icon: Icon, label }) => (
          <li className="sidebar__detail" key={label}>
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutMe;
