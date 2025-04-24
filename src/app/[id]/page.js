import Arrow from "@/components/Arrow";
import ImageSlider from "@/components/ImageSlider";
import Button from "@/components/Button";

const Id = () => {
  return (
    <article>
      <Arrow></Arrow>
      <div className="md:grid md:grid-cols-2 lg:">
        <ImageSlider></ImageSlider>
        <div className="flex flex-col justify-between">
          <div>
            <h3>Brand</h3>
            <h2>Produkt navn</h2>
            <p className="max-w-[50ch]">Beskrivelse af produktet som sikkert er ret laaang. Så det fylder meget på siden.</p>
          </div>
          <div>
            <h3>Pris</h3>
            <Button>LÆG I KURV</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Id;
