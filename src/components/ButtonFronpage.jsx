const ButtonFrontpage = ({ title, href }) => {
  return (
    <a className="cursor-pointer rounded-full text-2xl border-2 border-orange-400 px-8 py-4 bg-orange-400 hover:bg-[#fb923c90] hover:text-[#ededed] hover:font-bold" href={href}>
      {title}
    </a>
  );
};

export default ButtonFrontpage;
