const ButtonNewSide = ({ title, href }) => {
  return (
    <a className="cursor-pointer rounded-full border-2 border-orange-400 px-4 py-2 hover:bg-orange-400 hover:text-[#ededed] hover:font-bold" href={href}>
      {title}
    </a>
  );
};

export default ButtonNewSide;
