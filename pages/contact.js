import React from 'react';
import styles from '../styles/Contact.module.css';
import Circle from '../components/Circle';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle background="green" left="-40vh" top="-20vh" />
      <Circle background="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>ENTRE EM CONTATO</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="Usuário" />
        <input type="text" className={styles.inputS} placeholder="Telefone" />
        <input type="email" className={styles.inputL} placeholder="Email" />
        <input type="text" className={styles.inputL} placeholder="Assunto" />
        <textarea className={styles.textArea} placeholder="Mensagem" row={6} />
        <button className={styles.buttonF}>ENVIAR</button>
      </form>
    </div>
  );
};

export default Contact;

// 1:28:35
