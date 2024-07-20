const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export const fetchMovieList = async () => {
  try {
    console.log(TMDB_API_KEY)
    const url = `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=ko-KR&sort_by=popularity.desc`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie list');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    return [];
  }
};
