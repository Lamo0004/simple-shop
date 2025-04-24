'use client';

import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


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
    <div className="flex max-w-150 bg-amber-200 gap-6 p-4">
      <img
        className="w-full h-auto rounded-md mb-4"
        src="/images/Baggrund.jpg"
        alt="Placeholder billede"
      />
      <div>
        <h3>Produktnavn:</h3>
        <p>Pris:</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          id="minus"
          className="text-2xl bg-transparent border-none outline-none hover:opacity-70 transition"
          onClick={handleDecrement}
        >
          −
        </button>
        <input
          id="input"
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center text-lg bg-transparent border-none outline-none"
        />
        <button
          id="plus"
          className="text-2xl bg-transparent border-none outline-none hover:opacity-70 transition"
          onClick={handleIncrement}
        >
          +
        </button>

      </div>
      <div className="flex items-center justify-center">
      <RxCross2 size={30} className=" text-black hover:opacity-50 transition cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
