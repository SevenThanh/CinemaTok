import { getFeedMovies } from "@/lib/tmdb";
import VideoCard from "./VideoCard";

export default async function Feed() {
  const movies = await getFeedMovies();

  return (
    <main className="w-full h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-black">
      {movies.map((movie, index) => (
        <VideoCard 
            key={movie.id} 
            movie={movie} 
            index={index} 
        />
      ))}
    </main>
  );
}