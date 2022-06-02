import React from 'react';
import styles from '../styles/Testimonials.module.css';
import Circle from './Circle';
import { users } from '../data';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Depoimentos</h1>
      <div className={styles.wrapper}>
        {users.map(user => (
          <div key={user.id} className={styles.card}>
            <Image
              src={`/img/${user.logo}`}
              alt="user logo"
              height="30"
              width="30"
            />

            <div className={styles.comment}>{user.comment}</div>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                alt="avatar"
                src={`/img/${user.avatar}`}
                height="45"
                width="45"
                objectFit="cover"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobtitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
