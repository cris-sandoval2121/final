import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Nav from "../../components/Header/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import { searchAnime } from "../../utils/animeApi.js";

function Buscar() {
  const [searchText, setSearchText] = useState("");
  const [searchRequest, setSearchRequest] = useState({ query: "", page: 1 });
  const [results, setResults] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchRequest.query) return;

    const controller = new AbortController();

    async function loadAnime() {
      try {
        const response = await searchAnime(
          searchRequest.query,
          searchRequest.page,
          controller.signal,
        );
        setResults(response.anime);
        setHasNextPage(response.hasNextPage);
      } catch (requestError) {
        if (controller.signal.aborted) return;
        setResults([]);
        setHasNextPage(false);
        setError(requestError.message || "No se pudo buscar anime.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadAnime();
    return () => controller.abort();
  }, [searchRequest]);

  function handleSearch(event) {
    event.preventDefault();
    const query = searchText.trim();
    setError("");
    setResults(null);
    setHasNextPage(false);
    setIsLoading(Boolean(query));
    setSearchRequest({ query, page: 1 });
  }

  function changePage(page) {
    setError("");
    setResults(null);
    setHasNextPage(false);
    setIsLoading(true);
    setSearchRequest((currentRequest) => ({
      ...currentRequest,
      page,
    }));
  }

  return (
    <section className="buscar page">
      <Nav />
      <div className="buscar__header">
        <h1 className="buscar__titulo">Buscar</h1>

        <form className="buscar__barra" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            className="buscar__input"
            type="text"
            placeholder="Buscar anime..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <button className="buscar__boton" type="submit">
            Buscar
          </button>
        </form>
      </div>

      <div className="buscar__resultados">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error && <p role="alert">{error}</p>}
            {results?.length === 0 && !error && (
              <p>No se encontraron animes.</p>
            )}
            {results?.map((anime) => {
              const animeData = anime.attributes;
              const title =
                animeData.canonicalTitle ||
                animeData.titles?.en ||
                animeData.titles?.en_jp ||
                animeData.titles?.ja_jp ||
                "Anime";
              const alternateTitle = [
                animeData.titles?.en,
                animeData.titles?.en_jp,
                animeData.titles?.ja_jp,
              ].find((candidate) => candidate && candidate !== title);
              const year = animeData.startDate?.slice(0, 4);
              const imageUrl =
                animeData.posterImage?.large || animeData.posterImage?.original;
                console.log(anime.id)

              return (
                <article className="buscar__resultado" key={anime.id}>
              
                  {imageUrl ? (
                    <img
                      className="buscar__imagen"
                      src={imageUrl}
                      alt={`Portada de ${title}`}
                    />
                  ) : (
                    <div className="buscar__imagen buscar__imagen--vacia">
                      Sin imagen
                    </div>
                  )}

                  <div className="buscar__contenido">
                    <h2>{title}</h2>
                    {alternateTitle && <p>{alternateTitle}</p>}
                    <div className="buscar__datos">
                      {animeData.averageRating != null && (
                        <span>Puntuación: {animeData.averageRating}/100</span>
                      )}
                      {animeData.episodeCount != null && (
                        <span>Episodios: {animeData.episodeCount}</span>
                      )}
                      {animeData.status && (
                        <span>Estado: {animeData.status}</span>
                      )}
                      {year != null && <span>Año: {year}</span>}
                      {animeData.season && (
                        <span>Temporada: {animeData.season}</span>
                      )}
                      {(animeData.subtype || animeData.showType) && (
                        <span>
                          Tipo: {animeData.subtype || animeData.showType}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </>
        )}
      </div>

      {searchRequest.query && (
        <div className="buscar__paginacion">
          <button
            className="buscar__boton"
            type="button"
            disabled={searchRequest.page === 1}
            onClick={() => changePage(searchRequest.page - 1)}
          >
            Anterior
          </button>
          <span>Página {searchRequest.page}</span>
          <button
            className="buscar__boton"
            type="button"
            disabled={!hasNextPage}
            onClick={() => changePage(searchRequest.page + 1)}
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}

export default Buscar;
