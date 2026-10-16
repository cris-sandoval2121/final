import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import CreatePost from "../CreatePost/CreatePost";
import { useState, useEffect } from "react";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";
import Sidebar from "../Sidebar/Sidebar";
import AnimeGallery from "../AnimeGalery/AnimeGalery";
import PopupImagen from "../PopupImagen/PopupImagen";
import {
  getPublicaciones,
  createPublicacion,
  delatePublicacion,
  // updatePost,
  getGuardados,
  posrGuardadosId,
  deleteGuardado,
} from "../../utils/Api";
import { useLocation, useNavigate } from "react-router-dom";

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null);

  const [activee, setActive] = useState(null);
  const [activePopupImagen, setActivePopupImagen] = useState(null); //popup imagentexto

  const [posts, setPosts] = useState([]); //se crea la memoria  donde se guarda el array
  const [Guardado, setGuardados] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingGuardando, setIsLoadingGuardando] = useState(null);
  const [isLoadingBorrando, setIsLoadingBorrando] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!posts.length || !location.hash) return;

    const postId = decodeURIComponent(location.hash.slice(1));
    const elemento = document.getElementById(postId);

    if (!elemento) return;

    elemento.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    navigate(`${location.pathname}${location.search}`, { replace: true });
  }, [posts, location.hash, location.pathname, location.search, navigate]);

  useEffect(() => {
    const cargarGuardadosBtn = async () => {
      try {
        const data = await getGuardados();
        setGuardados(data);
      } catch (error) {
        console.error(error);
      }
    };
    cargarGuardadosBtn();
  }, []);

  useEffect(() => {
    const cargarPublicaciones = async () => {
      setError("");
      setIsLoading(true);
      try {
        const data = await getPublicaciones();

        setPosts([...data].reverse());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    cargarPublicaciones();
  }, []);

  const postTextConect = async (texto, imagen, guardado, likes) => {
    //este es el POST
    //se crea la funsion donde se obtiene la info necesaria
    const nuevoPost = {
      texto: texto,
      imagen: imagen,
      guardado: guardado,
      likes: likes,
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
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    setIsLoadingBorrando(id);
    try {
      await delatePublicacion(id);
      setPosts((previousPosts) =>
        previousPosts.filter((post) => post.id !== id),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingBorrando(null);
    }
  };

  const postGuardados = async (publicacionId) => {
    const guardadoExistente = Guardado.find(
      (guardado) => guardado.publicacionId === publicacionId,
    ); //compara entre el mismo si, y guarda
    setIsLoadingGuardando(publicacionId);

    try {
      // Si ya esta guardado → eliminarlo
      if (guardadoExistente) {
        await deleteGuardado(guardadoExistente.id); // "ojo" id de guuardado no de la publicacion

        setGuardados((prevGuardados) =>
          prevGuardados.filter(
            (guardado) => guardado.id !== guardadoExistente.id, // todos los guardados ecepto el eliminado
          ),
        );
      } else {
        // Si no está guardado → guardarlo
        const idPost = {
          publicacionId: publicacionId,
        };

        const idGuardado = await posrGuardadosId(idPost); //se envia al post guadados

        setGuardados((prevGuardados) => [...prevGuardados, idGuardado]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingGuardando(null);
    }
  };

  function handlePopupImagen(imagen, texto) {
    setActivePopupImagen({ imagen, texto });
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
    setActivePopupImagen(null);
  }

  const publicacionesCuenta = posts.length;

  return (
    <>
      <Header handlePopup={handlePopup} />

      <main className="main-layout">
        <div className="main-layout__feed">
          <CreatePost handlePopupCreatePost={handlePopupCreatePost} />
          <Post
            handlePopupImagen={handlePopupImagen}
            onDeletePost={deletePost}
            posts={posts}
            postGuardados={postGuardados}
            Guardado={Guardado}
            isLoading={isLoading}
            error={error}
            isLoadingGuardando={isLoadingGuardando}
            isLoadingBorrando={isLoadingBorrando}
          />
        </div>
        <Sidebar publicacionesCuenta={publicacionesCuenta} />
        {/* <AnimeGallery /> */}
        {/* <PopupImagen/> */}
      </main>

      {activePopup && <PopupForm close={close} type={activePopup} />}

      {activePopupImagen && (
        <PopupImagen activePopupImagen={activePopupImagen} close={close} />
      )}

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
