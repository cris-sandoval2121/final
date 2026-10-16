const ANILIST_URL = "https://graphql.anilist.co";

export async function searchAnime(search, signal) {
  const query = `
    query ($search: String!) {
      Page(page: 1, perPage: 10) {
        media(search: $search, type: ANIME) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          episodes
          averageScore
          genres
          description(asHtml: false)
          startDate {
            year
          }
        }
      }
    }
  `;

  const response = await fetch(ANILIST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { search },
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  return result.data.Page.media;
}

export async function getPopularAnime(signal) {
  const query = `
    query {
      Page(page: 1, perPage: 6) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          episodes
          averageScore
          genres
          description(asHtml: false)
          startDate {
            year
          }
        }
      }
    }
  `;

  const response = await fetch(ANILIST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors?.length || !result.data?.Page?.media) {
    throw new Error("No se pudieron obtener los animes populares");
  }

  return result.data.Page.media;
}