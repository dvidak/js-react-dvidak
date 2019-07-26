import {observable, decorate, computed, autorun} from 'mobx';

class AppState{
    flights = [];
    flightFilter = localStorage.getItem('flightFilter') || '';

}

decorate (AppState, {
    flights: observable,
    flightFilter: observable,
});

export const appState = new AppState();

autorun(() => {
  localStorage.setItem('flightFilter', appState.flightFilter);
});