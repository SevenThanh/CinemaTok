import React from "react";
import { Movie } from "@/lib/tmdb";

export default function InfoOverlay({ movie }: { movie: Movie }) {
  const year = movie.release_date?.split("-")[0] || "N/A";
  return (
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent pt-32 pointer-events-none">
      <div className="mb-4 pointer-events-auto inline-block">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          Watch on {movie.provider}
        </button>
      </div>
      <h2 className="text-white text-4xl font-black leading-tight drop-shadow-2xl mb-3 tracking-tight">
        {movie.title}
      </h2>
      <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm font-medium mb-3 tracking-wide">
        <span className="bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider">
          IMDb {movie.vote_average?.toFixed(1)}
        </span>
        <span className="text-white/40">•</span>
        <span>{year}</span>
        <span className="text-white/40">•</span>
        <span className="truncate max-w-[200px]">{movie.genres?.join(", ")}</span>
      </div>
      <p className="text-gray-300 text-sm line-clamp-2 font-normal leading-relaxed max-w-[90%] drop-shadow-md">
        {movie.overview}
      </p>
    </div>
  );
}