"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/api/dummyServer";
import { getCategories } from "@/api/dummyServer";
import ListClientWithFilter from "@/components/ListClientWithFilter";

const Produkter = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Hent produkter og kategorier når komponenten rendres
    const fetchData = async () => {
      const productsData = await getProducts();
      const categoriesData = await getCategories();
      setProducts(productsData);
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
