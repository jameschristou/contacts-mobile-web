import React, {useState} from 'react';
import SortByOptionComponent from './SortByOptionComponent';

const SortByOptionsComponent = ({sortByOptions, fetchData}) => {
  const onClickHandler = (val) => {
  };

  return (
      <ul className='sort-by-component-options-list'>
        {sortByOptions.map((value, index) => {
            return <SortByOptionComponent sortByOptionData={value} key={index} fetchData={fetchData}/>
        })}
      </ul>
  );
};

export default SortByOptionsComponent;