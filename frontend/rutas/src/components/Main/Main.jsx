import Post from "../Post/Post";
import Header from "../Header/Header";
import PopupForm from "../PopupForm/PopupForm";
import CreatePost from "../CreatePost/CreatePost";
import { useState, useEffect } from "react";
import CreatePostPopup from "../CreatePostPopup/CreatePostPopup";
import Sidebar from "../Sidebar/Sidebar";
import PopupImagen from "../PopupImagen/PopupImagen";
import {
  getPublicaciones,
  createPublicacion,
  delatePublicacion,
  updatePost,
  getGuardados,
  posrGuardadosId,
  deleteGuardado,
  getPerfil,
  postPerfil,
  actualizarPerfil,
} from "../../utils/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { TurtleIcon } from "lucide-react";

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(null);

  const [activee, setActive] = useState(null);
  const [activePopupImagen, setActivePopupImagen] = useState(null); //popup imagentexto

  const [posts, setPosts] = useState([]); //se crea la memoria  donde se guarda el array
  const [Guardado, setGuardados] = useState([]);
  const [perfil, setPerfil] = useState(null);




  const [isProfileLoaded, setIsProfileLoaded] = useState(false);
  const [profileLoadError, setProfileLoadError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingGuardando, setIsLoadingGuardando] = useState(null);
  const [isLoadingBorrando, setIsLoadingBorrando] = useState(null);
  const [isLoadingLike, setIsLoadingLike] = useState(null)
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
    let cancelled = false;

    const cargarGuardadosBtn = async () => {
      try {
        const data = await getGuardados();
        if (!cancelled) setGuardados(data);
      } catch (error) {
        console.error(error);
      }
    };
    cargarGuardadosBtn();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const cargarPublicaciones = async () => {
      setError("");
      setIsLoading(true);
      try {
        const data = await getPublicaciones();

        if (!cancelled) setPosts([...data].reverse());
      } catch (error) {
        console.error(error);
        if (!cancelled) setError("No se pudieron cargar las publicaciones.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    cargarPublicaciones();

    return () => {
      cancelled = true;
    };
  }, []);

  const postTextConect = async (texto, imagen, guardado) => {
    //este es el POST
    //se crea la funsion donde se obtiene la info necesaria
    const nuevoPost = {
      texto: texto,
      imagen: imagen,
      guardado: guardado,
      likes:false,
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


  // click boton => boton otienen id post => boton id cambia a true => put gurada cambio=> guada en memoria o deja igual

  const onLike = async(post)=>{

    const likeCambiado = !post.likes;
   setIsLoadingLike(post.id);

    try { 
      const updateLike = await updatePost(post.id, { likes: likeCambiado,

      });
      setPosts((prevPosts) => prevPosts.map((posteos)=> posteos.id === post.id? updateLike: posteos))
      
    } catch (error) {
      console.error(error)
      
    }finally{
      setIsLoadingLike(null)
    }

  }

  ///////////////////////////////
  // guardados

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

  useEffect(() => {
    let cancelled = false;

    const cargarPerfil = async () => {
      try {
        const data = await getPerfil();
        if (!cancelled) {
          setPerfil(data[0] ?? null);
          setIsProfileLoaded(true);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setProfileLoadError(
            "No se pudo cargar el perfil. Recarga la página antes de editarlo.",
          );
        }
      }
    };

    cargarPerfil();
    return () => {
      cancelled = true;
    };
  }, []);

  const subirPerfil = async (nombre, avatar, description, banner) => {
    if (!isProfileLoaded) {
      throw new Error(
        profileLoadError || "Espera a que termine la carga del perfil.",
      );
    }

    const perfilDatos = {
      nombre,
      avatar: avatar,
      description: description,
      banner,
    };

    try {
      let resultado;

      if (perfil?.id) {
        // Ya existe: editar el perfil
        resultado = await actualizarPerfil(perfil.id, {
          ...perfil,
          ...perfilDatos,
        });
      } else {
        // No existe: crear un perfil nuevo
        resultado = await postPerfil(perfilDatos);
      }

      setPerfil(resultado);
      return resultado;
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
      throw error;
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

  const isProfileLoading = !isProfileLoaded && !profileLoadError;
  const publicacionesCuenta = posts.length;

  return (
    <>
      <Header
        handlePopup={handlePopup}
        perfil={perfil}
        isProfileLoading={isProfileLoading}
      />

      <main className="main-layout">
        <div className="main-layout__feed">
          <CreatePost
            handlePopupCreatePost={handlePopupCreatePost}
            perfil={perfil}
          />
          <Post
            perfil={perfil}
            handlePopupImagen={handlePopupImagen}
            onDeletePost={deletePost}
            posts={posts}
            postGuardados={postGuardados}
            Guardado={Guardado}
            isLoading={isLoading}
            error={error}
            isLoadingGuardando={isLoadingGuardando}
            isLoadingBorrando={isLoadingBorrando}
            onLike={onLike}
            isLoadingLike={isLoadingLike}
  
          />
        </div>
        <Sidebar
          publicacionesCuenta={publicacionesCuenta}
          perfil={perfil}
          handlePopup={handlePopup}
        />
        {/* <AnimeGallery /> */}
        {/* <PopupImagen/> */}
      </main>

      {activePopup && (
        <PopupForm
          key={`${activePopup}-${isProfileLoaded}`}
          close={close}
          type={activePopup}
          perfil={perfil}
          isProfileLoaded={isProfileLoaded}
          profileLoadError={profileLoadError}
          subirPerfil={subirPerfil}
        />
      )}

      {activePopupImagen && (
        <PopupImagen
          activePopupImagen={activePopupImagen}
          close={close}
          perfil={perfil}
        />
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
