import React, { Component } from 'react';

class Search extends Component {
    render () {
        return (
            <div className="search">
                <form className="searchform">
                    <input className="searchbar" type="text" />
                    <button className="searchbutton" type="submit">Search</button>
                </form>
            </div> 
        )
    }
};

export default Search;