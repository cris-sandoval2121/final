import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import CreatePost from "../CreatePost/CreatePost";
import { useState } from "react";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";

function Main() {
  const [activePopup, setActivePopup] = useState(null);

  const [activee, setActive] = useState(null);


  const [textoPost, setTextoPost] = useState();





  function postTextConect(texto){
    setTextoPost(texto);
  }



  function handlePopupCreatePost(popup){
    setActive(popup);
  }

  function handlePopup(popup) {
    setActivePopup(popup);
  }

  function close() {
    setActivePopup(null);
    setActive(null)
  }

  return (
    <>
      <Header handlePopup={handlePopup} />

      <CreatePost  handlePopupCreatePost={handlePopupCreatePost}/>
      <Post textoPost={textoPost}/>

      {activePopup && (
        <PopupForm close={close} type={activePopup} />
      )}

      {activee && (
        <CreatePostPopup  postTextConect={postTextConect} close={close} ></CreatePostPopup>
      )}
    </>
  );
}

export default Main;
