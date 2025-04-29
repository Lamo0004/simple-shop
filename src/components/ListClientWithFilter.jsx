"use client";
import { useState } from "react";
import ListClient from "@/components/ListClient";
import Dropdown from "@/components/DropDown";

const ListClientWithFilter = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("filtreret produkter før filtrering", products);

  // Filtrér produkter baseret på den valgte kategori
  const filteredProducts = selectedCategory ? products.filter((product) => product.category === String(selectedCategory).toLowerCase().replaceAll(" ", "-")) : products; //Den valgte kategori skal matche med kategoriens syntaks i API'et. Derfor bruges toLowerCase og mellemrum skiftes ud med -

  console.log("filtreret produkter", filteredProducts);

  return (
    <div className="mx-auto max-w-screen-lg mt-4">
      <Dropdown categories={categories} setSelectedCategory={setSelectedCategory} />
      <ListClient products={filteredProducts} />
    </div>
  );
};

export default ListClientWithFilter;
