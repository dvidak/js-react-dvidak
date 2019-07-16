import React, { useState } from 'react';
import styles from './Flight.module.css'
import { getFlight } from '../../services/flights';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faWifi, faBabyCarriage , faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

function loadFlight() {
    getFlight(6).then(r => console.log(r));
  }

export function Flight() {
  const { loading, value } = useState(loadFlight);
  console.log(value);
  console.log(loading);
  return ( 
      <div>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 > Ovo je naslov </h2>
            <div class={styles.contextWrapper}>
                <div className={styles.leftContext}>
                    <p className={styles.txt}>Company</p>
                    <p className={styles.txt}>Available seats</p>
                    <p className={styles.greyTxt}>Company</p>
                    <p className={styles.greyTxt}>Available seats</p>
                    <p className={styles.txt}>Deparst at</p>
                    <p className={styles.txt}>Lands at</p>
                    <p className={styles.greyTxt}>Deparst at</p>
                    <p className={styles.greyTxt}>Lands at</p>
                    <p className={styles.txt}>Base price</p>
                    <p className={styles.txt}>Current price</p>
                    <p className={styles.greyTxt}>Base price</p>
                    <p className={styles.greyTxt}>Current price</p>
                </div>
            </div>
            <button className={styles.btn}>Book now</button>
          </div>
          <div className={styles.right}>
          <div class={styles.rightContextWrapper}>
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
