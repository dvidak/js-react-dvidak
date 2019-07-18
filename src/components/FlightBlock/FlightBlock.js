import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import styles from './FlightBlock.module.css';
import { observer } from 'mobx-react';


export function FlightBlockComponent(props) {
  let date = new Date(props.flys_at);
  let hours=date.getHours();
  let min=date.getMinutes();


  return (
    <div className={styles.flightBlock}>
        <div className={styles.meni}>
          <Link to={`/flight/${props.id}`}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Link>
        </div>
        <div>
        <img    src={require('../../img/preuzmi.png')} 
                height="250" 
                width="250" />
        </div>
        <div>
            <p><b>Departs at {hours}:{min}</b></p>
            <p>{props.name}</p>
            <p><FontAwesomeIcon className={styles.star} icon={faStar} />
               <FontAwesomeIcon className={styles.star} icon={faStar} />
               <FontAwesomeIcon className={styles.star} icon={faStar} />
               <span className={styles.greyTxt}>  |  {props.no_of_seats} tickets available </span>
            </p>
            <b>Price <span className={styles.blueTxt}>{props.base_price} $</span></b>
        </div>
    </div>
  );
};

export const FlightBlock = observer (FlightBlockComponent)
