import useCartStore from "@/app/store/cartStore";
import ButtonNewSide from "./ButtonNewSide";

const Price = () => {
  // Henter arrayet 'items' (varer i kurven) fra Zustand-staten
  const { items } = useCartStore((state) => state);

  // Funktion der beregner den samlede pris for alle items i arrayet (kurven)
  const getTotalPrice = () => {
    return items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0).toFixed(2); // Beregner den totale pris baseret på prisen på varen og antal af varen. Starter med 0 som udgangspunkt. Sørger for at resultatet vises med 2 decimaler.
  };

  return (
    <article className="max-w-full sticky bottom-0 bg-[#ededed] py-4">
      <hr className="text-[#323232]"></hr>
      <h2>Total Price</h2>
      <div className="flex justify-between">
        <p>Number of item(s):</p>
        <p>{items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)}</p> {/* Lægger antal af varer sammen */}
      </div>
      <div className="flex justify-between mt-4">
        <h3>Total Price</h3>
        <h3>$ {getTotalPrice()}</h3> {/* Viser den samlede pris */}
      </div>
      <div className="my-4 justify-self-end">
        <ButtonNewSide title="GÅ TIL KASSEN" href="#"></ButtonNewSide>
      </div>
    </article>
  );
};

export default Price;
