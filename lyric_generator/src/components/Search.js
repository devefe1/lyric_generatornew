import React from 'react';

const Search = props => (
        <form onSubmit={props.getGif} className="searchform">
            <input name="gifName" className="searchbar" type="text" placeholder="Search for a gif here! " />
            <button className="searchbutton" type="submit">Search</button>
        </form>
    );

export default Search;