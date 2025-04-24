import Button from "./Button";

const Card = () => {
    return (<article className="max-w-sm bg-white overflow-hidden text-center p-4">
        <img className="w-full h-auto rounded-md mb-4" src="/images/Baggrund.jpg" alt="Placeholder billede" />
        <h2>Produktnavn</h2>
        <p>Pris</p>
        <Button />
    </article>);
}

export default Card;