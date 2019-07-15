import {observable, decorate, computed} from 'mobx';

class AppState{
    flights = [];

}

decorate (AppState, {
    flights: observable,
});

export const appState = new AppState();