import React, {useState} from 'react';

const SortByOptionsComponent = ({sortByOptions, fetchData}) => {
  const onClickHandler = (val) => {
  };

  return (
    <div className='sort-by-component__options'>
      <ul>
        {sortByOptions.map((value, index) => {
            return <li key={index}>{value.displayText}</li>
          })}
      </ul>
    </div>
  );
};

export default SortByOptionsComponent;