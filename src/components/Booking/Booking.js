import React from 'react';
import styles from './Booking.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';

function BookingComponent(props) {
  return (
      <div>
          <button className={styles.icon} onClick={props.onClick}><FontAwesomeIcon  icon={faWindowClose}/></button>
          <h2> Create booking </h2>
          <div class={styles.input}>
          <p><b>Number of passengers</b></p>
          <input type="number" 
                 id="tentacles" 
                 name="tentacles"
                 placeholder="1"
                 min="1" 
                 max="10"></input>
          </div>
          <div className={styles.button}>
          <button className={styles.btn}>Confirm booking</button>
          </div>
      </div>
  );
};

export const Booking = observer (BookingComponent)

