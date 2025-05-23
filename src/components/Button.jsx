"use client";
import useCartStore from "@/app/store/cartStore";

const Button = ({ item }) => {
  const { addItem } = useCartStore((state) => state);
  return (
    <button onClick={() => addItem(item)} className="cursor-pointer rounded-full border-2 border-orange-400 px-4 py-2 hover:bg-orange-400 hover:text-[#ededed]">
      Add To Basket
    </button>
  );
};

export default Button;
