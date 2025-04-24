import CartCard from "@/components/CartCard";
import Price from "@/components/Price";

const Kurv = () => {
  return <article className="p-4">
  <h1 className="text-2xl font-bold lg-4">Your Basket</h1>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <CartCard />
    <Price />
  </div>
</article>
};

export default Kurv;
