import React, {useState} from 'react';
import SortByOptionsComponent from './SortByOptionsComponent';

const SortByComponent = ({sortByData, fetchData}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = (val) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='sort-by-component'>
      <input className='sort-by-component__input'
          type="submit"
          value={sortByData.displayText}
          onClick={onClickHandler}
        />
      <div className={`sort-by-component-options${isExpanded ? "" : " hidden"}`}>
        <SortByOptionsComponent sortByOptions={sortByData.sortByOptions} fetchData={fetchData}/>
      </div>
    </div>
  );
};

export default SortByComponent;