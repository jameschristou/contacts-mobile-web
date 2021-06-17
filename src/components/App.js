import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TitleComponent from './TitleComponent';
import SearchComponent from './SearchComponent';
import SortByComponent from './SortByComponent';
import SortOrderComponent from './SortOrderComponent';
import ContactsListComponent from './ContactsListComponent';

export const ConfigContext = React.createContext();

const configValue = {
  apiBaseUrl: 'https://localhost:44364/contacts'
};

const AppComponent = (props) => {
  const [isWaitingForResults, setIsWaitingForResults] = useState(true);
  const [currentListingData, setCurrentListingData] = useState();

  // initialise state. This code will only run when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${configValue.apiBaseUrl}`,
      );

      setCurrentListingData(result.data);
      setIsWaitingForResults(false);
    };

    fetchData();
  }, []);

  if(isWaitingForResults){
    return (
      <div>Loading</div>
    );
  }

  return (
    <div className="contacts-listing-page">
      <ConfigContext.Provider value={configValue} >
        <TitleComponent titleText={currentListingData.screenTitleText} />
        <SearchComponent data={currentListingData.searchComponent}/>
        <div className="sorting-container">
          <SortByComponent />
          <SortOrderComponent />
        </div>
        <ContactsListComponent />
      </ConfigContext.Provider>
    </div>
  );
}

export default AppComponent;