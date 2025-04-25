import { IoIosArrowBack } from "react-icons/io";

const Arrow = ({ href }) => {
  return (
    <a href={href} className="flex items-center hover:text-orange-400 cursor-pointer w-fit">
      <IoIosArrowBack />
      <p>Tilbage</p>
    </a>
  );
};

export default Arrow;
