import VideoCard from "./VideoCard";

export default function Feed() {
  const videos = [1, 2, 3, 4, 5];
  return (
    <main className="w-full h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {videos.map((id) => (
        <VideoCard key={id} index={id} />
      ))}
    </main>
  );
}