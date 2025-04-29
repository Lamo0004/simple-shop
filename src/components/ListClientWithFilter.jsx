"use client";
import { useState } from "react";
import ListClient from "@/components/ListClient";
import Dropdown from "@/components/DropDown";

const ListClientWithFilter = ({ products, categories, activeCat }) => {

  return (
    <div className="mx-auto max-w-screen-lg mt-4">
      <Dropdown categories={categories} activeCat={activeCat} />
      <ListClient products={products} />
    </div>
  );
};

export default ListClientWithFilter;
