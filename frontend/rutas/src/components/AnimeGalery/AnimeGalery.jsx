import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function getPlainDescription(description = "") {
  const html = description.replace(/<br\s*\/?>/gi, " ");
  const document = new DOMParser().parseFromString(html, "text/html");
  return document.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

function AnimeGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchImages() {
      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `query {
                Page(page: 1, perPage: 6) {
                  media(type: ANIME, sort: POPULARITY_DESC) {
                    id
                    title { romaji english }
                    coverImage { large }
                    averageScore
                    description(asHtml: false)
                    genres
                    startDate { year }
                    episodes
                  }
                }
              }`,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        const anime = result?.data?.Page?.media;

        if (result.errors?.length || !Array.isArray(anime)) {
          throw new Error("AniList devolvió una respuesta inválida");
        }

        setImages(anime);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setError("No se pudieron cargar las imágenes");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchImages();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Cargando imágenes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="anime-gallery">
      <h2 className="anime-gallery__title">Anime populares</h2>

      <div className="anime-gallery__grid">
        {images.map((anime) => (
          <article className="anime-card" key={anime.id}>
            <img
              className="anime-card__cover"
              src={anime.coverImage.large}
              alt={`Portada de ${anime.title.english || anime.title.romaji}`}
              loading="lazy"
            />
            <div className="anime-card__content">
              <h3 className="anime-card__title">
                {anime.title.english || anime.title.romaji}
              </h3>
              <div className="anime-card__metadata">
                <span className="anime-card__score">
                  <Star size={15} aria-hidden="true" />
                  {anime.averageScore
                    ? `${anime.averageScore}%`
                    : "Sin puntuación"}
                </span>
                {anime.startDate?.year && <span>{anime.startDate.year}</span>}
                {anime.episodes && (
                  <span>
                    {anime.episodes}{" "}
                    {anime.episodes === 1 ? "episodio" : "episodios"}
                  </span>
                )}
              </div>
              {anime.genres?.length > 0 && (
                <ul className="anime-card__genres" aria-label="Géneros">
                  {anime.genres.slice(0, 3).map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              )}
              <p className="anime-card__description">
                {getPlainDescription(anime.description) ||
                  "Sin descripción disponible."}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AnimeGallery;
