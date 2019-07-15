import React from 'react';
import styles from './Header.module.css'

export function Header() {
  return (
      <div className={styles.header}>
        <div className={styles.buttons}>
            <button className={styles.authBtn}><a href="/login">Login</a></button>
            <button className={styles.authBtn}><a href="/register">Register</a></button>
        </div>
      </div>
  );
};
