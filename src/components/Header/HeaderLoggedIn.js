import React from 'react';
import styles from './Header.module.css'
import { logout } from '../../services/auth';

export function HeaderLoggedIn() {
  return (
      <div className={styles.header}>
        <div className={styles.buttons}>
            <p>Hi, {localStorage.getItem('username')}</p>
            <button className={styles.authBtn}
                    onClick = {logout}>
            <a href="/login">Logut</a></button>
        </div>
      </div>
  );
};
