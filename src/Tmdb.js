const API_KEY = "4d18200dc8d2ad149338689b36a1f4ca";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    const promises = [
      basicFetch(
        `/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`
      ),
      basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
      basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
      basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
      basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
      basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    ];

    const results = await Promise.all(promises);

    return [
      {
        slug: "originals",
        title: "Originais do Luminiflix",
        items: results[0],
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: results[1],
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: results[2],
      },
      {
        slug: "action",
        title: "Ação",
        items: results[3],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: results[4],
      },
      {
        slug: "horror",
        title: "Terror",
        items: results[5],
      },
      {
        slug: "romance",
        title: "Romance",
        items: results[6],
      },
      {
        slug: "documentary",
        title: "Documentario",
        items: results[7],
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
