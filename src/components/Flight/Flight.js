import React from 'react';
import styles from './Flight.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment'
import { faTv, faWifi, faBabyCarriage , faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

export function FlightComponent(props) {
  return ( 
      <div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 > {props.flight.name} </h2>
            <div className={styles.contextWrapper}>
                <div className={styles.leftContext}>
                    <p className={styles.txt}>Company</p>
                    <p className={styles.txt}>Available seats</p>
                    <p className={styles.greyTxt}>  {props.flight.company_name}</p>
                    <p className={styles.greyTxt}>{props.flight.no_of_seats} </p>
                    <p className={styles.txt}>Deparst at</p>
                    <p className={styles.txt}>Lands at</p>
                    <p className={styles.greyTxt}>{moment(new Date(props.flight.flys_at)).format('YYYY-MM-DD hh:mm:ss')}</p>
                    <p className={styles.greyTxt}>{moment(new Date(props.flight.lands_at)).format('YYYY-MM-DD hh:mm:ss')}</p>
                    <p className={styles.txt}>Base price</p>
                    <p className={styles.txt}>Current price</p>
                    <p className={styles.greyTxt}>{props.flight.base_price} $</p>
                    <p className={styles.greyTxt}>{props.flight.current_price} $</p>
                </div>
            </div>
            <button className={styles.btn} onClick={props.openModal}>Book now</button>
          </div>
          <div className={styles.right}>
          <div className={styles.rightContextWrapper}>
                <div className={styles.inner1}>
                    <img src={require('../../img/preuzmi.png')} 
                         height='200' 
                         alt=''
                         width='300' />
                </div>
                <div className={styles.inner2}>
                <p className={styles.greyTxt}> <FontAwesomeIcon  icon={faWifi}/> Wireless internet</p>
                <p className={styles.greyTxt}> <FontAwesomeIcon  icon={faBabyCarriage}/> Kids friendly</p>
                <p className={styles.greyTxt}> <FontAwesomeIcon  icon={faTv} /> TV avaliable</p>
                <p className={styles.greyTxt}> <FontAwesomeIcon  icon={faUtensilSpoon} />Meal included</p> 
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export const Flight = observer (FlightComponent)
