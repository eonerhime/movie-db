import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          width={500} // Adjust width
          height={300} // Adjust height
          src={
            result.backdrop_path || result.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  result.backdrop_path || result.poster_path
                }`
              : "https://via.placeholder.com/300x450?text=No+Image+Available"
          }
          alt={result.title || result.name || "Movie Poster"}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full h-auto object-cover"
          priority
        />
        <div className="p-2">
          <p className="line-clamp-3 text-sm">{result.overview}</p>
          <h2 className="font-bold truncate my-2 text-sm">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-xs">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
