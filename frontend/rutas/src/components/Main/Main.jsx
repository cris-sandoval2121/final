import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import CreatePost from "../CreatePost/CreatePost";
import { useState } from "react";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
  const [activePopup, setActivePopup] = useState(null);

  const [activee, setActive] = useState(null);

  const [posts, setPosts] = useState([]); //se crea la memoria  donde se guarda el array

  function postTextConect(texto, imagen) {
    //se crea la funsion donde se obtiene la info necesaria
    const nuevoPost = {
      texto: texto,
      imagen: imagen,
    };

    setPosts((prevPosts) => [
      //se modifica la memoria con una copia mas lo nuevos datos
      ...prevPosts,
      nuevoPost,
    ]);
  }

  function handlePopupCreatePost(popup) {
    setActive(popup);
  }

  function handlePopup(popup) {
    setActivePopup(popup);
  }

  function close() {
    setActivePopup(null);
    setActive(null);
  }

  return (
    <>
      <Header handlePopup={handlePopup} />

      <main className="main-layout">
        <div className="main-layout__feed">
          <CreatePost handlePopupCreatePost={handlePopupCreatePost} />
          <Post posts={posts} />
        </div>
        <Sidebar />
      </main>

      {activePopup && <PopupForm close={close} type={activePopup} />}

      {activee && (
        <CreatePostPopup
          postTextConect={postTextConect}
          close={close}
        ></CreatePostPopup> // la function osea posttexconeccte la envia donde obntendra la info
      )}
    </>
  );
}

export default Main;
