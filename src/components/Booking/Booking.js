import React from 'react';
import styles from './Booking.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';

function BookingComponent(props) {
  return (
      <form onSubmit={props.handleSubmit(props.bookFlight)}>
          <button className={styles.icon} 
                  onClick={props.onClick}>
                  <FontAwesomeIcon  icon={faWindowClose}/>
          </button>
          <h2> Create booking </h2>
          <div className={styles.input}>
          <p><b>Number of passengers</b></p>
          <input type='number' 
                 name="booking.no_of_seats"
                 ref={props.register({
                  required: 'Select is required!',
                 })}
                 placeholder='1'
                 min='1' 
                 max='10'></input>
          {props.errors['booking.no_of_seats'] && props.errors['booking.no_of_seats'].message}
          </div>
          <div className={styles.button}>
          <button className={styles.btn} 
                  type="submit">
                  Confirm booking
          </button>
          </div>
      </form>
  );
};

export const Booking = observer (BookingComponent)

