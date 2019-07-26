import React from 'react';
import { observer } from 'mobx-react';
import styles from './BookFlightModal.module.css';
import { Booking } from '../../components/Booking/Booking';
import { bookIt } from '../../services/booking';


function BookFlightModalComponent(props) {
  
  function closeModal() {
    props.history.goBack();
  }

  function bookFlight(data){
    data.booking['flight_id'] = props.match.params.id;
    bookIt(data).then( () => {
      props.history.goBack()
    }); 
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <Booking bookFlight={bookFlight}
                 onClick={closeModal} />
      </div>
    </div>
  );
}

export const BookFlightModal = observer(BookFlightModalComponent);
