import React from 'react';
import styles from './Flight.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faWifi, faBabyCarriage , faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

export function FlightComponent({flight}) {
  let dateFlysAt = new Date(flight.flys_at);
  let hoursFlysAt=dateFlysAt.getHours();
  let minFlysAt=dateFlysAt.getMinutes();
  let dayFlaysAt = dateFlysAt.getDay();
  let monthFlaysAt = dateFlysAt.getMonth();
  let yearFlaysAt = dateFlysAt.getFullYear();

  let dateLandsAt = new Date(flight.lands_at);
  let hoursLandsAt=dateLandsAt.getHours();
  let minLandsAt=dateLandsAt.getMinutes();
  let dayLandsAt = dateLandsAt.getDate();
  let monthLandsAt = dateLandsAt.getMonth();
  let yearLandAt = dateLandsAt.getFullYear();

   

  return ( 
      <div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 > {flight.name} </h2>
            <div className={styles.contextWrapper}>
                <div className={styles.leftContext}>
                    <p className={styles.txt}>Company</p>
                    <p className={styles.txt}>Available seats</p>
                    <p className={styles.greyTxt}>  {flight.company_name}</p>
                    <p className={styles.greyTxt}>{flight.no_of_seats} </p>
                    <p className={styles.txt}>Deparst at</p>
                    <p className={styles.txt}>Lands at</p>
                    <p className={styles.greyTxt}>{dayFlaysAt}.{monthFlaysAt}.{yearFlaysAt}. {hoursFlysAt}:{minFlysAt}</p>
                    <p className={styles.greyTxt}>{dayLandsAt}.{monthLandsAt}.{yearLandAt}. {hoursLandsAt}:{minLandsAt}</p>
                    <p className={styles.txt}>Base price</p>
                    <p className={styles.txt}>Current price</p>
                    <p className={styles.greyTxt}>{flight.base_price} $</p>
                    <p className={styles.greyTxt}>{flight.current_price} $</p>
                </div>
            </div>
            <button className={styles.btn}>Book now</button>
          </div>
          <div className={styles.right}>
          <div className={styles.rightContextWrapper}>
                <div className={styles.inner1}>
                    <img src={require('../../img/preuzmi.png')} 
                         height="200" 
                         width="300" />
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
