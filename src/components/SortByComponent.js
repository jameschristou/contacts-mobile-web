import React from 'react';

const SortByComponent = () => {
  return (
    <div className='sort-by-component'>
      <input className='sort-by-component__input'
          type="submit"
          value={"Sort"}
          onClick={e => console.log(e.target.value)}
        />
    </div>
  );
};

export default SortByComponent;