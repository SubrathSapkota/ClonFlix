const API_KEY = "c2cc9c816cdcb8472761d6a1d3fe9fa1";

const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/trending/all/day?api_key=${API_KEY}`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;