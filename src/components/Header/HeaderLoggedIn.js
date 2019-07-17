import React from 'react';
import styles from './Header.module.css'
import { logout } from '../../services/auth';
import { observer } from 'mobx-react';


function HeaderLoggedInComponent() {
  return (
      <div className={styles.header}>
        <div className={styles.buttons}>
            <p className={styles.label}>Hi, {localStorage.getItem('username')}!</p>
            <button className={styles.authBtn}
                    onClick = {logout}>
            <a href="/login">Logut</a></button>
        </div>
      </div>
  );
};

export const HeaderLoggedIn = observer (HeaderLoggedInComponent)
