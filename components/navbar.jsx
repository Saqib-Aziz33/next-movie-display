import { requests } from "../utils/requests";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar container relative">
      <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll py-4 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={title}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute w-1/12 top-0 right-0 bottom-0 fade-grad" />
    </nav>
  );
}
export default Navbar;
