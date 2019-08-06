import React  from 'react';
import { useAsync } from 'react-use';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { AppContext } from '../state/AppContext';

function HomePageContainer() {
  const { appState } = React.useContext(AppContext);  
  useAsync(loadFlights.bind(null, appState));
  const [date, setDate] = React.useState(new Date());

  function filteredFlights() {
    return appState.flights
                .filter((flight) => flight.name
                                    .toLowerCase()
                                    .includes(appState.flightFilter.toLowerCase())       
  )}


  const filtered = React.useMemo(filteredFlights, [appState.flightFilter, appState.flights, date])

  function onFilterChange(e) {
    appState.flightFilter = e.target.value;
  }

  function handleDateChange(picked) {
    setDate(picked);
  }

  return (
    <div>
        <SearchBar flightFilter = {appState.flightFilter} 
                   onFilterChange = {onFilterChange}
                   handleDateChange = {handleDateChange}
                   date = {date}/>
        <Flights flights = {filtered}/>
    </div>
  );
};

export const Home = observer (HomePageContainer)