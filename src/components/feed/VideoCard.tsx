"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import InfoOverlay from "./InfoOverlay";
import InteractionBar from "./InteractionBar";
import { Movie } from "@/lib/tmdb";

interface VideoCardProps {
  movie: Movie;
  index: number;
}

export default function VideoCard({ movie, index }: VideoCardProps) {
  const [isActive, setIsActive] = useState(index === 0);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={cardRef}
      className="w-full h-full snap-start bg-black border-b border-white/5 relative overflow-hidden"
    >
      <VideoPlayer videoKey={movie.videoKey!} isActive={isActive} />
      <InfoOverlay movie={movie} />
      <InteractionBar movieId={movie.id} />
    </section>
  );
}