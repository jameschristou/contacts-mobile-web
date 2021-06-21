import React, {useState} from 'react';
import SortByOptionsComponent from './SortByOptionsComponent';

const SortByComponent = ({sortByData, fetchData}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = (val) => {
    setIsExpanded(!isExpanded);
    fetchData(sortOrderData.selectActionUrl);
  };

  return (
    <div className='sort-by-component'>
      <input className='sort-by-component__input'
          type="submit"
          value={"Sort"}
          onClick={e => console.log(e.target.value)}
        />
      <SortByOptionsComponent sortByOptions={sortByData.sortByOptions} fetchData={fetchData}/>
    </div>
  );
};

export default SortByComponent;