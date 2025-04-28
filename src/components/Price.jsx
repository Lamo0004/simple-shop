import useCartStore from "@/app/store/cartStore";
import ButtonNewSide from "./ButtonNewSide";

const Price = () => {
  const { addItem, items } = useCartStore((state) => state);

  // Funktion der beregner den totale pris for alle varer i kurven
  const getTotalPrice = () => {
    return items.reduce((totalPrice, item) => totalPrice + item.price, 0).toFixed(2); // Samler alle priser og runder af til 2 decimaler
  };

  return (
    <div>
      <h2>Pris i alt</h2>
      <div className="flex justify-between">
        <p>Antal vare(r):</p>
        <p>{items.length}</p>
      </div>
      <div className="flex justify-between">
        <h3>Total pris</h3>
        <h3>${getTotalPrice()}</h3>
      </div>
      <ButtonNewSide title="GÅ TIL KASSEN" href="#"></ButtonNewSide>
    </div>
  );
};

export default Price;
