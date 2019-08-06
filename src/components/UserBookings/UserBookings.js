import React  from 'react';
import styles from './UserBookings.module.css'
import { observer } from 'mobx-react';
import { UserBookingBox } from '../UserBookingBox/UserBookingBox';



function UserBookingsComponent({bookings, seeAll, onChange}) {
  return (
    <div className = {styles.main} >
     <h3 className = {styles.title}> My bookings</h3>
     <div className = {styles.checkbox}>
      <label> See all
        <input type="checkbox" onChange = {onChange}/>
      </label>
     </div>         
     <div className = {styles.bookingsBox}>
      { seeAll ? 
        bookings && bookings.map( booking => {
              return (
                <UserBookingBox booking = {booking} key = {booking.id}/>
              );
        }) 
        :
        bookings && bookings.slice(0,4).map( booking => {
          return (
            <UserBookingBox booking = {booking} key = {booking.id}/>
          );
        })
      }
        </div>
    </div>
  );
  
};

export const UserBookings = observer (UserBookingsComponent)

