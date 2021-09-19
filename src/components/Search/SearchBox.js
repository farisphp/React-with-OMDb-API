import React from 'react';
import './SearchBox.css';

export default function Searchbox(props) {
    return (
        <div className="searchContainer">
            <input className="searchInput" type="text" name="search" placeholder="Search..." 
                value={props.value} 
                onChange={e => props.onSearch(e.target.value)}
            />
            <button className="searchBtn" type="submit" onClick={() => props.handleSearch()}>
                Search
            </button>
        </div>
    )
}
