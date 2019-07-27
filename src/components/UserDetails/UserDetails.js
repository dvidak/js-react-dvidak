import React  from 'react';
import { observer } from 'mobx-react';
import styles from './UserDetails.module.css'



function UserDetailsComponent(props) {
  return (
    <div className={styles.userArea}>
      <div className={styles.picutreBox}>
                    <img src={props.userData.img} 
                         height="200" 
                         alt="nema slike"
                         width="300" />
      </div>
      <div className={styles.contextBox}>
        <h3>{props.userData.first_name} {props.userData.last_name}</h3>
        <p>{props.userData.email}</p>
        <button className={styles.btn} onClick={props.openModal}>Edit</button>
      </div>
 </div>
  );
};

export const UserDetails = observer (UserDetailsComponent)

