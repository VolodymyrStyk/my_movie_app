import React from "react";
import './MovieSearch.css';

export const MovieSearch = ({searchHandler,searchHandlerEnter,searchValue,setSearchValue}) => {
  return (
    <div >
        <div className={'search'}>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text" placeholder={'Search here...'} className={'search-input'}
                onKeyPress={(e) => searchHandlerEnter(e)}/>
            <button
                onClick={() => searchHandler()}
                className={'search-btn'}>Search
            </button>
        </div>
    </div>
  );
}
