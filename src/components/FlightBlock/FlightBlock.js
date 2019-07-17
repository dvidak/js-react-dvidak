import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { appState } from '../../state/AppState';
import { Link } from 'react-router-dom'
import styles from './FlightBlock.module.css';
import { observer } from 'mobx-react';
import { Flight } from '../Flight/Flight';


export function FlightBlockComponent(props) {
  let date = new Date(props.flys_at);
  let hours=date.getHours();
  let min=date.getMinutes();

  function setStateId(){
      appState.id = props.id;
  }

  return (
    <div className={styles.flightBlock}>
        <Link to={`/flight/${props.id}`} onClick={setStateId}>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
        </Link>
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
            <b>Price <span className={styles.blueTxt}>{props.base_price}$</span></b>
        </div>
    </div>
  );
};

export const FlightBlock = observer (FlightBlockComponent)
