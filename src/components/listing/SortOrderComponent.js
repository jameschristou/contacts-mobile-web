import React from 'react';


const SortOrderComponent = ({sortOrderData, fetchData}) => {
  const onClickHandler = (val) => {
    console.log(sortOrderData.selectActionUrl);
    fetchData(sortOrderData.selectActionUrl);
  };

  return (
    <div className='sort-order-component'>
      <input className='sort-order-component__input'
          type="submit"
          value={sortOrderData.displayText}
          onClick={onClickHandler}
        />
    </div>
  );
};

export default SortOrderComponent;