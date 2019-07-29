import React from 'react';
import { useAsync } from 'react-use';
import { Header } from '../components/Header/Header';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { AppContext } from '../state/AppContext';
import { logout } from '../services/auth';


function HomePageContainer() {
  const { appState } = React.useContext(AppContext);  
  useAsync(loadFlights.bind(null, appState));

  function filteredFlights() {
    return appState.flights
                .filter((flight) => flight.name
                                    .toLowerCase()
                                    .includes(appState.flightFilter.toLowerCase()
                        ));
  }

  const filtered = React.useMemo(filteredFlights, [appState.flightFilter, appState.flights])

  function onFilterChange(e) {
    appState.flightFilter = e.target.value;
  }

  return (
    <div>
        <Header logout = {logout} /> 
        <SearchBar flightFilter = {appState.flightFilter} onFilterChange = {onFilterChange}/>
        <Flights flights = {filtered}/>
    </div>
  );
};

export const Home = observer (HomePageContainer)