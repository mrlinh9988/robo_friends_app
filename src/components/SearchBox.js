import React from 'react';

<<<<<<< HEAD
const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox');
  return (
    <div className='pa2'>
      <input
        aria-label="Search"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
=======
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="search robot" 
>>>>>>> 18e510b2fbcbff1bea9c066f7ad9f2ff9cf41815
        onChange={searchChange}
      />
    </div>
  );
<<<<<<< HEAD
}

export default SearchBox;
=======
};

export default SearchBox;
>>>>>>> 18e510b2fbcbff1bea9c066f7ad9f2ff9cf41815
