import Image from "next/image";
import Link from "next/link"; // Importer Link komponenten fra Next.js

import Button from "./Button";

const Card = ({ product }) => {
  // Runder rabatprocenten op eller ned baseret på dens værdi
  const roundedDiscount = product.discountPercentage > 0 ? Math.round(product.discountPercentage) : 0;

  return (
    <article className="relative justify-center w-full max-w-xs flex flex-col bg-white overflow-hidden text-center p-4 rounded shadow ">
      {/* Hvis produktet har rabat, vis badge */}
      {roundedDiscount > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
          <p className="">{roundedDiscount}%</p>
        </div>
      )}
      <Link href={`/produkt/${product.id}`}>
        <div className="w-full aspect-[5/3] relative mb-4 overflow-hidden rounded-md">
          <Image src={product.thumbnail} alt={product.title} fill className="object-cover rounded-md" />
        </div>

        <div className="flex-1 text-left">
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      </Link>{" "}
      {/* Slut Link komponenten */}
      <div className="mt-12 relative">
        {" "}
        {/* Ændret fra absolute til relative */}
        <div className="absolute bottom-4 right-4">
          <Button item={product}>Læg i kurv</Button> {/* Den funktionelle knap */}
        </div>
      </div>
    </article>
  );
};

export default Card;
