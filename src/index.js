// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Import CSS for styling
import './index.css';

// Import the script to make GET API calls
import getRecords from './requests/getRecords.js';

// Import the list & search bar components
import ResultList from './components/ResultList.js'
import SearchBar from './components/SearchBar.js'

(function () {
  'use strict';

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
      const [listItems, setListItems] = useState([]);
      const [searchResults, setSearchResults] = useState([]);

      /**
       * filter() accepts a function as a parameter. That function acts as a condition to evaluate each item in the array as true-or-false. filter() then returns an array of items passing that condition.
       */
      const handleChange = e => { // e is a typical way to name the browser-generated event object
        let filterResults = listItems.filter(record =>
          record.title.toLowerCase().includes(e.target.value.toLowerCase()) // filter condition
        );

        console.log('filterResults: \n', filterResults);

        setSearchResults(filterResults);
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

      // EXERCISE: Rewrite this if-else statement as a ternary statement
      if (listItems.length > 0) {
        return (
          // JSX includes html-like syntax
          <div className='App'>
            <SearchBar handleChange={handleChange} />
            <ResultList searchResults={searchResults} />
          </div>
        );
      } else {
        return (
          <div className='App'>
            <SearchBar handleChange={handleChange} />
            <p>*** now loading ***</p>
          </div>
        );
      }
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