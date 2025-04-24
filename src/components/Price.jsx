import ButtonNewSide from "./ButtonNewSide";

const Price = () => {
  return (
    <div>
      <h2>Pris i alt</h2>
      <div className="flex justify-between">
        <p>Antal vare</p>
        <p>Pris DKK</p>
      </div>
      <div className="flex justify-between">
        <h3>Total pris</h3>
        <h3>Pris DKK</h3>
      </div>
      <ButtonNewSide title="GÅ TIL KASSEN" href="#"></ButtonNewSide>
    </div>
  );
};

export default Price;
