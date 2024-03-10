import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  russian: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="bg-gray-900 rounded-lg overflow-hidden m-5"
    >
      <div className="relative h-80 sm:h-48 md:h-60 lg:h-80">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">
          {anime.russian}
          <br />({anime.name.replace(/_/g, " ").toUpperCase()})
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-gray-700 text-xs px-2 py-1 rounded uppercase">
            {anime.kind}
          </span>
          <span className="flex items-center space-x-1 text-xs font-semibold text-gray-400">
            <Image src="/episodes.svg" alt="episodes" width={16} height={16} />
            <span>{anime.episodes || anime.episodes_aired}</span>
          </span>
          <span className="flex items-center space-x-1 text-xs font-semibold text-yellow-400">
            <Image src="/star.svg" alt="star" width={16} height={16} />
            <span>{anime.score}</span>
          </span>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
