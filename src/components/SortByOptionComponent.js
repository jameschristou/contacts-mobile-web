import React from 'react';

const SortByOptionComponent = ({sortByOptionData, fetchData}) => {
  const onClickHandler = (val) => {
    console.log(sortByOptionData.selectActionUrl);
    fetchData(sortByOptionData.selectActionUrl);
  };

  return (
    <li className={`sort-by-component-options-list-item${sortByOptionData.isCurrentlySelected ? " sort-by-component-options-list-item--selected" : ""}`} onClick={onClickHandler}>{sortByOptionData.displayText}</li>
  );
};

export default SortByOptionComponent;