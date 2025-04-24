import CartCard from "@/components/CartCard";
import Price from "@/components/Price";

const Kurv = () => {
  return <article className="p-2">
    <h1>Your Basket</h1>
    <CartCard />
    <Price />

  </article>;
};

export default Kurv;
