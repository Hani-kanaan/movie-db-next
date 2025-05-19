"use client";
import React from "react";
import Link from "next/link";
import MenuItem from "./menuItem";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import DarkModeSwitch from "./darkModeSwitch";
import SearchBox from "./SearchBox";
export default function Header() {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto items-center py-4">
      <div className="flex flex-1 ">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaInfo} />
        <SearchBox/>
        </div>
        <div className="flex items-center ms-4">
          <DarkModeSwitch />
          <Link href="/">

            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg ms-2">
                IMDB
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      
    </div>
  );
}
