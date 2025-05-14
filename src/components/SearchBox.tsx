"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
const router  = useRouter()

 function handleSubmit(e : any){
  e.preventDefault();
  if(!search) return;
  router.push(`/search/${search}`)
 }
  return (
    <form onSubmit={handleSubmit} className="flex   mx-auto justify-between items-center px-5">
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
