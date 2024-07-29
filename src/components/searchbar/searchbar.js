import React, { useState } from 'react';
import Styles from './searchbar.module.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.getAttribute('data-filter'));
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSearch = () => {
        console.log(`Searching Yelp with ${search}, ${location}, ${filter}`);
    }

    return (
        <div>
            <ul className={Styles.filterOptions}>
                <li key='best_match' data-filter='best_match' onClick={handleFilterChange} className = {filter === 'best_match' ? Styles.filterOptionsActive : ''}>Best Match</li>
                <li key='rating' data-filter='rating' onClick={handleFilterChange} className = {filter === 'rating' ? Styles.filterOptionsActive : ''}>Highest Rated</li>
                <li key='review_count' data-filter='review_count' onClick={handleFilterChange} className = {filter === 'review_count' ? Styles.filterOptionsActive : ''}>Most Reviewed</li>
            </ul>
            <div className={Styles.searchBar}>
                <input type="text" placeholder="Search Restaurants..." value={search} onChange={handleSearchChange} />
                <input type="text" placeholder="Where?" value={location} onChange={handleLocationChange} />
            </div>
            <button className={Styles.button} onClick={handleSearch}>Let's Eat</button>
        </div>
    );
}

export default SearchBar; 