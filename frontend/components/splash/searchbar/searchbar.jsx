import React from 'react';


const SearchBar = () => {
  return (
      <form className='video-search'>
        <input type='text' className='video-search-text' placeholder='Search'/>
          <input type='image' className='video-search-image' src={window.searchlogoURL}></input>
      </form>
  );
}

export default SearchBar;