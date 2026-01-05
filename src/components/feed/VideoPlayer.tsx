"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900" />
});

interface VideoPlayerProps {
  videoKey: string;
  priority: boolean;
}

export default function VideoPlayer({ videoKey, priority }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(priority); 
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(false);
    setIsPlaying(priority);
  }, [videoKey, priority]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div 
      onClick={togglePlay}
      className="relative w-full h-full bg-black cursor-pointer group overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none scale-[1.35]"> 
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${videoKey}`}
          playing={isPlaying}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          onReady={() => setHasLoaded(true)}
          controls={false}
        />
      </div>
      {!hasLoaded && (
        <div className="absolute inset-0 bg-zinc-900 animate-pulse z-0" />
      )}
      {!isPlaying && hasLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10 backdrop-blur-[2px]">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
    </div>
  );
}