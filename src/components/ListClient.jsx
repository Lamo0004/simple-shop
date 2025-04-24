"use client";
import Card from "./Card";

const ListClient = ({ products }) => {
  return (
    <div className="flex flex-col gap-4 mt-4 md:flex-row md:flex-wrap mx-auto max-w-screen-lg">
      {products.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListClient;
