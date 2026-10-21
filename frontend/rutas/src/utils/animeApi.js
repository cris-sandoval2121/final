const KITSU_ANIME_URL = "https://kitsu.io/api/edge/anime";
const RESULTS_PER_PAGE = 3;

export async function searchAnime(query, page, signal) {
  const params = new URLSearchParams({
    "filter[text]": query,
    "page[limit]": String(RESULTS_PER_PAGE),
    "page[offset]": String((page - 1) * RESULTS_PER_PAGE),
  });

  let response;
  try {
    response = await fetch(`${KITSU_ANIME_URL}?${params}`, { signal });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error("No se pudo conectar con Kitsu.", { cause: error });
  }

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al buscar en Kitsu.`);
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error("Kitsu devolvió una respuesta no válida.");
  }

  if (!Array.isArray(payload.data)) {
    throw new Error("La respuesta de Kitsu no contiene resultados válidos.");
  }

  return {
    anime: payload.data,
    hasNextPage: Boolean(payload.links?.next),
  };
}
