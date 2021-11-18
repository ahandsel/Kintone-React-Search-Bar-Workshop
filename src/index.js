// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Import CSS for styling
import './index.css';

// Import the script to make GET API calls
import getRecords from './getRecords.js';

// Import the list & search bar components
import ResultList from './components/ResultList.js'
import SearchBar from './components/SearchBar.js'

(function () {
  'use strict';

  // Increment to confirm script version on Kintone
  const scriptVer = '1.0.0';
  console.log(`\nScript version: ${scriptVer}\n\n`);

  // Set Custom View's ID in .env
  const customViewID = Number(process.env.VIEW_ID);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log(`\nCurrently not on the specified Custom View.\nView ID is set to ${customViewID}.\n\n`);
      return event;
    }

    function App() {

      // Establish useState by giving it our initial state
      // const [state, setState] = useState(initialState);

      // listItems holds the initial API response
      const [listItems, setListItems] = useState('*** now loading ***');
      const [searchResults, setSearchResults] = useState([]);

      const handleChange = e => {
      };

      // useEffect takes 2 arguments:
      // 1st = a function, called effect, that is executed when the React Component is rendered
      // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

      useEffect(() => {
        getRecords().then(
          result => {
            setListItems(result);
            setSearchResults(result);
          }
        );
      }, []);

      return (
        // JSX includes html-like syntax
        <div className='App'>
          <SearchBar handleChange={handleChange} />
          <ResultList searchResults={searchResults} />
        </div>
      );
    }

    ReactDOM.render(
      <React.StrictMode >
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    return event;
  });
})();