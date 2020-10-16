import React from 'react';


const SearchBar = () => {
  return (
      <form className='video-search'>
        <input type='text' className='video-search-text' placeholder='Search'/>
        <div className="video-search-image-div">
          <input type='image' className='video-search-image' src={window.searchlogoURL}></input>
        </div>
      </form>
  );
}

export default SearchBar;