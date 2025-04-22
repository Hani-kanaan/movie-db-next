"use client";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
export default function NavbarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className="m-4 hover:text-amber-600 font-semibold p-2"
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
