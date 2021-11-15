// Original code is by asimdahall
// https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

(function () {
  'use strict';

  const customViewID = 5527024; // Replace with your Custom View's ID

  // Confirming script version
  const scriptVer = 2;
  console.log(`\nScript version: ${scriptVer}\n\n`);

  kintone.events.on('app.record.index.show', function (event) {
    if (event.viewId !== customViewID) {
      console.log('Not on the Custom View');
      return event
    }

    // const appID = kintone.app.getId();

    const people = [ 'Siri', 'Alexa', 'Google', 'Facebook', 'Twitter', 'LinkedIn'];

    function App() {
      const [searchTerm, setSearchTerm] = React.useState("");
      const [searchResults, setSearchResults] = React.useState([]);
      const handleChange = e => {
        setSearchTerm(e.target.value);
      };
      React.useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
      return ( 
        <div className="App">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
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