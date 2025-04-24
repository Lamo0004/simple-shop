import Header from "@/components/Header";
import Button from "@/components/Button";
import ButtonNewSide from "@/components/ButtonNewSide";
import Arrow from "@/components/Arrow";
import Card from "@/components/Card";
import CartCard from "@/components/CartCard";
import DropDown from "@/components/DropDown";
import ImageSlider from "@/components/ImageSlider";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h1>HEJ</h1>
      <h2>HEJ</h2>
      <h3>HEJ</h3>
      <p>HEJ</p>
      <Button></Button>
      <ButtonNewSide title="SHOP NU" href="/produkter"></ButtonNewSide>
      <Arrow></Arrow>
      <Card></Card>
      <CartCard></CartCard>
      <DropDown></DropDown>
      <ImageSlider></ImageSlider>
      <Price></Price>
    </div>
  );
}
