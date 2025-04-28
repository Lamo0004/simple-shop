"use client"; // Gør, at denne komponent køres som en client-side komponent i Next.js
 
import { useState, useEffect } from "react"; // Importer hooks fra React
import { getProducts, getCategories } from "@/api/dummyServer"; //samlet de to da de er fra samme fil
import ListClientWithFilter from "@/components/ListClientWithFilter"; //importere der hvor produkterne vises. 

const Produkter = () => {
  const [products, setProducts] = useState([]); // State til produkterne
  const [categories, setCategories] = useState([]); // State til Kategotierne

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts(); //henter alle produkter
      const categoriesData = await getCategories(); //henter alle kategorier

      // Maks produkter, så der er bedre performance
      const limitedProducts = productsData.slice(0, 40);

      // Find produkter med rabat
      const discountedProducts = limitedProducts.filter(p => p.discountPercentage > 0);

      // Sortér rabat-produkterne så dem med størst rabat kommer først
      const sortedProducts = [...discountedProducts].sort((a, b) => b.discountPercentage - a.discountPercentage);

      // Vælg de 6 produkter med højest rabat
      const top6Discounted = sortedProducts.slice(0, 6);

      // Find de resterende produkter, baseret på LIMITED data (resten af produkterne)
      const remainingProducts = limitedProducts.filter(
        p => !top6Discounted.some(tp => tp.id === p.id)
      );

      // Kombiner top6 + resten, så pladserne bliver udfyldt.
      const finalProducts = [...top6Discounted, ...remainingProducts];

            // Opdatér state med de sortede produkter og kategorier
      setProducts(finalProducts);
      setCategories(categoriesData);
    };

    fetchData();
  }, []);

  return (
    <article>
      <ListClientWithFilter products={products} categories={categories} />
    </article>
  );
};

export default Produkter;


