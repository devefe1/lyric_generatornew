import React from 'react';

const Search = props => (
        <form onSubmit={props.getLyrics} className="searchform">
            <input name="searchBar" className="searchbar" type="text" placeholder="Enter song and artist name" />
            <button className="searchbutton" type="submit">Search</button>
        </form>
    );

export default Search;