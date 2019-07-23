import React from 'react';
import { useAsync } from 'react-use';
import { Header } from '../components/Header/Header';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { AppContext } from '../state/AppContext';
import { logout } from '../services/auth';

function HomePageContainer() {
  const { appState } = React.useContext(AppContext);  
  useAsync(loadFlights.bind(null, appState));

  function onFilterChange(e) {
    appState.flightFilter = e.target.value;
  }

  return (
    <div>
        {localStorage.getItem('token') ? <HeaderLoggedIn logout = {logout} /> : <Header/> }
        <SearchBar flightFilter = {appState.flightFilter} 
                   onFilterChange = {onFilterChange} />
        <Flights flights = {appState.filteredFlights} />
    </div>
  );
};

export const Home = observer (HomePageContainer)