import { getProducts, getCategories, getProductsByCat } from "@/api/dummyServer"; //samlet de to da de er fra samme fil
import ListClientWithFilter from "@/components/ListClientWithFilter"; //importere der hvor produkterne vises.

const Produkter = async ({ searchParams }) => {
  // HENTER SEARCHPARAMS
  const { category } = await searchParams;

  // HENTER DATA FRA API
  const productsData = category ? await getProductsByCat(category) : await getProducts(); //henter alle produkter
  const categoriesData = await getCategories(); //henter alle kategorier

  // Maks produkter, så der er bedre performance
  const limitedProducts = productsData.slice(0, 200);

  // Sortér produkterne efter rabatprocenten (fra højeste til laveste)
  const sortedProducts = [...limitedProducts].sort((a, b) => b.discountPercentage - a.discountPercentage);

  return (
    <article>
      <ListClientWithFilter products={sortedProducts} categories={categoriesData} activeCat={category} />
    </article>
  );
};

export default Produkter;
