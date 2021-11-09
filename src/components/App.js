import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListingApp from './listing/App';
import DetailsApp from './details/App';

function AppComponent() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListingApp/>} />
          <Route path="/details" element={<DetailsApp/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppComponent;