"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="-mx-2 sticky top-0 z-50">
      <nav className="p-2 w-full bg-[#ededed] shadow">
        <div className="mx-auto max-w-screen-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div className="flex justify-between items-center w-full sm:w-auto">
            {/* Logoet centreret på mobil */}
            <div className="text-orange-400 text-3xl sm:hidden">
              <Link className="font-logo" href="/">
                LAM.DK
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <li className={`text-m cursor-pointer hover:text-orange-400 ${pathname === "/produkter" ? "text-orange-400 font-semibold" : ""}`}>
                <button onClick={() => router.push("/produkter")}>SHOP</button>
                {/* <Link replace={true} href="/produkter">SHOP</Link> */}
              </li>
              <li className={`hover:text-orange-400 ${pathname === "/kurv" ? "text-orange-400" : ""}`}>
                <Link href="/kurv">
                  <CartIcon> </CartIcon>
                </Link>
              </li>
            </div>
          </div>
          <div className="w-full sm:w-auto sm:order-[-1]">
            <SearchBar />
          </div>

          {/* Logoet centreret på desktop */}
          <div className="hidden sm:block text-orange-400 text-3xl sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link className="font-logo" href="/">
              LAM.DK
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
