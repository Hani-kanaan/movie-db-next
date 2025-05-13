import React from "react";
import Image from "next/image";

async function getMovie(movieId: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

interface Params {
  id: string;
}

export default async function MoviePage({ params }: { params: Params }) {
  const movie = await getMovie(Number(params.id));

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title || "Movie image"}
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            blurDataURL="/loadingSpinner.svg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-2 md:p-8">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>

          <p className="text-lg mb-3 ">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
