import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import { useState } from "react";

function Main() {
  const [activePopup, setActivePopup] = useState(null);

  function handlePopup(popup) {
    setActivePopup(popup);
  }

  function close() {
    setActivePopup(null);
  }

  return (
    <>
      <Header handlePopup={handlePopup} />

      <Post/>

      {activePopup && (
        <PopupForm close={close} type={activePopup} />
      )}
    </>
  );
}

export default Main;
