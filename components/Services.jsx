import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>O que podemos fazer?</div>
      <div className={styles.subtitle}>
        Fornecemos serviços que podem te ajudar
      </div>
      <div className={styles.services}>
        {services.map(service => (
          <Link key={service.id} href={`/products/${service.name}`}>
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
