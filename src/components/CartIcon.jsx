"use client";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useCartStore from "@/app/store/cartStore";

const CartIcon = () => {
  const { items } = useCartStore();

  return (
    <div className="relative">
      <HiOutlineShoppingBag size={35} />
      {items.length > 0 && <span className="absolute bottom-0 right-0 bg-orange-400 text-white rounded-full text-xs px-2 py-1">{items.reduce((total, item) => total + item.quantity, 0)}</span>}
    </div>
  );
};

export default CartIcon;
