import ImageSlider from "./ImageSlider";
import Button from "./Button";
import Arrow from "./Arrow";

const SingleCard = ({ title, brand, description, price, images, discountPercentage }) => {

  const roundedDiscount = discountPercentage > 0 ? Math.round(discountPercentage) : 0;

  return (
    <article className="mx-auto max-w-screen-lg mt-4">
      
      

      <Arrow href="/produkter" />
      <div className="md:grid md:grid-cols-2">
        <div>
          <ImageSlider img={images} />
        </div>
        
        <div className="flex flex-col">
          {/* Hvis produktet har rabat, vis badge */}
          {roundedDiscount > 0 && (
            <div className="flex items-center space-x-2 justify-between">
                          <h3 className="font-semibold">{brand}</h3>

              <div className="flex">
              <div className=" bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                SALE
              </div>
              <div className=" flex text-xs text-red-500 font-bold items-center">{roundedDiscount}%</div>
            </div>
            </div>
          )}
          <div>
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
