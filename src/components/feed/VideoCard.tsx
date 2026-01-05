export default function VideoCard({ index }: { index: number }) {
  return (
    <section className="w-full h-full snap-start bg-zinc-900 flex items-center justify-center border-b border-white/10">
      <h1 className="text-white text-4xl font-bold">
        #{index}
      </h1>
    </section>
  );
}