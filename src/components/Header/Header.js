import React from 'react';
import styles from './Header.module.css'
import { observer } from 'mobx-react';

function HeaderComponent() {
  return (
      <div className={styles.header}>
        <div className={styles.buttons}>
            <button className={styles.authBtn}><a href="/login">Login</a></button>
            <button className={styles.authBtn}><a href="/register">Register</a></button>
        </div>
      </div>
  );
};

export const Header = observer (HeaderComponent)

