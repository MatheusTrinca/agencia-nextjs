import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.css';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c868" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0 </span>AGÊNCIA DE PRODUTOS
          DIGITAIS
        </h1>
        <p className={styles.desc}>
          Crie midias ao vivo e atinja as pessoas certas baseadas em seu
          comportamento.
        </p>
        <button className={styles.button}>SAIBA MAIS </button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          alt="Avocado"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
