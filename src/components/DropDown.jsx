"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const Dropdown = () => {
    //Opretter en state-variabel. false = lukket
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
      //Når man klikker på knap, skifter isOpen mellem true og false, så dropdown-menuen vises/skjules.
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-orange-400 hover:text-[#ededed] transition duration-200"
      >
        Vælg kategori
        <IoIosArrowDown 
        className={`transform transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
        />
      </button>

{/* //Hvis "isOpen" er true vises menuen (dropdown). */}
      {isOpen && (
        //&& betyder: "Hvis isOpen er sandt, så gør det her"
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
          <ul className="py-1">
            {/* //En liste (ul) hvor hvert element (li) laves ved at loope over en array */}
            {["Produkt 1", "Produkt 2", "Produkt 3"].map((item) => (
              <li
                key={item}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-400 hover:text-[#ededed] cursor-pointer transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;