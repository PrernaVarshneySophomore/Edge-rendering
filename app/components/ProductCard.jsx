// components/ProductCard.jsx
import React from "react";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
