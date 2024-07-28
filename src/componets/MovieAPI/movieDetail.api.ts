const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export const MovieDetail = async (mv_id : number) => {
  try {
    console.log(TMDB_API_KEY)
    const movieId = mv_id;
    const url = `${TMDB_API_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ko-KR`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie list');
    }
    const data = await response.json();
    console.log(data)
    
    return data;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    return [];
  }
};

 