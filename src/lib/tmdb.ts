const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  videoKey: string | null;
  provider: string; 
  genres: string[];
}

async function fetchTMDB(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}&language=en-US`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch: ${endpoint}`);
  return res.json();
}

export async function getFeedMovies(): Promise<Movie[]> {
  const data = await fetchTMDB("/trending/movie/week");
  const trendingMovies = data.results.slice(0, 5); 

  const detailedMovies = await Promise.all(
    trendingMovies.map(async (movie: any) => {
      const [videoData, providerData, detailsData] = await Promise.all([
        fetchTMDB(`/movie/${movie.id}/videos`),
        fetchTMDB(`/movie/${movie.id}/watch/providers`),
        fetchTMDB(`/movie/${movie.id}`)
      ]);
      const trailer = videoData.results.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
      );

      const us = providerData.results.US;
      const providerName = 
        us?.flatrate?.[0]?.provider_name || 
        us?.ads?.[0]?.provider_name || 
        us?.rent?.[0]?.provider_name || 
        us?.buy?.[0]?.provider_name;

      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        videoKey: trailer?.key || null,
        provider: providerName || "Rent/Buy", 
        genres: detailsData.genres.map((g: any) => g.name).slice(0, 2),
      };
    })
  );

  return detailedMovies.filter((movie) => movie.videoKey !== null);
}