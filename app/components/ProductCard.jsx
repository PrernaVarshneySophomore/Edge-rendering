// components/ProductCard.jsx
import React from "react";
import Link from "next/link";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`} className={styles["product-link"]}>
      <div className={styles.card}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
