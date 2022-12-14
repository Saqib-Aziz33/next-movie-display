import Thumbnail from "./thumnail";

function Results({ results }) {
  //   console.log(results);
  return (
    <section className="results px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {results.map((item) => (
        <Thumbnail key={item.id} item={item} />
      ))}
    </section>
  );
}
export default Results;
