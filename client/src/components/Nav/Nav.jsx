import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faGlobe, faPlus} from '@fortawesome/free-solid-svg-icons';
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src=".png" alt="SPOTIFY" />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <FontAwesomeIcon icon={faHome} /> Início
        </li>
        <li className={styles.menuItem}>
          <FontAwesomeIcon icon={faSearch} /> Buscar
        </li>
      </ul>
      <hr  />
      <div className={styles.playlist}>
      <FontAwesomeIcon icon={faBook} /> SUA BIBLIOTECA  
      <div style={{ marginLeft: '23em', display:'flex', position:'relative' ,top:"-1.5em"}}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
        <p>CRIE SUA PRIMEIRA PLAYLIST</p>
        <p>É FÁCIL,VAMOS TE AJUDAR.</p>
        <button className={styles.button}>Criar Playlist</button>
        <br />
        <hr/>
        <br />
        <p>QUE TAL SEGUIR UM PODCAST NOVO?</p>
        <p>AVISAREMOS VOCÊ SOBRE EPISÓDIOS NOVOS.</p>
        <button className={styles.button}>Explore podcasts</button>
<br/>
<br />
<p>Cookies</p>
<br />
<button>
      <FontAwesomeIcon icon={faGlobe} />
       Português (Brasil)
    </button>
      </div>
    </div>
  );
}

export default Nav;

