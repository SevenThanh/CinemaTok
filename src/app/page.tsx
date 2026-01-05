
import Navbar from "@/components/layout/Navbar";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="bg-black w-[500px] h-screen relative">
        <Navbar />
        <Feed />
      </div>
    </main>
  );
}
