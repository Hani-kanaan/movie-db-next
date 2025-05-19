"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (!trimmedSearch) return;
    router.push(`/search/${encodeURIComponent(trimmedSearch)}`);
  }

  return (
    <div className="flex items-center w-full mx-auto bg-white rounded-md overflow-hidden shadow-md border border-gray-300">
      {/* Category  */}
      <div className="relative">
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="appearance-none h-full pl-3 pr-8 py-2 border-r border-gray-300 bg-gray-100 text-gray-700 focus:outline-none"
        >
          <option value="All">All</option>
          <option value="Titles">Titles</option>
          <option value="TV Episodes">TV Episodes</option>
          <option value="Celebs">Celebs</option>
          <option value="Companies">Companies</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex-1 flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full h-10 px-4 py-2 focus:outline-none text-gray-800"
        />
        <button 
          disabled={!search.trim()} 
          type="submit" 
          onClick={handleSubmit}
          className="h-10 w-10 flex items-center justify-center cursor-pointer bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500 text-white"
        >
          <FiSearch className="h-5 w-5"  />
        </button>
      </div>
    </div>
  );
}