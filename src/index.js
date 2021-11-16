// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import the script to make GET API calls
import getRecords from './requests/getRecords.js';

(function () {
  'use strict';

  // Set Custom View's ID in .env
  const customViewID = Number(process.env.VIEW_ID);

  // Increment to confirm script version on Kintone
  const scriptVer = '2.2.1';
  console.log(`\nScript version: ${scriptVer}\n\n`);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log(`\nCurrently not on the specified Custom View.\nView ID is set to ${customViewID}.\n\n`);
      return event;
    }

    // Get Kintone data in insert into dataSet!

    function App() {

      // Establish useState by giving it our initial state
      // const [state, setState] = useState(initialState);
      const [listItems, setListItems] = useState('*** now loading ***');

      // useEffect takes 2 arguments:
      // 1st = a function, called effect, that is executed when the React Component is rendered
      // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

      useEffect(() => {
        getRecords().then(
          result => setListItems(result)
        );
      }, []);

      const [searchResults, setSearchResults] = React.useState([]);
      const handleChange = e => {
        setListItems(e.target.value);
      };

      // useEffect takes 2 arguments:
      // 1st = a function, called effect, that is executed when the React Component is rendered
      // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

      React.useEffect(() => {
        const results = dataSet.filter(dataSet =>
          dataSet.toLowerCase().includes(listItems)
        );
        setSearchResults(results);
      }, [listItems]);
      return (
        <div className="App">
          <input
            type="text"
            placeholder="Search"
            value={listItems}
            onChange={handleChange}
          />
          <ul>
            {searchResults.map(item => (
              <li>{item}</li>
            ))}
          </ul>
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