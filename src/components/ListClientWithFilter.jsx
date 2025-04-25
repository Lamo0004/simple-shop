"use client";
import { useState } from "react";
import ListClient from "@/components/ListClient";
import Dropdown from "@/components/DropDown";

const ListClientWithFilter = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filtrér produkter baseret på den valgte kategori
  const filteredProducts = selectedCategory ? products.filter((product) => String(product.category).toLowerCase() === String(selectedCategory).toLowerCase()) : products; //Vi bruger toLowerCase fordi produkternes kategori står med små bogstaver i API'et, men på vores side står de med store. Så for at denne linje virker, skal det være helt ens.

  return (
    <div className="mx-auto max-w-screen-lg mt-4">
      <Dropdown categories={categories} setSelectedCategory={setSelectedCategory} />
      <ListClient products={filteredProducts} />
    </div>
  );
};

export default ListClientWithFilter;
