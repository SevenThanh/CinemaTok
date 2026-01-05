import React from "react";

export default function InteractionBar() {
  return (
    <div className="absolute bottom-20 right-2 flex flex-col items-center gap-6 z-20">
      <div className="relative group">
         <div className="w-12 h-12 rounded-full bg-white p-[1px]">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
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
      <ActionButton icon={<HeartIcon />} label="8.2k" />
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

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white fill-white/10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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