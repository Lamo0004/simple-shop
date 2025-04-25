import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-sm">
      <input type="text" placeholder="Søg" className="w-full py-2 pr-10 pl-4 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400" />
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-600">
        <IoSearchOutline />
      </div>
    </div>
  );
};

export default SearchBar;
