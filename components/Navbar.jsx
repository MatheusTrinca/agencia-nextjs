import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">AV0CAD0</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DESENVOLVIMENTO</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PROUÇÃO</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">FOTOGRAFIA</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">CONTATO</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
