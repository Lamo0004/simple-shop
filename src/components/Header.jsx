"use client";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-between">
        <li className="text-orange-400 font-bold">
          <Link href="#">LOGO</Link>
        </li>
        <li>
          <Link href="/produkter">PRODUKTER</Link>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <Link href="/kurv">
            <HiOutlineShoppingBag size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
