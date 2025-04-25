import SingleCard from "@/components/SingleCard.jsx"; // Antag at du har en SingleCard komponent til visning af produktdata

export default async function SingleView({ params }) {
  const { id } = await params; // Få id fra URL'en

  // Hent produktet med det specifikke id
  const data = await fetch(`https://dummyjson.com/products/${id}`); // Denne API kan bruges til at hente et produkt baseret på id

  const productData = await data.json();

  return <SingleCard {...productData} />; // Sender produktdata videre til SingleCard komponenten
}
