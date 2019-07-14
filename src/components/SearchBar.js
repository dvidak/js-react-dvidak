import React from 'react';

export function SearchBar() {
  return (
      <div className="search">
       <b><p className="title">Find best flight for you and your friends!</p></b>
            <div className="searchBar">
                <input className="test" 
                       type="date" 
                       id="start" 
                       name="trip-start"
                       value="2019-07-22"
                       min="2019-01-01" 
                       max="2019-12-31"></input>
                <input 
                      className="test"  type="text" 
                       placeholder="AMSTERDAM"></input>
                <input type="number" id="tentacles" className="test" 
                       name="tentacles"
                       placeholder="2 PEOPLE"
                       min="1" 
                       max="10"></input>
                <button className="test" id="blueTest" >SEARCH</button> 
            </div> 
    </div>
  );
};
