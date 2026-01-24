// app/products/[id]/page.jsx
export const runtime = "edge";

import React from "react";
import styles from '../../../styles/ProductDetail.module.css';

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  // unwrap params if it's a Promise
  const resolvedParams = await params; 
  const { id } = resolvedParams; // now id is accessible
  const product = await getProduct(id);

  if (!product) return <p className={styles.error}>Product not found</p>;

  return (
    <div className={styles["product-detail-container"]}>
      <img src={product.image} alt={product.title} />
      <div className={styles["product-info"]}>
        <h1>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>₹{product.price}</p>
        <button className={styles["buy-btn"]}>Add to Cart</button>
      </div>
    </div>
  );
}
