import Image from "next/image";

import Button from "./Button";

const Card = ({ product }) => {
    return (
        <article className="max-w-sm bg-white overflow-hidden text-center p-4">
            <div className="w-full h-auto relative mb-4 rounded-md overflow-hidden">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    className="max-w-[500px] rounded-md"
                />
            </div>
            <div className="text-left">
                <h3>{product.title}</h3>
                <p>${product.price}</p>

            </div>

            <div className="text-right">
                <Button />
            </div>
        </article>
    );
};

export default Card;
