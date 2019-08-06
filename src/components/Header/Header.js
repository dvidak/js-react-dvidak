import React from 'react';
import styles from './Header.module.css'
import { observer } from 'mobx-react';


function HeaderComponent({logout}) {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <a className={styles.label}  href='/profile'>Hi, {localStorage.getItem('username')}!</a>

        <button className={styles.authBtn}
                onClick = {logout}>
                <a href='/login'>Logut</a>
        </button>
      </div>
    </div>
  );
};

export const Header = observer (HeaderComponent)
