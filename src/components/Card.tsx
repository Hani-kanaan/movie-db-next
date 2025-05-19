import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Card({ result }: { result: any }) {
  return (
    <div className=" cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
     <Link href = {`/movie/${result.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        alt="image is not available"
        width={1000}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/loadingSpinner.svg"
      />

      <div className="p-2 ">
        <p className="line-clamp-3">
          {result.overview || "overview unavailable"}
        </p>
        <h2 className="truncate text-lg font-bold">
          {result.title || result.name}
        </h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 me-1 ms-3" />
          {result.vote_average}
        </p>
      </div>
      </Link>
    </div>
  );
}
