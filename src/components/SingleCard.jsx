import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Button from "./Button";
import Arrow from "./Arrow";

const SingleCard = ({ name, brand, description, price, images }) => {
  return (
    <article>
          <Arrow />
      <div className="md:grid md:grid-cols-2">
        <div>
          <ImageSlider />
          {/* <Image src={images[0]} alt={name} className="w-full" /> Brug det første billede som cover image */}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3>{brand}</h3>
            <h2>{name}</h2>
            <p className="max-w-[50ch]">{description}</p>
          </div>
          <div>
            <h3>Pris: {price} $</h3>
            <Button className="bg-blue-500 text-white p-2 rounded">Læg i kurv</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;