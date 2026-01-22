// components/Navbar.jsx
import React from "react";
import styles from "../../styles/Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyShop</div>
      <ul className={styles["nav-links"]}>
        <li><a href="#">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
