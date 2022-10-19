import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./headerItem";
// icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { RiFlashlightLine } from "react-icons/ri";

const Header = () => {
  const iconsSize = 25;
  const logoSize = 80;
  return (
    <header className="p-4 header">
      <nav className="container flex flex-col items-center sm:items-start justify-between gap-4 sm:flex-row">
        <ul className="flex gap-4">
          <HeaderItem text="home" to="/" icon={<AiOutlineHome />} />
          <HeaderItem text="Trending" to="/" icon={<RiFlashlightLine />} />
          <HeaderItem text="search" to="/" icon={<AiOutlineSearch />} />
        </ul>

        <div>
          <Image src="/assets/logo.png" height={40} width={150} alt="" />
        </div>
      </nav>
    </header>
  );
};
export default Header;
