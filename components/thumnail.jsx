import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

function Thumbnail({ item }) {
  // console.log(item);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 relative">
      <Image
        src={
          `${baseUrl}${item.backdrop_path || item.poster_path}` ||
          `${baseUrl}${item.poster_path}`
        }
        height={1080}
        width={1920}
        layout="responsive"
        alt=""
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="my-1 text-2xl transition-all duration-100 group-hover:font-bold">
          {item.title || item.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type} .`}{" "}
          {item.release_date || `${item.first_air_date} .`} <AiOutlineLike />{" "}
          {item.vote_count}
        </p>
      </div>
    </div>
  );
}
export default Thumbnail;
