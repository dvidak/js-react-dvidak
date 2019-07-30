import React from 'react';
import { observer } from 'mobx-react';
import styles from './SearchBar.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SearchBarComponent(props) {     
  return (
       <div className={styles.search}>
       <b><p className={styles.title}>Find best flight for you and your friends!</p></b>
              <div className={styles.searchBar}>
                     <DatePicker
                            className={styles.searchDate}
                            selected={props.date}
                            onChange={props.handleDateChange}
                     />
                     <input className={styles.searchElement}   
                            type="text" 
                            value={props.flightFilter}
                            onChange={props.onFilterChange}
                            placeholder="Search for place....">
                     </input>
                     <input type="number" 
                            className={styles.searchElement} 
                            name="tentacles"
                            placeholder="2 PEOPLE"
                            min="1" 
                            max="10">
                     </input>
                     <button className={styles.searchElement} 
                             id={styles.blueText}>SEARCH</button> 
              </div> 
       </div>
  );
};

export const SearchBar = observer (SearchBarComponent)