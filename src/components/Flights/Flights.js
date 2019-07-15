import React from 'react';
import { useAsync } from 'react-use';
import { FlightBlock } from '../FlightBlock/FlightBlock';
import styles from './Flights.module.css';


export function Flights() {
    
    function fetchFlight() {
        return fetch('https://flighter-hw5.herokuapp.com/api/flights')
          .then((response) => response.json());
    }
    
    const { value } = useAsync(fetchFlight);

    console.log(value);

    return (
        <div>
        <p className={styles.flightTitle}>RESULTS</p>
        <div className={styles.flightsArea}>
        {value && value.flights && value.flights.map(f => {
          return (
            <FlightBlock
                key = {f.id}
                name={f.name}
                flys_at={f.flys_at}
                lands_at={f.lands_at}
                company_name={f.company_name}
                base_price={f.base_price}
                no_of_seats={f.no_of_seats}
                no_of_booked_seats={f.no_of_booked_seats}
            />
          );
        })}
      </div>
      </div>
    );
}
