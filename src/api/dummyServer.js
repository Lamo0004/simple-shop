export async function getProducts() {
  const products = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json());
  return products.products;
}

export async function getCategories() {
  const categories = await fetch("https://dummyjson.com/products/categories", {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json());
  return categories;
}
