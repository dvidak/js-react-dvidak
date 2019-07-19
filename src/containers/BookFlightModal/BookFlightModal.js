import React, {useState} from 'react';
import { observer } from 'mobx-react';
import styles from './BookFlightModal.module.css';
import { Booking } from '../../components/Booking/Booking';
import { bookIt } from '../../services/booking';


function BookFlightModalComponent(props) {
  const [noOfSeats, setNoOfSeats] = useState('1');

  console.log(noOfSeats);


  function closeModal() {
    props.history.goBack();
  }

  const bookFlight = e => {
    e.preventDefault();
    const booking = {};
    booking.no_of_seats = noOfSeats;
    booking.flight_id = props.match.params.id;
    bookIt(booking).then( () => {
        props.history.goBack()
    });
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <Booking onClick={closeModal} 
                 bookFlight={bookFlight}
                 noOfSeats = {noOfSeats}
                 setNoOfSeats = {setNoOfSeats}/>
      </div>
    </div>
  );
}

export const BookFlightModal = observer(BookFlightModalComponent);
