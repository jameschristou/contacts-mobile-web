import React from 'react';

const SortOrderComponent = ({sortOrderData, fetchData}) => {
    const onClickHandler = (val) => {
        fetchData(sortOrderData.selectActionUrl);
      };    

  return (
    <div className='sort-order-component'>
      <input className='sort-order-component__input'
          type="submit"
          value={"A-Z"}
          onClick={onClickHandler}
        />
    </div>
  );
};

export default SortOrderComponent;