import Results from "../components/results";
import { requests } from "../utils/requests";

export default function Home({ result }) {
  // console.log(result);
  return (
    <div className="container px-2 my-10">
      <Results results={result.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // runs on server on every request
  const genre = context.query.genre;
  const reqUrl = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`;
  const request = await fetch(reqUrl);
  const result = await request.json();

  return {
    props: {
      result,
    },
  };
}
