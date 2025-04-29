"use client";
import Card from "./Card";

const ListClient = ({ products }) => {
  return (
    <div className="flex gap-4 mt-4 flex-wrap justify-center items-center">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListClient;
