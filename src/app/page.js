import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
export default async function page({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top-rated` : `/trending/all/week`
    }?api_key=${API_KEY} `, {next: {revalidate:10000}}
  );
  const data = res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const results = data.results;
  console.log(results.title);
  return <div>
    <Results results={results} />
  </div>;
}
