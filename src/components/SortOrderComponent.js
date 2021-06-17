import React from 'react';

const SortOrderComponent = () => {
  return (
    <div className='sort-order-component'>
      <input className='sort-order-component__input'
          type="submit"
          value={"A-Z"}
          onClick={e => console.log(e.target.value)}
        />
    </div>
  );
};

export default SortOrderComponent;