import Image from "next/image";

import Button from "./Button";

const Card = ({ product }) => {
    return (
        <article className="w-full max-w-xs flex flex-col bg-white overflow-hidden text-center p-4 rounded shadow">
            <div className="w-full aspect-[5/3] relative mb-4 overflow-hidden rounded-md">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            <div className="flex-1 text-left">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>

            <div className="mt-4 text-right">
                <Button />
            </div>
        </article>

    );
};

export default Card;
