import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Card = ({ product }) => {
  const roundedDiscount = product.discountPercentage > 0 ? Math.round(product.discountPercentage) : 0;

  return (
    <article className="flex flex-col w-full max-w-xs bg-white text-center p-4 rounded shadow">

      {/* Rabat-badge */}
      {roundedDiscount > 0 && (
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded inline-block self-start mb-2">
          SALE {roundedDiscount}%
        </div>
      )}

      {/* Produktbillede */}
      <Link href={`/produkt/${product.id}`} className="w-full">
        <div className="w-full aspect-[5/3] mb-4 overflow-hidden rounded-md">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* Tekstindhold */}
        <div className="flex flex-col text-left gap-1">
          <h4 className="font-semibold">{product.title}</h4>
          <p className="text-gray-700">${product.price}</p>
        </div>
      </Link>

      {/* Knap */}
      <div className="mt-6 self-end">
        <Button item={product}>Læg i kurv</Button>
      </div>

    </article>
  );
};

export default Card;
