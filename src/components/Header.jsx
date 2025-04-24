"use client";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="px-4 py-2">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <div className="text-orange-400 text-3xl font-[Limelight] sm:hidden">
            <Link href="#">LAM.DK</Link>
          </div>
          <div className="flex items-center gap-2">
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
        <div className="hidden sm:block text-orange-400 text-3xl font-[Limelight] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <Link href="#">LAM.DK</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
