import React  from 'react';
import styles from './UserBookings.module.css'
import { observer } from 'mobx-react';
import { UserBookingBox } from '../UserBookingBox/UserBookingBox';



function UserBookingsComponent({bookings}) {
  return (
    <div className = {styles.main} >
     <h3 className = {styles.title}> My bookings</h3>
     <div className = {styles.bookingsBox}>
      {bookings && bookings.slice(0,4).map( booking => {
              return (
                <UserBookingBox booking = {booking} key = {booking.id}/>
              );
            })}
        </div>
    </div>
  );
  
};

export const UserBookings = observer (UserBookingsComponent)

