import React from 'react';
import styles from './Cards.module.css';

function Cards() {
  return (
    <div className={styles.container}>
      <h2 className={styles.playlistTitle}>Playlist</h2>
      <div className={styles.cardContainer}>
       <div className={styles.card}>Card 1</div>
        <div className={styles.card}>Card 2</div>
        <div className={styles.card}>Card 3</div>
        <div className={styles.card}>Card 4</div>
      </div>
    </div>
   
  );
}

export default Cards;

