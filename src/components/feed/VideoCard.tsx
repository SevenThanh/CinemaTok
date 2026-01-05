import VideoPlayer from "./VideoPlayer";
import InfoOverlay from "./InfoOverlay";
import InteractionBar from "./InteractionBar";

export default function VideoCard({ index }: { index: number }) {
  return (
    <section className="w-full h-full snap-start bg-black border-b border-white/5 relative">
      <VideoPlayer />
      <InfoOverlay />
      <InteractionBar />
    </section>
  );
}