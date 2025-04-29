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
      const limitedProducts = productsData.slice(0, 200);

      // Sortér produkterne efter rabatprocenten (fra højeste til laveste)
      const sortedProducts = [...limitedProducts].sort((a, b) => b.discountPercentage - a.discountPercentage);

      // Opdatér state med de sortede produkter og kategorier
      setProducts(sortedProducts);
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
