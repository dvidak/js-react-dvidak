import { get } from '../services/api';

export function loadFlights(appState) {
  return get('flights')
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}


export function getFlight(id) {
    return get(`flights/${id}`)
      .then((response) => response.flight)
  }