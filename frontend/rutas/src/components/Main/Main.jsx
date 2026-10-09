import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import CreatePost from "../CreatePost/CreatePost";
import { useState , useEffect } from "react";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";
import Sidebar from "../Sidebar/Sidebar";
import AnimeGallery from "../AnimeGalery/AnimeGalery";
import { getPublicaciones, createPublicacion, delatePublicacion, updatePost} from "../../utils/Api";

function Main() {
  const [activePopup, setActivePopup] = useState(null);

  const [activee, setActive] = useState(null);

  const [posts, setPosts] = useState([]); //se crea la memoria  donde se guarda el array
 
   useEffect(() => {
    const cargarPublicaciones = async () => {
      try {
        const data = await getPublicaciones();

        setPosts([...data].reverse());
      } catch (error) {
        console.error(error);
      }
    };

    cargarPublicaciones();
  }, []);

  const postTextConect = async (texto, imagen, guardado, likes)=> {  //este es el POST
    //se crea la funsion donde se obtiene la info necesaria
    const nuevoPost = {
      texto: texto,
      imagen: imagen,
      guardado: guardado,
      likes: likes
    };

    try {
        const postCreado = await createPublicacion(nuevoPost);
        setPosts((prevPosts) => [
      //se modifica la memoria con una copia mas lo nuevos datos
       postCreado,
      ...prevPosts,
      /* en lugar de usar nuevoPost use postCreado porque postCreado ya tiene la info despues de [asar porla api] */
    ]);
    } catch (error) {
      console.error(error)
      
    }
  };


  const deletePost = async (id)=> {

    try {
      await delatePublicacion(id);
       setPosts((previousPosts) =>
      previousPosts.filter((post) => post.id !== id),
    );
    } catch (error) {
      console.error(error)
      
    }
   
  }

 const updatePostMain = async (post) => {
  try {
    const updateBtn = await updatePost({ ...post, guardado: !post.guardado});
     console.log("RESPUESTA DEL PATCH:", updateBtn);

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updateBtn.id ? updateBtn : post  /*si post.id es igual a updatebtn.id enmtonces devuelve updatebtn y si no post*/
      )
    );

  } catch (error) {
    console.error(error);
  }
};
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
          <Post posts={posts} onDeletePost={deletePost} updatePostMain={updatePostMain} />
        </div>
        <Sidebar />
        <AnimeGallery />
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
