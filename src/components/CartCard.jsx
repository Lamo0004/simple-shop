"use client";

import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useCartStore from "@/app/store/cartStore";

const CartCard = ({ item }) => {
  const { removeItem, updateItemQuantity } = useCartStore((state) => state);

  //Funktion kaldes ved klik på minus
  const handleDecrement = () => {
    //Tjekker om quantity er større end 1 – så den ALDRIG går ned på 0 eller negative tal.
    // Hvis betingelsen er opfyldt reduceres mængden med 1
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  //Funktion kaldes ved klik på plus
  const handleIncrement = () => {
    //Øger quantity med 1
    updateItemQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex flex-row max-w-full gap-6 p-1 items-center rounded-md">
      <div className="relative w-32 h-32">
        <Image src={item.thumbnail} alt={item.title} fill className="rounded-md object-cover" />
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-4">
        <div className="flex flex-col justify-center">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p>${item.price}</p>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <button className="text-2xl bg-transparent border-none outline-none hover:text-orange-400 transition cursor-pointer" onClick={handleDecrement}>
              −
            </button>
            <input type="text" value={item.quantity} readOnly className="w-10 text-center text-lg bg-transparent border-none outline-none" /> {/* readOnly sikrer, at brugeren ikke kan skrive direkte i feltet – det skal styres via plus/minus-knapperne. */}
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
