import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-5">
      <h2 className="text-3xl text-white font-bold">Explore</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}
