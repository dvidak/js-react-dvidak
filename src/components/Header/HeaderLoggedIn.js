import React from 'react';
import styles from './Header.module.css'

export function HeaderLoggedIn() {
  return (
      <div className={styles.header}>
        <div className={styles.buttons}>
            <p>Hi, Nives</p>
            <button className={styles.authBtn}><a href="/register">Logut</a></button>
        </div>
      </div>
  );
};
