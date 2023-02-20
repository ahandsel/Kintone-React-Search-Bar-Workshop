# Build a React Search Bar that Queries a Database Workshop

## Outline <!-- omit in toc -->
* [Workshop Sections](#workshop-sections)
  * [1) Download the code \& install dependencies](#1-download-the-code--install-dependencies)
  * [2) Kintone Setup](#2-kintone-setup)
  * [3) Project Setup](#3-project-setup)
  * [4) Code Overview \& Complete the Code](#4-code-overview--complete-the-code)
  * [5) Build \& Upload to Kintone](#5-build--upload-to-kintone)
  * [6) Next Step](#6-next-step)
* [Complete the Code](#complete-the-code)
  * [src/index.js](#srcindexjs)
  * [src/components/SearchBar.js](#srccomponentssearchbarjs)
  * [src/components/ResultList.js](#srccomponentsresultlistjs)

---

## Workshop Sections

### 1) Download the code & install dependencies
* [ ] `git clone https://github.com/ahandsel/Kintone_React_Search_Bar`
* [ ] Inside Kintone_React_Search_Bar, run `npm install`
* [ ] `npm install -g @kintone/customize-uploader`

### 2) Kintone Setup
* [ ] Log into your Kintone Subdomain
* [ ] Create a Kintone App
  * [ ] Add text fields for `title` and `author`
  * [ ] Create a Custom View
  * [ ] Get the View ID
* [ ] Input sample data

### 3) Project Setup
* [ ] Create `.env` using `.env.example` as a template
* [ ] Fill out the `.env` file
  * [ ] KINTONE_BASE_URL is set as "https://example.kintone.com"
  * [ ] KINTONE_USERNAME & KINTONE_PASSWORD
  * [ ] Add the View ID from earlier to VIEW_ID
* [ ] Update `customize-manifest.json` with App ID

### 4) Code Overview & Complete the Code
* [ ] src/index.js
* [ ] src/components/SearchBar.js
* [ ] src/components/ResultList.js

See [Complete the Code](#complete-the-code) section for details

### 5) Build & Upload to Kintone
* [ ] Verify [3) Project Setup](#3-project-setup) steps are completed
* [ ] Run `npm run start`

### 6) Next Step

Some ideas to further build out the project:
* Production build -> Package.json
* Click on the search result -> go to record detailed view
* Button to clear search results
* Include Alternative title field data

---

## Complete the Code

### src/index.js
* The `handleChange` function takes in the browser-generated event object and the `listItems`.
* The user input stored in the event object is used to compare with the title field.
* `filter()` accepts a function as a parameter.
  * That function acts as a condition to evaluate each item in the array as true-or-false.
  * `filter()` then returns an array of items passing that condition.
* Conclude by setting `setSearchResults(filterResults)`

Incomplete Version

  ```jsx
  const handleChange = e => { // e is a typical way to name the browser-generated event object
    let filterResults;

    console.log('filterResults: \n', filterResults);

    setSearchResults(filterResults);
  };
  ```

Completed Version

  ```jsx
  const handleChange = e => { // e is a typical way to name the browser-generated event object
    let filterResults = listItems.filter(record =>
      record.title.toLowerCase().includes(e.target.value.toLowerCase()) // filter condition
    );

    console.log('filterResults: \n', filterResults);

    setSearchResults(filterResults);
  };
  ```

### src/components/SearchBar.js
* Complete the `<input />` element to build the search bar
* `className='SearchBar'`
* `onChange={props.handleChange}`

Incomplete Version

  ```jsx
  className=''
  ...
  onChange={props.handleChange}
  ```

Completed Version

  ```jsx
  className='SearchBar'
  type='text'
  id='header-search'
  placeholder='Search Manga Titles'
  name='Search Bar for Manga Titles'
  onChange={props.handleChange}
  ```

### src/components/ResultList.js
* Finishing the ResultList component to output the list of records by using map function on searchResults
* `{props.searchResults.map(function (resultRecord) {})}`
* Inside we would return JSX: return `<li key={resultRecord.uniqueKey}>{resultRecord.title} written by {resultRecord.author}</li>`

Incomplete Version

  ```jsx
  export default function ResultList(props) {
    return (
      <div className='ResultList'>

      </div>
    );
  };
  ```

Completed Version

  ```jsx
  export default function ResultList(props) {
    return (
      <div className='ResultList'>
        <ul>
          {props.searchResults.map(function (resultRecord) {
            return (
              <li key={resultRecord.uniqueKey}>
                {resultRecord.title} written by {resultRecord.author}
              </li>
            )
          })}
        </ul>
      </div>
    );
  };
  ```
