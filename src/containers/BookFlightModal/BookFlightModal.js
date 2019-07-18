import React from 'react';
import { observer } from 'mobx-react';
import styles from './BookFlightModal.module.css';

function BookFlightModalComponent(props) {
console.log(props.match.params.id);

  function closeModal() {
    props.history.push(`/flight/${props.match.params.id}`);
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <h1>Hello from book it !</h1>
        <button onClick={closeModal} >Close</button>
      </div>
    </div>
  );
}

export const BookFlightModal = observer(BookFlightModalComponent);
