import React from 'react';

const SearchComponent = ({data}) => {
  return (
    <div className='search-component'>
      <input className='search-component__input'
          type="text"
          value={data.placeholderText}
          onChange={e => console.log(e.target.value)}
        />
    </div>
  );
};

export default SearchComponent;