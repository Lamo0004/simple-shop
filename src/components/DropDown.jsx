"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const setActiveCategory = (cat) => {
    setIsActive(`${cat}`);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-orange-400 hover:text-[#ededed] transition duration-200"
      >
        {isActive ? isActive : "Vælg kategori"}
        <IoIosArrowDown
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
          <ul className="py-1">
            {categories && categories.length > 0 ? (
              categories.map((category, index) => (
                <li
                  key={index} // Brug index som nøgle
                  onClick={() => setActiveCategory(category.name)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-400 hover:text-[#ededed] cursor-pointer transition duration-200 capitalize"
                >
                  {category.name} {/* Vis kun "name" fra kategorien */}
                </li>
              ))
            ) : (
              <li className="block px-4 py-2 text-gray-700">No categories available</li> // Hvis der ikke er nogen kategorier
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
