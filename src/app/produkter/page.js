"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Dropdown from "@/components/DropDown";

const Produkter = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // data.products er arrayet
  }, []);

  return (
    <section className="p-4">
      <Dropdown />

      <div className="flex flex-col gap-4 mt-4 md:flex-row md:flex-wrap">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Produkter;
