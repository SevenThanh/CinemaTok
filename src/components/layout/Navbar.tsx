import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-50 w-full flex items-center justify-between px-4 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <div className="text-white font-black text-2xl tracking-tighter drop-shadow-lg shadow-black">
        CT
      </div>
      <div className="flex-1 flex justify-center gap-6 overflow-x-scroll no-scrollbar mx-4 mask-fade">
        <button className="text-white font-bold text-base border-b-2 border-white pb-1 whitespace-nowrap">Trending</button>
        <button className="text-white/70 font-medium text-base hover:text-white transition-colors whitespace-nowrap">New</button>
        <button className="text-white/70 font-medium text-base hover:text-white transition-colors whitespace-nowrap">Sci-Fi</button>
        <button className="text-white/70 font-medium text-base hover:text-white transition-colors whitespace-nowrap">More Categories</button>
      </div>
      <button className="text-white opacity-90 hover:opacity-100 transition-opacity">
        <SearchIcon />
      </button>

    </nav>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}