import React from 'react';
import styles from './Header.module.css'
import { observer } from 'mobx-react';


function HeaderComponent({logout}) {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <p className={styles.label}>Hi, {localStorage.getItem('username')}!</p>
        <button className={styles.authBtn}
                onClick = {logout}>
                <a href='/login'>Logut</a>
        </button>
      </div>
    </div>
  );
};

export const Header = observer (HeaderComponent)
