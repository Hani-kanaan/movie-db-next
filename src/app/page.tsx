"use  client"
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;
export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {
  const genre = searchParams.genre;
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre==="fetchTopRated" ? "movie/top_rated" : "movie/popular"}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  console.log(res,);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  return <div className="">
    <Results results={results} />
  </div>;
}
