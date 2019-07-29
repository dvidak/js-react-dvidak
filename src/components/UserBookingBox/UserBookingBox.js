import React  from 'react';
import styles from './UserBookingBox.module.css'
import { observer } from 'mobx-react';
import moment from 'moment'



function UserBookingBoxComponent({booking}) {

  return (
    <div className = {styles.bookingBlock}>
        <img  src={require('../../img/preuzmi.png')} 
              alt= ""
              height="170" 
              width="170"/>
        <h5 className = {styles.bookingInfo}> 
            <span className = {styles.blue}>{booking.flight_name}  </span>
            <span className = {styles.grey}> | {booking.company_name}</span></h5>
        <span className = {styles.text}>{moment(booking.flys_at).format('DD:MM:YYYY HH:mm')}</span>


    </div>

  );
};

export const UserBookingBox = observer (UserBookingBoxComponent)

