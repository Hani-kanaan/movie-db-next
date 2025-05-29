// functionality for a single movie actions (like , watch later , rate)

"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
export default function MovieActions() {
  const [liked, setLiked] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setLiked(!liked)}
        className={`flex items-center px-3 py-1 rounded-full border text-sm transition ${
          liked
            ? "bg-red-100 text-red-500 border-red-300"
            : "bg-gray-100 text-gray-700 border-gray-300"
        }`}
      >
        <FaHeart className={`w-4 h-4 mr-1 ${liked ? "fill-red-500" : ""}`} />
      </button>

      <button
        onClick={() => setWatchLater(!watchLater)}
        className={`flex items-center px-3 py-1 rounded-full border text-sm transition ${
          watchLater
            ? "bg-yellow-100 text-yellow-600 border-yellow-300"
            : "bg-gray-100 text-gray-700 border-gray-300"
        }`}
      >
        <CiBookmark className="w-4 h-4 mr-1" />
        {watchLater ? "Saved" : "Watch Later"}
      </button>
    </div>
  );
}
