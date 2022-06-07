import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" className={styles.link}>
            <span className={styles.linkText}>TRABALHE CONOSCO.</span>
            <Image src="/img/link.png" alt="link" width="40px" height="40px" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          RUA AMERICA 45,
          <br />
          SÃO PAULO
        </div>
        <div className={styles.cardItem}>
          CONTATO@AVOCADO.DEV,
          <br />
          (14)987654321
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          SIGA-NOS:
          <br />
          @AVOCADO
        </div>
        <div className={styles.cardItem}>
          &copy;2022 NEXTJS DEV
          <br />
          (14)987654321
        </div>
      </div>
    </div>
  );
};

export default Footer;
