"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown"; // Sørg for at importere korrekt

const Produkter = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Til opbevaring af kategorier

  // Hent produkter
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // data.products er arrayet
  }, []);

  // Hent kategorier
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Tjek data-strukturen
        setCategories(data);
      });
  }, []);

  return (
    <section className="p-4">
      {/* Send kategorier som prop til Dropdown */}
      <Dropdown categories={categories} />

      <div className="flex flex-col gap-4 mt-4 md:flex-row md:flex-wrap mx-auto max-w-screen-lg">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Produkter;
