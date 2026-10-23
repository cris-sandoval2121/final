import Nav from "../../components/Header/Nav/Nav";
import { useState, useEffect } from "react";
import {
    getPublicaciones,
    getGuardados,
    deleteGuardado,
} from "../../utils/Api";
import { TableOfContents, Grid3x3, Bookmark , Trash} from "lucide-react";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

function Guardados() {
    const [guardados, setGuardados] = useState([]);

    const [clickFlex, setClickFlex] = useState("grid");

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const irAlPost = (postId) => {
        navigate(`/#post-${postId}`);
    };

    useEffect(() => {
        const cargarGuardados = async () => {
            setIsLoading(true);
            try {
                const guardadosData = await getGuardados();
                const publicacionesData = await getPublicaciones();

                const publicacionesGuardadas = guardadosData
                    .map((guardado) => {
                        const post = publicacionesData.find(
                            (p) => String(p.id) === String(guardado.publicacionId),
                        );

                        return post ? { ...post, guardadoId: guardado.id } : null;
                    })
                    .filter(Boolean);

                setGuardados(publicacionesGuardadas);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        cargarGuardados();
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const guardadoId = decodeURIComponent(window.location.hash.slice(1));
        if (!guardadoId) return;

        document.getElementById(guardadoId)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }, [guardados, isLoading]);

    const guardadosFilter = guardados
        .filter((post) => post.id)
        .sort((a, b) => b.id - a.id);

    const borrarGuardado = async (guardadoId) => {
        try {
            await deleteGuardado(guardadoId);

            setGuardados((prev) =>
                prev.filter((post) => post.guardadoId !== guardadoId),
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page">
            <Nav />

            <main className="guardados">
                <div className="guardados__heading">
                    <div className="guardados__text-box">
                        <h1 className="guardados__titulo">Publicaciones guardadas</h1>
                        <p className="guardados__texto">Tus publicaciones favoritas</p>
                    </div>

                    <div className="guardados__texto-box">
                        <p className="guardados__texto-box-dos">
                            {guardadosFilter.length}{" "} {/* => agrega espacioo */}
                            {guardadosFilter.length < 2
                                ? "publicacion guardada"
                                : "publicaciones guardadas"}
                        </p>

                        <div className="guardados__btns">
                            <button
                                className="guardados__btn-grid"
                                onClick={() => setClickFlex("flex")}
                            >
                                <Grid3x3 />
                            </button>
                            <button
                                className="guardados__btn-flex"
                                onClick={() => setClickFlex("grid")}
                            >
                                {" "}
                                <TableOfContents size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={clickFlex === "flex" ? "grid-container" : "flex-container"}
                >
                    {isLoading ? (
                        <Loader />
                    ) : guardadosFilter.length === 0 ? (
                        <p className="error">no se encontraron posts</p>
                    ) : (
                        guardadosFilter.map((posteo) => {
                            const textoCorto =
                                posteo.texto.length > 100
                                    ? posteo.texto.slice(0, 190) + "..."
                                    : posteo.texto;

                            return (
                                <article
                                    className="guardados__post"
                                    id={`guardado-${posteo.id}`}
                                    key={posteo.id}
                                >
                                    <button className="guardado__btn"    onClick={() => irAlPost(posteo.id)}>
                                        <Bookmark />
                                    </button>

                                    <img
                                        className="guardados__post-imagen"
                                        src={posteo.imagen}
                                        alt="imagen"
                                    />

                                    <div className="guardados__post-caja">
                                        <p className="guardados__post-texto">{textoCorto}</p>

                                        <div className="guardados__btn-box">
                                            <button
                                                className="guardado__btn-ver"
                                                onClick={() => irAlPost(posteo.id)}>Ver post
                                            </button>

                                            <button
                                                className="guardado__btn-borrar" 
                                                onClick={() => borrarGuardado(posteo.guardadoId)} > <Trash  size={21}/></button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            </main>
        </div>
    );
}

export default Guardados;
