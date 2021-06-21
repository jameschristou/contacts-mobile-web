import React, {useState} from 'react';


const SortOrderComponent = ({sortOrderData, fetchData}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = (val) => {
    setIsExpanded(!isExpanded);
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