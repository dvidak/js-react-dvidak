import {observable, decorate, autorun} from 'mobx';

class AppState{
    flights = [];
    flightFilter = localStorage.getItem('flightFilter') || '';
    dateFilter = new Date();

}

decorate (AppState, {
    flights: observable,
    flightFilter: observable,
    dateFilter: observable,
});

export const appState = new AppState();

autorun(() => {
  localStorage.setItem('flightFilter', appState.flightFilter);
});