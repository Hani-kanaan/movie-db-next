"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  return (
    <form className="flex   mx-auto justify-between items-center px-5">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for something..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      ></input>
      <button disabled={!search} type="submit" className="disabled:text-gray-400 text-amber-600">Search</button>
    </form>
  );
}
