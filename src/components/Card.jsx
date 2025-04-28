import Image from "next/image";
import Link from "next/link"; // Importer Link komponenten fra Next.js

import Button from "./Button";

const Card = ({ product }) => {
  return (
    //har tilføjet nth.. for at fortælle at der skal kun være på de første 6.
    <article className="relative w-full max-w-xs flex flex-col bg-white overflow-hidden text-center p-4 rounded shadow group">
{/* Hvis produktet har rabat, vis badge */}
{product.discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded group-[:nth-child(-n+6)]:block hidden">
          SALE
        </div>
      )}

      <Link href={`/produkt/${product.id}`}>
        <div className="w-full aspect-[5/3] relative mb-4 overflow-hidden rounded-md">
          <Image src={product.thumbnail} alt={product.title} fill className="object-cover rounded-md" />
        </div>

        <div className="flex-1 text-left">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p className="group-[:nth-child(-n+6)]:block hidden">{product.discountPercentage}%</p>
        </div>
      </Link>{" "}
      {/* Slut Link komponenten */}
      <div className="mt-4 text-right">
        <Button item={product}>Læg i kurv</Button> {/* Den funktionelle knap */}
      </div>
    </article>
  );
};

export default Card;
