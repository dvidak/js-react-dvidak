import React, { useState,useEffect } from 'react';
import styles from './Flight.module.css'
import { getFlight } from '../../services/flights';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appState } from '../../state/AppState';
import { observer } from 'mobx-react';
import { faTv, faWifi, faBabyCarriage , faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';


export function FlightComponent(props) {
  const [ flight, setFlight ] = useState({});
  const [ companyName, setCompanyName ] = useState('');


  let dateFlysAt = new Date(flight.flys_at);
  let hoursFlysAt=dateFlysAt.getHours();
  let minFlysAt=dateFlysAt.getMinutes();

  let dateLandsAt = new Date(flight.lands_at);
  let hoursLandsAt=dateLandsAt.getHours();
  let minLandsAt=dateLandsAt.getMinutes();

  
  useEffect( () => {
    getFlight(appState.id).then( (r) => {
      setFlight(r)
      setCompanyName(r.company.name)
    });
  })
  

  return ( 
      <div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 > {flight.name} </h2>
            <div className={styles.contextWrapper}>
                <div className={styles.leftContext}>
                    <p className={styles.txt}>Company</p>
                    <p className={styles.txt}>Available seats</p>
                    <p className={styles.greyTxt}> {companyName}</p>
                    <p className={styles.greyTxt}>{flight.no_of_seats} </p>
                    <p className={styles.txt}>Deparst at</p>
                    <p className={styles.txt}>Lands at</p>
                    <p className={styles.greyTxt}>{hoursFlysAt}:{minFlysAt}</p>
                    <p className={styles.greyTxt}>{hoursFlysAt}:{minFlysAt}</p>
                    <p className={styles.txt}>Base price</p>
                    <p className={styles.txt}>Current price</p>
                    <p className={styles.greyTxt}>{flight.base_price} $</p>
                    <p className={styles.greyTxt}>{flight.base_price - 150} $</p>
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
