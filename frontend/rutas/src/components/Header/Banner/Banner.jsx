import Profile from "../../Profile/Profile";
import { Image } from "lucide-react";
import Loader from "../../Loader/Loader";

function Banner({ handlePopup, perfil, isProfileLoading }) {
  const bannerDefault =
    "https://i.pinimg.com/736x/37/a6/2f/37a62f1efd07210aee6cf44312f08a95.jpg";

  return (
    <div className="banner">
      {isProfileLoading ? (
        <div className="banner__loading">
          <Loader />
        </div>
      ) : (
        <>
          <img
            className="banner__imagen"
            src={perfil?.banner || bannerDefault}
            alt="banner"
          ></img>

          <button
            className="banner__btn"
            onClick={() => handlePopup("banner")}
            aria-label="Editar banner"
          >
            <Image size={18} />
          </button>

          <Profile handlePopup={handlePopup} perfil={perfil} />
        </>
      )}
    </div>
  );
}

export default Banner;
