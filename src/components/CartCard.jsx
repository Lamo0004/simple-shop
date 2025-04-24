'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Baggrund from "@/images/Baggrund.jpg";

const CartCard = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-full bg-amber-200 gap-6 p-4 items-center rounded-md">
      <div className="relative w-full md:w-32 h-32">
        <Image
          src={Baggrund}
          alt="Placeholder billede"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Produktnavn:</h3>
        <p>Pris:</p>
      </div>
      <div className="flex items-center gap-3 mt-2 md:mt-0">
        <button
          className="text-2xl bg-transparent border-none outline-none hover:opacity-70 transition"
          onClick={handleDecrement}
        >
          −
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center text-lg bg-transparent border-none outline-none"
        />
        <button
          className="text-2xl bg-transparent border-none outline-none hover:opacity-70 transition"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="mt-2 md:mt-0 flex items-center justify-center">
        <RxCross2 size={30} className="text-black hover:opacity-50 transition cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
