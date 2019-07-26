import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { FlightBlock } from '../FlightBlock/FlightBlock';
import styles from './Flights.module.css';

function FlightsComponent({flights} ) {
  
    return (
      <div>
        <p className={styles.flightTitle}></p>
        <div className={styles.flightsArea}>
            {flights.map( flight => {
              return (
                <FlightBlock flight={flight} key = {flight.id}/>
              );
            })}
        </div>
      </div>
    );
}

export const Flights = observer (FlightsComponent)