import React from "react";

export default function InfoOverlay() {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-20">
      <h2 className="text-white text-2xl font-bold drop-shadow-md">
        Inception <span className="text-sm font-normal opacity-80">(2010)</span>
      </h2>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-yellow-400 text-sm">★★★★★</span>
        <span className="text-white/80 text-xs px-2 py-0.5 bg-white/10 rounded-full backdrop-blur-sm">
          Sci-Fi
        </span>
      </div>
      <p className="text-white/90 text-sm mt-2 line-clamp-2 drop-shadow-sm">
        A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
      </p>
      
    </div>
  );
}