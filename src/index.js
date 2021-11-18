// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import the script to make GET API calls
import getRecords from './getRecords.js';

// Import the list & form components
import ListItems from './components/ListItems.js'
// import InputForm from './components/InputForm.js'

(function () {
  'use strict';

    // Increment to confirm script version on Kintone
    const scriptVer = '2.4.6';
    console.log(`\nScript version: ${scriptVer}\n\n`);

  // Set Custom View's ID in .env
  const customViewID = Number(process.env.VIEW_ID);
  let recordsOnPage = 100;

  // Get Kintone data in insert into kintoneRecords!
  let kintoneRecords = [];

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log(`\nCurrently not on the specified Custom View.\nView ID is set to ${customViewID}.\n\n`);
      return event;
    }
    // // if (event.records.length >= recordsOnPage) {
    // //   // getRecords() method
    //   kintoneRecords = getRecords();
    // // } else {
    // //   // event.records method
    // //   kintoneRecords = event.records;
    // //   console.log(kintoneRecords);
    // // }

    // // kintoneRecords = event.records;
    //   console.log('kintoneRecords @index');
    //   console.log(kintoneRecords);

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

      return (
        // JSX includes html-like syntax
        <div>
          <ListItems list={listItems} />
          {/* <InputForm setListItems={setListItems} /> */}
        </div>
      );
    }

    //   const [searchResults, setSearchResults] = React.useState([]);
    //   const handleChange = e => {
    //     setListItems(e.target.value);
    //   };

    //   // useEffect takes 2 arguments:
    //   // 1st = a function, called effect, that is executed when the React Component is rendered
    //   // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

    //   React.useEffect(() => {
    //     // const results = kintoneRecords.filter(kintoneRecords =>
    //     //   kintoneRecords.toLowerCase().includes(listItems)
    //     // );
    //     // setSearchResults(results);
    //     setSearchResults(kintoneRecords);
    //   }, [listItems]);
    //   return (
    //     <div className="App">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         // value={listItems}
    //         onChange={handleChange}
    //       />
    //       <ul>
    //         {searchResults.map(item => (
    //           <li>{item}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    // }

    ReactDOM.render(
      <React.StrictMode >
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    return event;
  });
})();