import React  from 'react';
import useForm from 'react-hook-form';
import styles from './Booking.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';

function BookingComponent(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
      <form onSubmit = {handleSubmit(props.bookFlight)}>
          <button className = {styles.icon} 
                  onClick = {props.onClick}>
                  <FontAwesomeIcon  icon = {faWindowClose}/>
          </button>
          <h2> Create booking </h2>
          <div className = {styles.input}>
            <p className={styles.label}>Number of passengers</p>
            <input type = "number" 
                   name = "booking.no_of_seats"
                   ref = {register({
                    required: 'Please select!'
                   })}
                   placeholder = "1"
                   min = "1" 
                   max = "10">
            </input>
            <p className={styles.error}>{errors['booking.no_of_seats'] && errors['booking.no_of_seats'].message}</p>
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

