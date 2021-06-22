import React from 'react';

const SortByOptionComponent = ({sortByOptionData, key, fetchData}) => {
  const onClickHandler = (val) => {
    console.log(sortByOptionData.selectActionUrl);
    fetchData(sortByOptionData.selectActionUrl);
  };

  return (
    <li className='sort-by-component-options-list-item' onClick={onClickHandler}>{sortByOptionData.displayText}</li>
  );
};

export default SortByOptionComponent;