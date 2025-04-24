import Image from "next/image";
import Baggrund from "@/images/Baggrund.jpg";

import Button from "./Button";

const Card = () => {
    return (
        <article className="max-w-sm bg-white overflow-hidden text-center p-4">
            <div className="w-full h-auto relative mb-4 rounded-md overflow-hidden">
                <Image
                    src={Baggrund}
                    alt="Placeholder billede"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="rounded-md"
                />
            </div>
            <div className="text-left">
                <h2>Produktnavn</h2>
                <p>Pris</p>

            </div>

            <div className="text-right">
                <Button />
            </div>
        </article>
    );
};

export default Card;
