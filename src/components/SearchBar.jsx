import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex">
      <IoSearchOutline />
      <input type="text" placeholder="søg"></input>
    </div>
  );
};

export default SearchBar;
