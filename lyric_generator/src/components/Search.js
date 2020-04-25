import React from 'react';

const Search = () => {
    return(
        <form className="searchform">
            <input className="searchbar" type="text" placeholder="Search for a gif here! " />
            <button className="searchbutton" type="submit">Search</button>
        </form>
    );
}

export default Search;