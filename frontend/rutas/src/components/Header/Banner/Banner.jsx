import Profile from "../../Profile/Profile";
import { useProfile } from "../../../contexts/profileContext";
import { Wrench, Image } from "lucide-react";

function Banner({ handlePopup }) {
  const { bannerImagen, setBannerImagen } = useProfile('');


  const bannerDefault =
    "https://i.pinimg.com/1200x/c4/d0/91/c4d091b63e312b0dcd91e4bcc12471d6.jpg";

  return (
    <div className="banner">
      <img
        className="banner__imagen"
        src={bannerImagen || bannerDefault}
        alt="banner"
      ></img>

      <button
        className="banner__btn"
        onClick={() => handlePopup("banner")}
        aria-label="Editar banner"
      >
        <Image size={18} />
      </button>

      <Profile handlePopup={handlePopup} />
    </div>
  );
}

export default Banner;
