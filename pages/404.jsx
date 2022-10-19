import Link from "next/link";

function NotFound() {
  return (
    <div className="not-found text-center">
      <img
        className="mx-auto d-block my-4"
        src="assets/404.png"
        width={200}
        alt=""
      />
      <h4 className="text-2xl">Page Not Found</h4>
      <Link href="/">
        <a className="px-4 py-2 bg-gray-900 text-white my-2 rounded-md inline-block">
          Back to Home
        </a>
      </Link>
    </div>
  );
}
export default NotFound;
