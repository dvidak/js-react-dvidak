import React from 'react';
import { useAsync } from 'react-use';
import { appState } from '../../state/AppState';
import { observer } from 'mobx-react';
import { FlightBlock } from '../FlightBlock/FlightBlock';
import { loadFlights } from '../../services/flights';
import styles from './Flights.module.css';

function FlightsComponent() {
    useAsync(loadFlights.bind(null, appState));

  
    return (
        <div>
        <p className={styles.flightTitle}>RESULTS</p>
        <div className={styles.flightsArea}>
        {appState.filteredFlights.map(f => {
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