import React  from 'react';
import styles from './UserBookings.module.css'
import { observer } from 'mobx-react';



function UserBookingsComponent() {

  return (
     <div className = {styles.bookingsBox}>
         <h3> MY BOOKINGS</h3>
        </div>

  );
};

export const UserBookings = observer (UserBookingsComponent)

