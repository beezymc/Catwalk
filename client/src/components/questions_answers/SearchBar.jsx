import React, { useState, useEffect } from 'react';
import styles from './qa.module.css';


const SearchBar = ({data, setSearchTerm, searchTerm, setSearchResults, searchResults}) => {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchTermLowerCased = searchTerm.toString().toLowerCase();
    const filtered = searchTermLowerCased.length >= 3 ? data.filter(item => item.question_body.toLowerCase().includes(searchTermLowerCased)) : data;
    setSearchResults(filtered);
  }, [searchTerm]);

  return (
    <div >
      <form >
        <label></label>
        <input type="text" placeholder="Have a question? search for answer..." value={searchTerm} onChange={handleChange}/>
        <button>Search</button>

      </form>
    </div>
  );

};

export default SearchBar;