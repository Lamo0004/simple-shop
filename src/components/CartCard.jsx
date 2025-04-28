"use client";

import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useCartStore from "@/app/store/cartStore";

const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { removeItem } = useCartStore((state) => state);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-full gap-6 p-4 items-center rounded-md">
      <div className="relative w-full h-48 md:w-32 md:h-32 shrink-0">
        <Image src={item.thumbnail} alt={item.title} fill className="rounded-md object-cover" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>${item.price}</p>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="text-2xl bg-transparent border-none outline-none hover:text-orange-400 transition cursor-pointer" onClick={handleDecrement}>
              −
            </button>
            <input type="text" value={quantity} readOnly className="w-10 text-center text-lg bg-transparent border-none outline-none" />
            <button className="text-2xl bg-transparent border-none outline-none hover:text-orange-400 transition cursor-pointer" onClick={handleIncrement}>
              +
            </button>
          </div>

          <RxCross2 size={30} onClick={() => removeItem(item)} className="hover:text-orange-400 transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
