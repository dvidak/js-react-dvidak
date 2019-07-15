import React from 'react';
import { useAsync } from 'react-use';
import { appState } from '../../state/AppState';
import { observer } from 'mobx-react';
import { FlightBlock } from '../FlightBlock/FlightBlock';
import styles from './Flights.module.css';


function loadFlights() {
  return fetch('https://flighter-hw5.herokuapp.com/api/flights')
    .then((response) => response.json())
    .then((response) => response.flights)
    .then((flights) => {appState.flights.replace(flights)
    });
}

export function FlightsComponent() {
    const { loading: value } = useAsync(loadFlights);
    const [filter, setFilter] = React.useState('');


    function onFilterChange(e) {
      setFilter(e.target.value);
      appState.flightsFilter = e.target.value;
    }
  

    return (
        <div>
        <p className={styles.flightTitle}>RESULTS</p>
        <div className={styles.flightsArea}>
        {appState.flights && appState.flights.map(f => {
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

export const Flights = observer (FlightsComponent)