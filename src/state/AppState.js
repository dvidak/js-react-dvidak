import {observable, decorate, computed, autorun} from 'mobx';

class AppState{
    flights = [];
    flightFilter = localStorage.getItem('flightFilter') || '';

    get filteredFlights() {
        return this.flights
                    .filter((flight) => flight.name
                                        .toLowerCase()
                                        .includes(this.flightFilter.toLowerCase()
                            ));
    }
}

decorate (AppState, {
    flights: observable,
    flightFilter: observable,
    filteredFlights: computed,
});

export const appState = new AppState();

autorun(() => {
  localStorage.setItem('flightFilter', appState.flightFilter);
});