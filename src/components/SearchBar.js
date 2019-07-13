import React from 'react';

export function SearchBar() {
  return (
      <div className="search">
            <p className="title">Find best flight for you and your friends!</p>
            <div class="searchBar">
                <input type="text" placeholder="01.FEB.2019."></input>
                <input type="text" placeholder="AMSTERDAM"></input>
                <input type="text" placeholder="4 PEOPLE"></input>
                <button>Search</button> 
            </div> 
    </div>
  );
};
