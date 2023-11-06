
import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.right}>
          <p>Inscrever-se</p>
          <button className={styles.loginButton}>Entrar</button>
        </div>
      </header>
    </div>
  );
}

export default Main;

