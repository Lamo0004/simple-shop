"use client";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="py-2 mx-auto max-w-screen-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        <div className="flex justify-between items-center w-full sm:w-auto">
          {/* Logoet centreret på mobil */}
          <div className="text-orange-400 text-3xl sm:hidden">
            <Link className="font-logo" href="/">LAM.DK</Link>
          </div>
          <div className="flex items-center gap-6">
            <li className="text-m hover:text-orange-400">
              <Link href="/produkter">SHOP</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link href="/kurv">
                <HiOutlineShoppingBag size={30} />
              </Link>
            </li>
          </div>
        </div>
        <div className="w-full sm:w-auto sm:order-[-1]">
          <SearchBar />
        </div>

        {/* Logoet centreret på desktop */}
        <div className="hidden sm:block text-orange-400 text-3xl sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <Link href="/">LAM.DK</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
