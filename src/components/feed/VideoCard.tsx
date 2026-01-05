import VideoPlayer from "./VideoPlayer";

export default function VideoCard({ index }: { index: number }) {
  return (
    <section className="w-full h-full snap-start bg-black border-b border-white/5 relative">
      <VideoPlayer />
      <h1 className="absolute top-20 left-4 text-white font-bold z-20 drop-shadow-md">
        Movie #{index}
      </h1>
    </section>
  );
}