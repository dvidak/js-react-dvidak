import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import styles from './FlightBlock.module.css';
import moment from 'moment'
import { observer } from 'mobx-react';


export function FlightBlockComponent({flight}) {
  return (
    <div className={styles.flightBlock}>
      <div className={styles.meni}>
        <Link to={`/flight/${flight.id}`}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </Link>
      </div>
      <div>
        <img  src={require('../../img/preuzmi.png')} 
              alt= ""
              height="250" 
              width="250" />
      </div>
      <div>
        <p><b>Departs at {moment(flight.flys_at).format('HH:mm:ss')}</b></p>
        <p>{flight.name}</p>
        <p><FontAwesomeIcon className={styles.star} icon={faStar} />
           <FontAwesomeIcon className={styles.star} icon={faStar} />
           <FontAwesomeIcon className={styles.star} icon={faStar} />
           <span className={styles.greyTxt}>  |  {flight.no_of_seats} tickets available </span>
        </p>
        <b>Price <span className={styles.blueTxt}>{flight.base_price} $</span></b>
      </div>
    </div>
  );
};

export const FlightBlock = observer (FlightBlockComponent)
