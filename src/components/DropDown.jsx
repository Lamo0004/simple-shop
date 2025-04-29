"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ categories, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const dropdownRef = useRef(null); //Her oprettes der en ny refference (ref)
  const router = useRouter();


  const setActiveCategory = (category) => {
    setIsActive(category.name); // Kun gem navnet på den aktive kategori
    setSelectedCategory(category.name); // Vælg kategori og send til forælderen
    setIsOpen(false); // Luk dropdown efter valg
    router.push("?category=" + category.name); // Opdater URL
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Lukker dropdown menuen hvis der klikket udenfor den
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-orange-400 hover:text-[#ededed] transition duration-200">
        {isActive || "Vælg kategori"}
        <IoIosArrowDown className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-20 max-h-[500px] overflow-scroll">
          <ul>
            {categories.map((category) => (
              <li key={category.slug} onClick={() => setActiveCategory(category)} className="block px-4 py-2 text-gray-700 hover:bg-orange-400 hover:text-[#ededed] cursor-pointer transition duration-200 capitalize">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
