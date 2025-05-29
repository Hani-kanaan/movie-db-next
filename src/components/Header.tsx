"use client";
import React from "react";
import Link from "next/link";
import MenuItem from "./menuItem";
import { FaHome, FaInfo } from "react-icons/fa";
import DarkModeSwitch from "./darkModeSwitch";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto items-center py-4 px-4">
      {/* Left side: menu & search */}
      <div className="flex flex-1 items-center gap-4">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfo} />
        <SearchBox />
      </div>

      {/* Right side: dark mode switch, logo, and auth buttons */}
      <div className="flex items-center gap-4">
        <DarkModeSwitch />

        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg ms-2">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>

        {/* Login and Signup buttons */}
        <div className="flex gap-2 ms-4">
          <Link href="/login">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Login
            </button>
          </Link>
          <Link href="/signUp">
            <button className="bg-amber-500 text-black px-4 py-2 rounded-md hover:bg-amber-600">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
