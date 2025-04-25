import SingleCard from "@/components/SingleCard.jsx"; // Antag at du har en SingleCard komponent til visning af produktdata

export default async function SingleView({ params }) {
  const { id } = params; // Få id fra URL'en
  console.log("params: ", id);

  // Hent produktet med det specifikke id
  const data = await fetch(`https://dummyjson.com/products/${id}`); // Denne API kan bruges til at hente et produkt baseret på id
  
  if (!data.ok) {
    console.error("Produktet blev ikke fundet");
    return <div>Produktet blev ikke fundet.</div>;
  }
  
  const productData = await data.json();

  console.log("product: ", productData);

  return <SingleCard {...productData} />; // Sender produktdata videre til SingleCard komponenten
}