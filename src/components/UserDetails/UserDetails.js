import React  from 'react';
import { observer } from 'mobx-react';
import styles from './UserDetails.module.css'



function UserDetailsComponent(props) {

  return (
    <div className={styles.userArea}>
      <div className={styles.picutreBox}>
                    <img src={require('../../img/preuzmi.png')} 
                         height="200" 
                         alt=""
                         width="300" />
      </div>
      <div className={styles.contextBox}>
        <h3>Ime i prezime</h3>
        <p>Mail</p>
        <button className={styles.btn} onClick={props.openModal}>Edit</button>
      </div>
 </div>
  );
};

export const UserDetails = observer (UserDetailsComponent)

