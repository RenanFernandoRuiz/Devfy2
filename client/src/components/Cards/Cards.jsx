import React from 'react';
import styles from './Cards.module.css';

function Cards() {
  return (
    <div className={styles.container}>
      <h2 className={styles.playlistTitle}>Playlists do Spotify</h2>
      <br />
      <br />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img  src="dis.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="vinil.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="disco1.png" alt="" />
         
        </div>
       
      </div>
    </div>
  );
}

export default Cards;
