import React from 'react';
import { observer } from 'mobx-react';
import { appState } from '../../state/AppState';

import styles from './SearchBar.module.css'

function SearchBarComponent() {     
       function onFilterChange(e) {
              appState.flightFilter = e.target.value;
       }

  return (
      <div className={styles.search}>
       <b><p className={styles.title}>Find best flight for you and your friends!</p></b>
            <div className={styles.searchBar}>
                <input className={styles.searchElement} 
                       type="date" 
                       id="start" 
                       name="trip-start"
                       value="2019-07-22"
                       min="2019-01-01" 
                       max="2019-12-31"></input>
                <input className={styles.searchElement}   
                       type="text" 
                       value={appState.flightFilter}
                       onChange={onFilterChange}
                       placeholder="Search for place...."></input>
                <input type="number" id="tentacles" 
                       className={styles.searchElement} 
                       name="tentacles"
                       placeholder="2 PEOPLE"
                       min="1" 
                       max="10"></input>
                <button className={styles.searchElement} 
                        id={styles.blueText} >SEARCH</button> 
            </div> 
    </div>
  );
};

export const SearchBar = observer (SearchBarComponent)