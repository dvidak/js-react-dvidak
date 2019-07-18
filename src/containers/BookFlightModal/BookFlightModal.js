import React from 'react';
import { observer } from 'mobx-react';
import styles from './BookFlightModal.module.css';
import { Booking } from '../../components/Booking/Booking';

function BookFlightModalComponent(props) {
console.log(props.match.params.id);

  function closeModal() {
    props.history.push(`/flight/${props.match.params.id}`);
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <Booking onClick={closeModal} />
      </div>
    </div>
  );
}

export const BookFlightModal = observer(BookFlightModalComponent);
