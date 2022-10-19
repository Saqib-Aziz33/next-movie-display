import Link from "next/link";

function HeaderItem({ text, to, icon }) {
  return (
    <li className="header-item flex flex-col items-center gap-1 group">
      <Link href={to}>
        <a className="text-2xl md:text-4xl icon group-hover:animate-bounce">
          {icon}
        </a>
      </Link>
      <span className="opacity-0 transition-all text">{text}</span>
    </li>
  );
}
export default HeaderItem;
