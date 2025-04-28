"use client";
import CartCard from "@/components/CartCard";
import Price from "@/components/Price";
import useCartStore from "@/app/store/cartStore";

const Kurv = () => {
  const items = useCartStore((state) => state.items);

  return (
    <article className="p-4">
      <h1 className="text-2xl font-bold lg-4">Your Basket</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>{items && items.length > 0 ? items.map((item) => <CartCard key={item.id} item={item} />) : <p>No products in have been added to the basket</p>}</div>
        <Price />
      </div>
    </article>
  );
};

export default Kurv;
