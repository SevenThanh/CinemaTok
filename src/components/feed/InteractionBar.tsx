"use client";

import React, { useState } from "react";
import { useAudio } from "@/hooks/useAudioContext";

export default function InteractionBar({ movieId }: { movieId: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const { isMuted, toggleMute } = useAudio();

  return (
    <div className="absolute bottom-20 right-2 flex flex-col items-center gap-6 z-20 pointer-events-auto">
      <button
        onClick={toggleMute}
        className="flex flex-col items-center gap-1 group"
      >
        <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full transition-all group-active:scale-90 hover:bg-black/60">
          {isMuted ? <MutedIcon /> : <UnmutedIcon />}
        </div>
      </button>

      <div className="relative group">
         <div className="w-12 h-12 rounded-full bg-white p-[1px]">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${movieId}`} 
              alt="User" 
              className="w-full h-full rounded-full bg-black"
            />
         </div>
         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 rounded-full p-[2px]">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
            </svg>
         </div>
      </div>

      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="flex flex-col items-center gap-1 group"
      >
        <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full transition-all group-active:scale-90 hover:bg-black/60">
          <HeartIcon filled={isLiked} />
        </div>
        <span className="text-white text-xs font-medium drop-shadow-md opacity-90">
            {isLiked ? "8.3k" : "8.2k"}
        </span>
      </button>

      <ActionButton icon={<BookmarkIcon />} label="Save" />
      <ActionButton icon={<ShareIcon />} label="Share" />
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 group">
      <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full transition-all group-active:scale-90 hover:bg-black/60">
        {icon}
      </div>
      <span className="text-white text-xs font-medium drop-shadow-md opacity-90">{label}</span>
    </button>
  );
}

const MutedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>
);

const UnmutedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-8 h-8 transition-colors ${filled ? "text-red-500 fill-red-500" : "text-white fill-white/10"}`} 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={filled ? 0 : 2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);