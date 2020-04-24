import React, { Component } from 'react';

const Search = () => (
        <form className="searchform">
            <input className="searchbar" type="text" placeholder="Enter song and artist name" />
            <button className="searchbutton" type="submit">Search</button>
        </form>
    );

export default Search;