import { IoIosArrowBack } from "react-icons/io";

const Arrow = () => {
  return (
    <div className="flex items-center hover:text-orange-400 cursor-pointer w-fit">
      <IoIosArrowBack />
      <p>Tilbage</p>
    </div>
  );
};

export default Arrow;
