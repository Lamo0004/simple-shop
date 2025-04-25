import ImageSlider from "./ImageSlider";
import Button from "./Button";
import Arrow from "./Arrow";

const SingleCard = ({ title, brand, description, price, images }) => {
  return (
    <article className="mx-auto max-w-screen-lg mt-4">
      <Arrow href="/produkter" />
      <div className="md:grid md:grid-cols-2">
        <div>
          <ImageSlider img={images} />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3>{brand}</h3>
            <h2 className="pb-6">{title}</h2>
            <p className="max-w-[50ch] pb-8">{description}</p>
          </div>
          <div className="pb-2">
            <h3>Pris: {price} $</h3>
            <Button>Læg i kurv</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
