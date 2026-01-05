import VideoPlayer from "./VideoPlayer";
import InfoOverlay from "./InfoOverlay";
import InteractionBar from "./InteractionBar";
import { Movie } from "@/lib/tmdb"; 

interface VideoCardProps {
  movie: Movie;
  index: number;
}

export default function VideoCard({ movie, index }: VideoCardProps) {
  return (
    <section className="w-full h-full snap-start bg-black border-b border-white/5 relative overflow-hidden">
      <VideoPlayer videoKey={movie.videoKey!} priority={index === 0} />
      <InfoOverlay movie={movie} />
      <InteractionBar movieId={movie.id} />
    </section>
  );
}