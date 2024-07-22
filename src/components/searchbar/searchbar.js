import React from 'react';
import Styles from './searchbar.module.css';

function SearchBar() {
    return (
        <div>
            <div className={Styles.filterOptions}>
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>
            <div className={Styles.searchBar}>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <button className={Styles.button}>Let's Eat</button>
        </div>
    );
}

export default SearchBar; 