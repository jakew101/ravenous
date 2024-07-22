import React from 'react';

function SearchBar() {
    return (
        <div>
            <div id="filter-options">
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>
            <div id="search-bar">
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <input type="submit" value="Let's Eat" />
        </div>
    );
}

export default SearchBar;