import Image from "next/image";
import Link from "next/link"; // Importer Link komponenten fra Next.js

import Button from "./Button";

const Card = ({ product }) => {
  return (
    <article className="w-full max-w-xs flex flex-col bg-white overflow-hidden text-center p-4 rounded shadow">
      <Link href={`/produkt/${product.id}`}>
        <div className="w-full aspect-[5/3] relative mb-4 overflow-hidden rounded-md">
          <Image src={product.thumbnail} alt={product.title} fill className="object-cover rounded-md" />
        </div>

        <div className="flex-1 text-left">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </Link>{" "}
      <div className="mt-4 text-right">
        <Button item={product}>Læg i kurv</Button>
      </div>
    </article>
  );
};

export default Card;
