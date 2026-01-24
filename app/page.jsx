// app/page.jsx
export const runtime = "edge";

import ProductCard from "./components/ProductCard";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      {/* {console.log(`Runtime: ${typeof EdgeRuntime !== "undefined" ? "Edge" : "Node"}`)} */}
      <div className="grid-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
    
  );
}
