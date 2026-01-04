import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-50 w-full flex items-center justify-between px-4 py-8 bg-gradient-to-b from-black/80 to-transparent">
      <div className="text-white font-black text-xl tracking-tighter drop-shadow-md">
        CT
      </div>
      <div className="flex-1 flex justify-center gap-6 overflow-x-scroll no-scrollbar mx-4">
        <Catetem label="Trending" active />
        <Catetem label="New" />
        <Catetem label="Horror" />
        <Catetem label="More Categories" />
      </div>
      <button className="text-white">
        <SearchIcon />
      </button>

    </nav>
  );
}


function Catetem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span
      className={`text-base font-medium whitespace-nowrap transition-colors drop-shadow-md cursor-pointer ${
        active ? "text-white font-bold border-b-2 border-white pb-0.5" : "text-white/60 hover:text-white"
      }`}
    >
      {label}
    </span>
  );
}

function SearchIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}