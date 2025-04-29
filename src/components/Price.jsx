import useCartStore from "@/app/store/cartStore";
import ButtonNewSide from "./ButtonNewSide";

const Price = () => {
  const { items } = useCartStore((state) => state);

  // Funktion der beregner den totale pris for alle varer i kurven
  const getTotalPrice = () => {
    return items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0).toFixed(2); // Samler priserne, gange med quantity og runder af til 2 decimaler
  };

  return (
    <article className="max-w-full sticky bottom-0 bg-[#ededed] py-4">
      <hr className="text-[#323232]"></hr>
      <h2>Pris i alt</h2>
      <div className="flex justify-between">
        <p>Antal vare(r):</p>
        <p>{items.reduce((total, item) => total + item.quantity, 0)}</p> {/* Antallet af varer */}
      </div>
      <div className="flex justify-between mt-4">
        <h3>Total pris</h3>
        <h3>${getTotalPrice()}</h3> {/* Den beregnede samlede pris */}
      </div>
      <div className="my-4 justify-self-end">
        <ButtonNewSide title="GÅ TIL KASSEN" href="#"></ButtonNewSide>
      </div>
    </article>
  );
};

export default Price;
