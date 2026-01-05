import React from "react";

export default function InfoOverlay() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/60 to-transparent pt-24">
      <div className="mb-4">
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          Watch on Netflix
        </button>
      </div>
      <h2 className="text-white text-4xl font-black leading-tight drop-shadow-lg mb-2">
        Inception
      </h2>
      <div className="flex items-center gap-3 text-white/90 text-sm font-medium mb-3">
        <span className="bg-yellow-500 text-black px-1.5 rounded text-xs font-bold">IMDb 8.8</span>
        <span>•</span>
        <span>2010</span>
        <span>•</span>
        <span>Sci-Fi</span>
        <span>•</span>
        <span>2h 28m</span>
      </div>
      <p className="text-white/70 text-sm line-clamp-2 font-light">
        A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea...
      </p>
    </div>
  );
}