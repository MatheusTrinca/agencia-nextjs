import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>O que podemos fazer?</h2>
      </div>
      <div className={styles.subtitle}>
        <h2>Fornecemos serviços que podem te ajudar</h2>
      </div>
      <div className={styles.services}>
        {services.map(service => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    alt=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
